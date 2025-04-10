import type { StopoverTour } from './stopover_tours/stopover_tours';
import type { Lang } from './lang';

type StopoverTourTranslations = {
  id: number;
  stopover_tour_id: number | StopoverTour;
  languages_code: string | Lang;
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
