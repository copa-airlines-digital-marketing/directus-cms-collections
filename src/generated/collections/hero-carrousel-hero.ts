/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: hero_carrousel_hero
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
