# Domain Model

## Core Entities
- `Adventure`: contenedor editorial (identidad estable por `slug`).
- `AdventureVersion`: version concreta jugable (`draft`/`published`).
- `AdventureNode`: escena narrativa.
- `AdventureChoice`: transicion entre nodos con condiciones y efectos.
- `Session`: ejecucion de una aventura por jugador/grupo.
- `SessionPlayer`: miembros de una sesion cooperativa.
- `SessionEvent`: log secuencial de cambios.
- `SessionSnapshot`: estado comprimido de recuperacion.
- `SaveLink`: vinculo entre guardado local y cuenta.

## Runtime State
- `currentNodeKey`: nodo actual.
- `flags`: estado booleano narrativo.
- `inventory`: elementos activos.
- `visitedNodeKeys`: trazabilidad de recorrido.
- `updatedAt`: marca temporal para sync.

## Invariants
- Cada `SessionEvent` es inmutable y ordenado por `seq`.
- Una `Session` referencia una `AdventureVersion` fija (no muta durante la partida).
- Una `AdventureVersion` publicada no se edita; se genera nueva version.
- Las reglas del motor son deterministas para mismo estado + misma eleccion.
