import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  roles: {
    type: [
      {
        type: String,
        enum: ['user', 'admin'],
      },
    ],
    default: ['user'],
  },
  createdAt: { type: Date, default: Date.now },
});
