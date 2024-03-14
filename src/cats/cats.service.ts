import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './deo/create.cat.dto';

@Injectable()
export class CatsService {
  create(cat: CreateCatDto) {
    console.log('新增cat', cat);
    return {
      success: true,
    };
  }
}
