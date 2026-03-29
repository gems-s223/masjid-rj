const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const supabase = require('../lib/supabase');

const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const MEDIA_DIR = path.join(ROOT_DIR, 'media');
const SUPABASE_MEDIA_BUCKET = 'media';
const HELP_FILE = path.join(PUBLIC_DIR, 'HELP.md');
const DATA_FILE = path.join(DATA_DIR, 'content.json');
const PORT = Number.parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || '0.0.0.0';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';
const ADMIN_COOKIE_NAME = 'rj_admin_session';
const ADMIN_SESSION_TTL_SECONDS = 60 * 60 * 12;
const ADMIN_MAX_LOGIN_ATTEMPTS = 5;
const ADMIN_RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const ADMIN_RATE_LIMIT_LOCK_MS = 15 * 60 * 1000;

const adminSessions = new Map();
const adminLoginAttempts = new Map();

const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'application/javascript; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp'
};

function sendJson(res, status, body, extraHeaders = {}) {
  res.writeHead(status, {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json; charset=utf-8',
    ...extraHeaders
  });
  res.end(JSON.stringify(body));
}

function sendText(res, status, body, extraHeaders = {}) {
  res.writeHead(status, {
    'Content-Type': 'text/plain; charset=utf-8',
    ...extraHeaders
  });
  res.end(body);
}

function applyCommonHeaders(res) {
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
}

function parseCookies(req) {
  const header = req.headers.cookie || '';
  return header.split(';').reduce((cookies, item) => {
    const trimmed = item.trim();
    if (!trimmed) return cookies;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex < 0) return cookies;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    if (key) {
      cookies[key] = decodeURIComponent(value);
    }
    return cookies;
  }, {});
}

function createSessionToken() {
  return crypto.randomBytes(32).toString('hex');
}

function getAdminSession(req) {
  const cookies = parseCookies(req);
  const token = cookies[ADMIN_COOKIE_NAME];
  if (!token) return null;

  const session = adminSessions.get(token);
  if (!session) return null;

  if (session.expiresAt <= Date.now()) {
    adminSessions.delete(token);
    return null;
  }

  return { token, session };
}

function isAdminAuthenticated(req) {
  return Boolean(getAdminSession(req));
}

function setAdminSessionCookie(res, token) {
  res.setHeader(
    'Set-Cookie',
    `${ADMIN_COOKIE_NAME}=${encodeURIComponent(token)}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${ADMIN_SESSION_TTL_SECONDS}`
  );
}

function clearAdminSessionCookie(res) {
  res.setHeader(
    'Set-Cookie',
    `${ADMIN_COOKIE_NAME}=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0`
  );
}

function isAdminPasswordConfigured() {
  return ADMIN_PASSWORD.trim().length > 0;
}

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.trim()) {
    return forwarded.split(',')[0].trim();
  }

  return req.socket.remoteAddress || 'unknown';
}

function getLoginRateState(ipAddress) {
  const now = Date.now();
  const existing = adminLoginAttempts.get(ipAddress);

  if (!existing) {
    const fresh = { count: 0, lockedUntil: 0, windowStartedAt: now };
    adminLoginAttempts.set(ipAddress, fresh);
    return fresh;
  }

  if (existing.lockedUntil && existing.lockedUntil <= now) {
    existing.lockedUntil = 0;
    existing.count = 0;
    existing.windowStartedAt = now;
  }

  if (now - existing.windowStartedAt > ADMIN_RATE_LIMIT_WINDOW_MS) {
    existing.count = 0;
    existing.windowStartedAt = now;
  }

  return existing;
}

function registerFailedLogin(ipAddress) {
  const state = getLoginRateState(ipAddress);
  state.count += 1;

  if (state.count >= ADMIN_MAX_LOGIN_ATTEMPTS) {
    state.lockedUntil = Date.now() + ADMIN_RATE_LIMIT_LOCK_MS;
  }
}

function clearFailedLogins(ipAddress) {
  adminLoginAttempts.delete(ipAddress);
}

function requireAdmin(req, res) {
  if (isAdminAuthenticated(req)) {
    return true;
  }

  sendJson(res, 401, { error: 'Unauthorized' });
  return false;
}

