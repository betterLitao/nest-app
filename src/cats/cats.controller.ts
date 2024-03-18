import {
  Body,
  Controller,
  Get,
  Inject,
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
import { Roles } from 'src/core/decorator/roles.decorator';
import { CatsService } from './cats.service';
import { useValueEnum } from './constants';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    @Inject(useValueEnum.useValue1) private readonly valueService: number[],
    @Inject('test') private readonly testCatServer,
  ) {}
  @Get()
  findAll() {
    throw new ForbiddenException();
  }
  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log('路由返回');
    return id;
  }
  @Post()
  @Roles(['admin'])
  create(@Body(ValidationPipe) createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
  @Post('create')
  @UsePipes(new ZodValidationPipe(zCreateCatSchema))
  createCat(@Body() createCatDto: ZCreateCatDto) {
    console.log(createCatDto);
  }
}
