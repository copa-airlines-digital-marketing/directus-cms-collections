export type Status =
  | 'draft'
  | 'in_review'
  | 'scheduled'
  | 'published'
  | 'archived';

export interface Site {
  id: string;
  key: string;
  name: string;
  default_language: string; // Language.code
  default_currency: string; // Currency.code
  brand_logo?: string | null; // directus_files.id
  status: Status;
}
