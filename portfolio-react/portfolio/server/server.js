require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const contactRoute = require('./routes/contact');
const trackRoute = require('./routes/track');
const analyticsRoute = require('./routes/analytics');

const app = express();

app.use(express.json({ limit: '10kb' })); // small limit — this API only ever receives short form/event payloads

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '').split(',').filter(Boolean);
app.use(cors({
  origin: allowedOrigins.length ? allowedOrigins : '*',
  methods: ['GET', 'POST']
}));

app.use('/api/contact', contactRoute);
app.use('/api/track', trackRoute);
app.use('/api/analytics', analyticsRoute);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`API running on port ${PORT}`));
});
