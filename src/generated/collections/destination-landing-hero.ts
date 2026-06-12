/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: destination_landing_hero
 */

export interface Item_DestinationLandingHero {
  hero_image?: string | null;
  hero_image_getty_id?: string | null;
  id?: number;
  name: string;
  primary_anchor_en?: string | null;
  primary_anchor_es?: string | null;
  primary_anchor_fr?: string | null;
  primary_anchor_pt?: string | null;
  secondary_cta_type?: string | null;
  secondary_cta_url_base?: string | null;
  sort?: number | null;
  status: string;
  translations?: unknown;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the destination_landing_hero collection
 */
export async function getManyDestinationLandingHero(
  baseUrl: string,
  token: string,
  query?: Query<Item_DestinationLandingHero>,
): Promise<Item_DestinationLandingHero[]> {
  return getItems<Item_DestinationLandingHero>(
    baseUrl,
    'destination_landing_hero',
    token,
    query,
  );
}

/**
 * Fetches a single item from the destination_landing_hero collection
 */
export async function getOneDestinationLandingHero(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_DestinationLandingHero>,
): Promise<Item_DestinationLandingHero> {
  return getItem<Item_DestinationLandingHero>(
    baseUrl,
    'destination_landing_hero',
    token,
    id,
    query,
  );
}
