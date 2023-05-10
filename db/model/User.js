import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
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
      trim: true,
    },
    role: {
      type: String,
      enum: {
        values: ['user', 'admin'],
        message: 'User role must be mentioned!',
      },
      default: 'user',
    },
    verified: {
      type: Boolean,
      default: false,
    },
    googleId: {
      type: String,
    },
    githubId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.models.User || new mongoose.model('User', userSchema);
