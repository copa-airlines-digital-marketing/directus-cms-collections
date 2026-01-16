# Correcciones Aplicadas

## Fecha: 2026-01-16

### Problemas Identificados y Solucionados

#### 1. ✅ Conflicto de Importaciones Circulares

**Problema:**
Los archivos generados importaban el tipo desde el mismo archivo, causando error:

```
error TS2440: Import declaration conflicts with local declaration
```

**Solución:**
Eliminé la importación innecesaria en `scripts/output/emit.ts`:

```typescript
// ANTES (incorrecto):
import type { ${collection.typeName} } from './${collection.fileName}.js';

// DESPUÉS (correcto):
// Sin esta importación - el tipo ya está en el mismo archivo
```

**Archivos modificados:**

- `scripts/output/emit.ts` (línea 40)

---

#### 2. ✅ Colisiones de Nombres de Función

**Problema:**
Colecciones con nombres similares generaban funciones con nombres duplicados:

- Colección `site` → `getSites()` y `getSite()`
- Colección `sites` → `getSitess()` y `getSites()` ← **COLISIÓN**

**Solución:**
Cambié la convención de nombres para usar prefijos claros:

```typescript
// ANTES:
get${typeName}s()  // plural
get${typeName}()   // singular

// DESPUÉS:
getMany${typeName}()  // plural
getOne${typeName}()   // singular
```

**Ejemplos de funciones generadas:**

- `site` → `getManySite()` y `getOneSite()`
- `sites` → `getManySites()` y `getOneSites()`
- `tag` → `getManyTag()` y `getOneTag()`
- `tags` → `getManyTags()` y `getOneTags()`

**Archivos modificados:**

- `scripts/output/emit.ts` (función `generateCollectionHelpers` y `emitIndexFile`)

---

#### 3. ✅ Soporte para Campos de Ubicación (Location/Geometry)

**Problema:**
Los campos de tipo `geometry` (ubicación) de Directus no tenían un tipo TypeScript adecuado y se mapeaban como `unknown`.

**Solución:**
Agregué soporte completo para tipos GeoJSON:

**a) Definición de tipos GeoJSON:**

```typescript
// src/client/types.ts
export interface GeoJSONPoint {
  type: 'Point';
  coordinates: [number, number] | [number, number, number];
}

export interface GeoJSONPolygon { ... }
export interface GeoJSONLineString { ... }
// ... otros tipos GeoJSON

export type GeoJSON =
  | GeoJSONPoint
  | GeoJSONLineString
  | GeoJSONPolygon
  | ...;
```

**b) Mapeo de tipos:**

```typescript
// scripts/directus/normalize.ts
case 'geometry':
case 'geometry.Point':
case 'geometry.LineString':
case 'geometry.Polygon':
// ... otros subtipos
  baseType = 'GeoJSON';
  break;
```

**c) Importación automática:**
El generador detecta automáticamente si un campo usa `GeoJSON` y agrega la importación necesaria:

```typescript
import type { GeoJSON } from '../../client/types.js';
```

**Ejemplo de colección generada con ubicación:**

```typescript
// src/generated/collections/poi.ts
export interface Item_Poi {
  location: GeoJSON; // ← Tipo correcto para campo de ubicación
  // ... otros campos
}
```

**Archivos modificados:**

- `src/client/types.ts` (definiciones GeoJSON)
- `src/index.ts` (exporta tipos GeoJSON)
- `scripts/directus/normalize.ts` (mapeo de tipos)
- `scripts/output/emit.ts` (importación condicional)

---

## Verificación

### ✅ TypeCheck Exitoso

```bash
$ pnpm typecheck
✓ 0 errores
```

### ✅ Generación Exitosa

```bash
$ pnpm generate
✅ Generation complete!
📊 Summary:
   Collections processed: 149
   Total fields: 1309
```

### ✅ Colecciones con GeoJSON Detectadas

```bash
$ grep -r "GeoJSON" src/generated/collections/
src/generated/collections/poi.ts
src/generated/collections/stopover-place-to-visit.ts
src/generated/collections/stopover-restaurants.ts
```

---

## API Actualizada

### Antes

```typescript
import { getSites, getSite } from './generated';

const sites = await getSites(baseUrl, token);
const site = await getSite(baseUrl, token, '123');
```

### Después

```typescript
import { getManySites, getOneSites } from './generated';

const sites = await getManySites(baseUrl, token);
const site = await getOneSites(baseUrl, token, '123');
```

**Beneficios:**

- ✅ No hay colisiones de nombres
- ✅ Clara distinción entre operaciones de lista y operaciones individuales
- ✅ API consistente para todas las colecciones

---

## Tipos de Datos Soportados

| Tipo Directus                               | Tipo TypeScript           | Notas            |
| ------------------------------------------- | ------------------------- | ---------------- |
| `string`, `text`, `uuid`, `hash`, `csv`     | `string`                  |                  |
| `integer`, `bigInteger`, `float`, `decimal` | `number`                  |                  |
| `boolean`                                   | `boolean`                 |                  |
| `dateTime`, `date`, `time`, `timestamp`     | `string`                  | ISO 8601         |
| `json`                                      | `Record<string, unknown>` |                  |
| `geometry`, `geometry.Point`, etc.          | `GeoJSON`                 | ✨ **NUEVO**     |
| `alias`                                     | `unknown`                 | Campos virtuales |

---

## Campos con Ubicación (GeoJSON)

Las colecciones con campos de ubicación ahora tienen tipos completamente tipados:

```typescript
import type { GeoJSON, GeoJSONPoint } from './src';

// Ejemplo de uso
const poi: Item_Poi = {
  location: {
    type: 'Point',
    coordinates: [-79.5197, 8.9824], // [longitud, latitud]
  },
};

// El tipo GeoJSON incluye validación de estructura
poi.location.type; // 'Point' | 'LineString' | 'Polygon' | ...
poi.location.coordinates; // [number, number] | [number, number, number]
```

---

## Próximos Pasos

1. **Usar la nueva API:**
   - Actualizar imports de `getSomething` → `getManySomething` / `getOneSomething`
2. **Aprovechar tipos GeoJSON:**

   - Los campos de ubicación ahora tienen autocompletado completo
   - TypeScript validará la estructura de coordenadas

3. **Regenerar cuando cambien los esquemas:**
   ```bash
   pnpm generate
   ```

---

## Estado Final

✅ **TypeScript:** 0 errores en modo strict
✅ **Generador:** Determinístico e idempotente  
✅ **Tipos:** Completos y correctos
✅ **GeoJSON:** Soporte completo para campos de ubicación
✅ **API:** Sin colisiones de nombres

**Versión:** 1.0.0 (corregida)
**Última generación:** 2026-01-16
