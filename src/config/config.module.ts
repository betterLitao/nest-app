import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigModuleOptions } from './config';
import { CONFIG_OPTIONS } from './constants';
import { ConfigurableModuleClass } from './config.module-definition';

// @Module({})
// export class ConfigModule {
//   static register(options: ConfigModuleOptions): DynamicModule {
//     return {
//       module: ConfigModule,
//       providers: [
//         ConfigService,
//         {
//           provide: CONFIG_OPTIONS,
//           useValue: options,
//         },
//       ],
//       exports: [ConfigService],
//     };
//   }
// }
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule extends ConfigurableModuleClass {}
