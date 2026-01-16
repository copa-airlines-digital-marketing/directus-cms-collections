# Implementation Summary

This document describes the greenfield TypeScript library implementation for Directus collections.

## Overview

A TypeScript library that generates strict typings and GET-only query helpers for Directus collections. Designed to be used as a git submodule.

## Architecture

### Directory Structure

```
src/
├── client/          # HTTP client and error handling
│   ├── errors.ts    # Custom error classes
│   ├── http.ts      # Fetch-based HTTP client
│   └── types.ts     # Type utilities
├── runtime/         # Core query functions
│   ├── getItem.ts   # Single item fetcher
│   ├── getItems.ts  # Multiple items fetcher
│   └── query.ts     # Query type definitions
├── generated/       # Auto-generated code (DO NOT EDIT)
│   ├── collections/ # Per-collection types and helpers
│   ├── index.ts     # Barrel exports
│   └── schema.ts    # Schema metadata
└── index.ts         # Public API exports

scripts/
├── directus/        # Directus API client
│   ├── api.ts       # Collection/field fetching
│   ├── normalize.ts # Name normalization and type mapping
│   └── types.ts     # Directus API types
├── output/          # Code generation
│   ├── cleanup.ts   # Stale file removal
│   ├── emit.ts      # Code generation
│   └── format.ts    # Code formatting
└── generate.ts      # Main generator script

tests/
├── smoke.test.ts    # Acceptance tests
└── testUtils.ts     # Test utilities
```

## Key Features

### 1. Strict TypeScript Types

- All generated types are strict (no implicit `any`)
- Nullable fields properly typed with `| null`
- Optional fields marked with `?`
- Invalid identifiers handled with quoted keys

### 2. Deterministic Generation

- Stable ordering (lexicographic by name)
- Consistent formatting
- Stale file cleanup
- Idempotent (running twice produces no diff)

### 3. Type Mapping

Directus → TypeScript:

- `string`, `text`, `uuid`, `hash`, `csv` → `string`
- `integer`, `bigInteger`, `float`, `decimal` → `number`
- `boolean` → `boolean`
- `dateTime`, `date`, `time`, `timestamp` → `string` (ISO 8601)
- `json` → `Record<string, unknown>`
- Unknown types → `unknown` (with warning)

### 4. Query API

```typescript
interface Query<TItem> {
  fields?: (keyof TItem | string)[];
  filter?: Filter<TItem>;
  sort?: (keyof TItem | `-${string}` | string)[];
  limit?: number;
  offset?: number;
  page?: number;
  deep?: Record<string, Query<unknown>>;
  search?: string;
}
```

### 5. Runtime Functions

**Generic functions:**

```typescript
getItems<T>(baseUrl, collection, token, query?): Promise<T[]>
getItem<T>(baseUrl, collection, token, id, query?): Promise<T>
```

**Generated per-collection wrappers:**

```typescript
getPosts(baseUrl, token, query?): Promise<Item_Posts[]>
getPost(baseUrl, token, id, query?): Promise<Item_Posts>
```

## Usage

### Setup

1. Install dependencies:

```bash
pnpm install
```

2. Configure environment:

```bash
cp .env.example .env
# Edit .env with your DIRECTUS_URL and DIRECTUS_STATIC_TOKEN
```

3. Generate types:

```bash
pnpm generate
```

### Example Usage

```typescript
import { getItems, getItem } from './src';
import type { Item_Posts } from './src/generated';

const baseUrl = 'https://your-instance.directus.app';
const token = 'your-static-token';

// Fetch multiple items
const posts = await getItems<Item_Posts>(baseUrl, 'posts', token, {
  fields: ['id', 'title', 'status'],
  filter: { status: { _eq: 'published' } },
  sort: ['-created_at'],
  limit: 10,
});

// Fetch single item
const post = await getItem<Item_Posts>(baseUrl, 'posts', token, '123', {
  fields: ['id', 'title', 'content'],
});
```

## Generator Algorithm

