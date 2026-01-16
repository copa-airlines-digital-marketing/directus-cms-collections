# Sistema de Deprecación - Resumen Visual

## 🎯 Problema Resuelto

**Antes:** Borrar colecciones → Rompe código en producción ❌  
**Ahora:** Deprecar colecciones → Migración gradual ✅

## 📊 Flujo de Deprecación

```
┌─────────────────────────────────────────────────────────────────┐
│                    DIRECTUS (CMS)                               │
│                                                                 │
│  ✅ Collection: destinations                                    │
│  ❌ Collection: old_tours (DELETED)                            │
└─────────────────────────────────────────────────────────────────┘
                            │
                            │ pnpm generate
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│              DIRECTUS-TYPES (This Library)                      │
│                                                                 │
│  ✅ destinations.ts (Active)                                    │
│  ⚠️  old-tours.ts (DEPRECATED - Kept for compatibility)        │
│      │                                                          │
│      ├─ @deprecated tags added                                 │
│      ├─ Warning comments added                                 │
│      └─ Deprecation date: 2026-01-16                          │
└─────────────────────────────────────────────────────────────────┘
                            │
                            │ import
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                  CONSUMER PROJECT                               │
│                                                                 │
│  // ⚠️ IDE shows strikethrough warning                         │
│  import { Item_OldTours } from 'directus-types';               │
│            ~~~~~~~~~~~~~ deprecated                             │
│                                                                 │
│  // Time to migrate! ⏰                                         │
└─────────────────────────────────────────────────────────────────┘
                            │
                            │ After 30+ days
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                  MANUAL CLEANUP                                 │
│                                                                 │
│  $ pnpm clean:deprecated                                        │
│  ✅ Removed 1 deprecated collection(s):                         │
│     - old-tours.ts                                              │
└─────────────────────────────────────────────────────────────────┘
```

## 🔄 Ciclo de Vida de una Colección

### Fase 1: Activa ✅

```typescript
// destinations.ts
export interface Item_Destinations {
  id: string;
  name: string;
  // ...
}

export async function getManyDestinations(...) { }
```

**Estado:** Existe en Directus, código limpio

---

### Fase 2: Deprecada ⚠️

```typescript
/**
 * ⚠️ DEPRECATED COLLECTION ⚠️
 * This collection no longer exists in Directus.
 * Deprecated on: 2026-01-16
 */

/**
 * @deprecated This collection no longer exists in Directus
 */
export interface Item_OldTours {
  id: string;
  name: string;
  // ...
}

/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyOldTours(...) { }
```

**Estado:** No existe en Directus, pero código mantenido para compatibilidad  
**Duración:** 30 días (configurable)  
**Acción requerida:** Migrar código consumidor

---

### Fase 3: Removida 🗑️

```
// File deleted: old-tours.ts
```

**Estado:** Limpiado manualmente después del período de gracia  
**Cuándo:** Después de ejecutar `pnpm clean:deprecated`

## 📅 Timeline Típico

```
Día 0: Collection eliminada en Directus
  │
  ├─ pnpm generate
  │  └─ ⚠️ Collection marcada como deprecated
  │
Día 1-30: Período de migración
  │
  ├─ Equipos ven warnings en IDE
  ├─ Migran código gradualmente
  └─ Verifican que todo funcione
  │
Día 30+: Limpieza manual
  │
  └─ pnpm clean:deprecated
     └─ ✅ Collection removida
```

## 🎨 Visualización en el IDE

### Antes de Deprecar

```typescript
import { getManyOldTours } from './directus-types';
//         ~~~~~~~~~~~~~~~ No warnings
```

### Después de Deprecar

```typescript
import { getManyOldTours } from './directus-types';
//         ~~~~~~~~~~~~~~~ ⚠️ Strikethrough + warning tooltip
//         "This collection no longer exists in Directus"
```

### Hover en el IDE

```
getManyOldTours
────────────────
@deprecated This collection no longer exists in Directus

This file is kept for backward compatibility.
Please migrate away from this collection before it's removed.
```

## 🛠️ Comandos Rápidos

