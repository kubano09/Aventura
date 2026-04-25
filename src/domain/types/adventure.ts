import { z } from "zod";

export const effectSchema = z.object({
  setFlags: z.record(z.string(), z.boolean()).default({}),
  addItems: z.array(z.string()).default([]),
  removeItems: z.array(z.string()).default([]),
});

export const conditionSchema = z.object({
  requiredFlags: z.record(z.string(), z.boolean()).default({}),
  requiredItems: z.array(z.string()).default([]),
});

export const choiceSchema = z.object({
  key: z.string().min(1),
  label: z.string().min(1),
  targetNodeKey: z.string().min(1),
  conditions: conditionSchema.default(() => ({
    requiredFlags: {},
    requiredItems: [],
  })),
  effects: effectSchema.default(() => ({
    setFlags: {},
    addItems: [],
    removeItems: [],
  })),
});

export const nodeSchema = z.object({
  key: z.string().min(1),
  title: z.string().min(1),
  body: z.string().min(1),
  choices: z.array(choiceSchema).default([]),
});

export const adventureSchema = z.object({
  id: z.string().min(1),
  version: z.number().int().positive(),
  title: z.string().min(1),
  startNodeKey: z.string().min(1),
  nodes: z.array(nodeSchema).min(1),
});

export const runtimeStateSchema = z.object({
  currentNodeKey: z.string(),
  visitedNodeKeys: z.array(z.string()),
  flags: z.record(z.string(), z.boolean()),
  inventory: z.array(z.string()),
  updatedAt: z.string(),
});

export type Effect = z.infer<typeof effectSchema>;
export type Condition = z.infer<typeof conditionSchema>;
export type Choice = z.infer<typeof choiceSchema>;
export type Node = z.infer<typeof nodeSchema>;
export type Adventure = z.infer<typeof adventureSchema>;
export type RuntimeState = z.infer<typeof runtimeStateSchema>;
