import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PropertyType extends Document {
  @Prop()
  propertyTypeName: string;
}

export const PropertyTypeSchema = SchemaFactory.createForClass(PropertyType);
