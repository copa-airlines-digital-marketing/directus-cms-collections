/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: stopover_package_files
 */

export interface Item_StopoverPackageFiles {
  directus_files_id?: string | null;
  id?: number;
  sort?: number | null;
  stopover_package_id?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_package_files collection
 */
export async function getManyStopoverPackageFiles(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverPackageFiles>,
): Promise<Item_StopoverPackageFiles[]> {
  return getItems<Item_StopoverPackageFiles>(
    baseUrl,
    'stopover_package_files',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_package_files collection
 */
export async function getOneStopoverPackageFiles(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverPackageFiles>,
): Promise<Item_StopoverPackageFiles> {
  return getItem<Item_StopoverPackageFiles>(
    baseUrl,
    'stopover_package_files',
    token,
    id,
    query,
  );
}
