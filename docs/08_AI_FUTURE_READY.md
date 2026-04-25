# AI Future-Ready Foundation

## Objective
Preparar la app para introducir IA por etapas sin romper dominio ni seguridad.

## Architecture Hooks
- `src/features/ai/providers`: abstraccion de proveedor (`AIProvider`).
- `src/features/ai/prompts`: plantillas versionadas.
- `src/features/ai/policies`: validadores y guardrails.
- `src/features/ai/evals`: pruebas de calidad y seguridad.

## First AI Use Cases (future)
- Asistente de autor para sugerir ramas y detectar incoherencias.
- Resumen automatico de sesion para continuidad.
- NPC conversacional acotado por lore y estado.
- Pistas adaptativas sin spoilers.

## Guardrails
- Separar claramente instrucciones de sistema, contexto y contenido usuario.
- Filtrar salida para evitar instrucciones ejecutables o exfiltracion.
- Tool calling restringido por permisos y entorno.
- Telemetria de prompts/respuestas con redaccion de datos sensibles.
