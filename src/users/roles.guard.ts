import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
// import { IUser } from './interfaces/user.interfaces';
// import { Role } from './role/enum';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService,
    private usersService: UsersService
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requireRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    if (!requireRoles) {
      return true;
    }


    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization.split(' ')[1];
    console.log(token);

    const decodedToken = this.jwtService.decode(token);
    console.log(decodedToken);

    const idUser = decodedToken.sub;
    console.log(idUser);

    const roles = await this.usersService.getRolesByUser(idUser);
    console.log(roles);

    return requireRoles.some((role) => roles.includes(role));
  }
}
