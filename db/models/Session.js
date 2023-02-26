const mongoose = require('mongoose');
const sessionSchema = require('../schemas/sessionSchema');

const Session =
  mongoose.models.Session || new mongoose.model('Session', sessionSchema);

module.exports = Session;
