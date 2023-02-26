import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema(
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
    role: [
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