function readJsonBody(req, limitBytes = 1024 * 1024) {
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > limitBytes) {
        req.socket.destroy();
        reject(new Error('Payload too large.'));
      }
    });

    req.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'));
      } catch {
        reject(new Error('Invalid JSON body.'));
      }
    });

    req.on('error', reject);
  });
}

function sanitizeString(value) {
  return typeof value === 'string' ? value : '';
}

function sanitizeContent(content) {
  const normalized = {};

  const scalarSections = ['hero', 'about', 'streaming', 'videos', 'schedule', 'gallery', 'contact', 'donation', 'footer'];
  scalarSections.forEach(section => {
    if (content[section] && typeof content[section] === 'object') {
      normalized[section] = {};
      Object.entries(content[section]).forEach(([key, value]) => {
        if (typeof value === 'string') {
          normalized[section][key] = value;
        }
      });
    }
  });

  if (content.program && content.program.items && Array.isArray(content.program.items)) {
    normalized.program = {
      label: sanitizeString(content.program.label),
      heading: sanitizeString(content.program.heading),
      items: content.program.items.map((item) => ({
        icon: sanitizeString(item && item.icon),
        title: sanitizeString(item && item.title),
        desc: sanitizeString(item && item.desc),
        tag: sanitizeString(item && item.tag)
      }))
    };
  }

  if (content.about && content.about.stats && Array.isArray(content.about.stats)) {
    normalized.about = normalized.about || {};
    normalized.about.stats = content.about.stats.map((item) => ({
      number: sanitizeString(item && item.number),
      label: sanitizeString(item && item.label)
    }));
  }

  if (content.videos && content.videos.items && Array.isArray(content.videos.items)) {
    normalized.videos = {
      heading: sanitizeString(content.videos.heading),
      channelUrl: sanitizeString(content.videos.channelUrl),
      items: content.videos.items.map((item) => ({
        url: sanitizeString(item && item.url),
        image: sanitizeString(item && item.image),
        title: sanitizeString(item && item.title),
        meta: sanitizeString(item && item.meta)
      }))
    };
  }

  if (content.schedule && content.schedule.items && Array.isArray(content.schedule.items)) {
    normalized.schedule = {
      heading: sanitizeString(content.schedule.heading),
      items: content.schedule.items.map((item) => ({
        day: sanitizeString(item && item.day),
        month: sanitizeString(item && item.month),
        title: sanitizeString(item && item.title),
        detail: sanitizeString(item && item.detail),
        time: sanitizeString(item && item.time)
      }))
    };
  }

  if (content.gallery && content.gallery.items && Array.isArray(content.gallery.items)) {
    normalized.gallery = {
      heading: sanitizeString(content.gallery.heading),
      items: content.gallery.items.map((item) => ({
        caption: sanitizeString(item && item.caption),
        imageUrl: sanitizeString(item && item.imageUrl)
      }))
    };
  }

  return normalized;
}

function ensureRuntimeDirectories() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(MEDIA_DIR)) {
    fs.mkdirSync(MEDIA_DIR, { recursive: true });
  }
}

function fileExtensionForMime(mimeType) {
  const mapping = {
    'image/gif': '.gif',
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/webp': '.webp'
  };

  return mapping[mimeType] || null;
}

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

function readContentData() {
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  const parsed = JSON.parse(raw);

  if (!parsed || typeof parsed !== 'object') {
    throw new Error('Invalid content data format.');
  }

  if (!parsed.content || typeof parsed.content !== 'object') {
    throw new Error('Missing content object.');
  }

  if (typeof parsed.isLive !== 'boolean') {
    parsed.isLive = false;
  }

  return parsed;
}

function writeContentData(data) {
  const safe = {
    content: sanitizeContent(data.content || {}),
    isLive: Boolean(data.isLive)
  };

  fs.writeFileSync(DATA_FILE, JSON.stringify(safe, null, 2), 'utf8');
}

