import {
  adventureSchema,
  type Adventure,
  type Choice,
  runtimeStateSchema,
  type RuntimeState,
} from "@/domain/types/adventure";

function canSelect(choice: Choice, state: RuntimeState): boolean {
  for (const [flag, expected] of Object.entries(choice.conditions.requiredFlags)) {
    if ((state.flags[flag] ?? false) !== expected) {
      return false;
    }
  }

  return choice.conditions.requiredItems.every((item) =>
    state.inventory.includes(item),
  );
}

export function initState(adventureInput: Adventure): RuntimeState {
  const adventure = adventureSchema.parse(adventureInput);

  return runtimeStateSchema.parse({
    currentNodeKey: adventure.startNodeKey,
    visitedNodeKeys: [adventure.startNodeKey],
    flags: {},
    inventory: [],
    updatedAt: new Date().toISOString(),
  });
}

export function getCurrentNode(adventureInput: Adventure, stateInput: RuntimeState) {
  const adventure = adventureSchema.parse(adventureInput);
  const state = runtimeStateSchema.parse(stateInput);

  const node = adventure.nodes.find((candidate) => candidate.key === state.currentNodeKey);
  if (!node) {
    throw new Error(`Node not found: ${state.currentNodeKey}`);
  }

  return {
    ...node,
    choices: node.choices.filter((choice) => canSelect(choice, state)),
  };
}

export function applyChoice(
  adventureInput: Adventure,
  stateInput: RuntimeState,
  choiceKey: string,
): RuntimeState {
  const adventure = adventureSchema.parse(adventureInput);
  const state = runtimeStateSchema.parse(stateInput);
  const node = getCurrentNode(adventure, state);
  const choice = node.choices.find((candidate) => candidate.key === choiceKey);

  if (!choice) {
    throw new Error(`Choice not found: ${choiceKey}`);
  }

  const inventory = new Set(state.inventory);
  for (const item of choice.effects.addItems) inventory.add(item);
  for (const item of choice.effects.removeItems) inventory.delete(item);

  return runtimeStateSchema.parse({
    currentNodeKey: choice.targetNodeKey,
    visitedNodeKeys: [...state.visitedNodeKeys, choice.targetNodeKey],
    flags: {
      ...state.flags,
      ...choice.effects.setFlags,
    },
    inventory: Array.from(inventory),
    updatedAt: new Date().toISOString(),
  });
}
