# Usage Examples

Ejemplos prácticos de cómo usar esta biblioteca en tus proyectos.

## Tabla de Contenidos

- [Configuración Básica](#configuración-básica)
- [Ejemplos de Consultas](#ejemplos-de-consultas)
- [Trabajar con Ubicaciones (GeoJSON)](#trabajar-con-ubicaciones-geojson)
- [Integración con Frameworks](#integración-con-frameworks)
- [Patrones Avanzados](#patrones-avanzados)

## Configuración Básica

### Setup en tu Proyecto

```typescript
// config/cms.ts
export const CMS_CONFIG = {
  baseUrl: process.env.DIRECTUS_URL || 'https://your-instance.directus.app',
  token: process.env.DIRECTUS_TOKEN || '',
};

// Validación
if (!CMS_CONFIG.token) {
  throw new Error('DIRECTUS_TOKEN is required');
}
```

## Ejemplos de Consultas

### 1. Obtener Destinos Publicados

```typescript
import { getManyDestinations } from '../libs/directus-types/src/generated';
import type { Item_Destinations } from '../libs/directus-types/src';
import { CMS_CONFIG } from './config/cms';

async function getPublishedDestinations(): Promise<Item_Destinations[]> {
  return getManyDestinations(CMS_CONFIG.baseUrl, CMS_CONFIG.token, {
    filter: {
      status: { _eq: 'published' },
    },
    sort: ['-date_created'],
    limit: 50,
  });
}
```

### 2. Buscar por Slug

```typescript
import { getManyDestinations } from '../libs/directus-types/src/generated';
import type { Item_Destinations } from '../libs/directus-types/src';

async function getDestinationBySlug(
  slug: string,
): Promise<Item_Destinations | null> {
  const results = await getManyDestinations(
    CMS_CONFIG.baseUrl,
    CMS_CONFIG.token,
    {
      filter: {
        slug: { _eq: slug },
        status: { _eq: 'published' },
      },
      limit: 1,
    },
  );

  return results[0] || null;
}
```

### 3. Paginación

```typescript
interface PaginatedResult<T> {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
}

async function getDestinationsPaginated(
  page: number = 1,
  pageSize: number = 20,
): Promise<PaginatedResult<Item_Destinations>> {
  const offset = (page - 1) * pageSize;

  const data = await getManyDestinations(CMS_CONFIG.baseUrl, CMS_CONFIG.token, {
    filter: { status: { _eq: 'published' } },
    limit: pageSize,
    offset,
    meta: 'filter_count', // Obtener el total
  });

  return {
    data,
    page,
    pageSize,
    total: data.length, // En producción, usar meta count
  };
}
```

### 4. Consultas con Relaciones (Deep)

```typescript
async function getDestinationsWithTranslations() {
  return getManyDestinations(CMS_CONFIG.baseUrl, CMS_CONFIG.token, {
    filter: { status: { _eq: 'published' } },
    deep: {
      translations: {
        fields: ['languages_code', 'name', 'description'],
        filter: {
          languages_code: { _in: ['en-US', 'es-ES'] },
        },
      },
      files: {
        fields: ['directus_files_id'],
        limit: 5,
      },
    },
  });
}
```

### 5. Búsqueda de Texto

```typescript
async function searchDestinations(query: string): Promise<Item_Destinations[]> {
  return getManyDestinations(CMS_CONFIG.baseUrl, CMS_CONFIG.token, {
    search: query,
    filter: { status: { _eq: 'published' } },
    limit: 20,
  });
}
```

### 6. Filtros Complejos

```typescript
async function getFeaturedOrHighRatedDestinations() {
  return getManyDestinations(CMS_CONFIG.baseUrl, CMS_CONFIG.token, {
    filter: {
      status: { _eq: 'published' },
      _or: [{ featured: { _eq: true } }, { rating: { _gte: 4.5 } }],
    },
    sort: ['-rating', '-date_created'],
  });
}
```

## Trabajar con Ubicaciones (GeoJSON)

### 1. Obtener POIs con Ubicación

```typescript
import { getManyPoi } from '../libs/directus-types/src/generated';
import type {
  Item_Poi,
  GeoJSON,
  GeoJSONPoint,
} from '../libs/directus-types/src';

async function getNearbyRestaurants(): Promise<Item_Poi[]> {
  return getManyPoi(CMS_CONFIG.baseUrl, CMS_CONFIG.token, {
    filter: {
      category: { _eq: 'restaurant' },
      status: { _eq: 'published' },
    },
    fields: ['id', 'location', 'translations', 'category', 'phone'],
  });
}
```

### 2. Procesar Coordenadas

```typescript
interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

function extractCoordinates(poi: Item_Poi): Location | null {
  if (poi.location.type !== 'Point') {
    return null; // Solo procesamos puntos
  }

  const [longitude, latitude] = poi.location.coordinates;

  return {
    id: poi.id!,
    name: 'POI', // Extraer de translations
    latitude,
    longitude,
  };
}

// Uso
const pois = await getNearbyRestaurants();
const locations = pois
  .map(extractCoordinates)
  .filter((loc): loc is Location => loc !== null);
```

### 3. Calcular Distancia (ejemplo simple)

```typescript
function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const R = 6371; // Radio de la Tierra en km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distancia en km
}

async function findNearbyPOIs(
  userLat: number,
  userLon: number,
  radiusKm: number = 5,
) {
  const allPois = await getManyPoi(CMS_CONFIG.baseUrl, CMS_CONFIG.token);

  return allPois
    .filter((poi) => {
      if (poi.location.type !== 'Point') return false;

      const [lon, lat] = poi.location.coordinates;
      const distance = calculateDistance(userLat, userLon, lat, lon);
      return distance <= radiusKm;
    })
    .sort((a, b) => {
      const [lonA, latA] = (a.location as GeoJSONPoint).coordinates;
      const [lonB, latB] = (b.location as GeoJSONPoint).coordinates;

      const distA = calculateDistance(userLat, userLon, latA, lonA);
      const distB = calculateDistance(userLat, userLon, latB, lonB);

      return distA - distB;
    });
}
```

## Integración con Frameworks

### Next.js (App Router)

```typescript
// app/destinations/page.tsx
import { getManyDestinations } from '@/libs/directus-types/src/generated';
import { CMS_CONFIG } from '@/config/cms';

export default async function DestinationsPage() {
  const destinations = await getManyDestinations(
    CMS_CONFIG.baseUrl,
    CMS_CONFIG.token,
    {
      filter: { status: { _eq: 'published' } },
      sort: ['-date_created']
    }
  );

  return (
    <div>
      <h1>Destinations</h1>
      {destinations.map(dest => (
        <div key={dest.id}>
          <h2>{dest.translations}</h2>
        </div>
      ))}
    </div>
  );
}

// Con revalidación
export const revalidate = 3600; // Revalidar cada hora
```

### Next.js (API Route)

```typescript
// app/api/destinations/route.ts
import { NextResponse } from 'next/server';
import { getManyDestinations } from '@/libs/directus-types/src/generated';
import { CMS_CONFIG } from '@/config/cms';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('q');

  try {
    const destinations = await getManyDestinations(
      CMS_CONFIG.baseUrl,
      CMS_CONFIG.token,
      {
        filter: { status: { _eq: 'published' } },
        search: search || undefined,
        limit: 50,
      },
    );

    return NextResponse.json({ data: destinations });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch destinations' },
      { status: 500 },
    );
  }
}
```

### React Hook

```typescript
// hooks/useDestinations.ts
import { useState, useEffect } from 'react';
import { getManyDestinations } from '../libs/directus-types/src/generated';
import type { Item_Destinations } from '../libs/directus-types/src';
import { CMS_CONFIG } from '../config/cms';

export function useDestinations() {
  const [destinations, setDestinations] = useState<Item_Destinations[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchDestinations() {
      try {
        setLoading(true);
        const data = await getManyDestinations(
          CMS_CONFIG.baseUrl,
          CMS_CONFIG.token,
          {
            filter: { status: { _eq: 'published' } },
          },
        );
        setDestinations(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchDestinations();
  }, []);

  return { destinations, loading, error };
}
```

### Express.js

```typescript
// routes/destinations.ts
import express from 'express';
import {
  getManyDestinations,
  getOneDestinations,
} from '../libs/directus-types/src/generated';
import { CMS_CONFIG } from '../config/cms';

const router = express.Router();

router.get('/destinations', async (req, res) => {
  try {
    const { search, limit = 20, offset = 0 } = req.query;

    const destinations = await getManyDestinations(
      CMS_CONFIG.baseUrl,
      CMS_CONFIG.token,
      {
        filter: { status: { _eq: 'published' } },
        search: search as string | undefined,
        limit: Number(limit),
        offset: Number(offset),
      },
    );

    res.json({ data: destinations });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
});

router.get('/destinations/:id', async (req, res) => {
  try {
    const destination = await getOneDestinations(
      CMS_CONFIG.baseUrl,
      CMS_CONFIG.token,
      req.params.id,
    );

    res.json({ data: destination });
  } catch (error) {
    res.status(404).json({ error: 'Destination not found' });
  }
});

export default router;
```

## Patrones Avanzados

### 1. Cache Layer

```typescript
// services/cached-cms.service.ts
import { getManyDestinations } from '../libs/directus-types/src/generated';
import type { Item_Destinations } from '../libs/directus-types/src';

class CachedCMSService {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private cacheDuration = 5 * 60 * 1000; // 5 minutos

  private getCacheKey(collection: string, params: any): string {
    return `${collection}:${JSON.stringify(params)}`;
  }

  private isExpired(timestamp: number): boolean {
    return Date.now() - timestamp > this.cacheDuration;
  }

  async getDestinations(params: any = {}): Promise<Item_Destinations[]> {
    const cacheKey = this.getCacheKey('destinations', params);
    const cached = this.cache.get(cacheKey);

    if (cached && !this.isExpired(cached.timestamp)) {
      return cached.data;
    }

    const data = await getManyDestinations(
      CMS_CONFIG.baseUrl,
      CMS_CONFIG.token,
      params,
    );

    this.cache.set(cacheKey, { data, timestamp: Date.now() });
    return data;
  }

  clearCache() {
    this.cache.clear();
  }
}

export const cachedCMS = new CachedCMSService();
```

### 2. Retry Logic

```typescript
import { DirectusHttpError } from '../libs/directus-types/src';

async function fetchWithRetry<T>(
  fetchFn: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000,
): Promise<T> {
  let lastError: Error;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fetchFn();
    } catch (error) {
      lastError = error as Error;

      // No reintentar si es un error 4xx (cliente)
      if (error instanceof DirectusHttpError && error.status < 500) {
        throw error;
      }

      // Esperar antes de reintentar
      if (i < maxRetries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
      }
    }
  }

  throw lastError!;
}

// Uso
const destinations = await fetchWithRetry(() =>
  getManyDestinations(CMS_CONFIG.baseUrl, CMS_CONFIG.token, {
    filter: { status: { _eq: 'published' } },
  }),
);
```

### 3. Batch Requests

```typescript
async function fetchMultipleCollections() {
  const [destinations, pois, continents] = await Promise.all([
    getManyDestinations(CMS_CONFIG.baseUrl, CMS_CONFIG.token, {
      filter: { featured: { _eq: true } },
      limit: 10,
    }),
    getManyPoi(CMS_CONFIG.baseUrl, CMS_CONFIG.token, {
      filter: { category: { _eq: 'restaurant' } },
      limit: 20,
    }),
    getManyContinent(CMS_CONFIG.baseUrl, CMS_CONFIG.token),
  ]);

  return { destinations, pois, continents };
}
```

### 4. Type-Safe Query Builder

```typescript
import type { Query } from '../libs/directus-types/src';
import type { Item_Destinations } from '../libs/directus-types/src';

class DestinationsQueryBuilder {
  private query: Query<Item_Destinations> = {};

  published() {
    this.query.filter = {
      ...this.query.filter,
      status: { _eq: 'published' },
    };
    return this;
  }

  featured() {
    this.query.filter = {
      ...this.query.filter,
      featured: { _eq: true },
    };
    return this;
  }

  search(term: string) {
    this.query.search = term;
    return this;
  }

  limit(n: number) {
    this.query.limit = n;
    return this;
  }

  sortByDate() {
    this.query.sort = ['-date_created'];
    return this;
  }

  async fetch() {
    return getManyDestinations(
      CMS_CONFIG.baseUrl,
      CMS_CONFIG.token,
      this.query,
    );
  }
}

// Uso
const destinations = await new DestinationsQueryBuilder()
  .published()
  .featured()
  .sortByDate()
  .limit(10)
  .fetch();
```

## Tips y Mejores Prácticas

### 1. Manejo de Errores Robusto

```typescript
import { DirectusHttpError } from '../libs/directus-types/src';

try {
  const data = await getManyDestinations(baseUrl, token);
  return data;
} catch (error) {
  if (error instanceof DirectusHttpError) {
    switch (error.status) {
      case 401:
        // Token inválido
        console.error('Authentication failed');
        break;
      case 403:
        // Sin permisos
        console.error('Access denied');
        break;
      case 404:
        // Colección no encontrada
        console.error('Collection not found');
        break;
      default:
        console.error('API error:', error.responseMessage);
    }
  }
  throw error;
}
```

### 2. Optimización de Bandwidth

```typescript
// Malo: traer todo
const destinations = await getManyDestinations(baseUrl, token);

// Bueno: solo lo que necesitas
const destinations = await getManyDestinations(baseUrl, token, {
  fields: ['id', 'slug', 'translations'],
  limit: 20,
});
```

### 3. Variables de Entorno

```typescript
// .env
DIRECTUS_URL=https://your-instance.directus.app
DIRECTUS_TOKEN=your_static_token_here

// Validación
const config = {
  url: process.env.DIRECTUS_URL,
  token: process.env.DIRECTUS_TOKEN
};

if (!config.url || !config.token) {
  throw new Error('Missing required Directus configuration');
}
```

---

Para más información, consulta el [README.md](./README.md) principal.
