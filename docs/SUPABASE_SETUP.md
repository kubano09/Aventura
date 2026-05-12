# Setup de Supabase para Aventura

Guia rapida para conectar el proyecto a PostgreSQL de Supabase y desplegar en Hostinger.

## 1) Crear proyecto en Supabase
- Crear organizacion/proyecto nuevo.
- Elegir region cercana a tu hosting.
- Guardar el password de DB que define Supabase.

## 2) Obtener cadena de conexion
- Ir a `Project Settings` -> `Database` -> `Connection string`.
- Usar formato URI para `psql`/Prisma.

Recomendado para este proyecto:
- Usar **Session pooler** (no transaction pooler) para evitar problemas de prepared statements.

## 3) Variables de entorno en Hostinger
Configurar en el panel de entorno:

- `DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>?sslmode=require`
- `APP_ENV=production`
- `PINO_LOG_LEVEL=info`
- `NEXT_PUBLIC_APP_NAME=Aventura`
- `NEXT_PUBLIC_APP_URL=https://<tu-dominio>`

## 4) Migraciones en deploy
- En producción usar siempre:
  - `npx prisma migrate deploy`

No usar en producción:
- `prisma migrate dev`

## 5) Verificacion post-deploy
1. `GET /api/health` responde `200` y `status: "ok"`.
2. Home carga sin error.
3. Runtime muestra aventura (DB o fallback seed).
4. Logs sin error de conexion DB.

## 6) Nota de seguridad
- No subir credenciales a GitHub.
- Rotar password de DB si se expone accidentalmente.
