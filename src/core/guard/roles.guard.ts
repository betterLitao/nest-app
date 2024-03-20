import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from '../decorator/roles.decorator';

export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('全局守卫');
    const roles = this.reflector.get(ROLES_KEY, context.getHandler());
    // console.log(roles);
    if (!roles) {
      return true;
    }
    // const request = context.switchToHttp().getRequest();
    // const user = request.user;
    // matchRoles(roles, user.roles);
    return true;
  }
}
