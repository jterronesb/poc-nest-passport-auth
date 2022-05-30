import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ConservationState extends Document {
  @Prop()
  conservationStatusName: string;
}

export const ConservationStateSchema = SchemaFactory.createForClass(
  ConservationState,
);
