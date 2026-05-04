/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * 
 * ⚠️ DEPRECATED COLLECTION ⚠️
 * This collection no longer exists in Directus.
 * Deprecated on: 2026-04-14
 * 
 * This file is kept for backward compatibility.
 * Please migrate away from this collection before it's removed.
 * To manually remove deprecated collections, run: pnpm clean:deprecated
 */

/**
 * @deprecated This collection no longer exists in Directus
 */
export interface Item_StopoverHotelModule {
  collection?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  filters?: string | null;
  highlight_only?: boolean;
  max_items?: number;
  name?: string;
  pilar?: Record<string, unknown> | null;
  promo_only?: boolean;
  sort?: Record<string, unknown> | null;
  status?: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_hotel_module collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyStopoverHotelModule(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverHotelModule>,
): Promise<Item_StopoverHotelModule[]> {
  return getItems<Item_StopoverHotelModule>(
    baseUrl,
    'stopover_hotel_module',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_hotel_module collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneStopoverHotelModule(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverHotelModule>,
): Promise<Item_StopoverHotelModule> {
  return getItem<Item_StopoverHotelModule>(
    baseUrl,
    'stopover_hotel_module',
    token,
    id,
    query,
  );
}
