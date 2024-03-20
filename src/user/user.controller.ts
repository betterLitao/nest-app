import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  Inject,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { UserService } from './user.service';
import { PostsRo, PostsService } from 'src/posts/posts.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('用户相关接口')
export class UserController<T = number[]> {
  constructor(
    private readonly userService: UserService,
    private readonly postsService: PostsService,
    @Inject('TestService') private readonly testService: T,
  ) {}
  @Get('findA')
  async findAll11(): Promise<PostsRo> {
    return this.postsService.findAll({});
  }
  @Get('code')
  getCode(@Req() req, @Res() res: Response) {
    const { captcha, text } = this.userService.getCode();
    req.session.code = text;
    res.type('image/svg+xml');
    res.send(captcha);
  }
  @Post('register')
  register(@Req() req, @Body() body) {
    console.log(req.session.code);
    console.log(body.code);
    if (
      req.session.code.toLocaleLowerCase() === body?.code?.toLocaleLowerCase()
    ) {
      return {
        message: '验证码正确',
      };
    }
    return {
      message: '验证码失败',
    };
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
