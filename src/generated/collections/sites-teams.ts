/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: sites_teams
 */

export interface Item_SitesTeams {
  id?: number;
  sites_id?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the sites_teams collection
 */
export async function getManySitesTeams(
  baseUrl: string,
  token: string,
  query?: Query<Item_SitesTeams>,
): Promise<Item_SitesTeams[]> {
  return getItems<Item_SitesTeams>(baseUrl, 'sites_teams', token, query);
}

/**
 * Fetches a single item from the sites_teams collection
 */
export async function getOneSitesTeams(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_SitesTeams>,
): Promise<Item_SitesTeams> {
  return getItem<Item_SitesTeams>(baseUrl, 'sites_teams', token, id, query);
}
