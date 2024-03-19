import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('cat Controller的拦截器记录Before...');
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(
            `cat Controller的拦截器记录After... ${Date.now() - now}ms`,
          ),
        ),
      );
  }
}
