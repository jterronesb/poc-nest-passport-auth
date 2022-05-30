import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class OperationType extends Document {
  @Prop()
  operationName: string;
}

export const OperationTypeSchema = SchemaFactory.createForClass(OperationType);
