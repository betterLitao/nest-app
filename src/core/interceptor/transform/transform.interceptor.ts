import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
export interface Response<T> {
  data: T;
  code: number;
  msg: string;
}
@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    console.log('全局拦截器记录Before...');
    const now = Date.now();

    return next.handle().pipe(
      map((data) => {
        console.log(`全局拦截器记录拦截器记录After... ${Date.now() - now}ms`);
        return {
          data,
          code: 0,
          msg: '请求成功',
        };
      }),
    );
  }
}
