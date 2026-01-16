/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: pages_storefronts
 */

export interface Item_PagesStorefronts {
  id?: number;
  pages_id?: number | null;
  sections?: unknown;
  storefronts_code?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the pages_storefronts collection
 */
export async function getManyPagesStorefronts(
  baseUrl: string,
  token: string,
  query?: Query<Item_PagesStorefronts>,
): Promise<Item_PagesStorefronts[]> {
  return getItems<Item_PagesStorefronts>(
    baseUrl,
    'pages_storefronts',
    token,
    query,
  );
}

/**
 * Fetches a single item from the pages_storefronts collection
 */
export async function getOnePagesStorefronts(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_PagesStorefronts>,
): Promise<Item_PagesStorefronts> {
  return getItem<Item_PagesStorefronts>(
    baseUrl,
    'pages_storefronts',
    token,
    id,
    query,
  );
}
