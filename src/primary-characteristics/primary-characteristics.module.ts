import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PrimaryCharacteristics,
  PrimaryCharacteristicsSchema,
} from './schema/primary-characteristics';
import { PrimaryCharacteristicsController } from './primary-characteristics.controller';
import { PrimaryCharacteristicsService } from './primary-characteristics.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PrimaryCharacteristics.name,
        schema: PrimaryCharacteristicsSchema,
      },
    ]),
  ],
  controllers: [PrimaryCharacteristicsController],
  providers: [PrimaryCharacteristicsService],
})
export class PrimaryCharacteristicsModule {}
