import { Global, Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PostsModule } from 'src/posts/posts.module';
@Global()
@Module({
  controllers: [UserController],
  providers: [
    { provide: 'TestService', useValue: [55446, 4123, 12] },
    UserService,
  ],
  exports: [UserService],
  imports: [forwardRef(() => PostsModule)],
})
export class UserModule {}
