import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Play, 
  FolderOpen, 
  Trash2, 
  Clock, 
  User, 
  MapPin,
  Skull,
  Eye,
  ChevronRight
} from 'lucide-react';
import { useGameStore } from '@/stores/gameStore';
import type { SavedGame } from '@/types/game';
import { ALL_SCENES } from '@/game/scenes';
import { cn } from '@/lib/utils';

interface StartScreenProps {
  onNewGame: () => void;
}

export function StartScreen({ onNewGame }: StartScreenProps) {
  const [savedGames, setSavedGames] = useState<SavedGame[]>([]);
  const [showLoadDialog, setShowLoadDialog] = useState(false);
  const [selectedSave, setSelectedSave] = useState<SavedGame | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [deleteTarget, setDeleteTarget] = useState<
    { type: 'single'; save: SavedGame } | { type: 'all' } | null
  >(null);
  
  const loadGame = useGameStore(state => state.loadGame);
  const deleteSave = useGameStore(state => state.deleteSave);
  const deleteAllSaves = useGameStore(state => state.deleteAllSaves);
  const getSavedGames = useGameStore(state => state.getSavedGames);

  // Cargar partidas guardadas
  useEffect(() => {
    const games = getSavedGames();
    setSavedGames(games.sort((a, b) => b.timestamp - a.timestamp));
  }, [getSavedGames, showLoadDialog]);

  useEffect(() => {
    if (!showLoadDialog) {
      setSelectedSave(null);
      setVisibleCount(8);
      return;
    }

    if (selectedSave && !savedGames.find(save => save.id === selectedSave.id)) {
      setSelectedSave(null);
    }
  }, [showLoadDialog, savedGames, selectedSave]);

  const visibleSaves = savedGames.slice(0, visibleCount);

  const handleLoadGame = (save: SavedGame) => {
    loadGame(save);
    setShowLoadDialog(false);
  };

  const handleConfirmDelete = () => {
    if (!deleteTarget) return;

    if (deleteTarget.type === 'single') {
      deleteSave(deleteTarget.save.id);
      setSavedGames(prev => prev.filter(s => s.id !== deleteTarget.save.id));
      if (selectedSave?.id === deleteTarget.save.id) {
        setSelectedSave(null);
      }
    } else {
      deleteAllSaves();
      setSavedGames([]);
      setSelectedSave(null);
      setVisibleCount(8);
    }

    setDeleteTarget(null);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${mins}m`;
    return `${mins}m`;
  };

  const getEndingName = (endingType?: string) => {
    switch (endingType) {
      case 'salvation': return 'Salvación';
      case 'damnation': return 'Condena';
      case 'transcendence': return 'Trascendencia';
      case 'madness': return 'Locura';
      case 'servitude': return 'Servidumbre';
      case 'annihilation': return 'Aniquilación';
      default: return 'En progreso';
    }
  };

  const getEndingColor = (endingType?: string) => {
    switch (endingType) {
      case 'salvation': return 'text-green-400 border-green-900/50';
      case 'damnation': return 'text-red-400 border-red-900/50';
      case 'transcendence': return 'text-purple-400 border-purple-900/50';
      case 'madness': return 'text-yellow-400 border-yellow-900/50';
      case 'servitude': return 'text-blue-400 border-blue-900/50';
      case 'annihilation': return 'text-slate-400 border-slate-700';
      default: return 'text-slate-400 border-slate-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-red-950/30 to-slate-950 flex items-center justify-center p-4">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-md space-y-6">
        {/* Título */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-purple-500">
            Carne y Ceniza
          </h1>
          <p className="text-slate-400 text-lg">
            Una aventura de terror interactiva
          </p>
          <p className="text-slate-600 text-sm">
            Inspirada en las pesadillas de Barker
          </p>
        </div>

        {/* Menú principal */}
        <Card className="bg-slate-900/90 border-red-900/30 backdrop-blur">
          <CardContent className="p-6 space-y-4">
            <Button 
              onClick={onNewGame}
              size="lg"
              className="w-full bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-white h-14 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Nueva Partida
            </Button>

            {savedGames.length > 0 && (
              <Button 
                onClick={() => setShowLoadDialog(true)}
                variant="outline"
                size="lg"
                className="w-full border-red-900/50 hover:bg-red-950/30 text-slate-300 h-12"
              >
                <FolderOpen className="w-5 h-5 mr-2" />
                Cargar Partida
                <span className="ml-2 text-xs bg-red-900/50 px-2 py-0.5 rounded">
                  {savedGames.length}
                </span>
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Información del juego */}
        <Card className="bg-slate-900/60 border-slate-800/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-slate-500 uppercase tracking-wider">
              Sobre el Juego
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-400 space-y-2">
            <p>
              Despiertas en Sepulcro, una ciudad viva de carne y hueso donde 
              el dolor es puerta y el placer es llave.
            </p>
            <p>
              Explora múltiples caminos, descubre secretos ancestrales, 
              transforma tu cuerpo y mente, y encuentra tu destino entre 
              seis finales diferentes.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="text-xs bg-red-900/30 text-red-400 px-2 py-1 rounded">
                5 Profesiones
              </span>
              <span className="text-xs bg-purple-900/30 text-purple-400 px-2 py-1 rounded">
                6 Finales
              </span>
              <span className="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded">
                50+ Escenas
              </span>
              <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded">
                Múltiples Ramas
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Diálogo de carga */}
        <Dialog open={showLoadDialog} onOpenChange={setShowLoadDialog}>
          <DialogContent className="bg-slate-900 border-red-900/30 max-w-2xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle className="text-red-500 flex items-center gap-2">
                <FolderOpen className="w-5 h-5" />
                Partidas Guardadas
              </DialogTitle>
            </DialogHeader>
            
            <ScrollArea className="h-[60vh]">
              <div className="space-y-3">
                {savedGames.length === 0 && (
                  <p className="text-sm text-slate-500">No hay partidas guardadas.</p>
                )}
                {visibleSaves.map((save) => (
                  <Card 
                    key={save.id}
                    className={cn(
                      "bg-slate-800/50 border-slate-700 cursor-pointer transition-all hover:border-red-900/50",
                       selectedSave?.id === save.id && "border-red-500 ring-1 ring-red-500/50"
                     )}
                     onClick={() => setSelectedSave(save)}
                     onKeyDown={(e) => {
                       if (e.key === 'Enter' || e.key === ' ') {
                         e.preventDefault();
                         setSelectedSave(save);
                       }
                     }}
                     role="button"
                     tabIndex={0}
                     aria-pressed={selectedSave?.id === save.id}
                     aria-label={`Seleccionar guardado ${save.name}`}
                   >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-slate-200">{save.name}</h3>
                            <span className={cn(
                              "text-xs px-2 py-0.5 rounded border",
                              getEndingColor(ALL_SCENES[save.gameState.currentSceneId]?.endingType)
                            )}>
                              {save.gameState.gameEnded 
                                ? getEndingName(ALL_SCENES[save.gameState.currentSceneId]?.endingType)
                                : 'En progreso'
                              }
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {formatDate(save.timestamp)}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {save.gameState.character?.name}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {save.gameState.visitedScenes.length} escenas
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {formatTime(save.gameState.playTime)}
                            </span>
                          </div>

                          {save.gameState.character && (
                            <div className="flex flex-wrap gap-2 pt-1">
                              <span className="text-xs flex items-center gap-1 text-red-400/70">
                                <Skull className="w-3 h-3" />
                                {save.gameState.character.corruptionLevel}%
                              </span>
                              <span className="text-xs flex items-center gap-1 text-purple-400/70">
                                <Eye className="w-3 h-3" />
                                {save.gameState.character.insightLevel}%
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2 ml-4">
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLoadGame(save);
                            }}
                            className="bg-red-700 hover:bg-red-600"
                            aria-label={`Cargar ${save.name}`}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteTarget({ type: 'single', save });
                            }}
                            className="border-red-900/50 hover:bg-red-950/50 text-red-400"
                            aria-label={`Eliminar ${save.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                {savedGames.length > visibleCount && (
                  <Button
                    variant="outline"
                    onClick={() => setVisibleCount(prev => Math.min(prev + 8, savedGames.length))}
                    className="w-full border-red-900/50 hover:bg-red-950/30 text-slate-300"
                  >
                    Mostrar mas ({visibleCount} de {savedGames.length})
                  </Button>
                )}
                {savedGames.length > 0 && (
                  <Button
                    variant="outline"
                    onClick={() => setDeleteTarget({ type: 'all' })}
                    className="w-full border-red-900/50 hover:bg-red-950/30 text-red-400"
                  >
                    Eliminar todas
                  </Button>
                )}
                {selectedSave && (
                  <Button 
                    onClick={() => handleLoadGame(selectedSave)}
                    className="w-full bg-red-700 hover:bg-red-600"
                  >
                    Cargar {selectedSave.name}
                  </Button>
                )}
              </div>
          </DialogContent>
        </Dialog>

        <AlertDialog
          open={!!deleteTarget}
          onOpenChange={(open) => {
            if (!open) setDeleteTarget(null);
          }}
        >
          <AlertDialogContent className="bg-slate-900 border-red-900/30">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-red-500">
                {deleteTarget?.type === 'all'
                  ? 'Eliminar todas las partidas'
                  : 'Eliminar partida'}
              </AlertDialogTitle>
              <AlertDialogDescription className="text-slate-400">
                {deleteTarget?.type === 'all'
                  ? 'Esta accion no se puede deshacer. Se eliminaran todas las partidas guardadas.'
                  : 'Esta accion no se puede deshacer.'}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="border-red-900/50 hover:bg-red-950/30 text-slate-300">
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-700 hover:bg-red-600 text-white"
                onClick={handleConfirmDelete}
              >
                Eliminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
