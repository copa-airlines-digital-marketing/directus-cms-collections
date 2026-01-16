import type { DirectusField } from './types.js';

/**
 * Converts a collection name to kebab-case for file names
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Converts a collection name to PascalCase for type names
 */
export function toPascalCase(str: string): string {
  return str
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

/**
 * Checks if a field name is a valid TypeScript identifier
 */
export function isValidIdentifier(name: string): boolean {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name);
}

/**
 * Maps Directus field type to TypeScript type
 */
export function mapFieldType(field: DirectusField): string {
  const { type } = field;
  const isNullable = field.schema?.is_nullable ?? false;

  let baseType: string;

  switch (type) {
    case 'string':
    case 'text':
    case 'uuid':
    case 'hash':
    case 'csv':
    case 'dateTime':
    case 'date':
    case 'time':
    case 'timestamp':
      baseType = 'string';
      break;

    case 'integer':
    case 'bigInteger':
    case 'float':
    case 'decimal':
      baseType = 'number';
      break;

    case 'boolean':
      baseType = 'boolean';
      break;

    case 'json':
      baseType = 'Record<string, unknown>';
      break;

    case 'geometry':
    case 'geometry.Point':
    case 'geometry.LineString':
    case 'geometry.Polygon':
    case 'geometry.MultiPoint':
    case 'geometry.MultiLineString':
    case 'geometry.MultiPolygon':
      // Geometry fields (location data) return GeoJSON objects
      baseType = 'GeoJSON';
      break;

    case 'alias':
      // Alias fields are virtual, often used for relations
      baseType = 'unknown';
      break;

    default:
      console.warn(
        `Unknown field type "${type}" for field "${field.field}", using "unknown"`,
      );
      baseType = 'unknown';
  }

  return isNullable ? `${baseType} | null` : baseType;
}

/**
 * Determines if a field is optional (not required)
 */
export function isFieldOptional(field: DirectusField): boolean {
  // Auto-increment fields are optional on create
  if (field.schema?.has_auto_increment) {
    return true;
  }

  // Readonly fields are optional
  if (field.meta?.readonly) {
    return true;
  }

  // Fields explicitly not required
  if (field.meta?.required === false) {
    return true;
  }

  // Nullable fields can be omitted
  if (field.schema?.is_nullable) {
    return true;
  }

  return false;
}

/**
 * Finds the primary key field in a collection
 */
export function findPrimaryKey(fields: DirectusField[]): string | undefined {
  const primaryField = fields.find((f) => f.schema?.is_primary_key === true);
  return primaryField?.field;
}

/**
 * Normalized collection model for code generation
 */
export interface NormalizedCollection {
  name: string;
  fileName: string;
  typeName: string;
  primaryKey: string;
  fields: NormalizedField[];
}

/**
 * Normalized field model for code generation
 */
export interface NormalizedField {
  name: string;
  type: string;
  optional: boolean;
  needsQuotes: boolean;
}

/**
 * Normalizes a collection and its fields for code generation
 */
export function normalizeCollection(
  collectionName: string,
  fields: DirectusField[],
): NormalizedCollection {
  const fileName = toKebabCase(collectionName);
  const typeName = `Item_${toPascalCase(collectionName)}`;
  const primaryKey = findPrimaryKey(fields) ?? 'id';

  const normalizedFields: NormalizedField[] = fields
    .map((field) => ({
      name: field.field,
      type: mapFieldType(field),
      optional: isFieldOptional(field),
      needsQuotes: !isValidIdentifier(field.field),
    }))
    .sort((a, b) => a.name.localeCompare(b.name)); // Stable ordering

  return {
    name: collectionName,
    fileName,
    typeName,
    primaryKey,
    fields: normalizedFields,
  };
}
