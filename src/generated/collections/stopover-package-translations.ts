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
export interface Item_StopoverPackageTranslations {
  description: string;
  id?: number;
  included?: Record<string, unknown> | null;
  languages_code?: string | null;
  name: string;
  not_included?: Record<string, unknown> | null;
  path?: string | null;
  promo_description?: string | null;
  promo_name?: string | null;
  stopover_package_id?: number | null;
  url?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the stopover_package_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyStopoverPackageTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_StopoverPackageTranslations>,
): Promise<Item_StopoverPackageTranslations[]> {
  return getItems<Item_StopoverPackageTranslations>(
    baseUrl,
    'stopover_package_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the stopover_package_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneStopoverPackageTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_StopoverPackageTranslations>,
): Promise<Item_StopoverPackageTranslations> {
  return getItem<Item_StopoverPackageTranslations>(
    baseUrl,
    'stopover_package_translations',
    token,
    id,
    query,
  );
}
