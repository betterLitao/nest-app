import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { TransformInterceptor } from './core/interceptor/transform/transform.interceptor';
import { HttpExceptionFilter } from './core/filter/http-exception/http-exception.filter';
import { VersioningType } from '@nestjs/common';

import * as session from 'express-session';
import { RolesGuard } from './core/guard/roles.guard';
import { Reflector } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 注册全局错误的过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.setGlobalPrefix('api'); // 设置全局路由前缀
  app.useGlobalGuards(new RolesGuard(new Reflector()));
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.use(
    session({
      secret: 'Litao',
      name: 'lt.session',
      rolling: true,
      cookie: {
        maxAge: undefined,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
