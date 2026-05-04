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
/**
 * @deprecated This collection no longer exists in Directus
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
/**
 * @deprecated This collection no longer exists in Directus
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
