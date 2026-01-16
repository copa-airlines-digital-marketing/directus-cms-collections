import { config } from 'dotenv';

// Load environment variables for tests
config();

/**
 * Gets test configuration from environment
 */
export function getTestConfig() {
  const baseUrl = process.env.DIRECTUS_URL;
  const token = process.env.DIRECTUS_STATIC_TOKEN;

  if (!baseUrl || !token) {
    throw new Error(
      'Missing test configuration. Please set DIRECTUS_URL and DIRECTUS_STATIC_TOKEN in .env',
    );
  }

  return {
    baseUrl: baseUrl.replace(/\/$/, ''),
    token,
  };
}

/**
 * Picks a random element from an array
 */
export function pickRandom<T>(array: T[]): T | undefined {
  if (array.length === 0) return undefined;
  return array[Math.floor(Math.random() * array.length)];
}
