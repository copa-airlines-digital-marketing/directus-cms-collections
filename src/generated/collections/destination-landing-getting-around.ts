/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_getting_around
 */

export interface Item_DestinationLandingGettingAround {
  icon?: number | null;
  id?: number;
  image?: string | null;
  image_getty_id?: string | null;
  is_featured?: boolean | null;
  name: string;
  open_in_new_tab?: boolean | null;
  sort?: number | null;
  status: string;
  translations?: unknown;
  url?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_getting_around collection
 */
export async function getManyDestinationLandingGettingAround(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingGettingAround>,
): Promise<Item_DestinationLandingGettingAround[]> {
  return getItems<Item_DestinationLandingGettingAround>(
    baseUrl,
    'destination_landing_getting_around',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_getting_around collection
 */
export async function getOneDestinationLandingGettingAround(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingGettingAround>,
): Promise<Item_DestinationLandingGettingAround> {
  return getItem<Item_DestinationLandingGettingAround>(
    baseUrl,
    'destination_landing_getting_around',
    token,
    id,
    query,
  );
}
