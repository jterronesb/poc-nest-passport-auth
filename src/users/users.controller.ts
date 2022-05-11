import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dtos/create-user.dto';
import { IUser } from './interfaces/user.interfaces';
import { Role } from './role/enum';
import { Roles } from './roles.decorator';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

    @Post()
    @Roles(Role.ADMIN)
    async create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
        return await this.userService.create(createUserDto)
    }

    @Get()
    @Roles(Role.ADMIN)
    findAll(){
        return this.userService.findAll();
    }
}
