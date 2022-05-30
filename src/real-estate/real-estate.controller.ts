import {
  Controller,
  Get,
  Post,
  // Put,
  // Delete,
  Res,
  HttpStatus,
  Body,
  Param,
} from '@nestjs/common';
import { Response } from 'express';
import { RealEstateService } from './real-estate.service';

import { CreateAdvertiserContactDto } from './dto/create-advertiser-contact.dto';
@Controller('real-estate')
export class RealEstateController {
  constructor(private readonly realEstateService: RealEstateService) {}

  @Get()
  async getAdvertiserContacts(@Res() res: Response) {
    const advertiserContacts =
      await this.realEstateService.getAdvertiserContacts();
    return res.status(HttpStatus.OK).json({
      message: 'received',
      advertiserContacts,
    });
  }

  @Get(':id')
  async getAdvertiserContact(@Param('id') id: string, @Res() res: Response) {
    const advertiserContact = await this.realEstateService.getAdvertiserContact(id);
    return res.status(HttpStatus.OK).json({
      message: 'received',
      advertiserContact,
    });
  }

  @Post('/create')
  async createPost(
    @Res() res: Response,
    @Body() createRealEstateDTO: CreateAdvertiserContactDto,
  ) {
    const createAdvertiserContact = await this.realEstateService.createAdvertiserContact(createRealEstateDTO);
    console.log(createRealEstateDTO);
    return res.status(HttpStatus.OK).json({
      message: 'received',
      createAdvertiserContact
    });
  }
}
