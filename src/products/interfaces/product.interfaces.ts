import { Document } from 'mongoose';

export interface IProduct extends Document {
  id: string;
  title: string;
  description: string;
  price: number;
  createdAt?: Date;
}
