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
export interface Item_NeighborhoodGallery {
  id?: number;
  image?: string | null;
  neighborhood?: string | null;
  sort?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the neighborhood_gallery collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyNeighborhoodGallery(
  baseUrl: string,
  token: string,
  query?: Query<Item_NeighborhoodGallery>,
): Promise<Item_NeighborhoodGallery[]> {
  return getItems<Item_NeighborhoodGallery>(
    baseUrl,
    'neighborhood_gallery',
    token,
    query,
  );
}

/**
 * Fetches a single item from the neighborhood_gallery collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneNeighborhoodGallery(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_NeighborhoodGallery>,
): Promise<Item_NeighborhoodGallery> {
  return getItem<Item_NeighborhoodGallery>(
    baseUrl,
    'neighborhood_gallery',
    token,
    id,
    query,
  );
}
