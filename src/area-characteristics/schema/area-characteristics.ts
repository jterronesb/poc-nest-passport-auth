import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AreaCharacteristics extends Document {
  @Prop()
  dataName: string;
}

export const AreaCharacteristicsSchema =
  SchemaFactory.createForClass(AreaCharacteristics);
