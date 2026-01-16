import type {
  CollectionsResponse,
  DirectusCollection,
  DirectusField,
  FieldsResponse,
} from './types.js';

/**
 * Fetches all collections from Directus
 */
export async function fetchCollections(
  baseUrl: string,
  token: string,
): Promise<DirectusCollection[]> {
  const url = `${baseUrl}/collections`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch collections: ${response.status} ${response.statusText}`,
    );
  }

  const data: CollectionsResponse = await response.json();
  return data.data;
}

/**
 * Fetches fields for a specific collection
 */
export async function fetchFields(
  baseUrl: string,
  token: string,
  collection: string,
): Promise<DirectusField[]> {
  const url = `${baseUrl}/fields/${collection}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch fields for ${collection}: ${response.status} ${response.statusText}`,
    );
  }

  const data: FieldsResponse = await response.json();
  return data.data;
}

/**
 * Filters out system collections
 */
export function filterSystemCollections(
  collections: DirectusCollection[],
): DirectusCollection[] {
  return collections.filter((col) => {
    // Exclude collections starting with directus_
    if (col.collection.startsWith('directus_')) {
      return false;
    }
    // Exclude collections marked as system in meta
    if (col.meta?.system === true) {
      return false;
    }
    return true;
  });
}
