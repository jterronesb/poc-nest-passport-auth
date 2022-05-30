import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePropertyCharacteristicsDto } from './dto/create-property-characteristics.dto';
import { PropertyCharacteristics } from './schema/property-characteristics';

@Injectable()
export class PropertyCharacteristicsService {
  constructor(
    @InjectModel(PropertyCharacteristics.name)
    private readonly propertyCharacteristicsModel: Model<PropertyCharacteristics>,
  ) {}

  async findAll(): Promise<PropertyCharacteristics[]> {
    return await this.propertyCharacteristicsModel.find();
  }

  async getPropertyCharacteristics(
    id: string,
  ): Promise<PropertyCharacteristics> {
    const propertyCharacteristics =
      await this.propertyCharacteristicsModel.findById(id);

    if (!propertyCharacteristics)
      throw new NotFoundException(`id not found ${id}`);
    return propertyCharacteristics;
  }

  async addPropertyCharacteristics(
    createPropertyCharacteristicsDto: CreatePropertyCharacteristicsDto,
  ) {
    const propertyCharacteristics = await new this.propertyCharacteristicsModel(
      createPropertyCharacteristicsDto,
    );
    return await propertyCharacteristics.save();
  }
}
