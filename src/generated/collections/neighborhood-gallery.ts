/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: neighborhood_gallery
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
