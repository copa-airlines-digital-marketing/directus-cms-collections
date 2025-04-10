import type { StopoverTour } from './stopover_tours/stopover_tours';
import type { Page } from './pages';

type StopoverTourOperatorStatus =
  | 'archived'
  | 'error'
  | 'draft'
  | 'review'
  | 'publishing'
  | 'published';

type StopoverTourOperator = {
  higligth: boolean | null;
  priority: number | null;
  parent_page: Page | number | null;
  parent_content: StopoverTourOperator | number | null;
  children: StopoverTourOperator[] | number | null;
  id: number;
  user_created: string | number;
  date_created: string;
  user_modified: string | number;
  date_modified: string;
  name: string;
  status: StopoverTourOperatorStatus;
  main_image: string | null;
  contact: null | {
    form: 'e-mail' | 'phone' | 'whastapp';
    contact: 'string';
  };
  network: null | {
    type: 'facebook' | 'instagram' | 'tiktok' | 'youtube' | 'website';
    link: string;
  };
  stopover_tours: null | number[] | StopoverTour[];
  duplicate: boolean;
};
