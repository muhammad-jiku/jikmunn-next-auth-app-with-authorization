const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
  sessionToken: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = sessionSchema;
