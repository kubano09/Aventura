# Aventura

Base tecnica para una aventura conversacional local, online y cooperativa, con enfoque en escalabilidad, PWA y preparacion para IA futura.

## Estado actual
- Foundation inicial creada.
- Documentacion operativa completa en `docs/`.
- Modelo de datos base en Prisma.
- Motor narrativo inicial tipado.
- Tests unitarios base del motor narrativo.
- Pipeline CI minima con lint + typecheck.

## Stack
- Next.js 16 + TypeScript + Tailwind.
- Prisma + PostgreSQL.
- Socket.IO.
- IndexedDB (idb).
- Zod para contratos.

## Arranque rapido
1. Copia variables de entorno:
   - `cp .env.example .env`
2. Instala dependencias:
   - `npm install`
3. Genera cliente Prisma:
   - `npm run prisma:generate`
4. Levanta el proyecto:
   - `npm run dev`

## Scripts
- `npm run dev` - servidor de desarrollo.
- `npm run build` - build de produccion.
- `npm run start` - servir build.
- `npm run lint` - linting.
- `npm run typecheck` - chequeo de tipos.
- `npm run check` - lint + typecheck.
- `npm run prisma:generate` - generar cliente Prisma.
- `npm run prisma:migrate` - ejecutar migraciones en desarrollo.
- `npm run prisma:studio` - explorar datos.
- `npm run prisma:seed` - poblar datos semilla.

## Memoria de proyecto
- `docs/ROADMAP.md` - plan detallado por fases.
- `docs/CHANGELOG.md` - historial de cambios.
- `docs/SESSION_LOG.md` - continuidad entre sesiones.
- `docs/DECISIONS/` - ADRs con decisiones clave.

## Siguiente hito
Cerrar Fase 0 ejecutando primera migracion en DB real y avanzar a Fase 1: runtime local jugable con guardado automatico y aventura semilla jugable de extremo a extremo.
