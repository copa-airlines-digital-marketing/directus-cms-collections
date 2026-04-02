import { config } from 'dotenv';
import {
  resolveDirectusStaticToken,
  resolveDirectusUrl,
} from '../scripts/lib/directusEnv.js';

// Load environment variables for tests
config();

/**
 * Gets test configuration from environment
 */
export function getTestConfig() {
  const baseUrl = resolveDirectusUrl();
  const token = resolveDirectusStaticToken();

  if (!baseUrl || !token) {
    throw new Error(
      'Missing test configuration. Add DIRECTUS_URL and DIRECTUS_STATIC_TOKEN (or DIRECTUS_TOKEN) in Doppler and run pnpm test, or use .env with pnpm test:local',
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
