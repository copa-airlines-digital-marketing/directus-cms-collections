/**
 * Resolve Directus credentials from env (Doppler often uses DIRECTUS_TOKEN).
 */
export function resolveDirectusUrl(): string | undefined {
  const raw = process.env.DIRECTUS_URL;
  return raw?.trim() || undefined;
}

export function resolveDirectusStaticToken(): string | undefined {
  const fromStatic = process.env.DIRECTUS_STATIC_TOKEN?.trim();
  if (fromStatic) return fromStatic;
  return process.env.DIRECTUS_TOKEN?.trim() || undefined;
}
