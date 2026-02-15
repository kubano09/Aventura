import { useGameStore } from '@/stores/gameStore';
import { StartScreen } from '@/components/game/StartScreen';
import { CharacterCreation } from '@/components/game/CharacterCreation';
import { GameScreen } from '@/components/game/GameScreen';
import './App.css';

function App() {
  const gameStarted = useGameStore(state => state.gameStarted);
  const character = useGameStore(state => state.character);
  const resetGame = useGameStore(state => state.resetGame);
  const startGame = useGameStore(state => state.startGame);

  // Manejar nueva partida
  const handleNewGame = () => {
    resetGame();
    startGame();
  };

  // Determinar qué pantalla mostrar
  const renderScreen = () => {
    // Si no hay personaje, mostrar creación
    if (!character) {
      return <CharacterCreation />;
    }

    // Si hay personaje pero el juego no ha iniciado, mostrar creación
    if (!gameStarted) {
      return <CharacterCreation />;
    }

    // Juego en progreso
    return <GameScreen />;
  };

  // Si no hay juego activo, mostrar pantalla de inicio
  if (!gameStarted && !character) {
    return <StartScreen onNewGame={handleNewGame} />;
  }

  return renderScreen();
}

export default App;
