# Project Brief

## Vision
- Crear una app de aventura conversacional usable desde el dia 1.
- Soportar tres modos: local, online cooperativo y PWA instalable.
- Mantener una arquitectura escalable para IA futura sin reescrituras grandes.

## Product Scope (MVP + Foundation)
- Runtime narrativo con nodos, elecciones, condiciones y efectos.
- Guardado local automatico y continuidad de partida.
- Salas cooperativas online con sincronizacion de estado.
- Guardado cloud y continuidad multidispositivo.
- Editor de historias v1 con versionado draft/published.

## Design Principles
- Un solo motor narrativo compartido entre runtime, editor y validacion backend.
- Estado auditable por eventos y snapshots de recuperacion.
- Contratos tipados entre cliente/servidor/realtime.
- Arquitectura orientada a modulos de dominio.
- Documentacion operativa primero para preservar contexto entre sesiones.

## Out of Scope (por ahora)
- Monetizacion, marketplace o UGC abierto al publico.
- Moderacion avanzada automatica con IA en produccion.
- Soporte de desktop nativo (Electron/Tauri) en primera etapa.
