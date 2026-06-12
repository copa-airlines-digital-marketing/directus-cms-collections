/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_cultural_tips
 */

export interface Item_DestinationLandingCulturalTips {
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
 * Fetches multiple items from the destination_landing_cultural_tips collection
 */
export async function getManyDestinationLandingCulturalTips(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingCulturalTips>,
): Promise<Item_DestinationLandingCulturalTips[]> {
  return getItems<Item_DestinationLandingCulturalTips>(
    baseUrl,
    'destination_landing_cultural_tips',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_cultural_tips collection
 */
export async function getOneDestinationLandingCulturalTips(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingCulturalTips>,
): Promise<Item_DestinationLandingCulturalTips> {
  return getItem<Item_DestinationLandingCulturalTips>(
    baseUrl,
    'destination_landing_cultural_tips',
    token,
    id,
    query,
  );
}
