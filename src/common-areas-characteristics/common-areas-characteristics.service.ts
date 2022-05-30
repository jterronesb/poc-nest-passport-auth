import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommonAreasCharacteristics } from './schema/common-areas-characteristics';
import { CreateCommonAreaCharacteristicsDto } from './dto/create-common-areas-characteristics.dto';

@Injectable()
export class CommonAreasCharacteristicsService {
  constructor(
    @InjectModel(CommonAreasCharacteristics.name)
    private readonly commonAreasCharacteristicsModel: Model<CommonAreasCharacteristics>,
  ) {}

  async findAll(): Promise<CommonAreasCharacteristics[]> {
    return await this.commonAreasCharacteristicsModel.find();
  }

  async getCommonAreaCharacteristics(
    id: string,
  ): Promise<CommonAreasCharacteristics> {
    const commonAreasCharacteristics =
      await this.commonAreasCharacteristicsModel.findById(id);

    if (!commonAreasCharacteristics)
      throw new NotFoundException(`id not found ${id}`);
    return commonAreasCharacteristics;
  }

  async addCommonAreasCharacteristics(
    createCommonAreasCharacteristicsDto: CreateCommonAreaCharacteristicsDto,
  ) {
    const commonAreasCharacteristics =
      await new this.commonAreasCharacteristicsModel(
        createCommonAreasCharacteristicsDto,
      );
    return await commonAreasCharacteristics.save();
  }
}
