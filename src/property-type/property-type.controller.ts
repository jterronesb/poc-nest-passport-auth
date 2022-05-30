import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { PropertyTypeService } from './property-type.service';
import { CreatePropertyTypeDto } from './dto/create-property-type.dto';

@Controller('property-type')
export class PropertyTypeController {
  constructor(private readonly propertyTypeService: PropertyTypeService) {}

  @Get()
  async getAllProperty(@Res() res: Response) {
    const propertyType = await this.propertyTypeService.findAll();
    return res.status(HttpStatus.OK).json({
      propertyType,
    });
  }

  @Get(':id')
  async getProperty(@Param('id') id: string, @Res() res: Response) {
    const property = await this.propertyTypeService.getPropertyType(id);
    return res.status(HttpStatus.OK).json({
      message: 'Property',
      property,
    });
  }

  @Post()
  async addPropertyType(
    @Body() createPropertyTypeDto: CreatePropertyTypeDto,
    @Res() res: Response,
  ) {
    const propertyType = await this.propertyTypeService.addPropertyType(
      createPropertyTypeDto,
    );
    return res.status(HttpStatus.OK).json({
      propertyType,
    });
  }
}
