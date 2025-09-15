import { Audience } from './collections/audience_flags_experiments/audience';
import { FeatureFlag } from './collections/audience_flags_experiments/feature_flag';
import { Currency } from './collections/core/currency';
import { Environment } from './collections/core/environment';
import { Language } from './collections/core/languages';
import { Domain } from './collections/sitles_locales/domain';
import { Site } from './collections/sitles_locales/site';
import { SiteLocale } from './collections/sitles_locales/site_locale';

export interface Schema {
  //CORE
  currency: Currency[];
  environment: Environment[];
  languages: Language[];
  //SITES & LOCALES
  site: Site[];
  domain: Domain[];
  site_locale: SiteLocale[];
  //AUDIENCE, FEATURE FLAGS & EXPERIMENTS
  audience: Audience[];
  feature_flags: FeatureFlag[];
}
