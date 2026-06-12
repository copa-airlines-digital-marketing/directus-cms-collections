/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Directus collection: form
 */

export interface Item_Form {
  action?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  id?: string;
  inputs?: Record<string, unknown> | null;
  method: string;
  name?: string | null;
  stopover_hotel_module?: unknown;
  translations?: unknown;
  user_created?: string | null;
  user_updated?: string | null;
}

import { getItem } from '../../runtime/getItem.js';
import { getItems } from '../../runtime/getItems.js';
import type { Query } from '../../runtime/query.js';

/**
 * Fetches multiple items from the form collection
 */
export async function getManyForm(
  baseUrl: string,
  token: string,
  query?: Query<Item_Form>,
): Promise<Item_Form[]> {
  return getItems<Item_Form>(baseUrl, 'form', token, query);
}

/**
 * Fetches a single item from the form collection
 */
export async function getOneForm(
  baseUrl: string,
  token: string,
  id: string | number,
  query?: Query<Item_Form>,
): Promise<Item_Form> {
  return getItem<Item_Form>(baseUrl, 'form', token, id, query);
}
