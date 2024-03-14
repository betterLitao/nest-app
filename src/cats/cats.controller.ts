import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ForbiddenException } from 'src/common/forbidden/forbidden.exception';
import {
  CreateCatDto,
  ZCreateCatDto,
  zCreateCatSchema,
} from './deo/create.cat.dto';
import { ValidationPipe } from 'src/core/pipe/validation.pipe';
import { ZodValidationPipe } from 'src/core/pipe/zod.validation.pipe';
import { ParseIntPipe } from 'src/core/pipe/parse-int.pipe';
import { AuthGuard } from 'src/core/guard/auth.guard';

@Controller('cats')
@UseGuards(AuthGuard)
export class CatsController {
  @Get()
  findAll() {
    throw new ForbiddenException();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log('路由返回');
    return id;
  }
  @Post()
  create(@Body(ValidationPipe) createCatDto: CreateCatDto) {
    console.log(createCatDto);
  }
  @Post('create')
  @UsePipes(new ZodValidationPipe(zCreateCatSchema))
  createCat(@Body() createCatDto: ZCreateCatDto) {
    console.log(createCatDto);
  }
}
