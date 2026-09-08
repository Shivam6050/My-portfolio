const express = require('express');
const Click = require('../models/Click');

const router = express.Router();

// Not public. Protected by a shared secret in the header, checked against .env.
// This is intentionally simple — a single-owner dashboard doesn't need full auth infrastructure.
function requireKey(req, res, next) {
  const key = req.headers['x-analytics-key'];
  if (!key || key !== process.env.ANALYTICS_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

router.get('/', requireKey, async (req, res) => {
  try {
    const counts = await Click.aggregate([
      { $group: { _id: '$project', count: { $sum: 1 } } }
    ]);
    const total = await Click.countDocuments();
    res.json({ total, byProject: counts });
  } catch (err) {
    console.error('Analytics query failed:', err.message);
    res.status(500).json({ error: 'Could not fetch analytics.' });
  }
});

module.exports = router;
