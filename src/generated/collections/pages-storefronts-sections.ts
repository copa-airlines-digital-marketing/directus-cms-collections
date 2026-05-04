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
export interface Item_PagesStorefrontsSections {
  id?: number;
  pages_storefronts_id?: number | null;
  sections_id?: number | null;
  sort?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the pages_storefronts_sections collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyPagesStorefrontsSections(
  baseUrl: string,
  token: string,
  query?: Query<Item_PagesStorefrontsSections>,
): Promise<Item_PagesStorefrontsSections[]> {
  return getItems<Item_PagesStorefrontsSections>(
    baseUrl,
    'pages_storefronts_sections',
    token,
    query,
  );
}

/**
 * Fetches a single item from the pages_storefronts_sections collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOnePagesStorefrontsSections(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_PagesStorefrontsSections>,
): Promise<Item_PagesStorefrontsSections> {
  return getItem<Item_PagesStorefrontsSections>(
    baseUrl,
    'pages_storefronts_sections',
    token,
    id,
    query,
  );
}
