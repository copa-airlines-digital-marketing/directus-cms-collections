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
export interface Item_TermsAndConditionsTranslations {
  id?: number;
  languages_code?: string | null;
  path?: string | null;
  termAndConditions: string;
  terms_and_conditions_id?: number | null;
  title: string;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the terms_and_conditions_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyTermsAndConditionsTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_TermsAndConditionsTranslations>,
): Promise<Item_TermsAndConditionsTranslations[]> {
  return getItems<Item_TermsAndConditionsTranslations>(
    baseUrl,
    'terms_and_conditions_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the terms_and_conditions_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneTermsAndConditionsTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_TermsAndConditionsTranslations>,
): Promise<Item_TermsAndConditionsTranslations> {
  return getItem<Item_TermsAndConditionsTranslations>(
    baseUrl,
    'terms_and_conditions_translations',
    token,
    id,
    query,
  );
}
