import { z } from "zod";

const serverEnvSchema = z.object({
  DATABASE_URL: z.url(),
  REDIS_URL: z.url().optional(),
  NEXTAUTH_SECRET: z.string().min(24).optional(),
  NEXTAUTH_URL: z.url().optional(),
  PINO_LOG_LEVEL: z
    .enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"])
    .default("info"),
  APP_ENV: z.enum(["development", "test", "staging", "production"]).default(
    "development",
  ),
  AI_PROVIDER: z.enum(["none", "openai", "anthropic", "local"]).default("none"),
  OPENAI_API_KEY: z.string().optional(),
});

const clientEnvSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().min(1).default("Aventura"),
  NEXT_PUBLIC_APP_URL: z.url().default("http://localhost:3000"),
});

export const serverEnv = serverEnvSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  REDIS_URL: process.env.REDIS_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  PINO_LOG_LEVEL: process.env.PINO_LOG_LEVEL,
  APP_ENV: process.env.APP_ENV,
  AI_PROVIDER: process.env.AI_PROVIDER,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
});

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});

export type ServerEnv = typeof serverEnv;
export type ClientEnv = typeof clientEnv;
