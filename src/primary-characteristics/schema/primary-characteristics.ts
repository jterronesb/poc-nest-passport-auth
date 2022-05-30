import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PrimaryCharacteristics extends Document {
  @Prop()
  bedrooms: number;
  @Prop()
  totalArea: number;
  @Prop()
  coveredArea: number;
  @Prop()
  toilets: number;
  @Prop()
  parkingLots: number;
}
export const PrimaryCharacteristicsSchema = SchemaFactory.createForClass(
  PrimaryCharacteristics,
);
