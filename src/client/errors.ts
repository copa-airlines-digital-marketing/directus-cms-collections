/**
 * Custom error class for Directus HTTP errors
 */
export class DirectusHttpError extends Error {
  constructor(
    public readonly endpoint: string,
    public readonly collection: string | undefined,
    public readonly status: number,
    public readonly responseMessage: string,
  ) {
    super(
      `Directus HTTP Error: ${status} at ${endpoint}${collection ? ` (collection: ${collection})` : ''}\n${responseMessage}`,
    );
    this.name = 'DirectusHttpError';
    Object.setPrototypeOf(this, DirectusHttpError.prototype);
  }
}

/**
 * Error thrown when environment variables are missing
 */
export class ConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConfigurationError';
    Object.setPrototypeOf(this, ConfigurationError.prototype);
  }
}
