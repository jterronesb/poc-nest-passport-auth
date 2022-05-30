import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PropertyCharacteristics,
  PropertyCharacteristicsSchema,
} from './schema/property-characteristics';
import { PropertyCharacteristicsController } from './property-characteristics.controller';
import { PropertyCharacteristicsService } from './property-characteristics.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PropertyCharacteristics.name,
        schema: PropertyCharacteristicsSchema,
      },
    ]),
  ],
  controllers: [PropertyCharacteristicsController],
  providers: [PropertyCharacteristicsService],
})
export class PropertyCharacteristicsModule {}
