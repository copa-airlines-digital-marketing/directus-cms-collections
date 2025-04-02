import {
  createDirectus,
  Query,
  QueryItem,
  readItem,
  readItems,
  rest,
  staticToken,
} from '@directus/sdk';
import type { Schema } from './collections/schema';
import { StopoverTour } from './collections/stopover_tours';

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

const getPackages = async (
  url: string,
  token: string,
  query?: Query<Schema, StopoverPackage>,
) => {
  const client = createDirectusClient(url, token);
  const items = await client
    .request(readItems('stopover_package', query))
    .catch(logAndReturn([<StopoverPackage>{}]));
  return items;
};

const getAPackage = async (
  url: string,
  token: string,
  id: string | number,
  query?: QueryItem<Schema, StopoverPackage>,
) => {
  const client = createDirectusClient(url, token);
  const items = await client
    .request(readItem('stopover_package', id, query))
    .catch(logAndReturn(<StopoverPackage>{}));
  return items;
};

export { getTours, getATour, getPackages, getAPackage };
