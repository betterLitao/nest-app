import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getList(): string {
    return '处理获取列表的逻辑';
  }
  setList(request: Request): string {
    console.log(request.url);
    return '处理设置列表的逻辑';
  }
  findAll() {
    return `这是AppService中的findAll`;
  }
}
