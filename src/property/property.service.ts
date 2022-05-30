import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { IProperty } from './interfaces/property.interface';
import { Model } from 'mongoose';
import { CreatePropertyDto } from './dto/create-property.dto';
import { Property } from './schema/property.schema';

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property.name) private readonly propertyModel: Model<Property>,
  ) {}

  public async findAll(): Promise<Property[]> {
    return await this.propertyModel.find();
  }

  async getProperty(id: string): Promise<Property> {
    
    try{
      const property = await this.propertyModel.findById(id);
      if (!property) throw new NotFoundException(`id not found ${id}`);
      return property;
    }catch(error){
      throw new NotFoundException(error.message)
    }
  }

  async addProperty(createPropertyDto: CreatePropertyDto) {
    const property = await new this.propertyModel(createPropertyDto);
    return await property.save();
  }
}
