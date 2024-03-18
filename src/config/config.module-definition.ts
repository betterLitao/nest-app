import { ConfigurableModuleBuilder } from '@nestjs/common';
import { ConfigModuleOptions } from './config';

export const { MODULE_OPTIONS_TOKEN, ConfigurableModuleClass } =
  new ConfigurableModuleBuilder<ConfigModuleOptions>()
    .setClassMethodName('forRoot')
    .build();

// const FACTORY_METHOD_NAME = 'createConfigOptions';
// export const { MODULE_OPTIONS_TOKEN, ConfigurableModuleClass } =
//   new ConfigurableModuleBuilder<ConfigModuleOptions>()
//     .setFactoryMethodName(FACTORY_METHOD_NAME)
//     .build();

// export class ConfigModuleOptionsFactory {
//   [FACTORY_METHOD_NAME]() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(catser);
//       }, 1000);
//     });
//   }
// }
