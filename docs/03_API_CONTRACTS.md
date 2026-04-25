# API Contracts (Base)

## Health
- `GET /api/health`
  - `200 OK` => `{ service, status, timestamp }`

## Planned Session APIs
- `POST /api/sessions`
  - Crea sesion local/cloud.
- `GET /api/sessions/:id`
  - Hidrata estado + metadata.
- `POST /api/sessions/:id/events`
  - Agrega evento secuencial (valida `seq`).
- `GET /api/sessions/:id/snapshots/latest`
  - Recupera snapshot reciente.

## Planned Adventure APIs
- `GET /api/adventures/:slug/version/:version`
  - Devuelve aventura publicada.
- `POST /api/editor/adventures`
  - Crea aventura draft.
- `POST /api/editor/adventures/:id/publish`
  - Publica nueva version inmutable.

## Contract Rules
- DTOs con Zod en capa server.
- Errores estructurados con `code`, `message`, `details`.
- Versionado de payload para cambios de compatibilidad.
