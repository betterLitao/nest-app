import { Inject, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { ConfigModuleOptions, EnvConfig } from './config';
import * as path from 'path';
import { CONFIG_OPTIONS } from './constants';
import { MODULE_OPTIONS_TOKEN } from './config.module-definition';
@Injectable()
// export class ConfigService {
//   readonly envConfig: EnvConfig;
//   constructor(@Inject(CONFIG_OPTIONS) readonly options: ConfigModuleOptions) {
//     const filePath = `${process.env.NODE_ENV || 'development'}.env`;
//     const envFile = path.resolve(process.cwd(), './', options.folder, filePath);
//     // const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
//     this.envConfig = dotenv.parse(fs.readFileSync(envFile));
//   }

//   get(key: string): string {
//     return this.envConfig[key];
//   }
// }
export class ConfigService {
  readonly envConfig: EnvConfig;
  constructor(@Inject(MODULE_OPTIONS_TOKEN) options: ConfigModuleOptions) {
    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    const envFile = path.resolve(process.cwd(), './', options.folder, filePath);
    // const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }
  get(key: string): string {
    return this.envConfig[key];
  }
}
