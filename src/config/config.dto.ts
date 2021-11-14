import bunyan from 'bunyan';

/**
 * @description The parameters that all environments should have
 */
export class ConfigGlobalDto {
  state: string;
  port: number;
  log: () => bunyan;
}

export default new ConfigGlobalDto();
