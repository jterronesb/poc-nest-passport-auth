import { Module } from '@nestjs/common';
import { RealEstateController } from './real-estate.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvertiserContactSchema, ContactSchema } from './schema/advertiser-contact';
import { RealEstateService } from './real-estate.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AdvertiserContactSchema.name, schema: ContactSchema },
    ]),
  ],
  controllers: [RealEstateController],
  providers: [RealEstateService],
})
export class RealEstateModule {}
