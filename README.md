# Directus TypeScript Collections Library

A TypeScript library that generates strict typings and GET-only query helpers for Directus collections.

## Features

- **Strict TypeScript types** for all Directus collections
- **Generated query helpers** for type-safe data fetching
- **Deterministic code generation** from Directus schema
- **REST API only** (GET operations)
- **Static token authentication**

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Configure environment variables:

```bash
cp .env.example .env
# Edit .env with your Directus URL and static token
```

3. Generate types from your Directus schema:

```bash
pnpm generate
```

## Usage

### Basic Usage with Generic Functions

```typescript
import { getItems, getItem } from './src';
import type { Item_Continent } from './src/generated';

const baseUrl = 'https://your-instance.directus.app';
const token = 'your-static-token';

// Fetch multiple items
const continents = await getItems<Item_Continent>(baseUrl, 'continent', token, {
  fields: ['code', 'translations'],
  limit: 10,
});

// Fetch single item
const continent = await getItem<Item_Continent>(
  baseUrl,
  'continent',
  token,
  'NA',
  { fields: ['code'] },
);
```

### Using Generated Helper Functions (Recommended)

Each collection gets two helper functions:

- `getMany<CollectionName>()` - Fetch multiple items
- `getOne<CollectionName>()` - Fetch a single item by ID

```typescript
import {
  getManyContinent,
  getOneContinent,
  getManyPoi,
  getOnePoi,
} from './src/generated';
import type { Item_Continent, Item_Poi, GeoJSON } from './src';

const baseUrl = 'https://your-instance.directus.app';
const token = 'your-static-token';

// Fetch continents
const continents = await getManyContinent(baseUrl, token, {
  fields: ['code', 'translations'],
  limit: 10,
});

// Fetch one continent by ID
const continent = await getOneContinent(baseUrl, token, 'NA');

// Fetch POIs (Points of Interest) with location data
const pois = await getManyPoi(baseUrl, token, {
  fields: ['id', 'location', 'category'],
  filter: {
    category: { _eq: 'restaurant' },
  },
});

// Access GeoJSON location data (fully typed!)
pois.forEach((poi) => {
  if (poi.location.type === 'Point') {
    const [lng, lat] = poi.location.coordinates;
    console.log(`Location: ${lat}, ${lng}`);
  }
});
```

### Query Examples

```typescript
import { getManyDestinations } from './src/generated';

// Filter and pagination
const destinations = await getManyDestinations(baseUrl, token, {
  filter: {
    status: { _eq: 'published' },
    featured: { _eq: true },
  },
  sort: ['-date_created'],
  limit: 20,
  offset: 0,
});

// Field selection (optimize bandwidth)
const minimalData = await getManyDestinations(baseUrl, token, {
  fields: ['id', 'translations'],
  limit: 100,
});

// Deep queries (fetch related items)
const withRelations = await getManyDestinations(baseUrl, token, {
  deep: {
    translations: {
      fields: ['name', 'description'],
      limit: 5,
    },
  },
});

// Search
const searchResults = await getManyDestinations(baseUrl, token, {
  search: 'Panama',
  limit: 10,
});
```

### Working with GeoJSON Location Fields

Collections with location fields (geometry) have proper GeoJSON typing:

```typescript
import { getManyPoi, getOnePoi } from './src/generated';
import type { Item_Poi, GeoJSON, GeoJSONPoint } from './src';

// Fetch POIs with location
const pois = await getManyPoi(baseUrl, token);

// TypeScript knows the structure
pois.forEach((poi) => {
  const location: GeoJSON = poi.location;

  // Type-safe access
  if (location.type === 'Point') {
    const [longitude, latitude] = location.coordinates;
    console.log(`Coordinates: ${latitude}°N, ${longitude}°E`);
  }
});

// Create a GeoJSON point (if you were sending data)
const newLocation: GeoJSONPoint = {
  type: 'Point',
  coordinates: [-79.5197, 8.9824], // [lng, lat]
};
```

## Function Naming Convention

Generated functions follow this pattern:

