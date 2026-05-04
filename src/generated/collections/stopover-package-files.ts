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
/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
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
