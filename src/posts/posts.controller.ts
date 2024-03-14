import { UserService } from 'src/user/user.service';
import { PostsService, PostsRo } from './posts.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionUseFilter } from 'src/core/filter/http-exception/http-exception.filter';

@Controller('post')
@UseFilters(HttpExceptionUseFilter)
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly userService: UserService,
  ) {}

  /**
   * 创建文章
   * @param post
   */
  @Post()
  async create(@Body() post) {
    return await this.postsService.create(post);
  }

  /**
   * 获取所有文章
   */
  @Get()
  async findAll(@Query() query): Promise<PostsRo> {
    console.log(this.userService.findAll());
    return await this.postsService.findAll(query);
  }

  /**
   * 获取指定文章
   * @param id
   */
  @Get(':id')
  async findById(@Param('id') id) {
    return await this.postsService.findById(id);
  }

  /**
   * 更新文章
   * @param id
   * @param post
   */
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id, @Body() post) {
    return await this.postsService.updateById(id, post);
  }

  /**
   * 删除
   * @param id
   */
  @Delete(':id')
  async remove(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id,
  ) {
    return await this.postsService.remove(id);
  }
}
