import { directusFetch, buildQueryString } from '../client/http.js';
import type { Query } from './query.js';

/**
 * Response structure for getItems
 */
interface GetItemsResponse<T> {
  data: T[];
}

/**
 * Fetches multiple items from a Directus collection
 *
 * @param baseUrl - Directus instance URL
 * @param collection - Collection name
 * @param token - Static authentication token
 * @param query - Query parameters
 * @returns Array of items
 */
export async function getItems<TItem>(
  baseUrl: string,
  collection: string,
  token: string,
  query?: Query<TItem>,
): Promise<TItem[]> {
  const queryString = query
    ? buildQueryString(query as Record<string, unknown>)
    : '';
  const endpoint = `/items/${collection}${queryString ? `?${queryString}` : ''}`;

  const response = await directusFetch<GetItemsResponse<TItem>>(
    baseUrl,
    endpoint,
    token,
    collection,
  );

  return response.data;
}
