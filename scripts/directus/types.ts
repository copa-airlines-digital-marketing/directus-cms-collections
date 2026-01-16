/**
 * Directus collection metadata from /collections endpoint
 */
export interface DirectusCollection {
  collection: string;
  meta?: {
    collection?: string;
    icon?: string;
    note?: string;
    display_template?: string;
    hidden?: boolean;
    singleton?: boolean;
    translations?: unknown;
    archive_field?: string;
    archive_app_filter?: boolean;
    archive_value?: string;
    unarchive_value?: string;
    sort_field?: string;
    accountability?: string;
    color?: string;
    item_duplication_fields?: string[];
    sort?: number;
    group?: string;
    collapse?: string;
    preview_url?: string;
    versioning?: boolean;
    system?: boolean;
  };
  schema?: {
    name?: string;
    comment?: string;
  };
}

/**
 * Directus field metadata from /fields endpoint
 */
export interface DirectusField {
  collection: string;
  field: string;
  type: string;
  schema?: {
    name?: string;
    table?: string;
    data_type?: string;
    default_value?: unknown;
    max_length?: number;
    numeric_precision?: number;
    numeric_scale?: number;
    is_nullable?: boolean;
    is_unique?: boolean;
    is_primary_key?: boolean;
    has_auto_increment?: boolean;
    foreign_key_column?: string;
    foreign_key_table?: string;
    comment?: string;
  };
  meta?: {
    id?: number;
    collection?: string;
    field?: string;
    special?: string[];
    interface?: string;
    options?: Record<string, unknown>;
    display?: string;
    display_options?: Record<string, unknown>;
    readonly?: boolean;
    hidden?: boolean;
    sort?: number;
    width?: string;
    translations?: unknown;
    note?: string;
    conditions?: unknown;
    required?: boolean;
    group?: string;
    validation?: unknown;
    validation_message?: string;
  };
}

/**
 * Directus relation metadata
 */
export interface DirectusRelation {
  collection: string;
  field: string;
  related_collection?: string;
  schema?: {
    constraint_name?: string;
    table?: string;
    column?: string;
    foreign_key_table?: string;
    foreign_key_column?: string;
    on_update?: string;
    on_delete?: string;
  };
  meta?: {
    id?: number;
    many_collection?: string;
    many_field?: string;
    one_collection?: string;
    one_field?: string;
    one_collection_field?: string;
    one_allowed_collections?: string[];
    junction_field?: string;
    sort_field?: string;
    one_deselect_action?: string;
  };
}

/**
 * Response from /collections endpoint
 */
export interface CollectionsResponse {
  data: DirectusCollection[];
}

/**
 * Response from /fields/:collection endpoint
 */
export interface FieldsResponse {
  data: DirectusField[];
}

/**
 * Response from /relations endpoint
 */
export interface RelationsResponse {
  data: DirectusRelation[];
}
