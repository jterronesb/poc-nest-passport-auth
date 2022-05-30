import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongoModule } from './config/mongo.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './users/roles.guard';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { RealEstateModule } from './real-estate/real-estate.module';
import { PropertyModule } from './property/property.module';
import { AreaCharacteristicsModule } from './area-characteristics/area-characteristics.module';
import { CommonAreasCharacteristicsModule } from './common-areas-characteristics/common-areas-characteristics.module';
import { ConservationStateModule } from './conservation-state/conservation-state.module';
import { OperationTypeModule } from './operation-type/operation-type.module';
import { PrimaryCharacteristicsModule } from './primary-characteristics/primary-characteristics.module';
import { PropertyCharacteristicsModule } from './property-characteristics/property-characteristics.module';
import { PropertyTypeModule } from './property-type/property-type.module';
import { AdvertiserContactsModule } from './advertiser-contacts/advertiser-contacts.module';
import { AutoIncrementSchemaModule } from './config/auto-increment-schemas.module';

@Module({
  imports: [
    ProductsModule,
    MongoModule,
    AutoIncrementSchemaModule,
    AuthModule,
    UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
    }),
    RealEstateModule,
    PropertyModule,
    AreaCharacteristicsModule,
    CommonAreasCharacteristicsModule,
    ConservationStateModule,
    OperationTypeModule,
    PrimaryCharacteristicsModule,
    PropertyCharacteristicsModule,
    PropertyTypeModule,
    AdvertiserContactsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
