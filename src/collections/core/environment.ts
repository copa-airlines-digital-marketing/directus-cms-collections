export type EnvironmentKey = 'dev' | 'stg' | 'prod';
export interface Environment {
  key: EnvironmentKey;
  is_production: boolean;
}
