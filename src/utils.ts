/**
 * Legacy utilities - kept for backward compatibility
 * Consider migrating to the new generated API
 */

import { createDirectus, rest, staticToken } from '@directus/sdk';

/**
 * @deprecated Use the new generated API with getItems/getItem instead
 */
const createDirectusClient = (url: string, token: string) =>
  createDirectus(url).with(staticToken(token)).with(rest());

const logAndReturn =
  <T>(value: T) =>
  (message: string): T => {
    console.error(message);
    return value;
  };

export { createDirectusClient, logAndReturn };
