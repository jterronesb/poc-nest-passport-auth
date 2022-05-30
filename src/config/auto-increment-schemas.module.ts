import { Module } from '@nestjs/common';
import { getConnectionToken, MongooseModule } from '@nestjs/mongoose';
import * as AutoIncrementFactory from 'mongoose-sequence';
import {
  PropertyType,
  PropertyTypeSchema,
} from '../property-type/schema/property-type';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PropertyType.name,
        useFactory: async (connection) => {
          const schema = PropertyTypeSchema;
          const AutoIncrement = AutoIncrementFactory(connection);
          schema.plugin(AutoIncrement, { inc_field: 'id' });
          return schema;
        },
        inject: [getConnectionToken()],
      },
    ]),
  ],
})
export class AutoIncrementSchemaModule {}
