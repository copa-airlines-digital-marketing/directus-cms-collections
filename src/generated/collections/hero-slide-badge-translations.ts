/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: hero_slide_badge_translations
 */

export interface Item_HeroSlideBadgeTranslations {
  hero_slide_badge_name?: string | null;
  id?: number;
  label: string;
  languages_code?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the hero_slide_badge_translations collection
 */
export async function getManyHeroSlideBadgeTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_HeroSlideBadgeTranslations>,
): Promise<Item_HeroSlideBadgeTranslations[]> {
  return getItems<Item_HeroSlideBadgeTranslations>(
    baseUrl,
    'hero_slide_badge_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the hero_slide_badge_translations collection
 */
export async function getOneHeroSlideBadgeTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_HeroSlideBadgeTranslations>,
): Promise<Item_HeroSlideBadgeTranslations> {
  return getItem<Item_HeroSlideBadgeTranslations>(
    baseUrl,
    'hero_slide_badge_translations',
    token,
    id,
    query,
  );
}
