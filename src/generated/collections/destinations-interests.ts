/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destinations_interests
 */

export interface Item_DestinationsInterests {
  destination_category_id?: number | null;
  destinations_iata_code?: string | null;
  id?: number;
  sort?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destinations_interests collection
 */
export async function getManyDestinationsInterests(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationsInterests>,
): Promise<Item_DestinationsInterests[]> {
  return getItems<Item_DestinationsInterests>(
    baseUrl,
    'destinations_interests',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destinations_interests collection
 */
export async function getOneDestinationsInterests(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationsInterests>,
): Promise<Item_DestinationsInterests> {
  return getItem<Item_DestinationsInterests>(
    baseUrl,
    'destinations_interests',
    token,
    id,
    query,
  );
}
