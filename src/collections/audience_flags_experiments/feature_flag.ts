import { Status } from '../sitles_locales/site';

export type FeatureType = 'boolean' | 'number' | 'string' | 'json';
export interface FeatureFlag {
  id: string;
  key: string;
  type: FeatureType;
  default_value?: string | number | boolean | object | null;
  rollout_percentage?: number | null;
  audiences?: string[]; // Audience ids
  environments: ('dev' | 'stg' | 'prod')[];
  status: Status;
}
