import { Module } from '@nestjs/common';
import { AdvertiserContactsController } from './advertiser-contacts.controller';
import { AdvertiserContactsService } from './advertiser-contacts.service';

@Module({
  controllers: [AdvertiserContactsController],
  providers: [AdvertiserContactsService]
})
export class AdvertiserContactsModule {}
