import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { PrimaryCharacteristicsService } from './primary-characteristics.service';
import { CreatePrimaryCharacteristicsDto } from './dto/create-primary-characteristics.dto';

@Controller('primary-characteristics')
export class PrimaryCharacteristicsController {
  constructor(
    private readonly primaryCharacteristicsService: PrimaryCharacteristicsService,
  ) {}

  @Get()
  async getAllPrimaryCharacteristics(@Res() res: Response) {
    const primaryCharacteristics =
      await this.primaryCharacteristicsService.findAll();
    return res.status(HttpStatus.OK).json({
      primaryCharacteristics,
    });
  }

  @Post()
  async addPrimaryCharacteristics(
    @Body() createPrimaryCharacteristicsDto: CreatePrimaryCharacteristicsDto,
    @Res() res: Response,
  ) {
    const createCharacteristics =
      await this.primaryCharacteristicsService.addPrimaryCharacteristics(
        createPrimaryCharacteristicsDto,
      );
    return res.status(HttpStatus.OK).json({
      createCharacteristics,
    });
  }
}
