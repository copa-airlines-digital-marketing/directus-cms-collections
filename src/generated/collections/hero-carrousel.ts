/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: hero_carrousel
 */

export interface Item_HeroCarrousel {
  autoplay?: boolean;
  date_created?: string | null;
  date_updated?: string | null;
  end_date?: string | null;
  interval_ms?: number;
  loop?: boolean;
  name?: string;
  pause_on_hover?: boolean;
  slides: unknown;
  start_date?: string | null;
  status?: string;
  user_created?: string | null;
  user_updated?: string | null;
  visibility?: unknown;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the hero_carrousel collection
 */
export async function getManyHeroCarrousel(
  baseUrl: string,
  token: string,
  query?: Query<Item_HeroCarrousel>,
): Promise<Item_HeroCarrousel[]> {
  return getItems<Item_HeroCarrousel>(baseUrl, 'hero_carrousel', token, query);
}

/**
 * Fetches a single item from the hero_carrousel collection
 */
export async function getOneHeroCarrousel(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_HeroCarrousel>,
): Promise<Item_HeroCarrousel> {
  return getItem<Item_HeroCarrousel>(
    baseUrl,
    'hero_carrousel',
    token,
    id,
    query,
  );
}
