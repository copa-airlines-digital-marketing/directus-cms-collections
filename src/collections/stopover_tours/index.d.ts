type StopoverTourFiles = {
  id: number;
  stopover_tour_id: number | StopoverTour;
  directus_files_id: string | unknown; // pending image collection
  sort: null | number;
};

type StopoverTourTranslations = {
  id: number;
  stopover_tour_id: number | StopoverTour;
  languages_code: string | unknown; // pending languages collection
  path: string;
  name: string;
  description: string;
  experience:
    | null
    | {
        title: string;
        description: string;
        type: 'pass-by' | 'walk-in';
        duration: number;
        includes_admission: boolean;
      }[];
  included: null | { name: string }[];
  not_included: null | { name: string }[];
  promo_name: null | string;
  promo_description: null | string;
};

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

type StopoverTour = {
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
  metting_point: null | unknown;
  end_point: null | unknown;
  category: null | ExperienceType[];
  supported_languages: 'es' | 'en' | 'pt' | 'fr';
  pilar: null | PilarType[];
  promo_code: null | string;
  promo_discount_amount: null | number;
  promo_discount_percent: null | number;
  translations: null | number | StopoverTourTranslations[];
};
