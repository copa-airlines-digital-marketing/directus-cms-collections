import { StopoverPackage } from './stopover_package';

type StopoverPackageTranslation = {
  id: number;
  stopover_packege_id: number | StopoverPackage;
  languages_code: string | Languages;
  path: null | string;
  name: string;
  description: string;
  promo_name: null | string;
  promo_description: null | string;
  url: null | string;
};

export type { StopoverPackageTranslation };
