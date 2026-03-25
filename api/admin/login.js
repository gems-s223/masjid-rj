const { createToken, setSessionCookie } = require('../../lib/auth');

const MAX_ATTEMPTS = 5;
const WINDOW_MS = 10 * 60 * 1000;
const LOCK_MS = 15 * 60 * 1000;

// In-memory rate limiting — resets on cold start, acceptable for low-traffic admin
const loginAttempts = new Map();

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.trim()) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket?.remoteAddress || 'unknown';
}

module.exports = function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword?.trim()) {
    res.status(503).json({ error: 'ADMIN_PASSWORD belum dikonfigurasi di server.' });
    return;
  }

  const ip = getClientIp(req);
  const now = Date.now();
  let state = loginAttempts.get(ip) || { count: 0, lockedUntil: 0, windowStart: now };

  if (state.lockedUntil > now) {
    res.status(429).json({ error: 'Terlalu banyak percobaan login. Coba lagi beberapa menit lagi.' });
    return;
  }

  if (now - state.windowStart > WINDOW_MS) {
    state = { count: 0, lockedUntil: 0, windowStart: now };
  }

  const { password } = req.body || {};
  if (!password || password !== adminPassword) {
    state.count += 1;
    if (state.count >= MAX_ATTEMPTS) {
      state.lockedUntil = now + LOCK_MS;
    }
    loginAttempts.set(ip, state);
    res.status(401).json({ error: 'Password salah.' });
    return;
  }

  loginAttempts.delete(ip);
  const token = createToken();
  setSessionCookie(res, token);
  res.status(200).json({ ok: true });
};
