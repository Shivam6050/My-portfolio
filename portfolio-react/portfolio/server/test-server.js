// Test harness only — not part of the shipped app.
// Stubs mongoose.connect and the two models so the real Express app,
// real routes, and real middleware (validation, rate limiting, CORS)
// run exactly as they would in production, without a live database.

process.env.MONGO_URI = 'mongodb://fake-for-testing';
process.env.ANALYTICS_KEY = 'test-key-123';
process.env.PORT = 4001;
process.env.ALLOWED_ORIGINS = 'http://localhost:5500';

const mongoose = require('mongoose');
const inMemoryStore = { contacts: [], clicks: [] };

// Stub connect so config/db.js doesn't try to reach a real cluster
mongoose.connect = async () => { console.log('[mock] mongoose.connect called'); };

// Stub model behavior at the level server.js/routes actually use it
const originalModel = mongoose.model.bind(mongoose);
mongoose.model = (name, schema) => {
  if (name === 'Contact') {
    return {
      create: async (doc) => {
        const record = { _id: 'contact_' + inMemoryStore.contacts.length, ...doc };
        inMemoryStore.contacts.push(record);
        return record;
      }
    };
  }
  if (name === 'Click') {
    return {
      create: async (doc) => {
        const record = { _id: 'click_' + inMemoryStore.clicks.length, ...doc };
        inMemoryStore.clicks.push(record);
        return record;
      },
      countDocuments: async () => inMemoryStore.clicks.length,
      aggregate: async () => {
        const counts = {};
        inMemoryStore.clicks.forEach(c => { counts[c.project] = (counts[c.project] || 0) + 1; });
        return Object.entries(counts).map(([_id, count]) => ({ _id, count }));
      }
    };
  }
  return originalModel(name, schema);
};

require('./server.js');
