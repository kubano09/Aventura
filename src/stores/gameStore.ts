import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { 
  Character, 
  Profession, 
  Attributes, 
  GameState, 
  SavedGame,
  Item,
  Mutation,
  Choice
} from '@/types/game';
import { PROFESSIONS } from '@/types/game';
import { ALL_SCENES } from '@/game/scenes';
import React from 'react';

// Estado inicial
const createInitialState = (): GameState => ({
  character: null,
  currentSceneId: 'prologue',
  visitedScenes: [],
  gameStarted: false,
  gameEnded: false,
  playTime: 0,
  choicesHistory: []
});

const isAttributes = (value: unknown): value is Attributes => {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Attributes;
  return (
    typeof candidate.vigor === 'number' &&
    typeof candidate.mind === 'number' &&
    typeof candidate.spirit === 'number' &&
    typeof candidate.flesh === 'number'
  );
};

const isCharacter = (value: unknown): value is Character => {
  if (value === null) return true;
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Character;
  return (
    typeof candidate.id === 'string' &&
    typeof candidate.name === 'string' &&
    typeof candidate.profession === 'string' &&
    isAttributes(candidate.attributes) &&
    Array.isArray(candidate.inventory) &&
    Array.isArray(candidate.mutations) &&
    typeof candidate.isAlive === 'boolean' &&
    typeof candidate.corruptionLevel === 'number' &&
    typeof candidate.insightLevel === 'number'
  );
};

const isGameState = (value: unknown): value is GameState => {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as GameState;
  return (
    isCharacter(candidate.character) &&
    typeof candidate.currentSceneId === 'string' &&
    Array.isArray(candidate.visitedScenes) &&
    typeof candidate.gameStarted === 'boolean' &&
    typeof candidate.gameEnded === 'boolean' &&
    typeof candidate.playTime === 'number' &&
    Array.isArray(candidate.choicesHistory)
  );
};

const isSavedGame = (value: unknown): value is SavedGame => {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as SavedGame;
  return (
    typeof candidate.id === 'string' &&
    typeof candidate.name === 'string' &&
    typeof candidate.timestamp === 'number' &&
    isGameState(candidate.gameState)
  );
};

const readSavedGames = (): SavedGame[] => {
  const raw = localStorage.getItem('carne_y_ceniza_saves');
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(isSavedGame)
      .map(sanitizeSavedGame)
      .filter((save): save is SavedGame => save !== null);
  } catch {
    return [];
  }
};

const clamp = (value: number, min: number, max: number) => {
  return Math.max(min, Math.min(max, value));
};

const sanitizeCharacter = (value: Character | null): Character | null => {
  if (!value) return null;

  return {
    ...value,
    attributes: {
      vigor: clamp(value.attributes.vigor, 0, 10),
      mind: clamp(value.attributes.mind, 0, 10),
      spirit: clamp(value.attributes.spirit, 0, 10),
      flesh: clamp(value.attributes.flesh, 0, 10),
    },
    corruptionLevel: clamp(value.corruptionLevel, 0, 100),
    insightLevel: clamp(value.insightLevel, 0, 100),
  };
};

const sanitizeSavedGame = (value: SavedGame): SavedGame | null => {
  if (!value) return null;

  const sanitizedState: GameState = {
    character: sanitizeCharacter(value.gameState.character),
    currentSceneId: ALL_SCENES[value.gameState.currentSceneId]
      ? value.gameState.currentSceneId
      : 'prologue',
    visitedScenes: value.gameState.visitedScenes.filter(
      (sceneId) => typeof sceneId === 'string' && !!ALL_SCENES[sceneId]
    ),
    gameStarted: value.gameState.gameStarted,
    gameEnded: value.gameState.gameEnded,
    playTime: Math.max(0, value.gameState.playTime),
    choicesHistory: value.gameState.choicesHistory.filter(
      (entry) => typeof entry === 'string'
    ),
  };

  return {
    ...value,
    gameState: sanitizedState,
  };
};

// Interfaz del store
interface GameStore extends GameState {
  // Acciones de personaje
  createCharacter: (name: string, profession: Profession) => void;
  updateCharacter: (updates: Partial<Character>) => void;
  addItem: (item: Item) => void;
  removeItem: (itemId: string) => void;
  addMutation: (mutation: Mutation) => void;
  updateAttributes: (changes: Partial<Attributes>) => void;
  changeCorruption: (amount: number) => void;
  changeInsight: (amount: number) => void;
  
