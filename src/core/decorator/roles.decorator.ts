import { SetMetadata } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
export const ROLES_KEY = 'roles';
export const Roles = (...args: string[]) => SetMetadata(ROLES_KEY, args);
// export const Roles = Reflector.createDecorator<string[]>();
