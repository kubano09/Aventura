# ADR-0003: Estrategia de guardado y sincronizacion

## Status
Accepted

## Context
Se requiere continuidad local inmediata y continuidad cloud/multidispositivo progresiva.

## Decision
- Guardado local automatico en IndexedDB.
- Persistencia cloud en snapshots + event log.
- Vinculo local-cloud por `save_links`.
- Resolucion de conflictos basada en version + timestamp + fallback manual.

## Consequences
- UX robusta ante desconexion.
- Mayor complejidad de sincronizacion, pero desacoplada por capas.
- Fundamento preparado para evolucionar con IA y recomendaciones personalizadas.
