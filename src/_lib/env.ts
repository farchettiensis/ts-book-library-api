const getEnvValue = <T>(parser: (value: string) => T) =>
  (key: string, fallback: T): T => {
    const value = process.env[key];

    if (value === undefined) {
      if (fallback === undefined) {
        throw Error(`Missing key ${key} from env and no fallback was provided`);
      }
      return fallback;
    }

    return parser(value);
  };

export const Env = {
  string: getEnvValue(String),
  number: getEnvValue(Number),
};

export type EnvType = 'development' | 'test';
