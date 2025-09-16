import { Audience } from './collections/audience_flags_experiments/audience';
import { Experiment } from './collections/audience_flags_experiments/experiment';
import { ExperimentVariant } from './collections/audience_flags_experiments/experiment_variant';
import { FeatureFlag } from './collections/audience_flags_experiments/feature_flag';
import { Airport, AirportT } from './collections/aviation_taxonomy/airport';
import { City, CityT } from './collections/aviation_taxonomy/city';
import {
  Continent,
  ContinentT,
} from './collections/aviation_taxonomy/continent';
import { Country, CountryT } from './collections/aviation_taxonomy/country';
import { Route, RouteT } from './collections/aviation_taxonomy/route';
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
  experiment: Experiment[];
  experiment_variant: ExperimentVariant[];
  //AVIATION_TAXONOMY
  continent: Continent[];
  continent_t: ContinentT[];
  country: Country[];
  country_t: CountryT[];
  city: City[];
  city_t: CityT[];
  airport: Airport[];
  airport_t: AirportT[];
  route: Route[];
  route_t: RouteT[];
}
