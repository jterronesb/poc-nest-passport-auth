import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { PrimaryCharacteristics } from './schema/primary-characteristics';
import { CreatePrimaryCharacteristicsDto } from './dto/create-primary-characteristics.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PrimaryCharacteristicsService {
  constructor(
    @InjectModel(PrimaryCharacteristics.name)
    private readonly primaryCharacteristicsModel: Model<PrimaryCharacteristics>,
  ) {}

  async findAll(): Promise<PrimaryCharacteristics[]> {
    return await this.primaryCharacteristicsModel.find();
  }

  async getPrimaryCharacteristics(id: string): Promise<PrimaryCharacteristics> {
    const primaryCharacteristics =
      await this.primaryCharacteristicsModel.findById(id);
    return primaryCharacteristics;
  }

  async addPrimaryCharacteristics(
    createPrimaryCharacteristicsDto: CreatePrimaryCharacteristicsDto,
  ) {
    const primaryCharacteristics = await new this.primaryCharacteristicsModel(
      createPrimaryCharacteristicsDto,
    );
    return await primaryCharacteristics.save();
  }
}
