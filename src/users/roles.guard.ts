import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IUser } from './interfaces/user.interfaces';
import { Role } from './role/enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const requireRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    if (!requireRoles) {
      return true;
    }
    const user: Partial<IUser> = {
      _id: '1',
      username: 'Haland',
      password: '123',
      roles: [Role.USER],
    };

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    console.log(token);

    return requireRoles.some((role) => user.roles.includes(role));
  }
}
