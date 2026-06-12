/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: fares_viaja_panam
 */

export interface Item_FaresViajaPanam {
  days?: number | null;
  departure?: string | null;
  destination?: string | null;
  fare?: number | null;
  id?: string;
  maxPrice?: number | null;
  price?: number | null;
  return?: string | null;
  score?: number | null;
  seats?: number | null;
  taxes?: number | null;
  updated_at?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the fares_viaja_panam collection
 */
export async function getManyFaresViajaPanam(
  baseUrl: string,
  token: string,
  query?: Query<Item_FaresViajaPanam>,
): Promise<Item_FaresViajaPanam[]> {
  return getItems<Item_FaresViajaPanam>(
    baseUrl,
    'fares_viaja_panam',
    token,
    query,
  );
}

/**
 * Fetches a single item from the fares_viaja_panam collection
 */
export async function getOneFaresViajaPanam(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_FaresViajaPanam>,
): Promise<Item_FaresViajaPanam> {
  return getItem<Item_FaresViajaPanam>(
    baseUrl,
    'fares_viaja_panam',
    token,
    id,
    query,
  );
}
