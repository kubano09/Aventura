# Test Strategy

## Test Pyramid
- Muchos unit tests del motor narrativo y reglas.
- Algunos integration tests para DB, API y realtime.
- Pocos E2E criticos para flujo principal de usuario.

## Prioritized Coverage
- Determinismo del motor (`initState`, `applyChoice`, condiciones).
- Persistencia local y rehidratacion.
- Secuenciacion de eventos coop (`seq`, acks, reconexion).
- Validacion de contratos de API y realtime.

## Pipeline Gates
- `npm run lint`
- `npm run typecheck`
- pruebas unitarias e integracion (fase siguiente)
- pruebas E2E minimas antes de release de sprint
