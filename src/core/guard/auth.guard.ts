import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { useValueEnum } from 'src/cats/constants';
@Injectable()
export class AuthGuard implements CanActivate {
  @Inject(useValueEnum.useValue1)
  private value1: number[];
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('守卫');
    // console.log(this.value1);
    const request = context.switchToHttp().getRequest();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(request.headers.authorization === '123');
      }, 1000);
    });
  }
}
