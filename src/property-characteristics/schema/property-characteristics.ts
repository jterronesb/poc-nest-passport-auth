import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PropertyCharacteristics extends Document {
  @Prop()
  dataName: string;
}

export const PropertyCharacteristicsSchema = SchemaFactory.createForClass(
  PropertyCharacteristics,
);
