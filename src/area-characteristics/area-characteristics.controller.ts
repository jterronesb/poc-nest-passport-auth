import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AreaCharacteristicsService } from './area-characteristics.service';
import { Response } from 'express';
import { CreateAreaCharacteristicsDto } from './dto/area-characteristics.dto';

@Controller('area-characteristics')
export class AreaCharacteristicsController {
  constructor(
    private readonly areaCharacteristicsService: AreaCharacteristicsService,
  ) {}

  @Get()
  async getAllAreaCharacteristics(@Res() res: Response) {
    const areaCharacteristics = await this.areaCharacteristicsService.findAll();
    return res.status(HttpStatus.OK).json({
      areaCharacteristics,
    });
  }

  @Post()
  async addAreaCharacteristics(
    @Body() areaCharacteristicsDto: CreateAreaCharacteristicsDto,
    @Res() res: Response,
  ) {
    const areaCharacteristics =
      await this.areaCharacteristicsService.addAreaCharacteristics(
        areaCharacteristicsDto,
      );
    return res.status(HttpStatus.OK).json({
      areaCharacteristics,
    });
  }
}
