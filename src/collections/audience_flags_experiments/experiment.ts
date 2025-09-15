export type ExperimentStatus = 'draft' | 'running' | 'paused' | 'stopped';
export type ExperimentUnit = 'user' | 'session';
export interface Experiment {
  id: string;
  key: string;
  name: string;
  site: string;
  target_audiences?: string[];
  start_at?: string | null;
  end_at?: string | null;
  status: ExperimentStatus;
  unit: ExperimentUnit;
  seed: string;
  primary_metric?: string | null;
  notes?: string | null;
}
