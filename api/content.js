const supabase = require('../lib/supabase');
const { isAuthenticated } = require('../lib/auth');

const TABLE = 'site_content';
const ROW_ID = 1;

function sanitizeString(value) {
  return typeof value === 'string' ? value : '';
}

function sanitizeContent(content) {
  const normalized = {};

  const scalarSections = ['hero', 'about', 'program', 'fasilitas', 'streaming', 'videos', 'schedule', 'gallery', 'contact', 'donation', 'footer'];

  const sectionScalarKeys = {
    hero: ['title', 'sub', 'tagline'],
    about: ['label', 'heading', 'p1', 'p2', 'p3'],
    program: ['label', 'heading'],
    fasilitas: ['label', 'heading'],
    streaming: ['label', 'heading', 'desc'],
    videos: ['label', 'heading', 'channelUrl'],
    schedule: ['label', 'heading'],
    gallery: ['label', 'heading'],
    contact: ['sectionLabel', 'sectionTitle', 'locationLabel', 'address', 'mapsUrl', 'mapEmbedUrl', 'whatsappLabel', 'whatsappUrl', 'phoneHref', 'phoneText', 'instagramLabel', 'instagramUrl', 'instagramText', 'facebookLabel', 'facebookUrl', 'facebookText', 'youtubeLabel', 'youtubeUrl', 'youtubeText'],
    donation: ['label', 'title', 'desc', 'bankName', 'bankLabel', 'bankNumber', 'bankOwner', 'whatsappUrl', 'whatsappText', 'qrisUrl'],
    footer: ['brandName', 'brandLocation', 'ayat', 'copy']
  };

  scalarSections.forEach((section) => {
    const sectionData = content && content[section];
    if (!sectionData || typeof sectionData !== 'object') return;

    if (section === 'about' && Array.isArray(sectionData.stats)) {
      normalized.about = normalized.about || {};
      normalized.about.stats = sectionData.stats.map((stat) => ({
        number: sanitizeString(stat && stat.number),
        label: sanitizeString(stat && stat.label)
      }));
    }

    const keys = sectionScalarKeys[section] || [];
    keys.forEach((key) => {
      const value = sectionData[key];
      if (typeof value === 'string') {
        normalized[section] = normalized[section] || {};
        normalized[section][key] = value;
      }
    });
  });

  const itemArrays = [
    { key: 'videos', itemsKey: 'items', fields: ['url', 'image', 'title', 'meta'] },
    { key: 'gallery', itemsKey: 'items', fields: ['caption', 'imageUrl'] },
    { key: 'schedule', itemsKey: 'items', fields: ['day', 'month', 'title', 'detail', 'time'] },
    { key: 'program', itemsKey: 'items', fields: ['icon', 'title', 'desc', 'tag'] },
    { key: 'fasilitas', itemsKey: 'items', fields: ['icon', 'title', 'desc'] }
  ];

  itemArrays.forEach(({ key, itemsKey, fields }) => {
    const sectionData = content && content[key];
    const items = sectionData && sectionData[itemsKey];
    if (Array.isArray(items)) {
      normalized[key] = normalized[key] || {};
      normalized[key][itemsKey] = items.map((item) => {
        const sanitized = {};
        fields.forEach((field) => {
          sanitized[field] = sanitizeString(item && item[field]);
        });
        return sanitized;
      });
    }
  });

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
