type PackageStatus =
  | 'archived'
  | 'error'
  | 'draft'
  | 'review'
  | 'publishing'
  | 'published';

type PackageContactForm = 'phone' | 'whatsapp' | 'e-mail';

type PackageContact = {
  form: PackageContactForm;
  contact: string;
};

type PackageSupportedLanguages = en | es | pt;

type StopoverPackage = {
  id: number;
  duplicate: boolean;
  priority: null | number;
  highlight: null | boolean;
  parent_page: null | number | Page;
  parent_content: null | number | StopoverPackage;
  children: null | number[] | StopoverPackage[];
  user_created: null | string;
  date_created: null | string;
  user_modified: null | string;
  date_modified: null | string;
  name: string;
  status: PackageStatus;
  nights: number;
  main_image: string;
  gallery: number[] | StopoverPackageFile[];
  contact: null | PackageContact[];
  supported_languages: PackageSupportedLanguages[];
  promo_code: null | string;
  promo_discount_amount: null | number;
  promo_discount_percent: null | number;
  translations: null | number[] | StopoverPackageTranslation[];
};
