/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: sites_articles_association
 */

export interface Item_SitesArticlesAssociation {
  collection: string;
  id?: number;
  pages_id?: number | null;
  sites_id?: number | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the sites_articles_association collection
 */
export async function getManySitesArticlesAssociation(
  baseUrl: string,
  token: string,
  query?: Query<Item_SitesArticlesAssociation>,
): Promise<Item_SitesArticlesAssociation[]> {
  return getItems<Item_SitesArticlesAssociation>(
    baseUrl,
    'sites_articles_association',
    token,
    query,
  );
}

/**
 * Fetches a single item from the sites_articles_association collection
 */
export async function getOneSitesArticlesAssociation(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_SitesArticlesAssociation>,
): Promise<Item_SitesArticlesAssociation> {
  return getItem<Item_SitesArticlesAssociation>(
    baseUrl,
    'sites_articles_association',
    token,
    id,
    query,
  );
}
