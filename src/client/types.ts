/**
 * GeoJSON types for Directus geometry fields
 * Based on RFC 7946: https://tools.ietf.org/html/rfc7946
 */
export interface GeoJSONPoint {
  type: 'Point';
  coordinates: [number, number] | [number, number, number];
}

export interface GeoJSONLineString {
  type: 'LineString';
  coordinates: Array<[number, number] | [number, number, number]>;
}

export interface GeoJSONPolygon {
  type: 'Polygon';
  coordinates: Array<Array<[number, number] | [number, number, number]>>;
}

export interface GeoJSONMultiPoint {
  type: 'MultiPoint';
  coordinates: Array<[number, number] | [number, number, number]>;
}

export interface GeoJSONMultiLineString {
  type: 'MultiLineString';
  coordinates: Array<Array<[number, number] | [number, number, number]>>;
}

export interface GeoJSONMultiPolygon {
  type: 'MultiPolygon';
  coordinates: Array<Array<Array<[number, number] | [number, number, number]>>>;
}

/**
 * Union type for all GeoJSON geometry types
 */
export type GeoJSON =
  | GeoJSONPoint
  | GeoJSONLineString
  | GeoJSONPolygon
  | GeoJSONMultiPoint
  | GeoJSONMultiLineString
  | GeoJSONMultiPolygon;

/**
 * Escape hatch for boundaries where type information is unavailable.
 * Use sparingly and document usage.
 */
export function asUnknownRecord(value: unknown): Record<string, unknown> {
  return value as Record<string, unknown>;
}

/**
 * Utility type to select specific fields from an item type
 */
export type SelectFields<T, F extends readonly (keyof T | string)[]> = Pick<
  T,
  Extract<F[number], keyof T>
>;
