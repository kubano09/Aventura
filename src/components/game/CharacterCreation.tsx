import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { 
  Brain, 
  Heart, 
  Zap, 
  Activity,
  Scissors,
  Palette,
  BookOpen,
  Search,
  Wrench
} from 'lucide-react';
import type { Profession } from '@/types/game';
import { PROFESSIONS } from '@/types/game';
import { useGameStore } from '@/stores/gameStore';
import { cn } from '@/lib/utils';

const professionIcons: Record<Profession, React.ReactNode> = {
  cirujano: <Scissors className="w-6 h-6" />,
  artista: <Palette className="w-6 h-6" />,
  sacerdote: <BookOpen className="w-6 h-6" />,
  investigador: <Search className="w-6 h-6" />,
  mecanico: <Wrench className="w-6 h-6" />
};

export function CharacterCreation() {
  const [name, setName] = useState('');
  const [selectedProfession, setSelectedProfession] = useState<Profession | null>(null);
  const [step, setStep] = useState<'name' | 'profession'>('name');
  
  const createCharacter = useGameStore(state => state.createCharacter);
  const startGame = useGameStore(state => state.startGame);

  const handleNameSubmit = () => {
    if (name.trim().length >= 2) {
      setStep('profession');
    }
  };

  const handleProfessionSelect = (profession: Profession) => {
    setSelectedProfession(profession);
  };

  const handleStartGame = () => {
    if (selectedProfession && name.trim()) {
      createCharacter(name.trim(), selectedProfession);
      startGame();
    }
  };

  const getAttributeIcon = (attr: string) => {
    switch (attr) {
      case 'vigor': return <Zap className="w-4 h-4" />;
      case 'mind': return <Brain className="w-4 h-4" />;
      case 'spirit': return <Heart className="w-4 h-4" />;
      case 'flesh': return <Activity className="w-4 h-4" />;
      default: return null;
    }
  };

  const getAttributeName = (attr: string) => {
    switch (attr) {
      case 'vigor': return 'Vigor';
      case 'mind': return 'Mente';
      case 'spirit': return 'Espíritu';
      case 'flesh': return 'Carne';
      default: return attr;
    }
  };

  if (step === 'name') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-red-950/20 to-slate-950 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-slate-900/90 border-red-900/50">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-red-500">
              Carne y Ceniza
            </CardTitle>
            <CardDescription className="text-slate-400">
              ¿Quién eres en esta pesadilla?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-300">
                Tu nombre
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Escribe tu nombre..."
                className="bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500"
                maxLength={30}
                onKeyDown={(e) => e.key === 'Enter' && handleNameSubmit()}
              />
              <p className="text-xs text-slate-500">
                Mínimo 2 caracteres
              </p>
            </div>
            
            <Button 
              onClick={handleNameSubmit}
              disabled={name.trim().length < 2}
              className="w-full bg-red-900 hover:bg-red-800 text-white"
            >
              Continuar
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-red-950/20 to-slate-950 p-4 overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-6 py-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-red-500">Elige tu Origen</h1>
          <p className="text-slate-400">
            Tu profesión determinará tus habilidades iniciales y tu perspectiva de este mundo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(Object.keys(PROFESSIONS) as Profession[]).map((prof) => {
            const profData = PROFESSIONS[prof];
            const isSelected = selectedProfession === prof;
            
            return (
              <Card
                key={prof}
                onClick={() => handleProfessionSelect(prof)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleProfessionSelect(prof);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                aria-label={`Seleccionar ${profData.name}`}
                className={cn(
                  "cursor-pointer transition-all duration-300",
                  isSelected 
                    ? 'bg-red-950/50 border-red-500 ring-2 ring-red-500/50' 
                    : 'bg-slate-900/80 border-slate-800 hover:border-red-900/50 hover:bg-slate-800/80'
                )}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={cn("p-2 rounded-lg", isSelected ? 'bg-red-500/20 text-red-400' : 'bg-slate-800 text-slate-400')}>
                      {professionIcons[prof]}
                    </div>
                    <CardTitle className="text-lg text-slate-100">
                      {profData.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {profData.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Atributos Iniciales
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(profData.baseAttributes).map(([attr, value]) => (
                        <div 
                          key={attr}
                          className="flex items-center gap-2 text-sm"
                        >
                          <span className="text-slate-500">{getAttributeIcon(attr)}</span>
                          <span className="text-slate-400">{getAttributeName(attr)}:</span>
                          <span className={cn("font-mono font-bold", value >= 4 ? 'text-red-400' : 'text-slate-300')}>
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Equipo Inicial
                    </p>
                    <ul className="space-y-1">
                      {profData.startingItems.map((item) => (
                        <li key={item.id} className="text-xs text-slate-400 flex items-start gap-2">
                          <span className="text-red-500/50">•</span>
                          <span>{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {selectedProfession && (
          <div className="flex justify-center pt-4">
            <Button
              onClick={handleStartGame}
              size="lg"
              className="bg-red-700 hover:bg-red-600 text-white px-8"
            >
              Comenzar la Pesadilla
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
