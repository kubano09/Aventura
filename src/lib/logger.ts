import pino from "pino";
import { serverEnv } from "@/lib/env";

export const logger = pino({
  level: serverEnv.PINO_LOG_LEVEL,
  transport:
    serverEnv.APP_ENV === "development"
      ? {
          target: "pino-pretty",
          options: {
            colorize: true,
            translateTime: "SYS:standard",
          },
        }
      : undefined,
  base: {
    app: "aventura",
    env: serverEnv.APP_ENV,
  },
});
