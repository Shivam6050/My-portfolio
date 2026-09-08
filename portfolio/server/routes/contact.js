const express = require('express');
const rateLimit = require('express-rate-limit');
const Contact = require('../models/Contact');

const router = express.Router();

// 5 submissions per IP per 15 min — this is a footer form, not a high-traffic endpoint.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many submissions. Try again later.' }
});

router.post('/', contactLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    const contact = await Contact.create({ name, email, message });
    return res.status(201).json({ success: true, id: contact._id });
  } catch (err) {
    console.error('Contact save failed:', err.message);
    return res.status(500).json({ error: 'Could not save submission. Try again later.' });
  }
});

module.exports = router;
