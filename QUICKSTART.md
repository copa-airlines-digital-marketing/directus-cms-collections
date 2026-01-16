# Quick Start Guide

## Initial Setup (5 minutes)

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env`:

```env
DIRECTUS_URL=https://your-instance.directus.app
DIRECTUS_STATIC_TOKEN=your_static_token_here
```

### 3. Generate Types

```bash
pnpm generate
```

Expected output:

```
🚀 Starting Directus schema generation...
📡 Connecting to: https://your-instance.directus.app
📦 Fetching collections...
   Found X total collections
   Processing Y non-system collections
...
✅ Generation complete!
```

### 4. Verify

```bash
pnpm typecheck
pnpm test
```

## Daily Usage

### Regenerate After Schema Changes

```bash
pnpm generate
```

### Type Check

```bash
pnpm typecheck
```

### Run Tests

```bash
pnpm test
```

### Full CI Pipeline

```bash
pnpm ci
```

## Code Examples

### Basic Fetch

```typescript
import { getItems } from './src';
import type { Item_Posts } from './src/generated';

const posts = await getItems<Item_Posts>(
  'https://your-instance.directus.app',
  'posts',
  'your-token',
);
```

### With Query Parameters

```typescript
const posts = await getItems<Item_Posts>(baseUrl, 'posts', token, {
  fields: ['id', 'title', 'status'],
  filter: { status: { _eq: 'published' } },
  sort: ['-created_at'],
  limit: 10,
});
```

### Fetch Single Item

```typescript
import { getItem } from './src';

const post = await getItem<Item_Posts>(baseUrl, 'posts', token, '123');
```

### Using Generated Helpers

```typescript
import { getPosts, getPost } from './src/generated';

// Multiple items
const posts = await getPosts(baseUrl, token, { limit: 10 });

// Single item
const post = await getPost(baseUrl, token, '123');
```

## Deprecation & Cleanup

### When Collections are Removed

If you delete a collection from Directus:

1. **Run `pnpm generate`** - Collection is marked as `@deprecated` (not deleted)
2. **You'll see warnings** - TypeScript shows strikethrough on deprecated types
3. **Migrate your code** - You have 30 days (default) to update
4. **Clean up** - Run `pnpm clean:deprecated` after migration

```bash
# See what's deprecated
grep -r "DEPRECATED COLLECTION" src/generated/

# Remove old deprecated collections (30+ days)
pnpm clean:deprecated
```

**Why?** We don't auto-delete to avoid breaking existing projects. See [DEPRECATION_POLICY.md](./DEPRECATION_POLICY.md).

## Common Issues

### "Missing required environment variables"

→ Check `.env` file exists and has both `DIRECTUS_URL` and `DIRECTUS_STATIC_TOKEN`

### "Failed to fetch collections: 401"

→ Verify your static token is valid and has read permissions

### TypeScript errors in generated files

→ Run `pnpm generate` again - files may be stale

### "No collections found"

→ Check your Directus instance has non-system collections defined

### Deprecated collection warnings

→ The collection was removed from Directus. Migrate to a new collection or clean up with `pnpm clean:deprecated`

## File Structure

```
src/
├── generated/       ← Auto-generated (DO NOT EDIT)
│   ├── collections/
│   ├── index.ts
│   └── schema.ts
├── runtime/         ← Core functions
├── client/          ← HTTP client
└── index.ts         ← Public API

scripts/
└── generate.ts      ← Generator script

tests/
└── smoke.test.ts    ← Acceptance tests
```

## Next Steps

1. Read [IMPLEMENTATION.md](./IMPLEMENTATION.md) for detailed architecture
2. Read [README.md](./README.md) for full documentation
3. Check generated types in `src/generated/collections/`
4. Run smoke tests to verify everything works

## Getting Help

1. Check TypeScript errors: `pnpm typecheck`
2. Check linter errors: `pnpm lint`
3. Review generator output for warnings
4. Check [IMPLEMENTATION.md](./IMPLEMENTATION.md) for troubleshooting
