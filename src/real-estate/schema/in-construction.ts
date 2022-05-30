import { Schema } from 'mongoose';

export const InConstructionSchema = new Schema({
  date: { type: Date, required: true },
  financing: { type: String, required: true },
});
