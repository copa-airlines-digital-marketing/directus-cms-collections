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
export interface Item_GeographicalRegionTranslations {
  airtrfx_uri?: string | null;
  geographical_region_id?: number | null;
  id?: number;
  languages_code?: string | null;
  name?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the geographical_region_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyGeographicalRegionTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_GeographicalRegionTranslations>,
): Promise<Item_GeographicalRegionTranslations[]> {
  return getItems<Item_GeographicalRegionTranslations>(
    baseUrl,
    'geographical_region_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the geographical_region_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneGeographicalRegionTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_GeographicalRegionTranslations>,
): Promise<Item_GeographicalRegionTranslations> {
  return getItem<Item_GeographicalRegionTranslations>(
    baseUrl,
    'geographical_region_translations',
    token,
    id,
    query,
  );
}
