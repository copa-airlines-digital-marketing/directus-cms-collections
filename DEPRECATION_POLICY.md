# Deprecation Policy

## Política de Deprecación de Colecciones

### Filosofía

Cuando una colección es eliminada de Directus, **NO se borra inmediatamente** del código generado. En su lugar, se marca como `@deprecated` para dar tiempo a los proyectos consumidores de migrar su código.

## Cómo Funciona

### 1. Detección Automática

Cuando ejecutas `pnpm generate`, el generador:

1. ✅ Detecta colecciones que ya no existen en Directus
2. 🏷️ Marca los archivos como deprecated (no los borra)
3. 📝 Agrega anotaciones `@deprecated` a tipos y funciones
4. 📅 Registra la fecha de deprecación

### 2. Marcado de Deprecación

Un archivo deprecado se ve así:

```typescript
/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * ⚠️ DEPRECATED COLLECTION ⚠️
 * This collection no longer exists in Directus.
 * Deprecated on: 2026-01-16
 *
 * This file is kept for backward compatibility.
 * Please migrate away from this collection before it's removed.
 * To manually remove deprecated collections, run: pnpm clean:deprecated
 */

/**
 * @deprecated This collection no longer exists in Directus
 */
export interface Item_OldCollection {
  // ... fields
}

/**
 * @deprecated This collection no longer exists in Directus
 */
export async function getManyOldCollection(...) {
  // ... implementation
}
```

### 3. Avisos en el IDE

TypeScript mostrará warnings cuando uses tipos o funciones deprecadas:

```typescript
// ⚠️ Warning: 'Item_OldCollection' is deprecated
const items: Item_OldCollection[] = await getManyOldCollection(baseUrl, token);
//            ~~~~~~~~~~~~~~~~~~~ strikethrough en el IDE
```

## Limpieza Manual

### Comandos Disponibles

```bash
# Remover colecciones deprecadas hace más de 30 días (default)
pnpm clean:deprecated

# Remover colecciones deprecadas hace más de 7 días
pnpm clean:deprecated -- --days 7

# Remover TODAS las colecciones deprecadas inmediatamente
pnpm clean:deprecated -- --all
```

### Cuándo Limpiar

**Recomendación:**

- ✅ **30 días después**: Suficiente tiempo para que los equipos migren
- ⚠️ **Antes de limpiar**: Verificar que ningún proyecto use la colección
- 💡 **Buscar referencias**: `git grep "Item_OldCollection"` en proyectos consumidores

## Workflow Recomendado

### Cuando una Colección es Eliminada en Directus

#### Paso 1: Generación Automática (Immediate)

```bash
cd directus-types
pnpm generate
```

**Output:**

```
🏷️  Marking removed collections as deprecated...
   ⚠️  Deprecated 1 collection(s):
      - old_collection (old-collection.ts)
   💡 These files are kept for backward compatibility.
   💡 To remove old deprecated collections, run: pnpm clean:deprecated
```

**Acción:**

- ✅ Commit los cambios
- 📢 Notificar a los equipos consumidores

#### Paso 2: Migración en Proyectos (1-4 semanas)

**Los equipos deben:**

1. Ver warnings en su IDE
2. Buscar usos de la colección:
   ```bash
   git grep "Item_OldCollection"
   git grep "getManyOldCollection"
   ```
3. Migrar a la nueva colección o alternativa
4. Verificar que todo funcione
5. Remover los usos deprecados

#### Paso 3: Limpieza (Después de 30+ días)

```bash
cd directus-types

# Ver qué se va a remover
pnpm clean:deprecated -- --days 30

# Si todo está bien, limpiar
pnpm clean:deprecated

# Regenerar índices
pnpm generate

# Verificar
pnpm typecheck

# Commit
git add .
git commit -m "chore: remove old deprecated collections"
```

## Ventajas de Este Sistema

### ✅ Para el Equipo de la Biblioteca

- No rompe código de consumidores inmediatamente
- Proceso gradual y controlado
- Menos support tickets / issues
- Tiempo para comunicar cambios

### ✅ Para Proyectos Consumidores

- Tiempo para migrar (30 días default)
- Warnings claros en el IDE
- No se rompe en producción sin aviso
- Pueden actualizar el submodule sin miedo

## Ejemplos

### Ejemplo 1: Migración Gradual

