// import { SetMetadata } from '@nestjs/common';
import { SetMetadata } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
export const ROLES_KEY = 'roles';
export const Roles = (roles: string[]) => SetMetadata(ROLES_KEY, roles);
// export const Roles = Reflector.createDecorator<string[]>();
