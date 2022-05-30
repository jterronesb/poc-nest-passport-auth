import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AreaCharacteristicsController } from './area-characteristics.controller';
import { AreaCharacteristicsService } from './area-characteristics.service';
import {
  AreaCharacteristics,
  AreaCharacteristicsSchema,
} from './schema/area-characteristics';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AreaCharacteristics.name, schema: AreaCharacteristicsSchema },
    ]),
  ],
  controllers: [AreaCharacteristicsController],
  providers: [AreaCharacteristicsService],
})
export class AreaCharacteristicsModule {}
