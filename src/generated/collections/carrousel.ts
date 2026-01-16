/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: carrousel
 */

export interface Item_Carrousel {
  autoSlide?: boolean | null;
  autoSlideDelayMS?: number;
  date_created?: string | null;
  date_updated?: string | null;
  description?: string | null;
  id?: string;
  name: string;
  slides?: Record<string, unknown> | null;
  status?: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the carrousel collection
 */
export async function getManyCarrousel(
  baseUrl: string,
  token: string,
  query?: Query<Item_Carrousel>,
): Promise<Item_Carrousel[]> {
  return getItems<Item_Carrousel>(baseUrl, 'carrousel', token, query);
}

/**
 * Fetches a single item from the carrousel collection
 */
export async function getOneCarrousel(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Carrousel>,
): Promise<Item_Carrousel> {
  return getItem<Item_Carrousel>(baseUrl, 'carrousel', token, id, query);
}
