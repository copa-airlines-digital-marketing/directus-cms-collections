/**
 * Directus filter operators
 */
export type FilterOperator =
  | '_eq'
  | '_neq'
  | '_lt'
  | '_lte'
  | '_gt'
  | '_gte'
  | '_in'
  | '_nin'
  | '_null'
  | '_nnull'
  | '_contains'
  | '_ncontains'
  | '_starts_with'
  | '_nstarts_with'
  | '_ends_with'
  | '_nends_with'
  | '_between'
  | '_nbetween'
  | '_empty'
  | '_nempty'
  | '_intersects'
  | '_nintersects'
  | '_intersects_bbox'
  | '_nintersects_bbox';

/**
 * Filter value type for a given field
 */
export type FilterValue<T> =
  | T
  | T[]
  | {
      [K in FilterOperator]?: T | T[] | null | boolean;
    };

/**
 * Filter type for an item
 */
export type Filter<TItem> = {
  [K in keyof TItem]?: FilterValue<TItem[K]>;
} & {
  _and?: Filter<TItem>[];
  _or?: Filter<TItem>[];
};

/**
 * Query object aligned to Directus REST API
 */
export interface Query<TItem> {
  /**
   * Fields to return. Can be top-level keys or relation paths (as strings).
   */
  fields?: (keyof TItem | string)[];

  /**
   * Filter criteria
   */
  filter?: Filter<TItem>;

  /**
   * Sort order. Use `-` prefix for descending.
   */
  sort?: (keyof TItem | `-${string}` | string)[];

  /**
   * Maximum number of items to return
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;

  /**
   * Page number (alternative to offset)
   */
  page?: number;

  /**
   * Deep query for relational fields
   */
  deep?: Record<string, Query<unknown>>;

  /**
   * Search query
   */
  search?: string;

  /**
   * Metadata to include
   */
  meta?: string | string[];

  /**
   * Aggregation functions
   */
  aggregate?: Record<string, string>;
}
