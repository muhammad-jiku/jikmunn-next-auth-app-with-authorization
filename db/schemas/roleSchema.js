const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  permissions: [{ type: String }],
});

module.exports = roleSchema;