```typescript
// ❌ Código viejo (deprecado)
import { Item_OldTours, getManyOldTours } from './directus-types';

async function getTours() {
  return getManyOldTours(baseUrl, token); // ⚠️ Deprecated warning
}

// ✅ Código migrado
import { Item_Destinations, getManyDestinations } from './directus-types';

async function getTours() {
  return getManyDestinations(baseUrl, token, {
    filter: { type: { _eq: 'tour' } },
  });
}
```

### Ejemplo 2: Verificar Antes de Limpiar

```bash
# En todos los proyectos que usan este submodule
cd proyecto-1
git grep "Item_OldCollection"
# No results ✅

cd ../proyecto-2
git grep "getManyOldCollection"
# src/services/tours.ts:15: const tours = await getManyOldCollection(...)
# ❌ Todavía en uso! No limpiar aún
```

## Configuración de Retención

### Política Default

- **30 días**: Período mínimo de retención
- **Razón**: Balance entre dar tiempo y mantener código limpio

### Ajustar si Necesario

Si tu equipo necesita más o menos tiempo:

```bash
# 60 días para equipos grandes
pnpm clean:deprecated -- --days 60

# 7 días para prototipos o desarrollo rápido
pnpm clean:deprecated -- --days 7
```

## FAQ

### ¿Por qué no borrar inmediatamente?

**Respuesta:** Borrar inmediatamente rompe el código de cualquier proyecto que use esa colección. Deprecar primero da tiempo para migrar sin breaking changes abruptos.

### ¿Qué pasa si necesito la colección después?

**Respuesta:**

1. Si todavía está deprecada (no limpiada): Ya tienes el código
2. Si fue limpiada: Puedes recrearla en Directus y regenerar
3. Backup: El código deprecado está en el historial de git

### ¿Cómo sé qué colecciones están deprecadas?

**Respuesta:**

```bash
# Buscar archivos deprecados
grep -r "DEPRECATED COLLECTION" src/generated/collections/

# Ver lista con fechas
grep -A1 "Deprecated on:" src/generated/collections/*.ts
```

### ¿Puedo forzar el borrado inmediato?

**Respuesta:** Sí, pero **no recomendado**. Si realmente lo necesitas:

```bash
pnpm clean:deprecated -- --all
pnpm generate
```

**⚠️ Advertencia:** Esto puede romper proyectos consumidores.

### ¿Las colecciones deprecadas afectan el tamaño del bundle?

**Respuesta:** Depende del tree-shaking, pero típicamente:

- Si NO usas la colección deprecada → No incluida en bundle
- Si SÍ usas la colección deprecada → Incluida (pero deberías migrar)

## Mejores Prácticas

### ✅ DO

1. **Notificar antes de limpiar**

   ```
   Slack/Email: "La colección X está deprecada.
   Tienen 30 días para migrar antes de que se limpie."
   ```

2. **Verificar proyectos antes de limpiar**

   ```bash
   for proj in proyecto-*; do
     echo "Checking $proj..."
     cd $proj && git grep "OldCollection" || echo "✅ Clean"
     cd ..
   done
   ```

3. **Documentar migraciones**
   ```markdown
   ## Migration: old_tours → destinations

   - Replace `getManyOldTours()` with `getManyDestinations()`
   - Filter by `type: 'tour'`
   - Update types: `Item_OldTours` → `Item_Destinations`
   ```

### ❌ DON'T

1. **No limpiar sin verificar**

   - Siempre buscar usos en proyectos consumidores primero

2. **No limpiar sin notificar**

   - Dar aviso con tiempo suficiente

3. **No ignorar warnings de deprecación**
   - Actuar cuando ves `@deprecated` en tu código

## Resumen

| Acción                      | Cuándo               | Comando                             | Automático |
| --------------------------- | -------------------- | ----------------------------------- | ---------- |
| Marcar como deprecated      | Cada `pnpm generate` | `pnpm generate`                     | ✅ Sí      |
| Limpiar deprecated (30d+)   | Manualmente          | `pnpm clean:deprecated`             | ❌ No      |
| Limpiar deprecated (custom) | Manualmente          | `pnpm clean:deprecated -- --days 7` | ❌ No      |
| Limpiar TODAS deprecated    | Manualmente          | `pnpm clean:deprecated -- --all`    | ❌ No      |

**Filosofía:** _"Fail gracefully, migrate gradually"_ 🎯
