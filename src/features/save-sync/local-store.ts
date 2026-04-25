import { openDB } from "idb";
import type { RuntimeState } from "@/domain/types/adventure";

const DB_NAME = "aventura-local";
const STORE_NAME = "sessions";
const KEY = "current";

export async function saveLocalState(state: RuntimeState): Promise<void> {
  const db = await openDB(DB_NAME, 1, {
    upgrade(database) {
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME);
      }
    },
  });

  await db.put(STORE_NAME, state, KEY);
}

export async function loadLocalState(): Promise<RuntimeState | null> {
  const db = await openDB(DB_NAME, 1, {
    upgrade(database) {
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME);
      }
    },
  });

  const value = await db.get(STORE_NAME, KEY);
  return (value as RuntimeState | undefined) ?? null;
}
