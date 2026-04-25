# Roadmap

Estado general: `in_progress`

## Fase 0 - Foundation (completada parcialmente)
Estado: `in_progress`

### Objetivos
- Crear base tecnica limpia y modular.
- Dejar memoria operativa para continuidad.
- Preparar modelo de datos y contratos base.

### Hecho
- Scaffold Next.js + TypeScript + Tailwind.
- Dependencias base: Prisma, Zod, Socket.IO, IndexedDB, logging.
- Esquema Prisma inicial con entidades de aventura/sesion/sync.
- Documentacion de arquitectura, seguridad, accesibilidad, PWA y IA.
- Roadmap, changelog y session log inicializados.

### Pendiente de cierre Fase 0
- Ejecutar primera migracion Prisma contra entorno real.
- Validar estabilidad de tests unitarios de motor en cada cambio.
- Validar CI minima (lint + typecheck) en remoto.

---

## Fase 1 - Runtime local jugable
Estado: `in_progress`

### Entregables
- Flujo nueva partida y continuar partida. (en progreso)
- Aventura semilla jugable extremo a extremo. (version inicial completada)
- Autosave local con IndexedDB. (version inicial completada)

### Criterio de done
- Usuario juega, cierra, vuelve y continua sin perder estado.

### Backlog detallado (orden sugerido)
1. Implementar selector de aventura publicada.
2. Conectar motor narrativo a UI de juego.
3. Persistir estado tras cada eleccion.
4. Añadir boton continuar con rehidratacion.
5. Registrar eventos locales de auditoria minima.
6. Escribir tests unitarios de transiciones base.
7. Validar flujo en movil y desktop.

---

## Fase 2 - Coop online
Estado: `pending`

### Entregables
- Salas por codigo.
- Presencia de jugadores y roles.
- Sincronizacion por eventos secuenciales.
- Reconexion con rehidratacion.

### Criterio de done
- Dos jugadores completan una sesion sincronizada sin desync.

### Backlog detallado (orden sugerido)
1. Definir contrato exacto de eventos realtime.
2. Crear gateway Socket.IO y room lifecycle.
3. Añadir join por codigo corto.
4. Gestionar presencia y roles por sala.
5. Aplicar secuenciacion por `seq` en cada mutacion.
6. Implementar reconexion + `room:sync`.
7. Probar escenarios de desconexion parcial.

---

## Fase 3 - Guardado cloud + multidispositivo
Estado: `pending`

### Entregables
- Vinculo de guardado local a cuenta.
- Snapshots cloud y recuperacion.
- Resolucion de conflicto por version/timestamp.

### Criterio de done
- Continuidad real entre dos dispositivos.

### Backlog detallado (orden sugerido)
1. Endpoint para vincular sesion local a usuario.
2. Persistir snapshots periodicos en backend.
3. Reproducir eventos faltantes tras reconexion.
4. Resolver conflictos por version/timestamp.
5. Crear pantalla de conflicto cuando no hay merge seguro.
6. Registrar auditoria de restauraciones.

---

## Fase 4 - Editor v1
Estado: `pending`

### Entregables
- CRUD de nodos/opciones.
- Validacion de integridad narrativa.
- Preview en runtime compartido.
- Publicacion por versiones.

### Criterio de done
- Crear, publicar y jugar una aventura nueva sin tocar codigo.

### Backlog detallado (orden sugerido)
1. CRUD de aventura y versiones draft.
2. Editor de nodos con validaciones minimas.
3. Editor de opciones con condiciones/efectos.
4. Analizador de nodos huérfanos y bucles no deseados.
5. Preview embebido usando motor compartido.
6. Flujo publish y bloqueo de version publicada.

---

## Fase 5 - PWA robusta
Estado: `pending`

### Entregables
- Instalable en movil/desktop.
- Cache de shell y contenido.
- Cola offline para acciones pendientes.

### Criterio de done
- Funcionamiento local estable con red intermitente.

### Backlog detallado (orden sugerido)
1. Definir manifest y assets de instalacion.
2. Configurar service worker y cache shell.
3. Cache de aventuras publicadas por version.
4. Cola offline de acciones mutables.
5. Reintento y confirmacion visual de sincronizacion.
6. Test en Android, iOS y desktop browsers.

---

## Fase 6 - IA habilitable
Estado: `pending`

### Entregables
- Interfaces de proveedor IA.
- Prompting versionado.
- Guardrails de seguridad.
- Suite inicial de evaluaciones.

### Criterio de done
- Integrar primer caso IA sin refactor de dominio.

### Backlog detallado (orden sugerido)
1. Definir interfaz `AIProvider` y contrato de contexto.
2. Crear plantillas de prompt versionadas.
3. Aplicar politicas de salida y filtros.
4. Añadir trazabilidad de requests/responses redacted.
5. Definir evaluaciones de seguridad y calidad.
6. Pilotar caso de uso: resumen de sesion.