  // Acciones de juego
  startGame: () => void;
  goToScene: (sceneId: string) => void;
  makeChoice: (choice: Choice) => void;
  addToHistory: (choiceText: string) => void;
  incrementPlayTime: (seconds: number) => void;
  resetGame: () => void;
  
  // Guardado/Carga
  saveGame: (saveName: string) => SavedGame;
  loadGame: (savedGame: SavedGame) => void;
  getSavedGames: () => SavedGame[];
  deleteSave: (saveId: string) => void;
  deleteAllSaves: () => void;
  
  // Utilidades
  canMakeChoice: (requiredAttributes?: Partial<Attributes>, requiredItems?: string[], requiredMutations?: string[]) => boolean;
  getCurrentScene: () => import('@/types/game').Scene | undefined;
  checkDeath: (deathChance: number) => boolean;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      ...createInitialState(),

      // Crear personaje
      createCharacter: (name: string, profession: Profession) => {
        const profData = PROFESSIONS[profession];
        const character: Character = {
          id: `char_${Date.now()}`,
          name,
          profession,
          attributes: { ...profData.baseAttributes },
          inventory: [...profData.startingItems],
          mutations: [],
          isAlive: true,
          corruptionLevel: 0,
          insightLevel: 0
        };
        set({ character });
      },

      // Actualizar personaje
      updateCharacter: (updates: Partial<Character>) => {
        const { character } = get();
        if (character) {
          set({ character: { ...character, ...updates } });
        }
      },

      // Agregar item
      addItem: (item: Item) => {
        const { character } = get();
        if (character) {
          set({
            character: {
              ...character,
              inventory: [...character.inventory, item]
            }
          });
        }
      },

      // Remover item
      removeItem: (itemId: string) => {
        const { character } = get();
        if (character) {
          set({
            character: {
              ...character,
              inventory: character.inventory.filter(i => i.id !== itemId)
            }
          });
        }
      },

      // Agregar mutación
      addMutation: (mutation: Mutation) => {
        const { character } = get();
        if (character && !character.mutations.find(m => m.id === mutation.id)) {
          set({
            character: {
              ...character,
              mutations: [...character.mutations, mutation]
            }
          });
        }
      },

      // Actualizar atributos
      updateAttributes: (changes: Partial<Attributes>) => {
        const { character } = get();
        if (character) {
          const newAttributes = { ...character.attributes };
          Object.entries(changes).forEach(([key, value]) => {
            if (value !== undefined) {
              newAttributes[key as keyof Attributes] = Math.max(0, Math.min(10, newAttributes[key as keyof Attributes] + value));
            }
          });
          set({
            character: {
              ...character,
              attributes: newAttributes
            }
          });
        }
      },

      // Cambiar corrupción
      changeCorruption: (amount: number) => {
        const { character } = get();
        if (character) {
          set({
            character: {
              ...character,
              corruptionLevel: Math.max(0, Math.min(100, character.corruptionLevel + amount))
            }
          });
        }
      },

      // Cambiar insight
      changeInsight: (amount: number) => {
        const { character } = get();
        if (character) {
          set({
            character: {
              ...character,
              insightLevel: Math.max(0, Math.min(100, character.insightLevel + amount))
            }
          });
        }
      },

      // Iniciar juego
      startGame: () => {
        set({ 
          gameStarted: true, 
          currentSceneId: 'prologue',
          visitedScenes: ['prologue'],
          choicesHistory: []
        });
      },

      // Ir a escena
      goToScene: (sceneId: string) => {
        const { visitedScenes } = get();
        if (!visitedScenes.includes(sceneId)) {
          set({ visitedScenes: [...visitedScenes, sceneId] });
        }
        set({ currentSceneId: sceneId });
      },

      // Hacer elección
      makeChoice: (choice: Choice) => {
        if (choice.corruptionChange) {
          get().changeCorruption(choice.corruptionChange);
        }
        if (choice.insightChange) {
          get().changeInsight(choice.insightChange);
        }
        if (choice.attributeChange) {
          get().updateAttributes(choice.attributeChange);
        }
        if (choice.itemGain) {
          get().addItem(choice.itemGain);
        }
        if (choice.itemLoss) {
          get().removeItem(choice.itemLoss);
        }
        if (choice.mutationGain) {
          get().addMutation(choice.mutationGain);
        }

        const scene = ALL_SCENES[choice.nextSceneId];
        if (scene) {
          if (scene.corruptionChange) {
            get().changeCorruption(scene.corruptionChange);
          }
          if (scene.insightChange) {
            get().changeInsight(scene.insightChange);
          }

          set({ currentSceneId: choice.nextSceneId });

          const { visitedScenes } = get();
          if (!visitedScenes.includes(choice.nextSceneId)) {
            set({ visitedScenes: [...visitedScenes, choice.nextSceneId] });
          }

          if (scene.isEnding) {
            set({ gameEnded: true });
          }
        }
      },

