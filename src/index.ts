import {
  createDirectus,
  Query,
  QueryItem,
  readItem,
  readItems,
  rest,
  staticToken,
} from '@directus/sdk';
import { StopoverTour } from './collections/stopover_tours/stopover_tours';
import { getASite, getSites } from './collections/sites';
import { getASection, getSections } from './collections/sections';

const logAndReturn =
  <T>(value: T) =>
  (message: string): T => {
    console.error(message);
    return value;
  };

const createDirectusClient = (url: string, token: string) =>
  createDirectus<Schema>(url).with(staticToken(token)).with(rest());

const getTours = async (
  url: string,
  token: string,
  query?: Query<Schema, StopoverTour>,
) => {
  const client = createDirectusClient(url, token);
  const items = await client.request(readItems('stopover_tour', query));
  return items;
};

const getATour = async (
  url: string,
  token: string,
  id: string | number,
  query?: QueryItem<Schema, StopoverTour>,
) => {
  const client = createDirectusClient(url, token);
  const items = await client
    .request(readItem('stopover_tour', id, query))
    .catch(logAndReturn(<StopoverTour>{}));
  return items;
};

export { getTours, getATour, getASite, getSites, getSections, getASection };
