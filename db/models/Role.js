import mongoose from 'mongoose';
import { roleSchema } from '../schemas/roleSchema';

export const Role =
  mongoose.models.Role || new mongoose.model('Role', roleSchema);
