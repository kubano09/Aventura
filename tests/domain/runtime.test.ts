import test from "node:test";
import assert from "node:assert/strict";
import {
  applyChoice,
  getCurrentNode,
  initState,
} from "../../src/domain/engine/runtime";
import type { Adventure } from "../../src/domain/types/adventure";

const adventureFixture: Adventure = {
  id: "adv-seed",
  version: 1,
  title: "Bosque de prueba",
  startNodeKey: "start",
  nodes: [
    {
      key: "start",
      title: "Inicio",
      body: "Despiertas en un sendero.",
      choices: [
        {
          key: "search",
          label: "Buscar mochila",
          targetNodeKey: "camp",
          effects: {
            addItems: ["rope"],
            removeItems: [],
            setFlags: { prepared: true },
          },
          conditions: {
            requiredFlags: {},
            requiredItems: [],
          },
        },
        {
          key: "cross-bridge",
          label: "Cruzar puente",
          targetNodeKey: "bridge",
          effects: {
            addItems: [],
            removeItems: [],
            setFlags: {},
          },
          conditions: {
            requiredFlags: {},
            requiredItems: ["rope"],
          },
        },
      ],
    },
    {
      key: "camp",
      title: "Campamento",
      body: "Encuentras provisiones.",
      choices: [],
    },
    {
      key: "bridge",
      title: "Puente",
      body: "Logras cruzar con seguridad.",
      choices: [],
    },
  ],
};

test("initState starts at adventure start node", () => {
  const state = initState(adventureFixture);

  assert.equal(state.currentNodeKey, "start");
  assert.deepEqual(state.visitedNodeKeys, ["start"]);
  assert.deepEqual(state.inventory, []);
});

test("getCurrentNode filters choices by required items", () => {
  const state = initState(adventureFixture);
  const node = getCurrentNode(adventureFixture, state);

  assert.deepEqual(
    node.choices.map((choice) => choice.key),
    ["search"],
  );
});

test("applyChoice moves node and applies effects", () => {
  const state = initState(adventureFixture);
  const next = applyChoice(adventureFixture, state, "search");

  assert.equal(next.currentNodeKey, "camp");
  assert.equal(next.flags.prepared, true);
  assert.deepEqual(next.inventory, ["rope"]);
  assert.deepEqual(next.visitedNodeKeys, ["start", "camp"]);
});

test("applyChoice throws for unavailable choices", () => {
  const state = initState(adventureFixture);

  assert.throws(() => applyChoice(adventureFixture, state, "cross-bridge"), {
    message: "Choice not found: cross-bridge",
  });
});
