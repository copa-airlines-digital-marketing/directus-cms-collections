import type { Lang } from './lang';
import type { Language } from './languages';
import type { Page } from './pages';
import type { PageTranslation } from './pages_translations';
import type { PageStorefront } from './pages_storefronts';
import type { PageStorefrontSection } from './pages_storefronts_sections';
import type { StopoverTour } from './stopover_tours';
import type { StopoverTourTranslations } from './stopover_tour_translations';
import type { StopoverTourFiles } from './stopover_tour_files';

interface Schema {
  lang: Lang[];
  languages: Language[];
  pages: Page[];
  pages_translations: PageTranslation[];
  pages_storefronts: PageStorefront[];
  pages_storefronts_sections: PageStorefrontSection[];
  stopover_package: StopoverPackage[];
  stopover_package_files: StopoverPackageFile[];
  stopover_package_translations: StopoverPackageTranslation[];
  stopover_tour_operator: StopoverTourOperator[];
  stopover_tour: StopoverTour[];
  stopover_tour_files: StopoverTourFiles[];
  stopover_tour_translation: StopoverTourTranslations[];
}
