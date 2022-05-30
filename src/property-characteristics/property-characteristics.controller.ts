import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { PropertyCharacteristicsService } from './property-characteristics.service';
import { CreatePropertyCharacteristicsDto } from './dto/create-property-characteristics.dto';

@Controller('property-characteristics')
export class PropertyCharacteristicsController {
  constructor(
    private readonly propertyCharacteristicsService: PropertyCharacteristicsService,
  ) {}

  @Get()
  async getAllPropertyCharacteristics(@Res() res: Response) {
    const propertyCharacteristics =
      await this.propertyCharacteristicsService.findAll();
    return res.status(HttpStatus.OK).json({
      propertyCharacteristics,
    });
  }
  @Post()
  async addPropertyCharacteristics(
    @Body() createPropertyCharacteristicsDto: CreatePropertyCharacteristicsDto,
    @Res() res: Response,
  ) {
    const propertyCharacteristics =
      await this.propertyCharacteristicsService.addPropertyCharacteristics(
        createPropertyCharacteristicsDto,
      );
    return res.status(HttpStatus.OK).json({
      propertyCharacteristics,
    });
  }
}
