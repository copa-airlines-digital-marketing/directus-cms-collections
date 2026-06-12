/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: maxPriceByDurationBracket
 */

export interface Item_Maxpricebydurationbracket {
  date_created?: string | null;
  date_updated?: string | null;
  id?: string;
  maxPrice?: number | null;
  maxTime?: number | null;
  minTime?: number | null;
  sort?: number | null;
  status?: string;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the maxPriceByDurationBracket collection
 */
export async function getManyMaxpricebydurationbracket(
  baseUrl: string,
  token: string,
  query?: Query<Item_Maxpricebydurationbracket>,
): Promise<Item_Maxpricebydurationbracket[]> {
  return getItems<Item_Maxpricebydurationbracket>(
    baseUrl,
    'maxPriceByDurationBracket',
    token,
    query,
  );
}

/**
 * Fetches a single item from the maxPriceByDurationBracket collection
 */
export async function getOneMaxpricebydurationbracket(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Maxpricebydurationbracket>,
): Promise<Item_Maxpricebydurationbracket> {
  return getItem<Item_Maxpricebydurationbracket>(
    baseUrl,
    'maxPriceByDurationBracket',
    token,
    id,
    query,
  );
}
