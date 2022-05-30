import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// import { IAdvertiserContact } from './interface/advertiser-contact.interface';
import { CreateAdvertiserContactDto } from './dto/create-advertiser-contact.dto';
import {AdvertiserContactSchema} from './schema/advertiser-contact';

@Injectable()
export class RealEstateService {
  constructor(
    @InjectModel(AdvertiserContactSchema.name)
    private readonly advertiserContactModel: Model<AdvertiserContactSchema>,
  ) {}

  async getAdvertiserContacts(): Promise<AdvertiserContactSchema[]> {
    const advertiserContacts = await this.advertiserContactModel.find();
    return advertiserContacts;
  }

  async getAdvertiserContact(
    advertiserContactID: string,
  ): Promise<AdvertiserContactSchema> {
    const advertisercontact = await this.advertiserContactModel.findById(
      advertiserContactID,
    );
    return advertisercontact;
  }

  async createAdvertiserContact(
    createAdvertiserContactDto: CreateAdvertiserContactDto,
  ): Promise<AdvertiserContactSchema> {
    const createAdvertiserContact = await new this.advertiserContactModel(createAdvertiserContactDto);
    return await createAdvertiserContact.save();
  }

  // deleteAdvertiserContact(){

  // }

  // updateAdvertiserContact(){}
}
