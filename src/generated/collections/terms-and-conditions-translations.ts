/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: terms_and_conditions_translations
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