| Collection Name | Type Name           | Get Many                | Get One                |
| --------------- | ------------------- | ----------------------- | ---------------------- |
| `continent`     | `Item_Continent`    | `getManyContinent()`    | `getOneContinent()`    |
| `city`          | `Item_City`         | `getManyCity()`         | `getOneCity()`         |
| `poi`           | `Item_Poi`          | `getManyPoi()`          | `getOnePoi()`          |
| `destinations`  | `Item_Destinations` | `getManyDestinations()` | `getOneDestinations()` |

**How to find available functions:**

1. Check `src/generated/index.ts` - all functions are exported there
2. Use TypeScript autocomplete: start typing `getMany...` or `getOne...`
3. Check `src/generated/schema.ts` for list of all collections

## Scripts

- `pnpm generate` - Generate types from Directus schema
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm test` - Run tests
- `pnpm build` - Build the library
- `pnpm ci` - Run full CI pipeline (generate + typecheck + test)
- `pnpm clean:deprecated` - Remove deprecated collections (manual cleanup)

### Deprecation Policy

When a collection is removed from Directus, it's **not deleted immediately**. Instead:

1. ✅ **Marked as `@deprecated`** - Files are kept with deprecation warnings
2. 🕐 **Grace period** - Default 30 days for migration
3. 🧹 **Manual cleanup** - Run `pnpm clean:deprecated` when ready

```bash
# Remove collections deprecated > 30 days ago
pnpm clean:deprecated

# Remove collections deprecated > 7 days ago
pnpm clean:deprecated -- --days 7

# Remove ALL deprecated collections
pnpm clean:deprecated -- --all
```

**Why?** This prevents breaking existing projects that use removed collections. See [DEPRECATION_POLICY.md](./DEPRECATION_POLICY.md) for details.

## Integration with Other Projects

### As a Git Submodule (Recommended)

#### Initial Setup

```bash
# In your project root
git submodule add <this-repo-url> libs/directus-types
cd libs/directus-types

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env
# Edit .env with your Directus credentials

# Generate types
pnpm generate
```

#### Using in Your Project

```typescript
// your-project/src/services/cms.ts
import {
  getManyDestinations,
  getOneDestinations,
} from '../../libs/directus-types/src/generated';
import type { Item_Destinations } from '../../libs/directus-types/src';

const DIRECTUS_URL = process.env.DIRECTUS_URL!;
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN!;

export async function fetchDestinations() {
  return getManyDestinations(DIRECTUS_URL, DIRECTUS_TOKEN, {
    filter: { status: { _eq: 'published' } },
    sort: ['-date_created'],
  });
}

export async function fetchDestination(id: string) {
  return getOneDestinations(DIRECTUS_URL, DIRECTUS_TOKEN, id);
}
```

#### Updating the Submodule

```bash
# Pull latest changes
cd libs/directus-types
git pull origin main

# Reinstall if dependencies changed
pnpm install

# Regenerate types if schema changed
pnpm generate
```

#### When Schema Changes in Directus

```bash
cd libs/directus-types

# Regenerate types
pnpm generate

# Verify no TypeScript errors
pnpm typecheck

# Commit the changes
git add src/generated
git commit -m "chore: regenerate types from updated Directus schema"
git push

# Back to your project, update the submodule reference
cd ../..
git add libs/directus-types
git commit -m "chore: update directus-types submodule"
```

### Alternative: As a Package

You can also use this as a local package:

```json
// your-project/package.json
{
  "dependencies": {
    "directus-types": "file:../directus-types"
  }
}
```

Then import:

```typescript
import { getManyDestinations } from 'directus-types/src/generated';
```

## Architecture

- `src/client/` - HTTP client and error handling
- `src/runtime/` - Core query functions (getItem, getItems)
- `src/generated/` - Auto-generated types and collection-specific helpers
- `scripts/` - Schema introspection and code generation
- `tests/` - Smoke tests and test utilities

## Common Patterns

### Error Handling

```typescript
import { getManyDestinations } from './src/generated';
import { DirectusHttpError } from './src';

