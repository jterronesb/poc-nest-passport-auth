import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OperationType, OperationTypeSchema } from './schema/operation-type';
import { OperationTypeController } from './operation-type.controller';
import { OperationTypeService } from './operation-type.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OperationType.name, schema: OperationTypeSchema },
    ]),
  ],
  controllers: [OperationTypeController],
  providers: [OperationTypeService],
})
export class OperationTypeModule {}
