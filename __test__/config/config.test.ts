import getConfig from '../../src/config/main.config';
import bunyan from 'bunyan';
import { ConfigGlobalDto } from '../../src/config/config.dto';

describe('Correct configuration declaration', () => {
  const configuration = getConfig();

  it('Correct environment', () => {
    expect(configuration).toBeInstanceOf(ConfigGlobalDto);
    expect(configuration.state).toBe('test');
  });

  it('Correct logger', () => {
    expect(configuration.log()).toBeInstanceOf(bunyan);
  });

  it('Correct port', () => {
    expect(configuration.port).toEqual(expect.any(Number));
    expect(configuration.port).toBeGreaterThan(-1);
  });
});
