// Tipos principales del juego de aventura conversacional

export interface Character {
  id: string;
  name: string;
  profession: Profession;
  attributes: Attributes;
  inventory: Item[];
  mutations: Mutation[];
  isAlive: boolean;
  corruptionLevel: number; // 0-100, nivel de corrupción por la Carne
  insightLevel: number; // 0-100, comprensión de los Misterios
}

export interface Attributes {
  vigor: number; // Fuerza física y resistencia
  mind: number; // Inteligencia y cordura
  spirit: number; // Voluntad y conexión con lo arcano
  flesh: number; // Adaptabilidad física y transformación
}

export type Profession = 
  | 'cirujano'      // Conocimiento anatómico, herramientas quirúrgicas
  | 'artista'       // Sensibilidad, percepción, creatividad
  | 'sacerdote'     // Fe, resistencia mental, símbolos sagrados
  | 'investigador'  // Deducción, conocimiento oculto, armas
  | 'mecanico';     // Ingenio, reparaciones, dispositivos

export interface Item {
  id: string;
  name: string;
  description: string;
  usable: boolean;
  effect?: string;
}

export interface Mutation {
  id: string;
  name: string;
  description: string;
  effect: string;
  isBeneficial: boolean;
}

export interface Scene {
  id: string;
  title: string;
  content: string;
  choices: Choice[];
  isEnding?: boolean;
  endingType?: 'salvation' | 'damnation' | 'transcendence' | 'madness' | 'servitude' | 'annihilation';
  requiredItems?: string[];
  requiredAttributes?: Partial<Record<keyof Attributes, number>>;
  requiredMutations?: string[];
  corruptionChange?: number;
  insightChange?: number;
}

export interface Choice {
  id: string;
  text: string;
  nextSceneId: string;
  requiredItems?: string[];
  requiredAttributes?: Partial<Record<keyof Attributes, number>>;
  requiredMutations?: string[];
  corruptionChange?: number;
  insightChange?: number;
  itemGain?: Item;
  itemLoss?: string;
  mutationGain?: Mutation;
  attributeChange?: Partial<Record<keyof Attributes, number>>;
  deathChance?: number; // 0-1 probabilidad de muerte instantánea
}

export interface GameState {
  character: Character | null;
  currentSceneId: string;
  visitedScenes: string[];
  gameStarted: boolean;
  gameEnded: boolean;
  playTime: number; // en segundos
  choicesHistory: string[];
}

export interface SavedGame {
  id: string;
  name: string;
  timestamp: number;
  gameState: GameState;
}

// Profesiones disponibles con descripciones
export const PROFESSIONS: Record<Profession, { name: string; description: string; startingItems: Item[]; baseAttributes: Attributes }> = {
  cirujano: {
    name: 'Cirujano de Carne',
    description: 'Has pasado años cortando y suturando carne humana. Conoces los secretos del cuerpo, sus límites y sus posibilidades. La sangre no te repugna; te fascina.',
    startingItems: [
      { id: 'scalpel', name: 'Bisturí de Plata', description: 'Un instrumento preciso que corta más allá de la carne física.', usable: true, effect: 'Corte ritual que revela verdades ocultas' },
      { id: 'sutures', name: 'Suturas Étnicas', description: 'Hilos que no solo cierran heridas, sino que sellan almas.', usable: true, effect: 'Repara daño físico y espiritual' },
      { id: 'laudanum', name: 'Laudanum', description: 'Un elixir que adormece el cuerpo pero despierta la mente.', usable: true, effect: 'Reduce el dolor, aumenta la percepción' }
    ],
    baseAttributes: { vigor: 2, mind: 4, spirit: 2, flesh: 4 }
  },
  artista: {
    name: 'Artista Maldito',
    description: 'Ves belleza donde otros ven horror. Tu mente es un portal hacia dimensiones de sensación pura. El dolor y el éxtasis son colores en tu paleta.',
    startingItems: [
      { id: 'sketchbook', name: 'Cuaderno de Carne', description: 'Las páginas están hechas de piel que absorbe y retiene visiones.', usable: true, effect: 'Revela el verdadero aspecto de las criaturas' },
      { id: 'chalk', name: 'Tiza de Hueso', description: 'Polvo de huesos calcinados que traza líneas entre dimensiones.', usable: true, effect: 'Dibuja portales temporales' },
      { id: 'mirror', name: 'Espejo Agrietado', description: 'Refleja no lo que eres, sino lo que podrías llegar a ser.', usable: true, effect: 'Revela caminos ocultos' }
    ],
    baseAttributes: { vigor: 2, mind: 5, spirit: 3, flesh: 2 }
  },
  sacerdote: {
    name: 'Sacerdote Caído',
    description: 'Una vez serviste a lo divino. Ahora tu fe se agrieta ante la revelación de que Dios no es el único creador. Tu fe es tu armadura y tu maldición.',
    startingItems: [
      { id: 'reliquary', name: 'Relicario Vacío', description: 'Una vez contuvo algo sagrado. Ahora es un receptáculo para otros poderes.', usable: true, effect: 'Absorbe energías corruptas' },
      { id: 'bible', name: 'Evangelio Apócrifo', description: 'Páginas que nunca debieron ser escritas, versículos que sangran tinta.', usable: true, effect: 'Protección contra entidades' },
      { id: 'cross', name: 'Cruz Torcida', description: 'El metal se ha doblado por fuerzas que no comprendes.', usable: true, effect: 'Repulsión de criaturas menores' }
    ],
    baseAttributes: { vigor: 3, mind: 3, spirit: 5, flesh: 1 }
  },
  investigador: {
    name: 'Investigador de lo Oculto',
    description: 'Has rastreado cultos, descifrado tomos prohibidos y sobrevivido a encuentros que destruyeron a hombres mejores. El conocimiento es tu arma... y tu sentencia.',
    startingItems: [
      { id: 'revolver', name: 'Revólver de Plata', description: 'Seis balas. Cada una puede matar algo que no debería existir.', usable: true, effect: 'Daño letal a entidades físicas' },
      { id: 'notes', name: 'Notas de Campo', description: 'Anotaciones de quienes estuvieron antes que tú. Algunos aún escriben.', usable: true, effect: 'Pistas sobre acertijos' },
      { id: 'amulet', name: 'Amuleto de Obsidiana', description: 'Protege tu mente... hasta cierto punto.', usable: true, effect: 'Resistencia a locura' }
    ],
    baseAttributes: { vigor: 3, mind: 4, spirit: 2, flesh: 3 }
  },
  mecanico: {
    name: 'Mecánico de Máquinas de Carne',
    description: 'Entiendes mecanismos, engranajes y el arte de lo artificial. Pero aquí, la carne misma es una máquina perfecta esperando ser reconfigurada.',
    startingItems: [
      { id: 'tools', name: 'Herramientas de Carne', description: 'Llaves y alicates que funcionan en huesos y tendones.', usable: true, effect: 'Modifica estructuras biológicas' },
      { id: 'lantern', name: 'Linterna de Grasa', description: 'La luego danza con sombras que no deberían existir.', usable: true, effect: 'Ilumina lo invisible' },
      { id: 'gears', name: 'Engranajes Vivientes', description: 'Metal que pulsa con latidos propios.', usable: true, effect: 'Repara o altera mecanismos biológicos' }
    ],
    baseAttributes: { vigor: 4, mind: 3, spirit: 1, flesh: 4 }
  }
};
