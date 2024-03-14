import { Controller, Get, Post, Put, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

// 主路径为 app
@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  // 1. 固定路径：
  // 可以匹配到 get请求，http://localhost:9080/app/list
  @Get('list')
  getHello() {
    return this.appService.getList();
  }

  // 可以匹配到 post请求，http://localhost:9080/app/list
  @Post('list')
  create(@Req() request: Request) {
    return this.appService.setList(request);
  }

  // 2.通配符路径(?+* 三种通配符 )
  // 可以匹配到 get请求, http://localhost:9080/app/user_xxx
  @Get('user_*')
  getUser() {
    return 'getUser';
  }

  @Put('list/user')
  updateUser() {
    return { userId: 1 };
  }
  // 3.带参数路径
  // 可以匹配到put请求，http://localhost:9080/app/list/xxxx
  @Put('list/:id')
  update() {
    return 'update';
  }
}
