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

### Changed
- Home inicial reemplazada por portada de estado de proyecto.
- Metadata de app actualizada a "Aventura".
- Scripts npm ampliados para chequeos y Prisma.
- Scripts npm ampliados con `test:unit`.

### Security
- Lineamientos iniciales para seguridad app e IA documentados.

## [0.1.0] - 2026-04-25

### Added
- Bootstrap tecnico y memoria operativa inicial del proyecto.
