# Deploy en Hostinger (Auto Deploy desde GitHub)

Guia para desplegar `Aventura` en Hostinger con integracion directa a este repositorio GitHub.

## Requisitos
- Plan con soporte Node.js (VPS o hosting administrado con Node).
- Base de datos PostgreSQL accesible desde el servidor.
- Repositorio GitHub conectado en panel de Hostinger.

## Rama recomendada
- Rama de produccion: `main`.
- Activar proteccion de rama para evitar pushes directos sin checks.

## Comandos de despliegue
- Install command: `npm ci`
- Build command: `npm run build`
- Start command: `npm run start`

Nota: el proyecto ejecuta `prisma generate` automaticamente en `postinstall`.

Si Hostinger permite comando adicional post-build, ejecutar tambien:
- `npx prisma migrate deploy`

Si solo permite un comando de build, usar:
- `npm run prisma:generate && npm run build && npx prisma migrate deploy`

## Variables de entorno minimas
- `DATABASE_URL`
- `APP_ENV=production`
- `PINO_LOG_LEVEL=info`
- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_URL`

Para Supabase:
- `DATABASE_URL` debe incluir SSL (`?sslmode=require`).
- Recomendada la cadena de **Session pooler**.

Opcionales segun feature:
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `AI_PROVIDER`
- `OPENAI_API_KEY`

## Flujo recomendado de release
1. Push a rama de trabajo.
2. PR hacia `main`.
3. Verificar CI (lint, typecheck, unit tests, build).
4. Merge en `main`.
5. Hostinger detecta push y despliega automaticamente.

## Verificaciones post-deploy
- Abrir `https://<tu-dominio>/api/health` y comprobar `status: "ok"`.
- Abrir home y validar que el runtime semilla carga.
- Comprobar logs de aplicacion en Hostinger.

## Notas Prisma en produccion
- No usar `prisma migrate dev` en servidor productivo.
- Usar siempre `prisma migrate deploy`.
- Ejecutar `prisma:seed` solo si quieres datos iniciales de forma controlada.

Ver guia detallada para Supabase en `docs/SUPABASE_SETUP.md`.
