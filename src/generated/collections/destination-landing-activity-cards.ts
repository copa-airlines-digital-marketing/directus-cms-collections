/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_activity_cards
 */

export interface Item_DestinationLandingActivityCards {
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
 * Fetches multiple items from the destination_landing_activity_cards collection
 */
export async function getManyDestinationLandingActivityCards(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingActivityCards>,
): Promise<Item_DestinationLandingActivityCards[]> {
  return getItems<Item_DestinationLandingActivityCards>(
    baseUrl,
    'destination_landing_activity_cards',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_activity_cards collection
 */
export async function getOneDestinationLandingActivityCards(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingActivityCards>,
): Promise<Item_DestinationLandingActivityCards> {
  return getItem<Item_DestinationLandingActivityCards>(
    baseUrl,
    'destination_landing_activity_cards',
    token,
    id,
    query,
  );
}
