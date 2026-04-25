# PWA & Offline Plan

## Core Goals
- App instalable en desktop y movil.
- Runtime local utilizable sin red.
- Sincronizacion diferida al recuperar conectividad.

## Planned Components
- `manifest.webmanifest` con iconos, shortcuts y metadatos.
- Service worker para cache shell + estrategias de fetch.
- IndexedDB para estado de partida y cola de acciones pendientes.

## Caching Strategy
- Shell/UI: `stale-while-revalidate`.
- Contenido de aventuras publicadas: `cache-first` con version.
- API mutables: `network-first` con fallback local.

## Update Strategy
- Versionado de assets.
- Notificacion de nueva version disponible.
- Migraciones de datos locales en cambios de schema.
