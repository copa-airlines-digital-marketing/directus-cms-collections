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
export interface Item_HeroTranslations {
  badges?: Record<string, unknown> | null;
  body?: Record<string, unknown> | null;
  call_to_action?: unknown;
  cta: Record<string, unknown>;
  eyebrow?: string | null;
  headline: string;
  hero_name?: string | null;
  id?: number;
  languages_code?: string | null;
  subheadline?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the hero_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyHeroTranslations(
  baseUrl: string,
  token: string,
  query?: Query<Item_HeroTranslations>,
): Promise<Item_HeroTranslations[]> {
  return getItems<Item_HeroTranslations>(
    baseUrl,
    'hero_translations',
    token,
    query,
  );
}

/**
 * Fetches a single item from the hero_translations collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneHeroTranslations(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_HeroTranslations>,
): Promise<Item_HeroTranslations> {
  return getItem<Item_HeroTranslations>(
    baseUrl,
    'hero_translations',
    token,
    id,
    query,
  );
}
