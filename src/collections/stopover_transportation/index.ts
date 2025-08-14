import { Query, QueryItem, readItem, readItems } from '@directus/sdk';
import { Page } from '../pages/pages';
import { StopoverTransportationFiles } from './files';
import { StopoverTransportationTranslations } from './translations';
import { createDirectusClient, logAndReturn } from '../../utils';

type Status =
  | 'archived'
  | 'error'
  | 'draft'
  | 'review'
  | 'publishing'
  | 'published';

type ContactForm = 'phone' | 'whatsapp' | 'e-mail';

type Contact = {
  form: ContactForm;
  contact: string;
};

type TransportationCategory =
  | 'air'
  | 'airport'
  | 'self'
  | 'rental'
  | 'long-distance'
  | 'private'
  | 'public'
  | 'taxi'
  | 'water';

type SupportedLanguages = 'en' | 'es' | 'pt';

type StopoverTransportation = {
  priority: null | number;
  highlight: null | boolean;
  parent_page: null | number | Page;
  parent_content: null | number | StopoverTransportation;
  children: null | Array<number> | Array<StopoverTransportation>;
  id: number;
  user_created: null | string;
  date_created: null | string;
  user_updated: null | string;
  date_updated: null | string;
  name: string;
  status: Status;
  main_image: null | string;
  gallery: null | Array<number> | Array<StopoverTransportationFiles>;
  contact: Array<Contact>;
  category: TransportationCategory;
  supported_languages: SupportedLanguages;
  promo_code: null | string;
  promo_discount_amount: null | number;
  promo_discount_percent: null | number;
  translations:
    | null
    | Array<number>
    | Array<StopoverTransportationTranslations>;
};

const getTransportations = async (
  url: string,
  token: string,
  query?: Query<Schema, StopoverTransportation>,
) => {
  const client = createDirectusClient(url, token);
  const items = await client
    .request(readItems('stopover_transportation', query))
    .catch(logAndReturn([<StopoverTransportation>{}]));
  return items;
};

const getATransportation = async (
  url: string,
  token: string,
  id: string | number,
  query?: QueryItem<Schema, StopoverTransportation>,
) => {
  const client = createDirectusClient(url, token);
  const items = await client
    .request(readItem('stopover_transportation', id, query))
    .catch(logAndReturn(<StopoverTransportation>{}));
  return items;
};

export { getTransportations, getATransportation };

export type {
  StopoverTransportation,
  StopoverTransportationFiles,
  StopoverTransportationTranslations,
};
