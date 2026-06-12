/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: hero
 */

export interface Item_Hero {
  alignment?: string | null;
  alt_text?: string | null;
  analytics_tag?: string | null;
  approved_by?: string | null;
  aria_label?: string | null;
  autoplay?: boolean;
  blocked?: boolean | null;
  blocked_reason?: string | null;
  captions?: string | null;
  content_width?: string | null;
  contrast_enforced?: boolean;
  cta: Record<string, unknown>;
  date_created?: string | null;
  date_updated?: string | null;
  decorative?: boolean | null;
  end_date?: string | null;
  experiment_id?: string | null;
  hero_carrousels?: unknown;
  image?: unknown;
  img_landscape?: string;
  img_portrait?: string;
  layout_and_theme?: unknown;
  layout_variant?: string;
  legal_hold?: boolean | null;
  loop?: boolean;
  lqip?: string | null;
  media?: unknown;
  media_type: string;
  metrics_and_qa?: unknown;
  muted?: boolean | null;
  name?: string;
  overlay_color?: string | null;
  overlay_opacity?: number;
  poster_landscape?: string | null;
  poster_portrait?: string | null;
  published_at?: string | null;
  safe_area?: boolean;
  start_date?: string | null;
  status?: string;
  status_reason?: string | null;
  theme?: string;
  translations: unknown;
  unpublished_at?: string | null;
  user_created?: string | null;
  user_updated?: string | null;
  variant_key?: string | null;
  video?: unknown;
  video_landscape_src?: string | null;
  video_portrait_src?: string | null;
  visibility_and_targeting?: unknown;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the hero collection
 */
export async function getManyHero(
  baseUrl: string,
  token: string,
  query?: Query<Item_Hero>,
): Promise<Item_Hero[]> {
  return getItems<Item_Hero>(baseUrl, 'hero', token, query);
}

/**
 * Fetches a single item from the hero collection
 */
export async function getOneHero(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Hero>,
): Promise<Item_Hero> {
  return getItem<Item_Hero>(baseUrl, 'hero', token, id, query);
}
