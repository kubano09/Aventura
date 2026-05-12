# Changelog

Todos los cambios relevantes del proyecto se documentan aqui.

## [Unreleased]

### Added
- Documentacion de base (`docs/00` a `docs/09`).
- `docs/ROADMAP.md` con fases y criterios de done.
- `docs/SESSION_LOG.md` para memoria por sesion.
- `docs/DECISIONS/*` con ADR iniciales.
- Modelo Prisma inicial para aventuras, sesiones y sync.
- Motor narrativo base en `src/domain/engine/runtime.ts`.
- Esquemas tipados de aventura y estado runtime.
- Validacion de entorno en `src/lib/env.ts`.
- Logging estructurado en `src/lib/logger.ts`.
- Endpoint de salud `GET /api/health`.
- Persistencia local base con IndexedDB.
- Tests unitarios iniciales del motor narrativo en `tests/domain/runtime.test.ts`.
- Workflow de CI en GitHub Actions (`.github/workflows/ci.yml`).
- Runtime local jugable semilla en portada con transiciones de nodos y elecciones.
- Rehidratacion de sesion local desde IndexedDB para continuar partida.
- Registro de auditoria local minima de eventos de sesion y decisiones.
- Guia de despliegue automatico GitHub -> Hostinger en `docs/DEPLOY_HOSTINGER.md`.
- Endpoint `GET /api/adventures/:slug` para cargar aventura runtime.
- Capa server inicial para lectura de aventura publicada desde Prisma.
- Guia `docs/SUPABASE_SETUP.md` para conectar DB PostgreSQL de Supabase en Hostinger.

### Changed
- Home inicial reemplazada por portada de estado de proyecto.
- Metadata de app actualizada a "Aventura".
- Scripts npm ampliados para chequeos y Prisma.
- Scripts npm ampliados con `test:unit`.
- CI ahora ejecuta `lint`, `typecheck`, `test:unit` y `build`.
- Scripts npm ampliados con `prisma:migrate:deploy` para produccion.
- Runtime UI ahora intenta cargar aventura desde backend y mantiene fallback semilla local.
- `prisma/seed.ts` ahora es idempotente (upserts de aventura, nodos y opciones).
- `postinstall` ahora ejecuta `prisma generate` para builds de despliegue.

### Security
- Lineamientos iniciales para seguridad app e IA documentados.

## [0.1.0] - 2026-04-25

### Added
- Bootstrap tecnico y memoria operativa inicial del proyecto.
