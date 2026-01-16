// Re-export client utilities
export { DirectusHttpError, ConfigurationError } from './client/errors.js';
export { asUnknownRecord } from './client/types.js';
export type {
  SelectFields,
  GeoJSON,
  GeoJSONPoint,
  GeoJSONLineString,
  GeoJSONPolygon,
  GeoJSONMultiPoint,
  GeoJSONMultiLineString,
  GeoJSONMultiPolygon,
} from './client/types.js';

// Re-export runtime functions
export { getItem } from './runtime/getItem.js';
export { getItems } from './runtime/getItems.js';

// Re-export query types
export type {
  Query,
  Filter,
  FilterOperator,
  FilterValue,
} from './runtime/query.js';

// Re-export generated types and helpers (will be populated after generation)
export * from './generated/index.js';

// Legacy exports for backward compatibility
export { createDirectusClient, logAndReturn } from './utils.js';
