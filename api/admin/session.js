const { isAuthenticated } = require('../../lib/auth');

module.exports = function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  res.status(200).json({
    authenticated: isAuthenticated(req),
    configured: Boolean(process.env.ADMIN_PASSWORD?.trim())
  });
};
