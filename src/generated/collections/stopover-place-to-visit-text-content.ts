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
export interface Item_StopoverPlaceToVisitTextContent {
  id?: number;
  sort?: number | null;
  stopover_place_to_visit_id?: number | null;
  Text_Content_id?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_place_to_visit_Text_Content collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyStopoverPlaceToVisitTextContent(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverPlaceToVisitTextContent>,
): Promise<Item_StopoverPlaceToVisitTextContent[]> {
  return getItems<Item_StopoverPlaceToVisitTextContent>(
    baseUrl,
    'stopover_place_to_visit_Text_Content',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_place_to_visit_Text_Content collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneStopoverPlaceToVisitTextContent(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverPlaceToVisitTextContent>,
): Promise<Item_StopoverPlaceToVisitTextContent> {
  return getItem<Item_StopoverPlaceToVisitTextContent>(
    baseUrl,
    'stopover_place_to_visit_Text_Content',
    token,
    id,
    query,
  );
}
