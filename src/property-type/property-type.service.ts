import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PropertyType } from './schema/property-type';
import { CreatePropertyTypeDto } from './dto/create-property-type.dto';

@Injectable()
export class PropertyTypeService {
  constructor(
    @InjectModel(PropertyType.name)
    private readonly propertyTypeModel: Model<PropertyType>,
  ) {}

  async findAll(): Promise<PropertyType[]> {
    return await this.propertyTypeModel.find();
  }

  async getPropertyType(id: string): Promise<PropertyType> {
    const propertyType = await this.propertyTypeModel.findOne({ id: id });

    if (!propertyType) throw new NotFoundException(`id not found ${id}`);
    return propertyType;
  }

  async addPropertyType(createPropertyTypeDto: CreatePropertyTypeDto) {
    const propertyType = await new this.propertyTypeModel(
      createPropertyTypeDto,
    );
    return await propertyType.save();
  }
}
