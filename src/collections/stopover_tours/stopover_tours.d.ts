type ExperienceType =
  | 'bike'
  | 'bus'
  | 'adventure'
  | 'local'
  | 'luxury'
  | 'photos'
  | 'relax'
  | 'religious'
  | 'sightseeing'
  | 'walking'
  | 'water';

type PilarType =
  | 'panama-canal'
  | 'gastronomy'
  | 'shopping'
  | 'culture'
  | 'history'
  | 'nature'
  | 'beach'
  | 'city';

export type StopoverTour = {
  higligth: boolean | null;
  priority: number | null;
  parent_page: null | number | unknown; // pending page schema
  parent_content: null | number | StopoverTour;
  children: null | number[] | StopoverTour[];
  id: number;
  user_created: string | number;
  date_created: string;
  user_modified: string | number;
  date_modified: string;
  name: string;
  status:
    | 'archived'
    | 'error'
    | 'draft'
    | 'review'
    | 'publishing'
    | 'published';
  operator: number | StopoverTourOperator;
  main_image: string;
  gallery: string[] | StopoverTourFiles[];
  duration: number;
  start_time: null | string;
  meeting_point: null | MapInput;
  end_point: null | MapInput;
  category: null | ExperienceType[];
  supported_languages: 'es' | 'en' | 'pt' | 'fr';
  pilar: null | PilarType[];
  promo_code: null | string;
  promo_discount_amount: null | number;
  promo_discount_percent: null | number;
  translations: null | number | StopoverTourTranslations[];
};