function resolvePathWithin(baseDir, requestPath) {
  const decodedPath = decodeURIComponent(requestPath);
  const normalizedPath = path
    .normalize(decodedPath)
    .replace(/^(\.\.(\/|\\|$))+/, '')
    .replace(/^[/\\]+/, '');
  const fullPath = path.resolve(baseDir, normalizedPath);

  if (path.relative(baseDir, fullPath).startsWith('..')) {
    return null;
  }

  return fullPath;
}

function serveFile(res, fullPath, options = {}) {
  fs.stat(fullPath, (statError, stat) => {
    if (statError || !stat.isFile()) {
      sendText(res, 404, 'Not found');
      return;
    }

    const ext = path.extname(fullPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const headers = {
      'Cache-Control': options.cacheControl || 'public, max-age=300',
      'Content-Type': contentType
    };

    res.writeHead(200, headers);
    fs.createReadStream(fullPath).pipe(res);
  });
}

function handleApi(req, res, pathname) {
  if (pathname === '/api/admin/session') {
    if (req.method !== 'GET') {
      res.writeHead(405, { Allow: 'GET' });
      res.end();
      return;
    }

    sendJson(res, 200, {
      authenticated: isAdminAuthenticated(req),
      configured: isAdminPasswordConfigured()
    });
    return;
  }

  if (pathname === '/api/admin/login') {
    if (req.method !== 'POST') {
      res.writeHead(405, { Allow: 'POST' });
      res.end();
      return;
    }

    readJsonBody(req)
      .then((incoming) => {
        if (!isAdminPasswordConfigured()) {
          sendJson(res, 503, { error: 'ADMIN_PASSWORD belum dikonfigurasi di server.' });
          return;
        }

        const ipAddress = getClientIp(req);
        const rateState = getLoginRateState(ipAddress);
        if (rateState.lockedUntil && rateState.lockedUntil > Date.now()) {
          sendJson(res, 429, { error: 'Terlalu banyak percobaan login. Coba lagi beberapa menit lagi.' });
          return;
        }

        const password = sanitizeString(incoming.password);
        if (!password || password !== ADMIN_PASSWORD) {
          registerFailedLogin(ipAddress);
          sendJson(res, 401, { error: 'Password salah.' });
          return;
        }

        clearFailedLogins(ipAddress);
        const token = createSessionToken();
        adminSessions.set(token, {
          expiresAt: Date.now() + (ADMIN_SESSION_TTL_SECONDS * 1000)
        });
        setAdminSessionCookie(res, token);
        sendJson(res, 200, { ok: true });
      })
      .catch((error) => {
        sendJson(res, 400, { error: error.message });
      });
    return;
  }

  if (pathname === '/api/admin/logout') {
    if (req.method !== 'POST') {
      res.writeHead(405, { Allow: 'POST' });
      res.end();
      return;
    }

    const activeSession = getAdminSession(req);
    if (activeSession) {
      adminSessions.delete(activeSession.token);
    }

    clearAdminSessionCookie(res);
    sendJson(res, 200, { ok: true });
    return;
  }

  if (pathname === '/api/content') {
    if (req.method === 'GET') {
      try {
        sendJson(res, 200, readContentData());
      } catch (error) {
        sendJson(res, 500, { error: error.message });
      }
      return;
    }

    if (req.method === 'POST') {
      if (!requireAdmin(req, res)) {
        return;
      }

      readJsonBody(req)
        .then((incoming) => {
          if (!incoming || typeof incoming !== 'object') {
            throw new Error('Invalid request payload.');
          }

          if (!incoming.content || typeof incoming.content !== 'object') {
            throw new Error('Field "content" must be an object.');
          }

          writeContentData({
            content: incoming.content,
            isLive: Boolean(incoming.isLive)
          });
          sendJson(res, 200, { ok: true });
        })
        .catch((error) => {
          sendJson(res, 400, { error: error.message });
        });
      return;
    }

    res.writeHead(405, { Allow: 'GET, POST' });
    res.end();
    return;
  }

  if (pathname === '/api/upload-image') {
    if (req.method !== 'POST') {
      res.writeHead(405, { Allow: 'POST' });
      res.end();
      return;
    }

    if (!requireAdmin(req, res)) {
      return;
    }

    readJsonBody(req, 10 * 1024 * 1024)
      .then(async (incoming) => {
        const mimeType = sanitizeString(incoming.mimeType);
        const base64Data = sanitizeString(incoming.base64Data);
        const originalFileName = sanitizeString(incoming.fileName);
        const extension = fileExtensionForMime(mimeType);

        if (!extension) {
          throw new Error('Unsupported image type. Use JPG, PNG, WEBP, or GIF.');
        }

        if (!base64Data) {
          throw new Error('Image data is empty.');
        }

        const baseName = safeFileSlug(path.parse(originalFileName).name);
        const uniquePart = `${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
        const fileName = `${baseName}-${uniquePart}${extension}`;
        const buffer = Buffer.from(base64Data, 'base64');

        const { error } = await supabase.storage
          .from(SUPABASE_MEDIA_BUCKET)
          .upload(fileName, buffer, { contentType: mimeType, upsert: false });

        if (error) {
          throw new Error(error.message);
        }

        const { data } = supabase.storage.from(SUPABASE_MEDIA_BUCKET).getPublicUrl(fileName);
        sendJson(res, 200, { ok: true, url: data.publicUrl });
      })
      .catch((error) => {
        sendJson(res, 400, { error: error.message });
      });
    return;
  }

  sendJson(res, 404, { error: 'Not found' });
}

function serveStatic(req, res, pathname) {
  const requestPath = pathname === '/' ? '/index.html' : pathname;

  if (requestPath === '/admin.html' && !isAdminAuthenticated(req)) {
    res.writeHead(302, { Location: '/login.html' });
    res.end();
    return;
  }

  if (requestPath === '/login.html') {
    const activeSession = getAdminSession(req);
    if (activeSession) {
      adminSessions.delete(activeSession.token);
    }
    clearAdminSessionCookie(res);
  }

  if (requestPath === '/HELP.md') {
    if (!isAdminAuthenticated(req)) {
      res.writeHead(302, { Location: '/login.html' });
      res.end();
      return;
    }

    serveFile(res, HELP_FILE, { cacheControl: 'no-cache' });
    return;
  }

  if (requestPath.startsWith('/media/')) {
    const mediaPath = resolvePathWithin(MEDIA_DIR, requestPath.replace('/media/', ''));
    if (!mediaPath) {
      sendText(res, 403, 'Forbidden');
      return;
    }

    serveFile(res, mediaPath, { cacheControl: 'public, max-age=86400' });
    return;
  }

  const publicPath = resolvePathWithin(PUBLIC_DIR, requestPath);
  if (!publicPath) {
    sendText(res, 403, 'Forbidden');
    return;
  }

  serveFile(res, publicPath, {
    cacheControl: path.extname(publicPath).toLowerCase() === '.html' ? 'no-cache' : 'public, max-age=3600'
  });
}

function createAppServer() {
  ensureRuntimeDirectories();

  return http.createServer((req, res) => {
    applyCommonHeaders(res);

    if (!req.url) {
      sendText(res, 400, 'Bad request');
      return;
    }

    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = url.pathname;

    if (pathname === '/health') {
      sendJson(res, 200, { ok: true });
      return;
    }

    if (pathname.startsWith('/api/')) {
      handleApi(req, res, pathname);
      return;
    }

    serveStatic(req, res, pathname);
  });
}

function startServer() {
  const server = createAppServer();

  server.on('error', (error) => {
    if (error && error.code === 'EADDRINUSE') {
      console.error(`Port ${PORT} is already in use.`);
      console.error('Stop the other process that is using this port, or start this app with a different port.');
      console.error('PowerShell example: $env:PORT=3001; npm start');
      process.exit(1);
    }

    throw error;
  });

  server.listen(PORT, HOST, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    if (!isAdminPasswordConfigured()) {
      console.log('ADMIN_PASSWORD is not configured. Admin login is disabled until you set it.');
    }
  });

  const shutdown = () => {
    server.close(() => {
      process.exit(0);
    });
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  return server;
}

module.exports = {
  createAppServer,
  startServer
};

