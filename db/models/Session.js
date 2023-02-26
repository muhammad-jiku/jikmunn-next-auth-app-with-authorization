import mongoose from 'mongoose';
import { sessionSchema } from '../schemas/sessionSchema';

export const Session =
  mongoose.models.Session || new mongoose.model('Session', sessionSchema);
