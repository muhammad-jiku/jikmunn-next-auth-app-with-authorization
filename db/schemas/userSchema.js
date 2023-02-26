const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    roles: [
      {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;
