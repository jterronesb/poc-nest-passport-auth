import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { IUser } from './interfaces/user.interfaces';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
        return await this.userService.create(createUserDto)
    }
}
