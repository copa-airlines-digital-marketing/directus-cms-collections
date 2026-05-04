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
export interface Item_GlobalTransaltionsTranslations {
  global_transaltions_key?: string | null;
  id?: number;
  label?: string | null;
  languages_code?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the global_transaltions_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyGlobalTransaltionsTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_GlobalTransaltionsTranslations>,
): Promise<Item_GlobalTransaltionsTranslations[]> {
  return getItems<Item_GlobalTransaltionsTranslations>(
    baseUrl,
    'global_transaltions_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the global_transaltions_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneGlobalTransaltionsTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_GlobalTransaltionsTranslations>,
): Promise<Item_GlobalTransaltionsTranslations> {
  return getItem<Item_GlobalTransaltionsTranslations>(
    baseUrl,
    'global_transaltions_translations',
    token,
    id,
    query,
  );
}
