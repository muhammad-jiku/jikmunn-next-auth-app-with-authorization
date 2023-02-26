const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    permissions: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = roleSchema;
