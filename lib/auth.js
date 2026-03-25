const crypto = require('crypto');

const COOKIE_NAME = 'rj_admin_session';
const TTL_SECONDS = 60 * 60 * 12; // 12 hours

function getSecret() {
  return process.env.JWT_SECRET || '';
}

function base64url(str) {
  return Buffer.from(str).toString('base64url');
}

function createToken() {
  const header = base64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = base64url(JSON.stringify({
    auth: true,
    exp: Math.floor(Date.now() / 1000) + TTL_SECONDS
  }));
  const sig = crypto
    .createHmac('sha256', getSecret())
    .update(`${header}.${payload}`)
    .digest('base64url');
  return `${header}.${payload}.${sig}`;
}

function verifyToken(token) {
  if (!token || !getSecret()) return false;
  try {
    const [header, payload, sig] = token.split('.');
    const expected = crypto
      .createHmac('sha256', getSecret())
      .update(`${header}.${payload}`)
      .digest('base64url');
    if (sig !== expected) return false;
    const { exp } = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return Math.floor(Date.now() / 1000) < exp;
  } catch {
    return false;
  }
}

function parseCookies(req) {
  const header = req.headers.cookie || '';
  return header.split(';').reduce((acc, item) => {
    const trimmed = item.trim();
    const idx = trimmed.indexOf('=');
    if (idx < 0) return acc;
    const key = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    if (key) acc[key] = decodeURIComponent(value);
    return acc;
  }, {});
}

function isAuthenticated(req) {
  const cookies = parseCookies(req);
  return verifyToken(cookies[COOKIE_NAME]);
}

function setSessionCookie(res, token) {
  res.setHeader(
    'Set-Cookie',
    `${COOKIE_NAME}=${token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${TTL_SECONDS}; Secure`
  );
}

function clearSessionCookie(res) {
  res.setHeader(
    'Set-Cookie',
    `${COOKIE_NAME}=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0`
  );
}

module.exports = { createToken, isAuthenticated, setSessionCookie, clearSessionCookie };
