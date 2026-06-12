/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_transportation_files
 */

export interface Item_StopoverTransportationFiles {
  directus_files_id?: string | null;
  id?: number;
  sort?: number | null;
  stopover_transportation_id?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_transportation_files collection
 */
export async function getManyStopoverTransportationFiles(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverTransportationFiles>,
): Promise<Item_StopoverTransportationFiles[]> {
  return getItems<Item_StopoverTransportationFiles>(
    baseUrl,
    'stopover_transportation_files',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_transportation_files collection
 */
export async function getOneStopoverTransportationFiles(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverTransportationFiles>,
): Promise<Item_StopoverTransportationFiles> {
  return getItem<Item_StopoverTransportationFiles>(
    baseUrl,
    'stopover_transportation_files',
    token,
    id,
    query,
  );
}
