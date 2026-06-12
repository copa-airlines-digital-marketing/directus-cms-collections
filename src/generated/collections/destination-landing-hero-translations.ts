/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_hero_translations
 */

export interface Item_DestinationLandingHeroTranslations {
  destination_landing_hero_id?: number | null;
  eyebrow?: string | null;
  hero_image_alt?: string | null;
  id?: number;
  languages_code?: string | null;
  lead?: string | null;
  primary_cta_label?: string | null;
  secondary_cta_label?: string | null;
  title?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_hero_translations collection
 */
export async function getManyDestinationLandingHeroTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingHeroTranslations>,
): Promise<Item_DestinationLandingHeroTranslations[]> {
  return getItems<Item_DestinationLandingHeroTranslations>(
    baseUrl,
    'destination_landing_hero_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_hero_translations collection
 */
export async function getOneDestinationLandingHeroTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingHeroTranslations>,
): Promise<Item_DestinationLandingHeroTranslations> {
  return getItem<Item_DestinationLandingHeroTranslations>(
    baseUrl,
    'destination_landing_hero_translations',
    token,
    id,
    query,
  );
}
