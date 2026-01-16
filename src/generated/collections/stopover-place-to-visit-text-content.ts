/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_place_to_visit_Text_Content
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
