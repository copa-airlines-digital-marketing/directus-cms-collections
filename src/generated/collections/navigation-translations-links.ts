/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: navigation_translations_links
 */

export interface Item_NavigationTranslationsLinks {
  id?: number;
  links_id?: number | null;
  navigation_translations_id?: number | null;
  sort?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the navigation_translations_links collection
 */
export async function getManyNavigationTranslationsLinks(
  baseUrl: string,
  token: string,
  query?: Query<Item_NavigationTranslationsLinks>,
): Promise<Item_NavigationTranslationsLinks[]> {
  return getItems<Item_NavigationTranslationsLinks>(
    baseUrl,
    'navigation_translations_links',
    token,
    query,
  );
}

/**
 * Fetches a single item from the navigation_translations_links collection
 */
export async function getOneNavigationTranslationsLinks(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_NavigationTranslationsLinks>,
): Promise<Item_NavigationTranslationsLinks> {
  return getItem<Item_NavigationTranslationsLinks>(
    baseUrl,
    'navigation_translations_links',
    token,
    id,
    query,
  );
}
