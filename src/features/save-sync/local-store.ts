import { openDB } from "idb";
import type { RuntimeState } from "@/domain/types/adventure";

const DB_NAME = "aventura-local";
const SESSION_STORE_NAME = "sessions";
const AUDIT_STORE_NAME = "audit";
const SESSION_KEY = "current";

export type LocalAuditEvent = {
  id: string;
  type: "session_started" | "choice_applied" | "session_cleared";
  nodeKey: string;
  choiceKey?: string;
  createdAt: string;
};

async function getDatabase() {
  return openDB(DB_NAME, 1, {
    upgrade(database) {
      if (!database.objectStoreNames.contains(SESSION_STORE_NAME)) {
        database.createObjectStore(SESSION_STORE_NAME);
      }

      if (!database.objectStoreNames.contains(AUDIT_STORE_NAME)) {
        database.createObjectStore(AUDIT_STORE_NAME, {
          keyPath: "id",
        });
      }
    },
  });
}

export async function saveLocalState(state: RuntimeState): Promise<void> {
  const db = await getDatabase();

  await db.put(SESSION_STORE_NAME, state, SESSION_KEY);
}

export async function loadLocalState(): Promise<RuntimeState | null> {
  const db = await getDatabase();

  const value = await db.get(SESSION_STORE_NAME, SESSION_KEY);
  return (value as RuntimeState | undefined) ?? null;
}

export async function clearLocalState(): Promise<void> {
  const db = await getDatabase();

  await db.delete(SESSION_STORE_NAME, SESSION_KEY);
}

export async function appendLocalAuditEvent(
  event: LocalAuditEvent,
): Promise<void> {
  const db = await getDatabase();

  await db.put(AUDIT_STORE_NAME, event);
}

export async function listLocalAuditEvents(limit = 12): Promise<LocalAuditEvent[]> {
  const db = await getDatabase();
  const values = (await db.getAll(AUDIT_STORE_NAME)) as LocalAuditEvent[];

  return values
    .sort((left, right) => right.createdAt.localeCompare(left.createdAt))
    .slice(0, limit);
}

export async function clearLocalAuditEvents(): Promise<void> {
  const db = await getDatabase();

  await db.clear(AUDIT_STORE_NAME);
}
