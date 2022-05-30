import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  roles: {
    type: [
      {
        type: String,
        enum: ['user', 'admin'],
      },
    ],
    default: ['admin'],
  },
  createdAt: { type: Date, default: Date.now },
});