1. **Read environment variables**

   - `DIRECTUS_URL` and `DIRECTUS_STATIC_TOKEN`
   - Validate and fail fast if missing

2. **Fetch collections**

   - GET `/collections`
   - Filter out system collections (starting with `directus_` or `meta.system = true`)

3. **Fetch fields per collection**

   - GET `/fields/:collection` for each collection
   - Extract type, schema, meta, and primary key info

4. **Normalize names**

   - File names: kebab-case
   - Type names: PascalCase with `Item_` prefix
   - Handle invalid identifiers with quoted keys

5. **Generate files**

   - Sort collections and fields lexicographically
   - Generate collection type interfaces
   - Generate per-collection query helpers
   - Generate barrel exports and schema metadata

6. **Clean up stale files**

   - Compare current collections to existing files
   - Remove files for collections that no longer exist

7. **Print summary**
   - Counts, warnings, timing

## Scripts

- `pnpm generate` - Generate types from Directus schema
- `pnpm typecheck` - Type check all TypeScript files
- `pnpm test` - Run smoke tests
- `pnpm build` - Build library to dist/
- `pnpm ci` - Full CI pipeline (generate + typecheck + test)

## Testing

### Smoke Tests

Located in `tests/smoke.test.ts`:

1. Verifies schema metadata is generated
2. Picks a random non-system collection
3. Tests `getItems` with limit 1
4. Tests `getItem` if items exist
5. Tests query parameters (fields)

### Running Tests

```bash
# Ensure .env is configured
pnpm test
```

## Submodule Workflow

### Adding to a Project

```bash
git submodule add <repo-url> libs/directus-types
cd libs/directus-types
pnpm install
pnpm generate
```

### Updating

```bash
git submodule update --remote --merge
cd libs/directus-types
pnpm install
pnpm generate
```

### Regenerating After Schema Changes

```bash
cd libs/directus-types
pnpm generate
git add src/generated
git commit -m "chore: regenerate types"
```

## Error Handling

### DirectusHttpError

Thrown on non-2xx responses:

- Includes endpoint, collection, status, and response body
- Provides clear error messages for debugging

### ConfigurationError

Thrown when environment variables are missing:

- Clear instructions on what's needed

## Type Safety

### Escape Hatches

- `asUnknownRecord(value)` - For boundaries where types are unavailable
- `unknown` type for unsupported Directus field types
- Documented and isolated to preserve strictness

### Limitations

- Relation types are best-effort (may be `unknown` if target not found)
- Deep query typing uses `Query<unknown>` to avoid unsafe recursion
- Field paths in queries allow strings for relation paths (not fully typed)

## Best Practices

1. **Always run `pnpm typecheck` after generation**
2. **Commit generated files** - they're part of the library
3. **Keep .env out of git** - use .env.example as template
4. **Regenerate after schema changes** - types won't update automatically
5. **Use per-collection helpers** - they're more convenient than generic functions

## Troubleshooting

### Generation fails with 401/403

- Check `DIRECTUS_STATIC_TOKEN` is valid
- Ensure token has read access to collections and fields

### TypeScript errors after generation

- Run `pnpm typecheck` to see specific errors
- Check for unsupported field types (will show warnings during generation)
- Verify Directus schema is valid

### Empty collections

- Smoke tests will skip empty collections gracefully
- Check collection has at least one field defined

### Stale files not removed

- Generator only removes files in `src/generated/collections/`
- Manually delete other stale files if needed

## Future Enhancements

Potential additions (not implemented):

- GraphQL support
- Mutation operations (POST/PATCH/DELETE)
- Relation type improvements
- Advanced filter typing
- Query builder API
- Caching layer
- Batch operations
- Pagination helpers

## Dependencies

### Runtime

- `@directus/sdk` - For legacy compatibility only

### Development

- `typescript` - Type checking and compilation
- `tsx` - TypeScript execution for generator
- `vitest` - Testing framework
- `dotenv` - Environment variable loading
- `prettier` - Code formatting
- `eslint` - Linting

## License

Private - Internal use only
