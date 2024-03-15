import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { LoggerMiddleware } from 'src/core/middleware/logger.middleware';
import { mockCatsService } from './mock/mock.cats.module';

@Module({
  providers: [
    {
      provide: CatsService,
      useValue: new mockCatsService(123),
    },
    // {
    //   provide: CatsService,
    //   useFactory: () => new mockCatsService(123),
    // },
  ],
  controllers: [CatsController],
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
