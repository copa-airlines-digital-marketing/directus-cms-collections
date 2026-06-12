/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: pages_storefronts_sections
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
