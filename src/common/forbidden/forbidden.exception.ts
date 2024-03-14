import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor() {
    super('发生未知错误了', HttpStatus.FORBIDDEN);
  }
}
