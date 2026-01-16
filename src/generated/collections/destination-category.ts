/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_category
 */

export interface Item_DestinationCategory {
  date_created?: string | null;
  date_updated?: string | null;
  destinations?: unknown;
  id?: number;
  image?: string | null;
  name?: string | null;
  status?: string;
  translations?: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_category collection
 */
export async function getManyDestinationCategory(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationCategory>,
): Promise<Item_DestinationCategory[]> {
  return getItems<Item_DestinationCategory>(
    baseUrl,
    'destination_category',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_category collection
 */
export async function getOneDestinationCategory(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationCategory>,
): Promise<Item_DestinationCategory> {
  return getItem<Item_DestinationCategory>(
    baseUrl,
    'destination_category',
    token,
    id,
    query,
  );
}
