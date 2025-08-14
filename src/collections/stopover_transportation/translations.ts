import { Languages } from '../general_settings/languages';
import { StopoverTransportation } from './index';

export type StopoverTransportationTranslations = {
  id: number;
  stopover_transportation_id: null | number | StopoverTransportation;
  languages_code: null | string | Languages;
  path: null | string;
  name: string;
  promo_name: null | string;
  promo_description: null | string;
  url: null | string;
};
