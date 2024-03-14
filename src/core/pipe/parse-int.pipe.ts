import { BadRequestException, PipeTransform } from '@nestjs/common';

export class ParseIntPipe implements PipeTransform {
  transform(value: string) {
    console.log('parseInt管道');
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}
