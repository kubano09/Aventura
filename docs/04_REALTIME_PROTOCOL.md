# Realtime Protocol (Draft)

## Connection
- Namespace base: `/game`.
- Auth inicial: invitado con `deviceFingerprint`; usuario opcional si existe sesion.

## Events
- `room:create` => crea sala y responde `room:state`.
- `room:join` => une jugador a sala.
- `room:state` => snapshot resumido de sesion/sala.
- `room:event` => evento de narrativa/voto/estado.
- `room:sync` => rehidratacion tras reconexion.
- `room:leave` => salida voluntaria.

## Reliability
- Acks obligatorios en eventos mutables.
- `seq` monotono por sesion para detectar huecos.
- Reintento cliente con backoff exponencial.
- Reconciliacion con `room:sync` si se detecta drift.

## Security Controls
- Rate limit por socket y por sala.
- Validacion Zod de payloads entrantes.
- Lista de eventos permitidos por rol (`HOST`, `PLAYER`, `OBSERVER`).
