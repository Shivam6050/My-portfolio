require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('../server/config/db');

const contactRoute = require('../server/routes/contact');
const trackRoute = require('../server/routes/track');
const analyticsRoute = require('../server/routes/analytics');

const app = express();

app.use(express.json({ limit: '10kb' }));

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '').split(',').filter(Boolean);
app.use(cors({
  origin: allowedOrigins.length ? allowedOrigins : '*',
  methods: ['GET', 'POST']
}));

let isConnected = false;
app.use(async (req, res, next) => {
  if (!isConnected && process.env.MONGO_URI) {
    try {
      await connectDB();
      isConnected = true;
    } catch (e) {
      console.error('DB connect error:', e);
    }
  }
  next();
});

app.use('/api/contact', contactRoute);
app.use('/api/track', trackRoute);
app.use('/api/analytics', analyticsRoute);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

module.exports = app;
