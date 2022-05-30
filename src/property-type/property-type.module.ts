import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertyType, PropertyTypeSchema } from './schema/property-type';
import { PropertyTypeController } from './property-type.controller';
import { PropertyTypeService } from './property-type.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PropertyType.name, schema: PropertyTypeSchema },
    ]),
  ],
  controllers: [PropertyTypeController],
  providers: [PropertyTypeService],
})
export class PropertyTypeModule {}
