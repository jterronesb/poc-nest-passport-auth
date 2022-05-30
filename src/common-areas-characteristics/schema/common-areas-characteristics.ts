import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CommonAreasCharacteristics extends Document {
  @Prop()
  dataName: string;
}

export const CommonAreasCharacteristicsSchema = SchemaFactory.createForClass(
  CommonAreasCharacteristics,
);
