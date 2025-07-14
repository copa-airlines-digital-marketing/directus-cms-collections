import { createDirectus, rest, staticToken } from '@directus/sdk';
import type { Schema } from './collections/schema';

const createDirectusClient = (url: string, token: string) =>
  createDirectus<Schema>(url).with(staticToken(token)).with(rest());

const logAndReturn =
  <T>(value: T) =>
  (message: string): T => {
    console.error(message);
    return value;
  };

export { createDirectusClient, logAndReturn };
