import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
// import { Role } from './role/enum';
// import { Roles } from './roles.decorator';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'users',
        schema: UserSchema,
      },
    ]),
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})

export class UsersModule {}

// @Controller("users")
// export class UsersController {
//   constructor(private readonly usersService: UsersService){}
// }
