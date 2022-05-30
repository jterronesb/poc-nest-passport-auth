import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OperationType } from './schema/operation-type';
import { Model } from 'mongoose';
import { CreateOperationTypeDto } from './dto/create-operation-type.dto';

@Injectable()
export class OperationTypeService {
  constructor(
    @InjectModel(OperationType.name)
    private readonly operationTypeModel: Model<OperationType>,
  ) {}

  async findAll(): Promise<OperationType[]> {
    return await this.operationTypeModel.find();
  }

  async getOperationType(id: string): Promise<OperationType> {
    const operationType = await this.operationTypeModel.findById(id);
    if (!operationType) throw new NotFoundException(`id not found ${id}`);
    return operationType;
  }

  async addOperationType(createOperationTypeDto: CreateOperationTypeDto) {
    const operationType = await new this.operationTypeModel(
      createOperationTypeDto,
    );
    return await operationType.save();
  }
}
