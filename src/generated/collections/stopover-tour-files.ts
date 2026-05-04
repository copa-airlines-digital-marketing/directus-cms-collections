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
export interface Item_StopoverTourFiles {
  directus_files_id?: string | null;
  id?: number;
  sort?: number | null;
  stopover_tour_id?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_tour_files collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyStopoverTourFiles(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverTourFiles>,
): Promise<Item_StopoverTourFiles[]> {
  return getItems<Item_StopoverTourFiles>(
    baseUrl,
    'stopover_tour_files',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_tour_files collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneStopoverTourFiles(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverTourFiles>,
): Promise<Item_StopoverTourFiles> {
  return getItem<Item_StopoverTourFiles>(
    baseUrl,
    'stopover_tour_files',
    token,
    id,
    query,
  );
}
