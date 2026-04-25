import type { Adventure } from "@/domain/types/adventure";

export const seedAdventure: Adventure = {
  id: "adv-seed-bosque",
  version: 1,
  title: "El Bosque Susurrante",
  startNodeKey: "start",
  nodes: [
    {
      key: "start",
      title: "Cruce de senderos",
      body: "La niebla baja y dos caminos aparecen frente a ti.",
      choices: [
        {
          key: "take-lantern",
          label: "Revisar farol abandonado",
          targetNodeKey: "camp",
          effects: {
            addItems: ["lantern"],
            removeItems: [],
            setFlags: {
              prepared: true,
            },
          },
          conditions: {
            requiredFlags: {},
            requiredItems: [],
          },
        },
        {
          key: "cross-gate",
          label: "Cruzar la reja oxidada",
          targetNodeKey: "gate",
          effects: {
            addItems: [],
            removeItems: [],
            setFlags: {},
          },
          conditions: {
            requiredFlags: {
              prepared: true,
            },
            requiredItems: ["lantern"],
          },
        },
      ],
    },
    {
      key: "camp",
      title: "Campamento vacio",
      body: "Encuentras huellas recientes y una llave de hierro.",
      choices: [
        {
          key: "take-key",
          label: "Tomar la llave",
          targetNodeKey: "gate",
          effects: {
            addItems: ["iron_key"],
            removeItems: [],
            setFlags: {
              hasKey: true,
            },
          },
          conditions: {
            requiredFlags: {},
            requiredItems: [],
          },
        },
      ],
    },
    {
      key: "gate",
      title: "Puerta del santuario",
      body: "Una puerta sellada vibra con ecos lejanos.",
      choices: [
        {
          key: "open-door",
          label: "Abrir la puerta",
          targetNodeKey: "ending",
          effects: {
            addItems: [],
            removeItems: ["iron_key"],
            setFlags: {
              sanctuaryOpened: true,
            },
          },
          conditions: {
            requiredFlags: {
              hasKey: true,
            },
            requiredItems: ["iron_key"],
          },
        },
      ],
    },
    {
      key: "ending",
      title: "Camara interior",
      body: "La aventura semilla termina aqui. El registro local guardo tu progreso.",
      choices: [],
    },
  ],
};
