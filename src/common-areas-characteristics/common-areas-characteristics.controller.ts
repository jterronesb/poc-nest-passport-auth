import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CommonAreasCharacteristicsService } from './common-areas-characteristics.service';
import { CreateCommonAreaCharacteristicsDto } from './dto/create-common-areas-characteristics.dto';

@Controller('common-areas-characteristics')
export class CommonAreasCharacteristicsController {
  constructor(
    private readonly commonAreasCharacteristicsService: CommonAreasCharacteristicsService,
  ) {}

  @Get()
  async getAllCommonAreasCharacteristics(@Res() res: Response) {
    const commonAreaCharacteristics =
      await this.commonAreasCharacteristicsService.findAll();
    return res.status(HttpStatus.OK).json({
      commonAreaCharacteristics,
    });
  }

  @Post()
  async addCommonAreasCharacteristics(
    @Body()
    createCommonAreasCharacteristicsDto: CreateCommonAreaCharacteristicsDto,
    @Res() res: Response,
  ) {
    const commonAreasCharacteristics =
      await this.commonAreasCharacteristicsService.addCommonAreasCharacteristics(
        createCommonAreasCharacteristicsDto,
      );
    return res.status(HttpStatus.OK).json({
      commonAreasCharacteristics,
    });
  }
}
