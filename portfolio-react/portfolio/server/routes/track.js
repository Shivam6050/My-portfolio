const express = require('express');
const Click = require('../models/Click');

const router = express.Router();

router.post('/', async (req, res) => {
  const { project, page } = req.body;

  if (!['ecommerce', 'learning-map'].includes(project)) {
    return res.status(400).json({ error: 'Invalid project.' });
  }

  try {
    // Fire-and-forget from the frontend's perspective — respond fast, don't block the redirect.
    await Click.create({ project, page: page || 'unknown' });
    return res.status(201).json({ success: true });
  } catch (err) {
    console.error('Click log failed:', err.message);
    // Never let analytics failure be visible to the visitor — respond 200 regardless.
    return res.status(200).json({ success: false });
  }
});

module.exports = router;
