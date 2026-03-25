const crypto = require('crypto');
const path = require('path');
const supabase = require('../lib/supabase');
const { isAuthenticated } = require('../lib/auth');

const BUCKET = 'media';

const MIME_TO_EXT = {
  'image/gif': '.gif',
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp'
};

function safeFileSlug(name) {
  return (
    (name || 'upload')
      .toLowerCase()
      .replace(/[^a-z0-9-_.]/g, '-')
      .replace(/-+/g, '-')
      .slice(0, 40)
      .replace(/^[-.]+|[-.]+$/g, '') || 'upload'
  );
}

module.exports.config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  if (!isAuthenticated(req)) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const { mimeType, base64Data, fileName } = req.body || {};
  const ext = MIME_TO_EXT[mimeType];

  if (!ext) {
    res.status(400).json({ error: 'Unsupported image type. Use JPG, PNG, WEBP, or GIF.' });
    return;
  }

  if (!base64Data) {
    res.status(400).json({ error: 'Image data is empty.' });
    return;
  }

  const baseName = safeFileSlug(path.parse(fileName || 'upload').name);
  const uniquePart = `${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
  const uploadFileName = `${baseName}-${uniquePart}${ext}`;
  const buffer = Buffer.from(base64Data, 'base64');

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(uploadFileName, buffer, { contentType: mimeType, upsert: false });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(uploadFileName);
  res.status(200).json({ ok: true, url: data.publicUrl });
};
