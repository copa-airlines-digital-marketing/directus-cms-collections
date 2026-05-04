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
/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
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
