import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '../../common/enums/user-role';
import { LoggedInUser } from '../../common/interfaces/logged-in-user.interface';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    let canActivate = true;

    // get the allowed creds from the route handler decorator
    let role = this.reflector.get<UserRole[]>('role', context.getHandler());
    if (!role) {
      role = this.reflector.get<UserRole[]>('role', context.getClass());
    }

    // get the logged in user creds
    const request = context.switchToHttp().getRequest();
    const user = request.user as LoggedInUser;

    // check if the user has valid privileges
    if (!role.includes(user.role)) {
      canActivate = false;
    }

    return canActivate;
  }
}
