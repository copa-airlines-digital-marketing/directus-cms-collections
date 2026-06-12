/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_attractions
 */

export interface Item_DestinationLandingAttractions {
  icon?: number | null;
  id?: number;
  image?: string | null;
  image_getty_id?: string | null;
  is_featured?: boolean | null;
  name: string;
  open_in_new_tab?: boolean | null;
  rank?: number | null;
  sort?: number | null;
  status: string;
  translations?: unknown;
  url?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_attractions collection
 */
export async function getManyDestinationLandingAttractions(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingAttractions>,
): Promise<Item_DestinationLandingAttractions[]> {
  return getItems<Item_DestinationLandingAttractions>(
    baseUrl,
    'destination_landing_attractions',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_attractions collection
 */
export async function getOneDestinationLandingAttractions(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingAttractions>,
): Promise<Item_DestinationLandingAttractions> {
  return getItem<Item_DestinationLandingAttractions>(
    baseUrl,
    'destination_landing_attractions',
    token,
    id,
    query,
  );
}
