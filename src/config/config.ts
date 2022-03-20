import { IConfig } from './interface/config.interface';

export function config(): IConfig {
  return {
    port: parseInt(process.env.PORT, 10),
  };
}
