export interface Domain {
  id: string;
  hostname: string;
  environment: 'dev' | 'stg' | 'prod';
  is_canonical: boolean;
  site: string;
}
