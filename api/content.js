const supabase = require('../lib/supabase');
const { isAuthenticated } = require('../lib/auth');

const TABLE = 'site_content';
const ROW_ID = 1;

function sanitizeString(value) {
  return typeof value === 'string' ? value : '';
}

function sanitizeContent(content) {
  const normalized = {};
  Object.entries(content || {}).forEach(([key, value]) => {
    if (typeof value === 'string') normalized[key] = value;
  });

  if (Array.isArray(content.videos)) {
    normalized.videos = content.videos.map((item) => ({
      image: sanitizeString(item && item.image),
      meta: sanitizeString(item && item.meta),
      title: sanitizeString(item && item.title),
      url: sanitizeString(item && item.url)
    }));
  }

  if (Array.isArray(content.galleryItems)) {
    normalized.galleryItems = content.galleryItems.map((item) => ({
      caption: sanitizeString(item && item.caption),
      imageUrl: sanitizeString(item && item.imageUrl)
    }));
  }

  return normalized;
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from(TABLE)
      .select('content, is_live')
      .eq('id', ROW_ID)
      .single();

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    res.status(200).json({ content: data.content, isLive: data.is_live });
    return;
  }

  if (req.method === 'POST') {
    if (!isAuthenticated(req)) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const { content, isLive } = req.body || {};
    if (!content || typeof content !== 'object') {
      res.status(400).json({ error: 'Field "content" must be an object.' });
      return;
    }

    const { error } = await supabase
      .from(TABLE)
      .upsert({ id: ROW_ID, content: sanitizeContent(content), is_live: Boolean(isLive) });

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    res.status(200).json({ ok: true });
    return;
  }

  res.setHeader('Allow', 'GET, POST').status(405).end();
};