try {
  const destinations = await getManyDestinations(baseUrl, token);
  return destinations;
} catch (error) {
  if (error instanceof DirectusHttpError) {
    console.error(`API Error: ${error.status} at ${error.endpoint}`);
    console.error(`Collection: ${error.collection}`);
    console.error(`Message: ${error.responseMessage}`);
  }
  throw error;
}
```

### Type Guards for GeoJSON

```typescript
import type { GeoJSON, GeoJSONPoint } from './src';

function isPoint(location: GeoJSON): location is GeoJSONPoint {
  return location.type === 'Point';
}

// Usage
const poi = await getOnePoi(baseUrl, token, 'some-id');
if (isPoint(poi.location)) {
  const [lng, lat] = poi.location.coordinates;
  // TypeScript knows this is a Point!
}
```

### Building a Service Layer

```typescript
// services/cms.service.ts
import {
  getManyDestinations,
  getManyPoi,
} from '../libs/directus-types/src/generated';
import type { Item_Destinations, Item_Poi } from '../libs/directus-types/src';

export class CMSService {
  constructor(
    private baseUrl: string,
    private token: string,
  ) {}

  async getPublishedDestinations(): Promise<Item_Destinations[]> {
    return getManyDestinations(this.baseUrl, this.token, {
      filter: { status: { _eq: 'published' } },
      sort: ['-date_created'],
    });
  }

  async getDestinationBySlug(slug: string): Promise<Item_Destinations | null> {
    const results = await getManyDestinations(this.baseUrl, this.token, {
      filter: { slug: { _eq: slug } },
      limit: 1,
    });
    return results[0] || null;
  }

  async getNearbyPOIs(lat: number, lng: number): Promise<Item_Poi[]> {
    // You would implement geo-filtering based on your needs
    return getManyPoi(this.baseUrl, this.token, {
      fields: ['id', 'location', 'category'],
      limit: 50,
    });
  }
}
```

## Quick Reference

### Filter Operators

| Operator       | Description             | Example                                    |
| -------------- | ----------------------- | ------------------------------------------ |
| `_eq`          | Equals                  | `{ status: { _eq: 'published' } }`         |
| `_neq`         | Not equals              | `{ status: { _neq: 'draft' } }`            |
| `_in`          | In array                | `{ category: { _in: ['food', 'hotel'] } }` |
| `_nin`         | Not in array            | `{ category: { _nin: ['closed'] } }`       |
| `_null`        | Is null                 | `{ deleted_at: { _null: true } }`          |
| `_nnull`       | Not null                | `{ published_at: { _nnull: true } }`       |
| `_contains`    | Contains                | `{ title: { _contains: 'Panama' } }`       |
| `_starts_with` | Starts with             | `{ code: { _starts_with: 'PA' } }`         |
| `_lt` / `_lte` | Less than (or equal)    | `{ price: { _lte: 100 } }`                 |
| `_gt` / `_gte` | Greater than (or equal) | `{ rating: { _gte: 4 } }`                  |

### Logical Operators

```typescript
// AND (default)
filter: {
  status: { _eq: 'published' },
  featured: { _eq: true }
}

// OR
filter: {
  _or: [
    { status: { _eq: 'published' } },
    { status: { _eq: 'scheduled' } }
  ]
}

// Complex
filter: {
  _and: [
    { status: { _eq: 'published' } },
    {
      _or: [
        { category: { _eq: 'featured' } },
        { rating: { _gte: 4.5 } }
      ]
    }
  ]
}
```

## Troubleshooting

### "Missing required environment variables"

Make sure you have a `.env` file with `DIRECTUS_URL` and `DIRECTUS_STATIC_TOKEN`.

### "Failed to fetch collections: 401"

Your static token may be invalid or expired. Generate a new one in Directus Settings → Access Tokens.

### "Cannot find module './src/generated'"

Run `pnpm generate` first to generate the types from your Directus schema.

### TypeScript errors after schema changes

Regenerate types: `pnpm generate && pnpm typecheck`

### Function not found after generation

Check that:

1. The collection exists in Directus
2. You have read permissions on the collection
3. It's not a system collection (they're excluded by default)

## License

Private - Internal use only
