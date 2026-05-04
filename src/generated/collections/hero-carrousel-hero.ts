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
export interface Item_HeroCarrouselHero {
  hero_carrousel_name?: string | null;
  hero_name?: string | null;
  id?: number;
  order?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the hero_carrousel_hero collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyHeroCarrouselHero(
  baseUrl: string,
  token: string,
  query?: Query<Item_HeroCarrouselHero>,
): Promise<Item_HeroCarrouselHero[]> {
  return getItems<Item_HeroCarrouselHero>(
    baseUrl,
    'hero_carrousel_hero',
    token,
    query,
  );
}

/**
 * Fetches a single item from the hero_carrousel_hero collection
 */
/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getOneHeroCarrouselHero(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_HeroCarrouselHero>,
): Promise<Item_HeroCarrouselHero> {
  return getItem<Item_HeroCarrouselHero>(
    baseUrl,
    'hero_carrousel_hero',
    token,
    id,
    query,
  );
}
