import mongoose from 'mongoose';
import { userSchema } from '../schemas/userSchema';

export const User =
  mongoose.models.User || new mongoose.model('User', userSchema);
