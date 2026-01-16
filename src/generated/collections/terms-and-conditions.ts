/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: terms_and_conditions
 */

export interface Item_TermsAndConditions {
  date_created?: string | null;
  date_updated?: string | null;
  id?: number;
  name: string;
  status?: string;
  translations: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the terms_and_conditions collection
 */
export async function getManyTermsAndConditions(
  baseUrl: string,
  token: string,
  query?: Query<Item_TermsAndConditions>,
): Promise<Item_TermsAndConditions[]> {
  return getItems<Item_TermsAndConditions>(
    baseUrl,
    'terms_and_conditions',
    token,
    query,
  );
}

/**
 * Fetches a single item from the terms_and_conditions collection
 */
export async function getOneTermsAndConditions(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_TermsAndConditions>,
): Promise<Item_TermsAndConditions> {
  return getItem<Item_TermsAndConditions>(
    baseUrl,
    'terms_and_conditions',
    token,
    id,
    query,
  );
}
