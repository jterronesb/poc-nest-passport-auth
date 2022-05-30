import {
  Controller,
  Res,
  Get,
  HttpStatus,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { Response } from 'express';
import { CreatePropertyDto } from './dto/create-property.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  async getAllProperty(@Res() res: Response) {
    const property = await this.propertyService.findAll();
    return res.status(HttpStatus.OK).json({
      property,
    });
  }

  @Get(':id')
  async getProperty(@Param('id') id: string, @Res() res: Response) {
    const property = await this.propertyService.getProperty(id);
    return res.status(HttpStatus.OK).json({
      message: 'Property',
      property,
    });
  }

  @Post()
  async addProperty(
    @Body() propertyDto: CreatePropertyDto,
    @Res() res: Response,
  ) {
    const property = await this.propertyService.addProperty(propertyDto);
    return res.status(HttpStatus.OK).json({
      property,
    });
  }
}