| Comando                             | Descripción                       | Cuándo Usar                    |
| ----------------------------------- | --------------------------------- | ------------------------------ |
| `pnpm generate`                     | Marca collections como deprecated | Cada vez que actualizas schema |
| `pnpm clean:deprecated`             | Remueve deprecated > 30 días      | Después de migración completa  |
| `pnpm clean:deprecated -- --days 7` | Remueve deprecated > 7 días       | Para limpiezas más rápidas     |
| `pnpm clean:deprecated -- --all`    | Remueve TODAS deprecated          | ⚠️ Solo si estás seguro        |

## 📋 Checklist de Migración

### Para el Equipo de la Biblioteca

- [ ] Collection eliminada en Directus
- [ ] Ejecutar `pnpm generate`
- [ ] Verificar que se marcó como deprecated
- [ ] Commit y push cambios
- [ ] Notificar a equipos consumidores
- [ ] Esperar 30 días
- [ ] Verificar que nadie la usa: `git grep "OldCollection"`
- [ ] Ejecutar `pnpm clean:deprecated`
- [ ] Commit y push limpieza

### Para Proyectos Consumidores

- [ ] Pull latest de directus-types submodule
- [ ] Ver warnings de deprecated en IDE
- [ ] Buscar usos: `git grep "Item_OldCollection"`
- [ ] Identificar alternativa (nueva collection)
- [ ] Migrar código
- [ ] Probar que todo funcione
- [ ] Commit cambios
- [ ] Notificar que completaste migración

## 💡 Casos de Uso

### Caso 1: Renombrar Collection

**Directus:**

- ❌ Eliminar `old_tours`
- ✅ Crear `destinations`

**Código:**

```typescript
// Antes
import { Item_OldTours, getManyOldTours } from './directus-types';

// Después
import { Item_Destinations, getManyDestinations } from './directus-types';

// Migración
const tours = await getManyDestinations(baseUrl, token, {
  filter: { type: { _eq: 'tour' } },
});
```

### Caso 2: Consolidar Collections

**Directus:**

- ❌ Eliminar `hotels`, `restaurants`, `attractions`
- ✅ Crear `poi` (points of interest)

**Código:**

```typescript
// Antes
const hotels = await getManyHotels(...);
const restaurants = await getManyRestaurants(...);

// Después
const hotels = await getManyPoi(baseUrl, token, {
  filter: { category: { _eq: 'hotel' } }
});
const restaurants = await getManyPoi(baseUrl, token, {
  filter: { category: { _eq: 'restaurant' } }
});
```

### Caso 3: Deprecar Feature Completo

**Directus:**

- ❌ Eliminar múltiples collections de un feature viejo

**Estrategia:**

1. Marcar todas como deprecated (automático)
2. Dar 60 días en lugar de 30 (feature grande)
3. Migrar por fases
4. Limpiar cuando todas las fases estén completas

```bash
# Esperar más tiempo para features grandes
pnpm clean:deprecated -- --days 60
```

## 🔍 Debugging

### Ver Collections Deprecadas

```bash
# Listar archivos deprecados
grep -l "DEPRECATED COLLECTION" src/generated/collections/*.ts

# Ver fechas de deprecación
grep -h "Deprecated on:" src/generated/collections/*.ts | sort

# Contar deprecadas
grep -l "DEPRECATED COLLECTION" src/generated/collections/*.ts | wc -l
```

### Verificar Uso en Proyectos

```bash
# En cada proyecto consumidor
cd proyecto-1
git grep "Item_OldCollection" || echo "✅ No usa deprecated"
git grep "getManyOldCollection" || echo "✅ No usa deprecated"
```

## ⚙️ Configuración Avanzada

### Ajustar Período de Retención

```typescript
// scripts/clean-deprecated.ts
const DEFAULT_RETENTION_DAYS = 30; // Cambiar aquí

// O usar flag
pnpm clean:deprecated -- --days 45
```

### Notificaciones Automáticas

```typescript
// scripts/generate.ts
if (deprecated.length > 0) {
  // Agregar webhook o notificación
  await notifySlack({
    message: `⚠️ ${deprecated.length} collections deprecated`,
    collections: deprecated.map((d) => d.collectionName),
  });
}
```

## 📚 Referencias

- [DEPRECATION_POLICY.md](./DEPRECATION_POLICY.md) - Política completa
- [README.md](./README.md) - Documentación principal
- [USAGE_EXAMPLES.md](./USAGE_EXAMPLES.md) - Ejemplos de código

---

**Resumen:** No rompemos código, damos tiempo para migrar. 🎯
