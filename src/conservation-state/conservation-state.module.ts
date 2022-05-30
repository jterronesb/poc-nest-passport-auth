import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ConservationState,
  ConservationStateSchema,
} from './schema/conservation-state';
import { ConservationStateController } from './conservation-state.controller';
import { ConservationStateService } from './conservation-state.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ConservationState.name, schema: ConservationStateSchema },
    ]),
  ],
  controllers: [ConservationStateController],
  providers: [ConservationStateService],
})
export class ConservationStateModule {}
