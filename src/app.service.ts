import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  getList(): string {
    console.log('通过config Service获取env文件的配置项');
    console.log(this.configService.get('APP_API_BASE_URL'));
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
