import { CanActivate } from '@nestjs/common';
import { Observable } from 'rxjs';

export class GlobalGuard implements CanActivate {
  canActivate() // context: ExecutionContext,
  : boolean | Promise<boolean> | Observable<boolean> {
    console.log('全局守卫');
    return true;
  }
}
