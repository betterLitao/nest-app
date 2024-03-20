import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateCatDto } from './deo/create.cat.dto';
import { ModuleRef } from '@nestjs/core';
import { PostsService } from 'src/posts/posts.service';

@Injectable()
export class CatsService implements OnModuleInit {
  // private service: PostsService;
  // constructor(private moduleRef: ModuleRef) {}
  onModuleInit() {
    // this.service = this.moduleRef.get(PostsService);
  }
  create(cat: CreateCatDto) {
    // console.log(this.service);

    console.log('新增cat', cat);
    return {
      success: true,
    };
  }
}
