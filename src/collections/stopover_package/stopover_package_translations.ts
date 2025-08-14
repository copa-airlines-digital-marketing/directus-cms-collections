import { Languages } from '../general_settings/languages';
import { StopoverPackage } from './stopover_package';

type StopoverPackageTranslation = {
  id: number;
  stopover_packege_id: number | StopoverPackage;
  languages_code: string | Languages;
  path: null | string;
  name: string;
  description: string;
  included: null | { name: string }[];
  not_included: null | { name: string }[];
  promo_name: null | string;
  promo_description: null | string;
  url: null | string;
};

export type { StopoverPackageTranslation };
