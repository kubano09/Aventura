"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import {
  applyChoice,
  getCurrentNode,
  initState,
} from "@/domain/engine/runtime";
import type { RuntimeState } from "@/domain/types/adventure";
import {
  appendLocalAuditEvent,
  clearLocalAuditEvents,
  clearLocalState,
  listLocalAuditEvents,
  loadLocalState,
  saveLocalState,
  type LocalAuditEvent,
} from "@/features/save-sync/local-store";
import { seedAdventure } from "@/features/runtime/seed-adventure";

function nowIso() {
  return new Date().toISOString();
}

function createAuditEvent(
  type: LocalAuditEvent["type"],
  nodeKey: string,
  choiceKey?: string,
): LocalAuditEvent {
  return {
    id: crypto.randomUUID(),
    type,
    nodeKey,
    choiceKey,
    createdAt: nowIso(),
  };
}

export function GameShell() {
  const [runtimeState, setRuntimeState] = useState<RuntimeState | null>(null);
  const [auditEvents, setAuditEvents] = useState<LocalAuditEvent[]>([]);
  const [isHydrating, setIsHydrating] = useState(true);
  const [isPending, startTransition] = useTransition();

  const currentNode = useMemo(() => {
    if (!runtimeState) {
      return null;
    }

    return getCurrentNode(seedAdventure, runtimeState);
  }, [runtimeState]);

  const hasSave = runtimeState !== null;
  const activeState = runtimeState;

  useEffect(() => {
    let isMounted = true;

    async function hydrate() {
      const [savedState, savedAudit] = await Promise.all([
        loadLocalState(),
        listLocalAuditEvents(),
      ]);

      if (!isMounted) {
        return;
      }

      setRuntimeState(savedState);
      setAuditEvents(savedAudit);
      setIsHydrating(false);
    }

    hydrate().catch(() => {
      if (!isMounted) {
        return;
      }

      setIsHydrating(false);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const startGame = () => {
    startTransition(() => {
      const nextState = initState(seedAdventure);

      setRuntimeState(nextState);
      void Promise.all([
        saveLocalState(nextState),
        appendLocalAuditEvent(
          createAuditEvent("session_started", nextState.currentNodeKey),
        ),
      ]).then(async () => {
        const refreshedEvents = await listLocalAuditEvents();
        setAuditEvents(refreshedEvents);
      });
    });
  };

  const selectChoice = (choiceKey: string) => {
    if (!runtimeState) {
      return;
    }

    startTransition(() => {
      const nextState = applyChoice(seedAdventure, runtimeState, choiceKey);

      setRuntimeState(nextState);
      void Promise.all([
        saveLocalState(nextState),
        appendLocalAuditEvent(
          createAuditEvent("choice_applied", nextState.currentNodeKey, choiceKey),
        ),
      ]).then(async () => {
        const refreshedEvents = await listLocalAuditEvents();
        setAuditEvents(refreshedEvents);
      });
    });
  };

  const resetProgress = () => {
    startTransition(() => {
      setRuntimeState(null);
      void Promise.all([clearLocalState(), clearLocalAuditEvents()]).then(() => {
        setAuditEvents([]);
      });
    });
  };

  return (
    <section className="rounded-3xl border border-amber-900/15 bg-white/75 p-6 shadow-lg shadow-amber-900/10 backdrop-blur-sm md:p-8">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
            Runtime local jugable
          </p>
          <h2 className="text-2xl font-semibold text-stone-900">{seedAdventure.title}</h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={startGame}
            className="rounded-xl bg-amber-700 px-4 py-2 text-sm font-semibold text-amber-50 transition hover:bg-amber-800 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isHydrating || isPending}
          >
            {hasSave ? "Nueva partida" : "Empezar"}
          </button>
          <button
            type="button"
            onClick={resetProgress}
            className="rounded-xl border border-amber-800/25 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isHydrating || !hasSave || isPending}
          >
            Reiniciar guardado
          </button>
        </div>
      </header>

      {isHydrating ? (
        <p className="mt-5 text-stone-700">Cargando guardado local...</p>
      ) : currentNode && activeState ? (
        <div className="mt-6 grid gap-5 md:grid-cols-[2fr_1fr]">
          <article className="space-y-4 rounded-2xl border border-amber-900/15 bg-amber-50/70 p-5">
            <h3 className="text-xl font-semibold text-stone-900">{currentNode.title}</h3>
            <p className="text-stone-700">{currentNode.body}</p>

            <div className="space-y-2">
              {currentNode.choices.length === 0 ? (
                <p className="rounded-xl bg-emerald-100 px-3 py-2 text-sm font-medium text-emerald-900">
                  Fin del recorrido semilla. Puedes iniciar otra partida.
                </p>
              ) : (
                currentNode.choices.map((choice) => (
                  <button
                    key={choice.key}
                    type="button"
                    onClick={() => selectChoice(choice.key)}
                    className="block w-full rounded-xl border border-amber-800/25 bg-white px-4 py-3 text-left text-sm font-medium text-stone-800 transition hover:border-amber-700 hover:bg-amber-100"
                    disabled={isPending}
                  >
                    {choice.label}
                  </button>
                ))
              )}
            </div>
          </article>

          <aside className="space-y-4 rounded-2xl border border-amber-900/15 bg-white p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
                Estado
              </p>
              <p className="mt-2 text-sm text-stone-700">
                Nodo actual: <span className="font-semibold">{activeState.currentNodeKey}</span>
              </p>
              <p className="text-sm text-stone-700">
                Inventario: {activeState.inventory.length ? activeState.inventory.join(", ") : "vacio"}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
                Auditoria local
              </p>
              <ul className="mt-2 space-y-2 text-xs text-stone-600">
                {auditEvents.length === 0 ? (
                  <li>Sin eventos aun.</li>
                ) : (
                  auditEvents.map((event) => (
                    <li key={event.id} className="rounded-lg bg-amber-50 px-2 py-1">
                      {event.type} - {event.nodeKey}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </aside>
        </div>
      ) : (
        <p className="mt-5 text-stone-700">
          No hay partida guardada. Pulsa <span className="font-semibold">Empezar</span> para crear una sesion local.
        </p>
      )}
    </section>
  );
}
