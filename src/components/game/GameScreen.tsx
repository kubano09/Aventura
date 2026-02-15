import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { 
  Zap, 
  Brain, 
  Heart, 
  Activity, 
  Backpack, 
  Save, 
  RotateCcw,
  Menu,
  Clock,
  MapPin,
  AlertTriangle,
  Eye,
  Skull,
  User
} from 'lucide-react';
import { useGameStore, useGameTimer } from '@/stores/gameStore';
import { ALL_SCENES } from '@/game/scenes';
import { cn } from '@/lib/utils';

export function GameScreen() {
  useGameTimer();
  const {
    character,
    currentSceneId,
    playTime,
    choicesHistory,
    makeChoice,
    addToHistory,
    checkDeath,
    canMakeChoice,
    saveGame,
    resetGame
  } = useGameStore();

  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [saveName, setSaveName] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showAllHistory, setShowAllHistory] = useState(false);
  const [showRestartDialog, setShowRestartDialog] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastCountRef = useRef(0);

  const currentScene = ALL_SCENES[currentSceneId];

  // Efecto de máquina de escribir para el texto
  useEffect(() => {
    if (currentScene) {
      setIsTyping(true);
      setDisplayedText('');
      lastCountRef.current = 0;
      const text = currentScene.content;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        setDisplayedText(text);
        setIsTyping(false);
        lastCountRef.current = text.length;
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
        return;
      }

      const startTime = performance.now();
      const charsPerSecond = 60;
      let animationId = 0;

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const nextCount = Math.min(text.length, Math.floor((elapsed / 1000) * charsPerSecond));
        if (nextCount !== lastCountRef.current) {
          setDisplayedText(text.slice(0, nextCount));
          lastCountRef.current = nextCount;
        }

        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }

        if (nextCount < text.length) {
          animationId = requestAnimationFrame(tick);
        } else {
          setIsTyping(false);
        }
      };

      animationId = requestAnimationFrame(tick);

      return () => cancelAnimationFrame(animationId);
    }
  }, [currentSceneId]);

  // Formatear tiempo de juego
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Manejar elección
  const handleChoice = (choice: import('@/types/game').Choice) => {
    if (isTyping) return;

    // Verificar muerte
    if (choice.deathChance && checkDeath(choice.deathChance)) {
      return;
    }

    addToHistory(choice.text);
    makeChoice(choice);
  };

  // Guardar partida
  const handleSave = () => {
    const name = saveName.trim() || `Partida ${new Date().toLocaleString()}`;
    saveGame(name);
    setShowSaveDialog(false);
    setSaveName('');
  };

  // Reiniciar juego
  const handleRestart = () => {
    setShowRestartDialog(true);
  };

  // Obtener color según nivel de corrupción
  const getCorruptionColor = (level: number) => {
    if (level < 25) return 'text-green-400';
    if (level < 50) return 'text-yellow-400';
    if (level < 75) return 'text-orange-400';
    return 'text-red-500';
  };

  // Obtener color según nivel de insight
  const getInsightColor = (level: number) => {
    if (level < 25) return 'text-slate-400';
    if (level < 50) return 'text-blue-400';
    if (level < 75) return 'text-purple-400';
    return 'text-pink-400';
  };

  if (!character || !currentScene) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-red-500">Error: No se pudo cargar el juego</div>
      </div>
    );
  }

  const historyLimit = 20;
  const visibleHistory = showAllHistory
    ? choicesHistory
    : choicesHistory.slice(-historyLimit);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-red-950/10 to-slate-950 flex flex-col">
      {/* Header */}
      <header className="bg-slate-900/80 border-b border-red-900/30 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-red-500">Carne y Ceniza</h1>
            <Separator orientation="vertical" className="h-6 bg-red-900/30" />
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <User className="w-4 h-4" />
              <span>{character.name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Clock className="w-4 h-4" />
              <span>{formatTime(playTime)}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Stats rápidos */}
            <div className="hidden md:flex items-center gap-4 mr-4">
              <div className="flex items-center gap-1" title="Corrupción">
                <Skull className="w-4 h-4 text-red-500" />
                <span className={cn("text-sm font-mono", getCorruptionColor(character.corruptionLevel))}>
                  {character.corruptionLevel}%
                </span>
              </div>
              <div className="flex items-center gap-1" title="Conocimiento">
                <Eye className="w-4 h-4 text-purple-500" />
                <span className={cn("text-sm font-mono", getInsightColor(character.insightLevel))}>
                  {character.insightLevel}%
                </span>
              </div>
            </div>

            {/* Menú de personaje */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-red-900/50"
                  aria-label="Abrir menu de personaje"
                >
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-slate-900 border-red-900/30 w-full sm:max-w-md">
                <SheetHeader className="px-6 pt-6">
                  <SheetTitle className="text-red-500">{character.name}</SheetTitle>
                </SheetHeader>
                
                <div className="mt-4 space-y-6 px-6 pb-8">
                  {/* Profesión */}
                  <section className="rounded-lg border border-slate-800/60 bg-slate-950/30 p-4">
                    <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">
                      Profesión
                    </h3>
                    <p className="text-slate-300">
                      {character.profession.charAt(0).toUpperCase() + character.profession.slice(1)}
                    </p>
                  </section>

                  {/* Atributos */}
                  <section className="rounded-lg border border-slate-800/60 bg-slate-950/30 p-4">
                    <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">
                      Atributos
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span className="text-slate-400">Vigor:</span>
                        <span className="text-slate-200 font-mono">{character.attributes.vigor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Brain className="w-4 h-4 text-blue-500" />
                        <span className="text-slate-400">Mente:</span>
                        <span className="text-slate-200 font-mono">{character.attributes.mind}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-slate-400">Espíritu:</span>
                        <span className="text-slate-200 font-mono">{character.attributes.spirit}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-green-500" />
                        <span className="text-slate-400">Carne:</span>
                        <span className="text-slate-200 font-mono">{character.attributes.flesh}</span>
                      </div>
                    </div>
                  </section>

                  {/* Corrupción e Insight */}
                  <section className="rounded-lg border border-slate-800/60 bg-slate-950/30 p-4">
                    <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">
                      Estado
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 flex items-center gap-2">
                          <Skull className="w-4 h-4" /> Corrupción
                        </span>
                        <span className={cn("font-mono", getCorruptionColor(character.corruptionLevel))}>
                          {character.corruptionLevel}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 h-2 rounded-full transition-all"
                          style={{ width: `${character.corruptionLevel}%` }}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-slate-400 flex items-center gap-2">
                          <Eye className="w-4 h-4" /> Conocimiento
                        </span>
                        <span className={cn("font-mono", getInsightColor(character.insightLevel))}>
                          {character.insightLevel}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-slate-500 via-blue-500 to-purple-500 h-2 rounded-full transition-all"
                          style={{ width: `${character.insightLevel}%` }}
                        />
                      </div>
                    </div>
                  </section>

                  {/* Inventario */}
                  <section className="rounded-lg border border-slate-800/60 bg-slate-950/30 p-4">
                    <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Backpack className="w-4 h-4" /> Inventario ({character.inventory.length})
                    </h3>
                    <div className="space-y-2">
                      {character.inventory.length === 0 ? (
                        <p className="text-slate-600 text-sm">Vacío</p>
                      ) : (
                        character.inventory.map((item) => (
                          <div key={item.id} className="bg-slate-800/50 p-2 rounded text-sm">
                            <p className="text-slate-300 font-medium">{item.name}</p>
                            <p className="text-slate-500 text-xs">{item.description}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </section>

                  {/* Mutaciones */}
                  {character.mutations.length > 0 && (
                    <section className="rounded-lg border border-slate-800/60 bg-slate-950/30 p-4">
                      <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" /> Mutaciones
                      </h3>
                      <div className="space-y-2">
                        {character.mutations.map((mutation) => (
                          <div 
                            key={mutation.id} 
                            className={cn(
                              "p-2 rounded text-sm",
                              mutation.isBeneficial ? "bg-green-900/20 border border-green-900/30" : "bg-red-900/20 border border-red-900/30"
                            )}
                          >
                            <p className={cn("font-medium", mutation.isBeneficial ? "text-green-400" : "text-red-400")}>
                              {mutation.name}
                            </p>
                            <p className="text-slate-500 text-xs">{mutation.description}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Historial */}
                  {choicesHistory.length > 0 && (
                    <section className="rounded-lg border border-slate-800/60 bg-slate-950/30 p-4">
                      <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Historial
                      </h3>
                      <div className="space-y-1 max-h-40 overflow-y-auto">
                        {visibleHistory.map((choice, idx) => (
                          <p key={`${idx}-${choice}`} className="text-xs text-slate-500">
                            {showAllHistory
                              ? `${idx + 1}. ${choice}`
                              : `${choicesHistory.length - visibleHistory.length + idx + 1}. ${choice}`}
                          </p>
                        ))}
                      </div>
                      {choicesHistory.length > historyLimit && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-2 px-2 text-slate-400 hover:text-slate-200"
                          onClick={() => setShowAllHistory(prev => !prev)}
                        >
                          {showAllHistory ? 'Mostrar menos' : `Mostrar todo (${choicesHistory.length})`}
                        </Button>
                      )}
                    </section>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            {/* Botón de guardar */}
            <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
               <DialogTrigger asChild>
                 <Button
                   variant="outline"
                   size="icon"
                   className="border-red-900/50"
                   aria-label="Guardar partida"
                 >
                   <Save className="w-4 h-4" />
                 </Button>
               </DialogTrigger>
              <DialogContent className="bg-slate-900 border-red-900/30">
                <DialogHeader>
                  <DialogTitle className="text-red-500">Guardar Partida</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={saveName}
                    onChange={(e) => setSaveName(e.target.value)}
                    placeholder="Nombre del guardado..."
                    className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-slate-100"
                  />
                  <Button onClick={handleSave} className="w-full bg-red-700 hover:bg-red-600">
                    Guardar
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Botón de reiniciar */}
            <Button
              variant="outline"
              size="icon"
              onClick={handleRestart}
              className="border-red-900/50"
              aria-label="Reiniciar partida"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <AlertDialog open={showRestartDialog} onOpenChange={setShowRestartDialog}>
        <AlertDialogContent className="bg-slate-900 border-red-900/30">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-500">Reiniciar partida</AlertDialogTitle>
            <AlertDialogDescription className="text-slate-400">
              Perderas todo tu progreso. Esta accion no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-red-900/50 hover:bg-red-950/30 text-slate-300">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-700 hover:bg-red-600 text-white"
              onClick={() => {
                resetGame();
                setShowRestartDialog(false);
              }}
            >
              Reiniciar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-4">
        {/* Área de texto */}
        <ScrollArea
          className="flex-1 bg-slate-900/50 border border-red-900/20 rounded-lg p-6 mb-4"
          viewportRef={scrollRef}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-red-400">{currentScene.title}</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                {displayedText}
                {isTyping && <span className="animate-pulse text-red-500">|</span>}
              </p>
            </div>
          </div>
        </ScrollArea>

        {/* Área de opciones */}
        <div className="space-y-2">
          {currentScene.isEnding ? (
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-red-500 text-red-400 text-lg px-4 py-2">
                {currentScene.endingType === 'salvation' && 'FINAL: Salvación'}
                {currentScene.endingType === 'damnation' && 'FINAL: Condena'}
                {currentScene.endingType === 'transcendence' && 'FINAL: Trascendencia'}
                {currentScene.endingType === 'madness' && 'FINAL: Locura'}
                {currentScene.endingType === 'servitude' && 'FINAL: Servidumbre'}
                {currentScene.endingType === 'annihilation' && 'FINAL: Aniquilación'}
              </Badge>
              <p className="text-slate-400 text-sm">
                Has completado una rama de la historia. Hay múltiples finales por descubrir.
              </p>
              <Button onClick={handleRestart} className="bg-red-700 hover:bg-red-600">
                Jugar de Nuevo
              </Button>
            </div>
          ) : (
            <>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                Elige tu camino
              </p>
              <div className="grid grid-cols-1 gap-2">
                {currentScene.choices.map((choice, idx) => {
                  const canChoose = canMakeChoice(
                    choice.requiredAttributes,
                    choice.requiredItems,
                    choice.requiredMutations
                  );
                  
                  return (
                    <Button
                      key={choice.id}
                      onClick={() => handleChoice(choice)}
                      disabled={!canChoose || isTyping}
                      variant="outline"
                      className={cn(
                        "justify-start text-left h-auto py-3 px-4",
                        canChoose 
                          ? "border-red-900/50 hover:bg-red-950/30 hover:border-red-700 text-slate-200" 
                          : "border-slate-800 text-slate-600 cursor-not-allowed"
                      )}
                    >
                      <span className="text-red-500/50 mr-2">{idx + 1}.</span>
                      <span>{choice.text}</span>
                      {!canChoose && (
                        <span className="ml-auto text-xs text-slate-600">
                          (No cumples requisitos)
   