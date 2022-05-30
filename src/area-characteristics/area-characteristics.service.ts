import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AreaCharacteristics } from './schema/area-characteristics';
import { Model } from 'mongoose';
import { CreateAreaCharacteristicsDto } from './dto/area-characteristics.dto';

@Injectable()
export class AreaCharacteristicsService {
  constructor(
    @InjectModel(AreaCharacteristics.name)
    private readonly areaCharacteristicsModel: Model<AreaCharacteristics>,
  ) {}

  public async findAll(): Promise<AreaCharacteristics[]> {
    return await this.areaCharacteristicsModel.find();
  }

  async getAreaCharacteristics(id: string): Promise<AreaCharacteristics> {
    const areaCharacteristics = await this.areaCharacteristicsModel.findById(
      id,
    );

    if (!areaCharacteristics) throw new NotFoundException(`id not found ${id}`);
    return areaCharacteristics;
  }

  async addAreaCharacteristics(
    createAreaCharacteristicsDto: CreateAreaCharacteristicsDto,
  ) {
    const areaCharacteristics = await new this.areaCharacteristicsModel(
      createAreaCharacteristicsDto,
    );
    return await areaCharacteristics.save();
  }
}
