# ADR-0002: Modelo realtime

## Status
Accepted

## Context
El modo cooperativo requiere baja latencia, reconexion y consistencia de estado.

## Decision
- Socket.IO como transporte y protocolo de eventos.
- Estado de sesion autoritativo en servidor.
- Eventos secuenciales (`seq`) por sesion.
- Snapshots para recuperacion tras reconexion.

## Consequences
- Se reduce riesgo de desincronizacion en clientes.
- Requiere gestion cuidadosa de idempotencia y orden.
- Facilita trazabilidad para debug y analitica.
