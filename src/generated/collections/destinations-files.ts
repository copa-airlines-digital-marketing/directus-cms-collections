/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destinations_files
 */

export interface Item_DestinationsFiles {
  destinations_iata_code?: string | null;
  directus_files_id?: string | null;
  id?: number;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destinations_files collection
 */
export async function getManyDestinationsFiles(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationsFiles>,
): Promise<Item_DestinationsFiles[]> {
  return getItems<Item_DestinationsFiles>(
    baseUrl,
    'destinations_files',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destinations_files collection
 */
export async function getOneDestinationsFiles(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationsFiles>,
): Promise<Item_DestinationsFiles> {
  return getItem<Item_DestinationsFiles>(
    baseUrl,
    'destinations_files',
    token,
    id,
    query,
  );
}
