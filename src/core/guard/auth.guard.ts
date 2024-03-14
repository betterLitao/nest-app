import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('守卫');
    const request = context.switchToHttp().getRequest();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(request.headers.authorization === '123');
      }, 1000);
    });
  }
}
