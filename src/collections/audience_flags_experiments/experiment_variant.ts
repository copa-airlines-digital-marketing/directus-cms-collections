export interface ExperimentVariant {
  id: string;
  experiment: string;
  key: string;
  name: string;
  weight: number; // 0..100
  feature_flags?: string[];
}
