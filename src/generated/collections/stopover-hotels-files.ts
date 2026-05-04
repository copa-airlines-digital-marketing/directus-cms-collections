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
export interface Item_StopoverHotelsFiles {
  directus_files_id?: string | null;
  id?: number;
  sort?: number | null;
  stopover_hotels_id?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_hotels_files collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyStopoverHotelsFiles(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverHotelsFiles>,
): Promise<Item_StopoverHotelsFiles[]> {
  return getItems<Item_StopoverHotelsFiles>(
    baseUrl,
    'stopover_hotels_files',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_hotels_files collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneStopoverHotelsFiles(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverHotelsFiles>,
): Promise<Item_StopoverHotelsFiles> {
  return getItem<Item_StopoverHotelsFiles>(
    baseUrl,
    'stopover_hotels_files',
    token,
    id,
    query,
  );
}
