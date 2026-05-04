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
export interface Item_NavigationTranslations {
  id?: number;
  languages_code?: string | null;
  links: unknown;
  navigation_id?: string | null;
  title?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the navigation_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyNavigationTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_NavigationTranslations>,
): Promise<Item_NavigationTranslations[]> {
  return getItems<Item_NavigationTranslations>(
    baseUrl,
    'navigation_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the navigation_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneNavigationTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_NavigationTranslations>,
): Promise<Item_NavigationTranslations> {
  return getItem<Item_NavigationTranslations>(
    baseUrl,
    'navigation_translations',
    token,
    id,
    query,
  );
}
