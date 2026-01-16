/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_place_to_visit_files
 */

export interface Item_StopoverPlaceToVisitFiles {
  directus_files_id?: string | null;
  id?: number;
  sort?: number | null;
  stopover_place_to_visit_id?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_place_to_visit_files collection
 */
export async function getManyStopoverPlaceToVisitFiles(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverPlaceToVisitFiles>,
): Promise<Item_StopoverPlaceToVisitFiles[]> {
  return getItems<Item_StopoverPlaceToVisitFiles>(
    baseUrl,
    'stopover_place_to_visit_files',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_place_to_visit_files collection
 */
export async function getOneStopoverPlaceToVisitFiles(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverPlaceToVisitFiles>,
): Promise<Item_StopoverPlaceToVisitFiles> {
  return getItem<Item_StopoverPlaceToVisitFiles>(
    baseUrl,
    'stopover_place_to_visit_files',
    token,
    id,
    query,
  );
}
