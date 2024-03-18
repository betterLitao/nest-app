import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { LoggerMiddleware } from 'src/core/middleware/logger.middleware';
import { mockCatsService } from './mock/mock.cats.module';
import { useValueEnum } from './constants';

@Module({
  providers: [
    {
      provide: useValueEnum.useValue1,
      useValue: [1, 2, 3],
    },
    {
      provide: CatsService,
      useFactory: () => new mockCatsService(123),
    },
    {
      provide: 'test',
      useFactory(catsService: CatsService) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve([catsService]);
          }, 1000);
        });
      },
      inject: [CatsService],
    },
  ],
  controllers: [CatsController],
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
