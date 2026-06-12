/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_fact_translations
 */

export interface Item_DestinationLandingFactTranslations {
  description?: string | null;
  destination_landing_facts_id?: number | null;
  id?: number;
  label?: string | null;
  languages_code?: string | null;
  value?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_fact_translations collection
 */
export async function getManyDestinationLandingFactTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingFactTranslations>,
): Promise<Item_DestinationLandingFactTranslations[]> {
  return getItems<Item_DestinationLandingFactTranslations>(
    baseUrl,
    'destination_landing_fact_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_fact_translations collection
 */
export async function getOneDestinationLandingFactTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingFactTranslations>,
): Promise<Item_DestinationLandingFactTranslations> {
  return getItem<Item_DestinationLandingFactTranslations>(
    baseUrl,
    'destination_landing_fact_translations',
    token,
    id,
    query,
  );
}
