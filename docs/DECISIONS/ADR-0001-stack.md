# ADR-0001: Stack base

## Status
Accepted

## Context
Necesitamos lanzar una base usable rapido, con capacidad de escalar a coop, editor, PWA y IA.

## Decision
- Next.js + TypeScript + Tailwind.
- Prisma + PostgreSQL.
- Socket.IO para realtime.
- IndexedDB para guardado local.
- Zod para contratos tipados.

## Consequences
- Desarrollo rapido con tipado fuerte.
- Curva de complejidad asumible para features avanzadas.
- Escalabilidad horizontal viable con Redis adapter en fase coop.
