// import { Schema } from 'mongoose';

// export const AdvertiserContactSchema = new Schema({
//   email: { type: String, required: true },
//   name: { type: String, required: true },
//   lastName: { type: String, required: true },
//   phone: { type: Number, required: true },
//   dni: { type: Number, required: true },
//   message: { type: String, required: true },
// });

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AdvertiserContactSchema extends Document {
  @Prop({ unique: true })
  email: string;

  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  phone: number;

  @Prop()
  dni: number;

  @Prop()
  message: string;

  // @Prop({type: [Types.ObjectId], ref: 'Property'})
  // property: string;
}

export const ContactSchema = SchemaFactory.createForClass(
  AdvertiserContactSchema,
);
