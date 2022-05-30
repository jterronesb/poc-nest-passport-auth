import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CommonAreasCharacteristics,
  CommonAreasCharacteristicsSchema,
} from './schema/common-areas-characteristics';
import { CommonAreasCharacteristicsController } from './common-areas-characteristics.controller';
import { CommonAreasCharacteristicsService } from './common-areas-characteristics.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CommonAreasCharacteristics.name,
        schema: CommonAreasCharacteristicsSchema,
      },
    ]),
  ],
  controllers: [CommonAreasCharacteristicsController],
  providers: [CommonAreasCharacteristicsService],
})
export class CommonAreasCharacteristicsModule {}
