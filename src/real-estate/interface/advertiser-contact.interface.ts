import { Document } from 'mongoose';

export interface IAdvertiserContact extends Document {
  email: string;
  name: string;
  lastname: string;
  phone: number;
  dni: number;
  message: string;
}
