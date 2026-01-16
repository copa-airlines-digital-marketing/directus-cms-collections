import { directusFetch, buildQueryString } from '../client/http.js';
import type { Query } from './query.js';

/**
 * Response structure for getItem
 */
interface GetItemResponse<T> {
  data: T;
}

/**
 * Fetches a single item from a Directus collection by ID
 *
 * @param baseUrl - Directus instance URL
 * @param collection - Collection name
 * @param token - Static authentication token
 * @param id - Item ID or primary key value
 * @param query - Query parameters
 * @returns Single item
 */
export async function getItem<TItem>(
  baseUrl: string,
  collection: string,
  token: string,
  id: string | number,
  query?: Query<TItem>,
): Promise<TItem> {
  const queryString = query
    ? buildQueryString(query as Record<string, unknown>)
    : '';
  const endpoint = `/items/${collection}/${id}${queryString ? `?${queryString}` : ''}`;

  const response = await directusFetch<GetItemResponse<TItem>>(
    baseUrl,
    endpoint,
    token,
    collection,
  );

  return response.data;
}
