# Security & Privacy Baseline

## App Security
- Validar y sanear todo input en API y realtime.
- Politica deny-by-default para acciones de escritura.
- Secretos solo en variables server-side.
- Logs sin datos sensibles (PII, tokens, prompts completos).

## Data Protection
- Minimizacion de datos en perfiles de usuario.
- Separacion de identidad y progreso cuando sea posible.
- Borrado de cuenta y datos asociado a sesiones/saves.

## AI Security Preparation
- Referencia: OWASP Top 10 for LLM applications.
- Riesgos priorizados: prompt injection, output handling inseguro, disclosure, excessive agency.
- Mitigaciones base: sandbox de herramientas, allowlists, policy checks y auditoria.