      // Agregar al historial
      addToHistory: (choiceText: string) => {
        const { choicesHistory } = get();
        set({ choicesHistory: [...choicesHistory, choiceText] });
      },

      // Incrementar tiempo de juego
      incrementPlayTime: (seconds: number) => {
        const { playTime } = get();
        set({ playTime: playTime + seconds });
      },

      // Reiniciar juego
      resetGame: () => {
        set(createInitialState());
      },

      // Guardar juego
       saveGame: (saveName: string): SavedGame => {
         const state = get();
         const savedGame: SavedGame = {
           id: `save_${Date.now()}`,
           name: saveName,
           timestamp: Date.now(),
           gameState: {
             character: state.character,
             currentSceneId: state.currentSceneId,
             visitedScenes: state.visitedScenes,
             gameStarted: state.gameStarted,
             gameEnded: state.gameEnded,
             playTime: state.playTime,
             choicesHistory: state.choicesHistory
           }
         };
         
         const existingSaves = readSavedGames();
         const updatedSaves = [...existingSaves, savedGame];
         localStorage.setItem('carne_y_ceniza_saves', JSON.stringify(updatedSaves));
         
         return savedGame;
       },

      // Cargar juego
      loadGame: (savedGame: SavedGame) => {
        set({
          ...savedGame.gameState
        });
      },

      // Obtener partidas guardadas
       getSavedGames: (): SavedGame[] => {
         return readSavedGames();
       },

      // Eliminar guardado
      deleteSave: (saveId: string) => {
        const existingSaves = readSavedGames();
        const updatedSaves = existingSaves.filter(s => s.id !== saveId);
        localStorage.setItem('carne_y_ceniza_saves', JSON.stringify(updatedSaves));
      },

      deleteAllSaves: () => {
        localStorage.setItem('carne_y_ceniza_saves', JSON.stringify([]));
      },

      // Verificar si puede hacer elección
      canMakeChoice: (
        requiredAttributes?: Partial<Attributes>,
        requiredItems?: string[],
        requiredMutations?: string[]
      ): boolean => {
        const { character } = get();
        if (!character) return false;

        // Verificar atributos
        if (requiredAttributes) {
          for (const [attr, value] of Object.entries(requiredAttributes)) {
            if (character.attributes[attr as keyof Attributes] < (value || 0)) {
              return false;
            }
          }
        }

        // Verificar items
        if (requiredItems && requiredItems.length > 0) {
          for (const itemId of requiredItems) {
            if (!character.inventory.find(i => i.id === itemId)) {
              return false;
            }
          }
        }

        // Verificar mutaciones
        if (requiredMutations && requiredMutations.length > 0) {
          for (const mutationId of requiredMutations) {
            if (!character.mutations.find(m => m.id === mutationId)) {
              return false;
            }
          }
        }

        return true;
      },

      // Obtener escena actual
      getCurrentScene: () => {
        const { currentSceneId } = get();
        return ALL_SCENES[currentSceneId];
      },

      // Verificar muerte
      checkDeath: (deathChance: number): boolean => {
        const roll = Math.random();
        if (roll < deathChance) {
          const { character } = get();
          if (character) {
            set({
              character: { ...character, isAlive: false },
              gameEnded: true,
              currentSceneId: 'death_scene'
            });
          }
          return true;
        }
        return false;
      }
    }),
    {
      name: 'carne-y-ceniza-game',
    }
  )
);

// Hook para tiempo de juego
export const useGameTimer = () => {
  const incrementPlayTime = useGameStore(state => state.incrementPlayTime);
  const gameStarted = useGameStore(state => state.gameStarted);
  const gameEnded = useGameStore(state => state.gameEnded);
  
  React.useEffect(() => {
    if (!gameStarted || gameEnded) return;

    const interval = setInterval(() => {
      incrementPlayTime(1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [incrementPlayTime, gameStarted, gameEnded]);
};
