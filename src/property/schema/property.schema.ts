import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Property extends Document {
  @Prop()
  name: string;
  @Prop()
  image: string;
  @Prop()
  description: string;
  @Prop()
  map: string;
  @Prop()
  price: number;
  @Prop()
  date: string;
  @Prop()
  financing: string;
  @Prop({ type: [Types.ObjectId], ref: 'AreaCharacteristics' })
  areaCharacteristics: string;
  @Prop({ type: [Types.ObjectId], ref: 'CommonAreasCharacteristics' })
  commonAreasCharacteristics: string;
  @Prop({ type: Types.ObjectId, ref: 'ConservationState' })
  conservationState: string;
  @Prop({ type: Types.ObjectId, ref: 'OperationType' })
  operationType: string;
  @Prop({ type: [Types.ObjectId], ref: 'PrimaryCharacteristics' })
  primaryCharacteristics: string;
  @Prop({ type: [Types.ObjectId], ref: 'PropertyCharacteristics' })
  propertyCharacteristics: string;
  @Prop({ type: Types.ObjectId, ref: 'PropertyType' })
  propertyType: string;
  @Prop({ type: Types.ObjectId, ref: 'AdvertiserContactSchema' })
  advertiserContactSchema: string;
}

export const PropertySchema = SchemaFactory.createForClass(Property);
