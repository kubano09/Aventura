# Architecture

## Stack
- Frontend/App: Next.js 16 + TypeScript + Tailwind.
- Data: PostgreSQL + Prisma ORM.
- Realtime: Socket.IO (preparado para Redis adapter).
- Local persistence: IndexedDB.
- Validation: Zod.

## Modules
- `src/domain`: logica pura de narrativa y reglas.
- `src/features/runtime`: experiencia de juego (local y online).
- `src/features/coop`: coordinacion y flujo cooperativo.
- `src/features/save-sync`: guardado local/cloud y sincronizacion.
- `src/features/editor`: creacion y publicacion de aventuras.
- `src/features/ai`: adaptadores y guardrails de IA (future-ready).
- `src/server`: casos de uso backend.
- `src/realtime`: contratos y gateway de eventos.
- `src/lib`: utilidades cross-cutting (env, logging, ids, validation).

## Runtime Pattern
- Autoridad de estado en servidor para sesiones online.
- Eventos secuenciales por sesion (`session_events.seq`).
- Snapshots periodicos para restauracion y performance.
- Cliente con cola local para reintentos y modo degradado.

## Scaling Strategy
- Horizontal scale de realtime via Redis adapter.
- Lecturas de aventura separadas de mutaciones de sesion.
- Indices preparados para queries frecuentes de session/event/save.
- Contratos de API y eventos estables y versionados.
