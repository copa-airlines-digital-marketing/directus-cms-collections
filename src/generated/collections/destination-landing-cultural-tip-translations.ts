/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_cultural_tip_translations
 */

export interface Item_DestinationLandingCulturalTipTranslations {
  description?: string | null;
  destination_landing_cultural_tips_id?: number | null;
  id?: number;
  image_alt?: string | null;
  languages_code?: string | null;
  link_label?: string | null;
  title?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_cultural_tip_translations collection
 */
export async function getManyDestinationLandingCulturalTipTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingCulturalTipTranslations>,
): Promise<Item_DestinationLandingCulturalTipTranslations[]> {
  return getItems<Item_DestinationLandingCulturalTipTranslations>(
    baseUrl,
    'destination_landing_cultural_tip_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_cultural_tip_translations collection
 */
export async function getOneDestinationLandingCulturalTipTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingCulturalTipTranslations>,
): Promise<Item_DestinationLandingCulturalTipTranslations> {
  return getItem<Item_DestinationLandingCulturalTipTranslations>(
    baseUrl,
    'destination_landing_cultural_tip_translations',
    token,
    id,
    query,
  );
}
