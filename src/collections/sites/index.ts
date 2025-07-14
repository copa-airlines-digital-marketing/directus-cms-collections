import { Query, QueryItem, readItem, readItems } from '@directus/sdk';
import { logAndReturn, createDirectusClient } from '../../utils';

const getSites = async <T>(
  url: string,
  token: string,
  query?: Query<Schema, Sites>,
) => {
  const client = createDirectusClient(url, token);
  const items = await client
    .request(readItems('sites', query))
    .catch(logAndReturn([<Sites>{}]));
  return items as T;
};

const getASite = async <T>(
  url: string,
  token: string,
  id: string | number,
  query?: QueryItem<Schema, Sites>,
) => {
  const client = createDirectusClient(url, token);
  const items = await client
    .request(readItem('sites', id, query))
    .catch(logAndReturn(<Sites>{}));
  return items as T;
};

export { getSites, getASite };
