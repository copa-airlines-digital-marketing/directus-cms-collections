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
export interface Item_RegionTranslations {
  id?: number;
  languages_code?: string | null;
  name: string;
  region_code_m49?: string | null;
  slug_localized: string;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the region_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyRegionTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_RegionTranslations>,
): Promise<Item_RegionTranslations[]> {
  return getItems<Item_RegionTranslations>(
    baseUrl,
    'region_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the region_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneRegionTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_RegionTranslations>,
): Promise<Item_RegionTranslations> {
  return getItem<Item_RegionTranslations>(
    baseUrl,
    'region_translations',
    token,
    id,
    query,
  );
}
