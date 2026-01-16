import { DirectusHttpError } from './errors.js';

/**
 * Builds a query string from a query object for Directus REST API
 */
export function buildQueryString(query: Record<string, unknown>): string {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null) {
      continue;
    }

    if (Array.isArray(value)) {
      // For arrays, serialize as comma-separated or JSON depending on complexity
      if (value.every((v) => typeof v === 'string' || typeof v === 'number')) {
        params.append(key, value.join(','));
      } else {
        params.append(key, JSON.stringify(value));
      }
    } else if (typeof value === 'object') {
      // For objects (like filter, deep), serialize as JSON
      params.append(key, JSON.stringify(value));
    } else {
      params.append(key, String(value));
    }
  }

  return params.toString();
}

/**
 * Makes an authenticated GET request to Directus REST API
 */
export async function directusFetch<T>(
  baseUrl: string,
  endpoint: string,
  token: string,
  collection?: string,
): Promise<T> {
  const url = `${baseUrl}${endpoint}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    let responseMessage = `${response.status} ${response.statusText}`;
    try {
      const errorBody = await response.json();
      responseMessage = JSON.stringify(errorBody, null, 2);
    } catch {
      // If JSON parsing fails, use status text
    }

    throw new DirectusHttpError(
      endpoint,
      collection,
      response.status,
      responseMessage,
    );
  }

  return response.json() as Promise<T>;
}
