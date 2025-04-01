import type { Page } from './pages';
import type { Language } from './languages';

type PageTranslation = {
  id: number;
  pages_id: number | Page;
  languages_code: string | Language;
  path: string;
  title_tag: string;
  meta_description: string;
};
