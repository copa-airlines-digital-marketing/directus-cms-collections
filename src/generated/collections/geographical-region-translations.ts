/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: geographical_region_translations
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
