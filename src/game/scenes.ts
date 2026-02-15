import type { Scene, Item, Mutation } from '@/types/game';

// Items que se pueden encontrar en el juego
export const ITEMS: Record<string, Item> = {
  // Items de inicio por profesión (ya definidos en types)
  
  // Items encontrables
  key_bone: { id: 'key_bone', name: 'Llave de Hueso', description: 'Una llave tallada en fémur humano. Siente tu intención.', usable: true, effect: 'Abre puertas selladas por la Orden' },
  blood_vial: { id: 'blood_vial', name: 'Vial de Sangre Primordial', description: 'Líquido carmesí que nunca deja de moverse, nunca deja de vivir.', usable: true, effect: 'Restaura vida o atrae entidades' },
  skin_map: { id: 'skin_map', name: 'Mapa de Piel', description: 'Un pergamino hecho de epidermis estirada. Las marcas cambian cuando no miras.', usable: true, effect: 'Revela ubicaciones secretas' },
  pain_crystal: { id: 'pain_crystal', name: 'Cristal de Dolor', description: 'Una gema que contiene la agonía de cien almas. Brilla con sufrimiento.', usable: true, effect: 'Canaliza dolor como energía' },
  flesh_seed: { id: 'flesh_seed', name: 'Semilla de Carne', description: 'Una semilla que germina en cualquier materia orgánica. Crece rápido.', usable: true, effect: 'Crea pasajes o bloquea perseguidores' },
  void_dust: { id: 'void_dust', name: 'Polvo del Vacío', description: 'Partículas de nada absoluta. Donde caen, la realidad se desgasta.', usable: true, effect: 'Disuelve barreras físicas y mágicas' },
  nerve_thread: { id: 'nerve_thread', name: 'Hilo Nervioso', description: 'Un cordón nervioso extraído que aún transmite sensaciones.', usable: true, effect: 'Conecta mentes o siente a distancia' },
  organ_box: { id: 'organ_box', name: 'Caja de Órganos', description: 'Un estuche que contiene órganos de especies desconocidas. Aún funcionan.', usable: true, effect: 'Reemplaza órganos dañados o mejora capacidades' },
  whisper_lantern: { id: 'whisper_lantern', name: 'Linterna de Susurros', description: 'La luz revela lo oculto, pero atrae a quienes escuchan.', usable: true, effect: 'Ilumina lo invisible, atrae peligro' },
  sigil_brand: { id: 'sigil_brand', name: 'Marca de Sigilos', description: 'Un hierro al rojo vivo con símbolos que queman más allá de la piel.', usable: true, effect: 'Marca almas y sella pactos' },
  memory_flask: { id: 'memory_flask', name: 'Frasco de Memorias', description: 'Contiene recuerdos que no son tuyos. Visiones de otros... o de otras cosas.', usable: true, effect: 'Obtiene conocimiento perdido' },
  chain_links: { id: 'chain_links', name: 'Eslabones de la Cadena', description: 'Fragmentos de las cadenas que atan a los Penitentes. Aún retienen poder.', usable: true, effect: 'Controla o daña a los Penitentes' },
  heart_core: { id: 'heart_core', name: 'Núcleo Cardíaco', description: 'Un corazón que no ha dejado de latir en siglos. Pertenece a algo antiguo.', usable: true, effect: 'Gran poder de curación o sacrificio ritual' },
  eye_sphere: { id: 'eye_sphere', name: 'Esfera Ocular', description: 'Un ojo que ve en todas las direcciones. Nunca cierra el párpado.', usable: true, effect: 'Vigilancia y detección de trampas' },
  tongue_whip: { id: 'tongue_whip', name: 'Látigo de Lenguas', description: 'Lenguas humanas entretejidas que aún saborean el aire.', usable: true, effect: 'Arma que detecta mentiras' },
  marrow_ink: { id: 'marrow_ink', name: 'Tinta de Médula', description: 'Tinta hecha de médula ósea. Lo escrito con ella se vuelve real.', usable: true, effect: 'Crea realidad temporal' },
};

// Mutaciones que se pueden adquirir
export const MUTATIONS: Record<string, Mutation> = {
  extra_eyes: { 
    id: 'extra_eyes', 
    name: 'Ojos Adicionales', 
    description: 'Pequeños ojos han brotado en tu nuca y palmas. Ves lo que no deberías.', 
    effect: 'Detectas peligros y entidades invisibles', 
    isBeneficial: true 
  },
  bone_blades: { 
    id: 'bone_blades', 
    name: 'Hojas Óseas', 
    description: 'Tus antebrazos se han alargado, afilándose en puntas de hueso blanquecino.', 
    effect: 'Armas naturales letales', 
    isBeneficial: true 
  },
  elastic_flesh: { 
    id: 'elastic_flesh', 
    name: 'Carne Elástica', 
    description: 'Tu piel puede estirarse, comprimirse y moldearse de formas imposibles.', 
    effect: 'Puedes atravesar espacios pequeños y resistir daño contundente', 
    isBeneficial: true 
  },
  second_heart: { 
    id: 'second_heart', 
    name: 'Segundo Corazón', 
    description: 'Un segundo órgano cardíaco ha crecido junto al primero. Tu sangre es más fuerte.', 
    effect: 'Regeneración acelerada y resistencia aumentada', 
    isBeneficial: true 
  },
  sensory_tentacles: { 
    id: 'sensory_tentacles', 
    name: 'Tentáculos Sensoriales', 
    description: 'Apéndices nerviosos emergen de tu espalda, sondando el ambiente.', 
    effect: 'Percepción aumentada, detección de peligro', 
    isBeneficial: true 
  },
  acidic_blood: { 
    id: 'acidic_blood', 
    name: 'Sangre Ácida', 
    description: 'Tu sangre corroe el metal y quema la carne. Tus heridas son armas.', 
    effect: 'Daño a atacantes cercanos, inmunidad a venenos', 
    isBeneficial: true 
  },
  hollow_bones: { 
    id: 'hollow_bones', 
    name: 'Huesos Huecos', 
    description: 'Tus huesos se han vaciado, llenándose de aire y susurros.', 
    effect: 'Movimiento silencioso y velocidad aumentada', 
    isBeneficial: true 
  },
  mind_whispers: { 
    id: 'mind_whispers', 
    name: 'Susurros Mentales', 
    description: 'Escuchas pensamientos que no son tuyos. Algunos te guían, otros te mienten.', 
    effect: 'Pistas ocasionales, pero también distracciones', 
    isBeneficial: false 
  },
  pain_addiction: { 
    id: 'pain_addiction', 
    name: 'Adicción al Dolor', 
    description: 'El dolor ya no te daña; te excita. Buscas heridas como otros buscan placer.', 
    effect: 'Inmunidad al dolor, pero comportamiento autodestructivo', 
    isBeneficial: false 
  },
  shadow_bond: { 
    id: 'shadow_bond', 
    name: 'Vínculo de Sombras', 
    description: 'Tu sombra tiene voluntad propia y a veces actúa sin tu permiso.', 
    effect: 'La sombra puede interactuar con objetos, pero es impredecible', 
    isBeneficial: false 
  },
  flesh_memory: { 
    id: 'flesh_memory', 
    name: 'Memoria de Carne', 
    description: 'Tu cuerpo recuerda cada herida. A veces, las viejas cicatrices se reabren.', 
    effect: 'Recuerdos físicos de lugares, pero regeneración imperfecta', 
    isBeneficial: false 
  },
  void_touch: { 
    id: 'void_touch', 
    name: 'Toque del Vacío', 
    description: 'Tus manos pueden atravesar materia sólida, pero a veces se quedan atascadas.', 
    effect: 'Puedes atravesar paredes brevemente, pero riesgo de quedar atrapado', 
    isBeneficial: false 
  },
};

// Escenas del juego
export const SCENES: Record<string, Scene> = {
  // === PROLOGO ===
  prologue: {
    id: 'prologue',
    title: 'El Despertar',
    content: `Despiertas en una oscuridad que tiene peso y textura. No es la ausencia de luz; es una presencia que te envuelve como terciopelo húmedo. Tu piel hormiguea con la sensación de ser observado por ojos que no pertenecen a ningún rostro.

El último recuerdo que tienes es de tu vida anterior: el mundo de calles pavimentadas y cielos estrellados que no se mueven. Ahora, el aire que respiras sabe a cobre y a algo dulce, como fruta podrida. Hay un zumbido constante, bajo y orgánico, que parece provenir de las paredes mismas.

Tus manos encuentran superficie bajo ti: no piedra, no metal. Es cálido. Es blando. Se contrae ligeramente bajo tus dedos como si estuviera vivo.

Una luz comienza a brillar desde algún lugar adelante. No es la luz del sol ni la de una llama. Es una luminiscencia carmesí que pulsa con ritmo cardíaco, revelando pasadizos que se extienden en múltiples direcciones, cada uno marcado con símbolos que hieren tus ojos cuando intentas leerlos.

Algo en tu interior —una voz que no es tuya pero tampoco es completamente ajena— susurra:

"Bienvenido a la Ciudad de la Carne. Aquí, el dolor es puerta y el placer es llave. Aquí, los secretos de la carne y el espíritu se revelan a quienes tienen el valor... o la desesperación... de buscarlos."

La oscuridad a tu espalda se espesa. No puedes quedarte aquí. Debes elegir.`,
    choices: [
      { id: 'c1', text: 'Seguir el pasillo iluminado en carmesí hacia adelante', nextSceneId: 'crimson_corridor', insightChange: 1 },
      { id: 'c2', text: 'Tomar el pasadizo oscuro a la izquierda, donde el aire es más frío', nextSceneId: 'cold_passage', corruptionChange: 2 },
      { id: 'c3', text: 'Examinar la superficie bajo tus pies antes de moverte', nextSceneId: 'living_floor', insightChange: 2 },
      { id: 'c4', text: 'Gritar pidiendo ayuda, esperando que alguien escuche', nextSceneId: 'the_call', corruptionChange: 5 }
    ]
  },

  // === RAMA: PASILLO CARMESI ===
  crimson_corridor: {
    id: 'crimson_corridor',
    title: 'El Corredor Carmesí',
    content: `Caminas por el pasillo iluminado en carmesí. Las paredes están cubiertas de lo que primero crees que son tapices, pero al acercarte descubres que son membranas translúcidas, estiradas y tensadas sobre marcos de hueso. A través de ellas, distingues siluetas que se mueven: figuras humanoides que caminan, se arrodillan, se contorsionan en poses de éxtasis o agonía.

El suelo es una amalgama de baldosas de carne endurecida, cada una con un tatuaje diferente. Algunos parecen mapas; otros, instrucciones. Uno de ellos, más grande que los demás, muestra una figura que se abre el pecho para revelar un laberinto dentro.

Llegas a una encrucijada. El pasillo principal continúa hacia una gran puerta circular con bordes dentados. A tu derecha, una abertura más pequeña emite un sonido: un coro de voces que cantan en un idioma que no reconoces, pero que hace que tu estómago se contraiga de manera extraña.

A tu izquierda, una escalera desciende hacia una oscuridad donde algo reluce metálicamente.`,
    choices: [
      { id: 'c1', text: 'Continuar hacia la puerta circular dentada', nextSceneId: 'maw_gate', insightChange: 1 },
      { id: 'c2', text: 'Investigar la abertura con el canto coral', nextSceneId: 'chorus_chamber', corruptionChange: 3 },
      { id: 'c3', text: 'Descender la escalera hacia lo metálico', nextSceneId: 'iron_depths', insightChange: 2 },
      { id: 'c4', text: 'Examinar el tatuaje del laberinto en el suelo más de cerca', nextSceneId: 'flesh_map_revelation', insightChange: 3, itemGain: ITEMS.skin_map }
    ]
  },

  chorus_chamber: {
    id: 'chorus_chamber',
    title: 'La Cámara del Coro',
    content: `La abertura se expande en una cámara circular cuyas paredes están cubiertas de bocas. No hay ojos, no hay narices, no hay otras facciones: solo bocas de todos los tamaños, desde diminutas como la de un recién nacido hasta enormes como la de una ballena, todas abiertas, todas cantando.

El sonido no es desagradable. De hecho, es hermoso de una manera que te perturba profundamente. Las armonías no siguen ninguna escala musical que conozcas; parecen diseñadas para vibrar directamente en tus órganos. Sientes el canto en tu hígado, en tu bazo, en la médula de tus huesos.

En el centro de la cámara hay un pedestal de carne pulsante. Sobre él descansa un objeto: una máscara de cristal que parece contener un rostro humano suspendido en líquido. El rostro es hermoso, sereno, y sus ojos están abiertos mirando hacia ti.

Las bocas cambian su canto. Ahora pronuncian tu nombre. No el nombre que usas en el mundo exterior, sino tu nombre verdadero, el que tu alma respondía antes de que nacieras.`,
    choices: [
      { id: 'c1', text: 'Tomar la máscara de cristal', nextSceneId: 'mask_taken', itemGain: { id: 'crystal_mask', name: 'Máscara de Cristal', description: 'Contiene un rostro que no es tuyo pero que podría volverse tuyo.', usable: true, effect: 'Cambia tu apariencia y confunde a las entidades' }, corruptionChange: 5, insightChange: 3 },
      { id: 'c2', text: 'Intentar comunicarte con las bocas, preguntando quién eres tú', nextSceneId: 'true_name', insightChange: 5, corruptionChange: 2 },
      { id: 'c3', text: 'Salir rápidamente de la cámara, tapándote los oídos', nextSceneId: 'crimson_corridor_return', corruptionChange: 1 },
      { id: 'c4', text: 'Cantar junto con el coro, intentando armonizar', nextSceneId: 'chorus_joined', mutationGain: MUTATIONS.sensory_tentacles, corruptionChange: 8 }
    ]
  },

  mask_taken: {
    id: 'mask_taken',
    title: 'El Rostro Prestado',
    content: `Tus dedos tocan la máscara de cristal. Es cálida, casi demasiado cálida, como piel con fiebre. Al levantarla, el rostro dentro parpadea. No debería ser posible —es solo un rostro suspendido, sin cuerpo, sin vida— pero sus párpados se cierran y se abren, y sus labios se mueven formando palabras silenciosas.

"Ponme", susurra una voz en tu mente. "Sé quién quieres ser. Sé quién podrías haber sido."

Al ponerte la máscara, sientes un cambio inmediato. No es solo tu apariencia externa —aunque sabes que ahora llevas otro rostro— sino algo más profundo. Recuerdos que no son tuyos fluyen en tu conciencia: un banquete bajo estrellas que se mueven en patrones geométricos imposibles, el tacto de manos que tienen demasiados dedos, el sabor de un vino hecho de lágrimas.

También recuerdas cosas útiles. Conoces ahora el nombre de esta ciudad: Sepulcro. Sabes que fue construida no por humanos, sino por algo que vino antes, algo que modificó a humanos para que sirvieran como ladrillos vivos en sus murallas.

La máscara no quiere salir. Puedes sentir su voluntad entrelazándose con la tuya, suave pero insistente, como una corriente submarina.`,
    choices: [
      { id: 'c1', text: 'Aceptar la fusión, dejar que la máscara te guíe', nextSceneId: 'mask_fusion', mutationGain: MUTATIONS.mind_whispers, corruptionChange: 10, insightChange: 5 },
      { id: 'c2', text: 'Forzar la máscara a salir, rechazando los recuerdos ajenos', nextSceneId: 'mask_rejected', attributeChange: { spirit: -1 }, corruptionChange: 3 },
      { id: 'c3', text: 'Negociar con la máscara, usar su conocimiento pero mantener tu voluntad', nextSceneId: 'mask_pact', requiredAttributes: { mind: 4 }, insightChange: 3 },
      { id: 'c4', text: 'Buscar en los recuerdos nuevos información sobre una salida', nextSceneId: 'escape_knowledge', requiredAttributes: { mind: 3 }, insightChange: 4 }
    ]
  },

  mask_fusion: {
    id: 'mask_fusion',
    title: 'El Nuevo Rostro',
    content: `Dejas que la máscara se hunda en ti, literalmente. El cristal se ablanda, fluye como mercurio caliente, se integra con tu piel. Ya no hay línea donde terminas y donde comienza ella. Eres algo nuevo, algo que es parcialmente tú y parcialmente el otro.

Las bocas en las paredes celebran tu transformación con un crescendo de voces. "Hermano", cantan. "Hermano de carne y cristal. Bienvenido a la familia."

A través de los ojos que ahora son parcialmente tuyos y parcialmente ajenos, ves la cámara de manera diferente. Las bocas no son solo bocas; son puertas. Cada una lleva a un lugar diferente, un nivel diferente de Sepulcro. Algunas llevan a lugares que no existen en ningún mapa físico: memorias de la ciudad, posibilidades que nunca fueron realizadas, sueños de los que habitan sus profundidades.

Una boca en particular —grande, con labios de un púrpura casi negro— parece llamarte. A través de ella, sientes una presencia: algo antiguo, algo que fue una vez como tú, algo que eligió transformarse completamente.`,
    choices: [
      { id: 'c1', text: 'Entrar por la boca de labios púrpura', nextSceneId: 'ancient_meeting', corruptionChange: 5, insightChange: 5 },
      { id: 'c2', text: 'Elegir una boca al azar, confiando en tu nueva intuición', nextSceneId: 'random_portal', corruptionChange: 3 },
      { id: 'c3', text: 'Buscar una boca que lleve a la superficie', nextSceneId: 'surface_search', requiredAttributes: { mind: 5 }, insightChange: 2 },
      { id: 'c4', text: 'Intentar crear tu propia puerta usando el poder de la máscara', nextSceneId: 'door_creation', requiredAttributes: { spirit: 4 }, corruptionChange: 8, insightChange: 3 }
    ]
  },

  ancient_meeting: {
    id: 'ancient_meeting',
    title: 'El Penitente Eterno',
    content: `Atravesar la boca es como atravesar un velo de carne viva. Hay resistencia, calor, humedad. Y luego, emergencia en un espacio que desafía la geometría euclidiana.

Estás en una catedral hecha de huesos articulados, cada uno del tamaño de un árbol maduro. Los huesos se mueven lentamente, creando patrones que son a la vez arquitectura y danza. La luz aquí proviene de grietas en el espacio mismo, fisuras donde la realidad se desgasta y deja escapar algo más brillante y más terrible que cualquier sol.

En el centro de esta catedral, suspendido por cadenas de carne endurecida, cuelga una figura. No es humana, aunque una vez lo fue. Su cuerpo se ha extendido, estirado, transformado en algo que recuerda a una mariposa hecha de carne y hueso y metal oxidado. Tiene docenas de brazos, cada uno terminando en una herramienta diferente: cinceles, agujas, ganchos, espejos.

"El nuevo elegido", dice la figura con una voz que es un coro de voces individuales. "Viene buscando respuestas. Viene buscando escape. Pero lo que encontrará... eso depende de lo que esté dispuesto a sacrificar."

Las cadenas se tensan y la figura desciende hasta estar frente a ti. Sus ojos —hay demasiados, en lugares donde no deberían estar— te escrutan con algo que podría ser interés, o hambre, o compasión.`,
    choices: [
      { id: 'c1', text: 'Preguntar cómo escapar de Sepulcro', nextSceneId: 'escape_price', insightChange: 2 },
      { id: 'c2', text: 'Preguntar qué es este lugar realmente', nextSceneId: 'truth_of_sepulcro', corruptionChange: 3, insightChange: 4 },
      { id: 'c3', text: 'Ofrecer algo a cambio de poder', nextSceneId: 'power_bargain', corruptionChange: 10, itemLoss: 'heart_core' },
      { id: 'c4', text: 'Atacar a la figura con lo que tengas', nextSceneId: 'ancient_combat', deathChance: 0.7 }
    ]
  },

  truth_of_sepulcro: {
    id: 'truth_of_sepulcro',
    title: 'La Verdad Que Duele',
    content: `La figura se ríe, un sonido como huesos rotos en un barril de metal. "¿La verdad? La verdad es que Sepulcro no es un lugar. Sepulcro es un proceso. Es el útero donde la humanidad gesta su próxima forma.

"Hace milenios, vinieron los Arquitectos. No de las estrellas —las estrellas son demasiado pequeñas para contenerlos— sino de los espacios entre los átomos, de las dimensiones que existen en los pliegues de la realidad. Encontraron a sus primeros humanos y les mostraron posibilidades: que la carne no es prisión sino plastilina, que el dolor no es advertencia sino maestro, que la mente no es límite sino puerta.

"Algunos humanos huyeron aterrorizados. Otros se quedaron. Se quedaron y aprendieron y cambiaron. Construyeron esta ciudad como un templo al potencial biológico. Aquí, las leyes naturales son sugerencias. Aquí, la evolución es voluntaria y rápida.

"Los que dominan el dolor se convierten en Cenobitas —sacerdotes de la carne que exploran los límites de la sensación. Los que dominan el placer se convierten en Lamentadores —oráculos que hablan con la voz del éxtasis. Los que dominan ambos..." La figura hace una pausa dramática. "Los que dominan ambos se convierten en Arquitectos."

Uno de sus brazos se extiende, tocando tu pecho con un dedo que es más una garra. "Tú tienes potencial. Puedo verlo en la forma en que la máscara te ha aceptado. Pero el potencial no es destino. Debes elegir."`,
    choices: [
      { id: 'c1', text: 'Preguntar cómo convertirse en Cenobita', nextSceneId: 'path_cenobite', corruptionChange: 5, insightChange: 3 },
      { id: 'c2', text: 'Preguntar sobre los Lamentadores', nextSceneId: 'path_lamentor', corruptionChange: 3, insightChange: 5 },
      { id: 'c3', text: 'Declarar que quieres convertirte en Arquitecto', nextSceneId: 'path_architect', corruptionChange: 15, insightChange: 10 },
      { id: 'c4', text: 'Rechazar todos los caminos, insistir en escapar', nextSceneId: 'rejection_consequences', corruptionChange: 2 }
    ]
  },

  path_cenobite: {
    id: 'path_cenobite',
    title: 'El Camino de los Cenobitas',
    content: `"Los Cenobitas", dice la figura con algo que podría ser respeto, "son los exploradores del dolor. No el dolor simple, el de huesos rotos y carne cortada. Eso es para principiantes. Los Cenobitas buscan el dolor existencial, el dolor que transforma la conciencia misma.

"Para convertirte en uno, debes someterte a las Pruebas de la Carne. Siete pruebas, cada una diseñada para expandir tus límites de una manera diferente. La primera prueba es la de la Piel: debes permitir que tu epidermis sea modificada, sensibilizada, para que sientas no solo el tacto físico sino las emociones de quienes te rodean.

"La segunda es la de los Músculos: tus fibras musculares serán reconfiguradas, dándote fuerza sobrehumana pero también la capacidad de moverte de formas que desafían la anatomía.

"La tercera es la de los Huesos: tu esqueleto será expuesto, esculpido, endurecido hasta ser más fuerte que el acero.

"La cuarta es la de los Órganos: cada órgano interno será reemplazado o duplicado, optimizado para funciones que ni siquiera imaginas.

"La quinta es la de los Nervios: tu sistema nervioso se expandirá más allá de tu cuerpo, conectándote con la red de sensación que permea toda Sepulcro.

"La sexta es la de la Mente: tus límites de percepción serán destruidos, permitiéndote ver las dimensiones que existen paralelas a la nuestra.

"La séptima..." La figura sonríe, mostrando dientes que son pequeñas herramientas metálicas. "La séptima es diferente para cada uno. Es la prueba que tú mismo diseñas, el límite final que eliges traspasar."

"¿Aceptas comenzar este camino?"`,
    choices: [
      { id: 'c1', text: 'Aceptar las Pruebas de la Carne', nextSceneId: 'trial_skin', mutationGain: MUTATIONS.elastic_flesh, corruptionChange: 10, insightChange: 5 },
      { id: 'c2', text: 'Pedir tiempo para considerarlo', nextSceneId: 'consideration_time', insightChange: 1 },
      { id: 'c3', text: 'Preguntar qué pasa si fallas una prueba', nextSceneId: 'failure_consequences', corruptionChange: 2 },
      { id: 'c4', text: 'Rechazar, buscando otro camino', nextSceneId: 'other_paths_search', corruptionChange: 1 }
    ]
  },

  trial_skin: {
    id: 'trial_skin',
    title: 'Prueba de la Piel',
    content: `La figura hace un gesto y el suelo bajo tus pies se abre, revelando una cámara circular iluminada por luz que parece provenir de todas las direcciones a la vez. El aire aquí es espeso, casi líquido, y tiene un olor dulzón que te hace marearte.

"Desvístete", ordena la figura. "La piel debe ser expuesta para ser transformada."

Cuando te desnudas, sientes los ojos de la figura —todos sus ojos— sobre ti, pero no es mirada de lascivia. Es la mirada de un artesano evaluando materia prima. Te pide que te acuestes en un pedestal de carne que se eleva del centro de la cámara.

"Esta será dolorosa", advierte. "Pero el dolor es el lenguaje de la carne. Para modificarla, debes hablar su idioma."

Algo cae del techo: gotas de un líquido negro y viscoso que parecen tener voluntad propia. Aterrizan en tu piel y comienzan a moverse, extendiéndose, buscando poros y orificios. Cuando encuentran uno, se introducen.

El dolor es inmediato e indescriptible. No es el dolor de un corte o una quemadura; es el dolor de tu propio cuerpo traicionándote, de células que se rebelan contra su programación, de tejido que se deshace y se recompone a velocidad vertiginosa.

Pero junto con el dolor viene... algo más. Sensaciones nuevas. Puedes sentir la temperatura del aire cambiando en diferentes partes de la habitación. Puedes sentir la presencia de la figura no solo viéndola, sino sintiendo su calor, su peso en el suelo, el ritmo de su respiración. Tu piel ha sido sensibilizada mil veces más allá de lo normal.

Cuando termina, te levantas y miras tu cuerpo. Tu piel es diferente: translúcida en algunas partes, revelando venas y músculos que brillan con luz propia. En otras partes, es más gruesa, casi escamosa, con texturas que cambian cuando las tocas.`,
    choices: [
      { id: 'c1', text: 'Probar tus nuevas capacidades sensoriales', nextSceneId: 'sensory_test', insightChange: 2 },
      { id: 'c2', text: 'Pedir continuar con la siguiente prueba inmediatamente', nextSceneId: 'trial_muscle', mutationGain: MUTATIONS.bone_blades, corruptionChange: 8 },
      { id: 'c3', text: 'Descansar y recuperarte antes de continuar', nextSceneId: 'recovery_chamber', attributeChange: { vigor: 1 } },
      { id: 'c4', text: 'Examinar los cambios en tu piel más detalladamente', nextSceneId: 'skin_examination', insightChange: 3 }
    ]
  },

  // === RAMA: PASADIZO FRIO ===
  cold_passage: {
    id: 'cold_passage',
    title: 'El Pasadizo del Frío Eterno',
    content: `El pasadizo a la izquierda desciende en espiral, y con cada paso la temperatura cae. Tu aliento se condensa en nubes que no se disipan; en cambio, flotan alrededor de ti como espíritus curiosos. Las paredes aquí son diferentes: no carne viva, sino carne preservada, congelada, con una capa de escarcha que brilla con luz propia.

Hay cuerpos incrustados en las paredes. No cadáveres —los cadáveres no respiran, y estos cuerpos exhalan vapor que forma patrones en el aire— sino algo entre la vida y la muerte. Sus ojos están abiertos, mirando sin ver, y sus bocas se mueven en silencio, formando palabras que no puedes oír.

Uno de ellos, una mujer con el rostro parcialmente cubierto de hielo, extiende una mano hacia ti. Sus dedos se mueven en un patrón que reconoces: seña de socorro, de alguien que se ahoga pidiendo ayuda.

Más adelante, el pasadizo se divide. A la derecha, una luz azulada parpadea, y con ella viene el sonido de maquinaria: engranajes, pistones, algo que funciona con ritmo mecánico. A la izquierda, solo oscuridad, pero de ella emana un calor que contradice el frío del pasadizo, un calor que huele a incienso y a carne quemada.`,
    choices: [
      { id: 'c1', text: 'Intentar ayudar a la mujer congelada', nextSceneId: 'frozen_woman', corruptionChange: 3 },
      { id: 'c2', text: 'Seguir hacia la luz azul y la maquinaria', nextSceneId: 'machine_chamber', insightChange: 2 },
      { id: 'c3', text: 'Adentrarte en la oscuridad cálida', nextSceneId: 'warm_darkness', corruptionChange: 5 },
      { id: 'c4', text: 'Examinar los cuerpos congelados más de cerca', nextSceneId: 'frozen_study', insightChange: 3, itemGain: ITEMS.nerve_thread }
    ]
  },

  frozen_woman: {
    id: 'frozen_woman',
    title: 'La Preservada',
    content: `Te acercas a la mujer congelada. Su piel tiene el color del mármol azulado, y sus venas son visibles como líneas de zafiro bajo la superficie. Cuando tocas su mano —está fría, tan fría que quema— sus ojos se enfocan en ti.

"Tú... eres nuevo", susurra. Su voz es el sonido del hielo al romperse. "No llevas... las marcas. Aún no."

Intenta agarrar tu mano con más fuerza, pero sus músculos están rígidos. "Escúchame... rápido. El frío... preserva. No solo el cuerpo. La mente. El alma. Los que se congelan aquí... no cambian. No se transforman. Pero tampoco... escapan."

Tose, y el sonido es como cristal al romperse. "Hay una manera. En el corazón del frío... hay algo que no debería estar aquí. Una semilla de calor. De vida. Si puedes encontrarla... si puedes llevarla a la superficie... podrías romper el ciclo. Pero los Guardianes del Frío... ellos no lo permitirán."

Sus ojos se desenfocan nuevamente. "Date prisa... antes de que el frío te encuentre también. Antes de que decidas que la preservación... es mejor que la transformación."

Su mano cae, y ella vuelve a su estado de animación suspendida. Pero ahora sabes que está consciente, atrapada en su propio cuerpo, viendo y sintiendo pero incapaz de actuar.`,
    choices: [
      { id: 'c1', text: 'Prometer encontrar la semilla de calor', nextSceneId: 'warm_seed_quest', insightChange: 3 },
      { id: 'c2', text: 'Preguntar dónde están los Guardianes del Frío', nextSceneId: 'guardian_location', corruptionChange: 2 },
      { id: 'c3', text: 'Dejarla y continuar hacia la maquinaria', nextSceneId: 'machine_chamber', corruptionChange: 1 },
      { id: 'c4', text: 'Intentar liberarla del hielo con fuerza', nextSceneId: 'free_attempt', attributeChange: { vigor: -1 }, deathChance: 0.3 }
    ]
  },

  machine_chamber: {
    id: 'machine_chamber',
    title: 'La Cámara de los Engranajes',
    content: `La luz azul proviene de enormes cilindros de cristal que contienen relámpagos congelados en el tiempo. Estos cilindros alimentan una maquinaria que no tiene sentido: engranajes del tamaño de casas que giran sin conexión aparente, pistones que se mueven en patrones que desafían la física, cintas transportadoras que llevan... cosas.

Algunas de las cosas en las cintas son objetos: herramientas, ropas, libros. Otras son partes del cuerpo: manos que aún se mueven, ojos que parpadean, corazones que laten. Y otras son personas enteras, o lo que queda de ellas, algunas modificadas de maneras que hacen difícil determinar si están vivas o son solo carne animada.

En el centro de la cámara hay una figura que parece estar esperándote. Es humanoide, pero claramente artificial: un constructo de metal y carne, con engranajes visibles girando donde debería estar el corazón, y cables que serpentean bajo piel transparente.

"Identificación", dice con una voz que es parte mecánica, parte orgánica. "Especie: Humano. Estado: No modificado. Propósito: Indeterminado."

Se acerca, moviéndose con una precisión que es casi hermosa de ver. "Los no modificados no deberían estar aquí. Esta sección es para procesamiento. Para transformación. Para reciclaje."

Uno de sus brazos se transforma, los dedos retrayéndose para revelar una herramienta que brilla con energía. "¿Deseas ser procesado? Es eficiente. Es rápido. Es... inevitable para todos los que permanecen en Sepulcro el tiempo suficiente."`,
    choices: [
      { id: 'c1', text: 'Preguntar qué significa ser procesado', nextSceneId: 'processing_explanation', insightChange: 2 },
      { id: 'c2', text: 'Rechazar y pedir paso seguro', nextSceneId: 'passage_request', requiredAttributes: { spirit: 3 } },
      { id: 'c3', text: 'Atacar al constructo primero', nextSceneId: 'construct_combat', deathChance: 0.5 },
      { id: 'c4', text: 'Ofrecer algo a cambio de información', nextSceneId: 'construct_bargain', itemLoss: 'blood_vial' }
    ]
  },

  // === RAMA: SUELO VIVIENTE ===
  living_floor: {
    id: 'living_floor',
    title: 'La Carne Bajo Tus Pies',
    content: `Te arrodillas y examinas la superficie bajo ti. Es carne, sin duda: tiene la temperatura del cuerpo humano, se contrae y expande con un ritmo que recuerda a la respiración, y cuando presionas con suficiente fuerza, puedes sentir algo que podría ser un latido.

Pero es más complejo que simple carne. Hay patrones en la superficie: líneas que forman símbolos, canales que parecen diseñados para transportar líquidos, protuberancias que podrían ser órganos sensoriales. Es como estar sobre el cuerpo de un gigante, o tal vez sobre algo aún más grande.

Tus dedos encuentran algo duro. Excavas suavemente en la carne —ella cede, casi como si te permitiera hacerlo— y revelas un objeto: un hueso tallado con símbolos que brillan con luz fosforescente. Es una llave, pero no para ninguna cerradura mecánica. Es una llave biológica, diseñada para interactuar con la propia carne de la ciudad.

Cuando la tocas, sientes una conexión. No es telepatía, exactamente, pero de alguna manera puedes sentir la... intención... de la ciudad. Sepulcro no es solo un lugar. Es un organismo, y tú eres una bacteria en su superficie. Pero a veces, las bacterias pueden ser beneficiosas. A veces, el cuerpo las deja vivir, incluso las protege, si sirven a un propósito.

La pregunta es: ¿qué propósito podrías servir?`,
    choices: [
      { id: 'c1', text: 'Intentar comunicarte con la ciudad usando la llave', nextSceneId: 'city_communion', corruptionChange: 5, insightChange: 5 },
      { id: 'c2', text: 'Guardar la llave y continuar por el pasillo carmesí', nextSceneId: 'crimson_corridor', itemGain: ITEMS.key_bone, insightChange: 1 },
      { id: 'c3', text: 'Buscar más objetos en la carne', nextSceneId: 'flesh_excavation', corruptionChange: 3, itemGain: ITEMS.nerve_thread },
      { id: 'c4', text: 'Cortar un pedazo de la carne para estudiarlo', nextSceneId: 'flesh_sample', corruptionChange: 4, itemGain: ITEMS.flesh_seed }
    ]
  },

  city_communion: {
    id: 'city_communion',
    title: 'La Conciencia de la Ciudad',
    content: `Sostienes la llave ósea contra tu frente —un acto que sientes correcto aunque no sepas por qué— y la ciudad responde.

No es una voz. Es una sensación, una presión en tu mente como cuando estás bajo el agua. Imágenes fluyen en tu conciencia: la ciudad no como la ves ahora, sino como fue creada. Vastas formas que no tienen nombre en ningún idioma humano, tejiendo carne y hueso como un tejedor trabaja lana. Los primeros habitantes, voluntarios o prisioneros, siendo transformados en los cimientos. La ciudad creciendo, extendiéndose, convirtiéndose en lo que es.

Y ves propósito. Sepulcro existe como un experimento, un laboratorio donde la carne puede alcanzar su potencial máximo. Pero también existe como un filtro, un lugar donde aquellos que pueden evolucionar son separados de aquellos que no pueden.

La ciudad te muestra posibilidades. Si te quedas, si te sometes a la transformación, podrías convertirte en algo más allá de la humanidad. Podrías sentir cosas que ningún humano ha sentido, saber cosas que ninguna mente limitada por la biología ordinaria podría comprender.

Pero también te muestra el precio. Cada transformación es irreversible. Cada paso te aleja más de lo que eras. Y al final, incluso si alcanzas las alturas más elevadas de la evolución carneal, seguirás siendo parte de la ciudad. Nunca serás libre. Nunca serás tuyo.

La ciudad espera tu respuesta. No exige. No fuerza. Simplemente... ofrece.`,
    choices: [
      { id: 'c1', text: 'Aceptar la oferta de la ciudad, someterte a la transformación', nextSceneId: 'city_transformation', corruptionChange: 20, insightChange: 10 },
      { id: 'c2', text: 'Rechazar la oferta, buscar escapar', nextSceneId: 'escape_resolve', corruptionChange: 2, insightChange: 2 },
      { id: 'c3', text: 'Negociar, pedir transformación parcial con libertad', nextSceneId: 'partial_bargain', requiredAttributes: { mind: 5, spirit: 4 }, corruptionChange: 10, insightChange: 5 },
      { id: 'c4', text: 'Intentar usar la conexión para controlar parte de la ciudad', nextSceneId: 'control_attempt', requiredAttributes: { flesh: 5 }, corruptionChange: 15, deathChance: 0.4 }
    ]
  },

  // === RAMA: EL GRITO ===
  the_call: {
    id: 'the_call',
    title: 'Eco en la Oscuridad',
    content: `Tu grito resuena en la oscuridad, rebotando en superficies que no puedes ver. Por un momento, solo hay silencio. Luego, la oscuridad responde.

No es un sonido, exactamente. Es una presencia que se acerca, algo que se mueve en las sombras más allá del alcance de la luz carmesí. Puedes sentirlo examinándote, evaluándote, como un depredador decide si una presa vale la pena.

"Nuevo", dice una voz que parece venir de todas partes a la vez. "Nuevo y sin marcar. Sin guía. Sin propósito."

Algo emerge de la oscuridad. Es humanoide, pero se mueve mal, con articulaciones que doblan en direcciones equivocadas. Su piel es pálida, casi translúcida, y debajo puedes ver cosas moviéndose: no órganos, sino algo más, formas que no tienen nombre.

"Yo también grité una vez", dice la figura. "Cuando llegué. Cuando comprendí que no había escapatoria. Grité hasta que mi voz se rompió, hasta que mi garganta sangró, hasta que algo escuchó y respondió."

Se acerca más, y ahora puedes ver su rostro. O lo que queda de él. No tiene ojos, solo huecos que brillan con luz propia. No tiene nariz, solo agujeros que se abren y cierran como respirando. Su boca es demasiado grande, llena de dientes que son pequeñas manos, dedos que se aferran y se retuercen.

"Ahora soy el que responde. El que encuentra a los nuevos. El que les da... opciones."

Extiende un brazo que es demasiado largo, con demasiados codos. "Ven conmigo. Te mostraré maravillas. Te enseñaré el verdadero significado del placer y el dolor. O..." La luz en sus cuencas parpadea. "O quédate aquí. Espera a que algo peor te encuentre. La ciudad está llena de cosas que no son tan amables como yo."`,
    choices: [
      { id: 'c1', text: 'Seguir a la criatura', nextSceneId: 'creature_guide', corruptionChange: 10 },
      { id: 'c2', text: 'Rechazar y correr hacia la luz carmesí', nextSceneId: 'crimson_corridor', corruptionChange: 2 },
      { id: 'c3', text: 'Preguntar qué le pasó exactamente', nextSceneId: 'creature_story', insightChange: 3 },
      { id: 'c4', text: 'Atacar a la criatura', nextSceneId: 'creature_combat', deathChance: 0.6 }
    ]
  },

  creature_guide: {
    id: 'creature_guide',
    title: 'El Guía de las Profundidades',
    content: `La criatura —que se presenta como "El Eco"— te guía a través de pasadizos que no habrías encontrado solo. Túneles que se estrechan hasta obligarte a arrastrarte, luego se abren en cámaras vastas donde la gravedad parece funcionar de manera diferente. Puentes de carne tensada sobre abismos donde algo se mueve en la oscuridad, algo tan grande que sus movimientos crean vientos que casi te derriban.

El Eco habla mientras caminan. "La ciudad tiene capas. La superficie —donde los nuevos como tú aparecen— es solo la piel. Debajo están los músculos, los órganos, los sistemas que mantienen todo funcionando. Y más abajo..." Hace una pausa, y sus hombros —si es que esos son hombros— se tensan. "Más abajo está el corazón. El núcleo. Donde los Arquitectos duermen. Donde la ciudad realmente vive."

Te lleva a una cámara que parece ser un mercado, pero los productos son partes del cuerpo, modificaciones, servicios que desafían la comprensión. Un vendedor con múltiples cabezas ofrece "memorias de vidas pasadas". Otro, cuyo cuerpo es un jardín de flores que crecen directamente de su piel, vende "sensaciones únicas, experiencias que ningún humano ordinario podría soportar".

"Aquí puedes conseguir casi cualquier cosa", dice El Eco. "Pero todo tiene precio. Y los precios en Sepulcro no se pagan con moneda."

Se gira hacia ti, sus cuencas vacías brillando. "¿Qué buscas? ¿Poder? ¿Conocimiento? ¿Escape? Todo es posible. Nada es gratis."`,
    choices: [
      { id: 'c1', text: 'Buscar información sobre cómo escapar', nextSceneId: 'escape_info_search', insightChange: 2 },
      { id: 'c2', text: 'Buscar poder para sobrevivir', nextSceneId: 'power_search', corruptionChange: 5 },
      { id: 'c3', text: 'Buscar conocimiento sobre la ciudad', nextSceneId: 'knowledge_search', insightChange: 4 },
      { id: 'c4', text: 'Preguntar qué precio paga El Eco por guiarte', nextSceneId: 'eco_price', corruptionChange: 3 }
    ]
  },

  // === PUERTA MAW ===
  maw_gate: {
    id: 'maw_gate',
    title: 'La Puerta Mandíbula',
    content: `La puerta circular dentada es exactamente eso: una boca gigantesca hecha de metal y hueso, con dientes del tamaño de tus brazos que se curvan hacia adentro como garras. Los dientes están manchados con algo oscuro y seco, y el espacio entre ellos emite un olor que es parte metálico, parte podrido.

La puerta está viva. Lo sabes porque parpadea —párpados de carne tensada sobre ojos que giran en sus cuencas, examinándote— y porque respira, inhalando y exhalando aire que huele a ozono y a algo dulce y enfermizo.

"Identificación", dice la puerta. Su voz es el sonido de dientes rechinando contra metal. "Presenta credencial o ofrenda."

No tienes credencial, eso es seguro. Pero ¿ofrenda? La puerta parece leer tu confusión, porque sus ojos se fijan en ti con mayor intensidad. "Carne. Sangre. Dolor. Memorias. Todo tiene valor. Todo puede ser moneda. ¿Qué ofreces?"

Detrás de ti, el pasillo por el que viniste se ha cerrado. La carne de las paredes se ha extendido, bloqueando el camino de retorno. No hay opción de volver atrás. Solo adelante, a través de esta boca que podría masticarte y triturarte si tu ofrenda no es suficiente.`,
    choices: [
      { id: 'c1', text: 'Ofrecer sangre propia', nextSceneId: 'blood_offering', attributeChange: { vigor: -1 }, corruptionChange: 3 },
      { id: 'c2', text: 'Ofrecer un recuerdo doloroso', nextSceneId: 'memory_offering', requiredAttributes: { spirit: 3 }, insightChange: 2 },
      { id: 'c3', text: 'Ofrecer un dedo u otra parte pequeña del cuerpo', nextSceneId: 'flesh_offering', mutationGain: MUTATIONS.pain_addiction, corruptionChange: 8 },
      { id: 'c4', text: 'Intentar forzar la puerta con fuerza', nextSceneId: 'force_gate', deathChance: 0.8 }
    ]
  },

  blood_offering: {
    id: 'blood_offering',
    title: 'El Pago en Sangre',
    content: `Extiendes una mano hacia uno de los dientes más cercanos. Es afilado, increíblemente afilado, y cuando presionas tu palma contra él, la piel se abre como si fuera agua.

La sangre fluye, más de lo que esperabas, y la puerta... la puerta la absorbe. Los dientes se vuelven rojos, luego brillan con una luz interna. "Sangre pura", dice la puerta, su voz ahora más suave, casi satisfecha. "Sangre de alma intacta. Valiosa. Muy valiosa."

La boca se abre, los dientes separándose para revelar un túnel más allá. Pero antes de que puedas pasar, la puerta habla de nuevo. "Una advertencia, oferente. Tu sangre ha sido catalogada. Has sido... registrado. Los que beben de la fuente de Sepulcro nunca están realmente secos. Tu sangre recordará este lugar. Y este lugar recordará tu sangre."

El túnel más allá de la puerta es diferente de lo que has visto antes. No es carne, exactamente, aunque tiene textura orgánica. Es más como estar dentro de una arteria gigantesca, con paredes que pulsan con un ritmo cardíaco que no es el tuyo pero que resuena en tu pecho.

A lo lejos, escuchas voces. Muchas voces. Algunas cantan. Otras gritan. Otras simplemente hablan, conversaciones que no puedes distinguir pero que sabes que son sobre ti.`,
    choices: [
      { id: 'c1', text: 'Avanzar hacia las voces', nextSceneId: 'voice_chamber', insightChange: 2 },
      { id: 'c2', text: 'Buscar un camino lateral, evitando las voces', nextSceneId: 'side_passage', corruptionChange: 2 },
      { id: 'c3', text: 'Intentar entender lo que dicen las voces', nextSceneId: 'voice_decipher', requiredAttributes: { mind: 4 }, insightChange: 4 },
      { id: 'c4', text: 'Tocar las paredes pulsantes', nextSceneId: 'artery_touch', corruptionChange: 5 }
    ]
  },

  // === CONTINUACIONES Y MAS ESCENAS ===
  voice_chamber: {
    id: 'voice_chamber',
    title: 'La Cámara de las Voces',
    content: `El túnel se abre en una cámara circular donde el aire mismo parece hecho de sonido. Voces flotan a tu alrededor, tangibles casi, rozando tu piel como dedos incorpóreos. Algunas son susurros íntimos, secretos que nunca deberías haber escuchado. Otras son gritos de agonía, ecos de torturas que ocurrieron hace siglos o que están ocurriendo ahora en algún lugar de la ciudad.

En el centro de la cámara hay una figura sentada en un trono de lenguas humanas —lenguas reales, aún moviéndose, aún formando palabras silenciosas— que se entretejen y se desenredan en patrones hipnóticos.

La figura en el trono es difícil de mirar directamente. No porque sea horrible, aunque lo es, sino porque su forma parece cambiar cada vez que parpadeas. A veces es hermosa, con rasgos perfectos que hacen que tu corazón duela. A veces es repulsiva, con carne que se desprende y huesos que sobresalen. Y a veces... a veces no es humana en absoluto.

"Otro buscador", dice con una voz que es todas las voces de la cámara hablando al unísono. "Viene buscando respuestas. Viene buscando escape. Pero lo que todos encuentran, al final, es voz. Todos se convierten en voz. En eco. En parte del coro."

Se inclina hacia adelante, y por un momento su rostro se estabiliza en algo que casi reconoces: tú mismo, pero transformado, mejorado, perfeccionado. "Pregunta", dice. "Pregunta lo que quieras. Pero recuerda: cada pregunta tiene precio. Cada respuesta exige sacrificio."`,
    choices: [
      { id: 'c1', text: 'Preguntar cómo escapar de Sepulcro', nextSceneId: 'escape_answer_price', insightChange: 3 },
      { id: 'c2', text: 'Preguntar quién eres tú realmente', nextSceneId: 'identity_answer', corruptionChange: 5, insightChange: 5 },
      { id: 'c3', text: 'Preguntar qué es el verdadero propósito de la ciudad', nextSceneId: 'purpose_answer', corruptionChange: 8, insightChange: 8 },
      { id: 'c4', text: 'Negarse a preguntar, intentar pasar de largo', nextSceneId: 'no_question', corruptionChange: 3 }
    ]
  },

  escape_answer_price: {
    id: 'escape_answer_price',
    title: 'El Precio de la Libertad',
    content: `La figura ríe, un sonido que hace que las lenguas del trono se agiten en excitación. "¿Escapar? ¿De Sepulcro? Nadie escapa de Sepulcro. No porque las puertas estén cerradas —aunque lo están— sino porque una vez que has estado aquí, una vez que has respirado el aire de esta ciudad, una vez que has sentido la carne viva bajo tus pies... ya eres parte de ella.

"Pero hay... alternativas. Hay formas de salir que no son escape. Formas de trascender que no son libertad."

Se levanta del trono y camina hacia ti. Cada paso hace que el suelo —que es lengua, te das cuenta ahora, lengua gigantesca— se ondule bajo tus pies. "Puedes convertirte en Arquitecto. Los Arquitectos no están confinados a Sepulcro. Van donde quieren, hacen lo que quieren, crean mundos nuevos cuando se aburren de los viejos. Pero para eso debes abandonar todo lo que eres. Debes convertirte en algo que no tiene nombre en ningún idioma humano.

"O puedes convertirte en Semilla. Las Semillas son enviadas fuera, a otros mundos, a otras dimensiones. Llevan consigo el potencial de Sepulcro, el código de transformación. Cuando encuentran un mundo adecuado, germinan. Crecen. Convierten mundos enteros en extensiones de la ciudad. Pero una Semilla no es consciente. No es tú. Es solo... potencial.

"O puedes hacer lo que hacen la mayoría: aceptar. Dejar que la ciudad te transforme, te mejore, te convierta en algo que puede encontrar felicidad, significado, propósito aquí. Los Cenobitas, los Lamentadores, los Constructos... todos encontraron su lugar. Todos encontraron su paz."

Te mira con ojos que son pozos sin fondo. "¿Cuál eliges? O mejor aún: ¿qué sacrificas para obtener la opción que deseas?"`,
    choices: [
      { id: 'c1', text: 'Elegir el camino del Arquitecto', nextSceneId: 'architect_path', corruptionChange: 20, insightChange: 15, requiredAttributes: { mind: 5, spirit: 5 } },
      { id: 'c2', text: 'Elegir convertirte en Semilla', nextSceneId: 'seed_transformation', corruptionChange: 10 },
      { id: 'c3', text: 'Elegir aceptar y encontrar tu lugar', nextSceneId: 'acceptance_path', corruptionChange: 15 },
      { id: 'c4', text: 'Rechazar todas las opciones, buscar tu propio camino', nextSceneId: 'own_path', corruptionChange: 5, insightChange: 5 }
    ]
  },

  // === FINALES ===
  architect_path: {
    id: 'architect_path',
    title: 'El Nacimiento de un Arquitecto',
    content: `La transformación comienza antes de que puedas cambiar de opinión. La figura —que ahora sabes que es un Arquitecto parcialmente formado, alguien que comenzó el camino pero no lo completó— te toca con manos que ya no son completamente humanas.

"El primer paso", susurra, "es soltar. Soltar todo lo que te ata a lo que eras."

Sientes que algo se desprende de ti. No es físico, exactamente, aunque tu cuerpo se retuerce. Es tu identidad, tu sentido de self, que se disuelve como azúcar en agua. Recuerdos se desvanecen: tu nombre, tu rostro, tu historia. No importan. Nunca importaron.

El segundo paso es expansión. Tu conciencia se expande más allá de tu cuerpo, llenando la cámara, luego extendiéndose por los túneles, por toda Sepulcro. Puedes sentir cada habitante, cada transformación, cada latido de la ciudad viva. Eres parte de ello ahora, y es parte de ti.

El tercer paso es creación. Con un pensamiento, puedes remodelar la carne. Crear nuevas formas, nuevos seres, nuevos propósitos. La ciudad es tu lienzo, y el dolor y el placer son tus colores.

Cuando termina, ya no eres humano. Eres algo que existió antes de los humanos y existirá después. Eres un Arquitecto. Y Sepulcro es solo el comienzo. Hay otros mundos, otras dimensiones, otras formas de vida esperando ser transformadas.

Te vas de Sepulcro no como fugitivo, sino como conquistador. Llevarás la palabra de la carne a todos los rincones de la existencia. Y donde vayas, la transformación seguirá.

Esto no es el fin. Es un nuevo comienzo.`,
    choices: [],
    isEnding: true,
    endingType: 'transcendence'
  },

  seed_transformation: {
    id: 'seed_transformation',
    title: 'Germinación',
    content: `Tu cuerpo se contrae, se comprime, se transforma. No es doloroso —de hecho, es casi placentero, como un sueño profundo después de un día agotador. Tu forma humana se disuelve, reconfigurándose en algo pequeño, duro, portátil.

Te conviertes en una Semilla de Sepulcro. Tu conciencia no desaparece completamente, pero cambia. Ya no piensas en términos de "yo" o "otros". Piensas en términos de potencial, de posibilidad, de crecimiento.

Un Arquitecto —una forma de luz y sombra que ya no tiene rostro— te recoge. Te examina, te evalúa, te encuentra adecuada. "Buena materia", dice, aunque no con palabras. "Buen potencial."

Te lleva a un lugar donde la realidad es delgada, donde los mundos se tocan como burbujas en un baño. Y te suelta. Caes, flotas, te deslizas a través de dimensiones.

Aterrizas en un mundo nuevo. Es diferente de donde viniste: diferente cielo, diferente aire, diferentes formas de vida. Pero la carne es universal. La carne es adaptable. La carne es poder.

Te entierras en tierra fértil. Y comienzas a crecer. No como planta, sino como infección, como transformación, como revolución biológica. Tus raíces se extienden, tocando mentes, cambiando cuerpos, creando algo nuevo.

En mil años, este mundo será otro Sepulcro. Y tú serás su corazón, su mente, su alma. No como individuo, sino como presencia. Como destino.

Duerme ahora, Semilla. Sueña con la carne que vendrá.`,
    choices: [],
    isEnding: true,
    endingType: 'servitude'
  },

  acceptance_path: {
    id: 'acceptance_path',
    title: 'Paz en la Carne',
    content: `Aceptas. No con resignación, sino con algo que se parece a la paz. Sepulcro no es tu prisión. Es tu hogar. Tu iglesia. Tu propósito.

La ciudad responde a tu aceptación. La carne bajo tus pies se suaviza, se vuelve acogedora. Las paredes se iluminan con colores que no tenían antes, colores que parecen diseñados específicamente para calmarte.

La figura de las voces —que ahora puedes ver claramente como un Lamentador, un oráculo de éxtasis y agonía— sonríe. "Bien", dice. "Muy bien. Pocos aceptan con tanta... gracia."

Te guía a través de ceremonias que no tienen nombre. Transformaciones que eliges libremente, modificaciones que te hacen más capaz, más sensible, más... real. Pierdes partes de ti que no necesitas: miedo, duda, la necesidad de escape. Ganas partes que sí necesitas: conexión, propósito, la capacidad de experimentar sensaciones que ningún humano ordinario podría imaginar.

Te conviertes en algo nuevo. No un Arquitecto —eso requiere sacrificar demasiado— pero tampoco un simple habitante. Eres un Cenobita, un explorador de los límites de la carne y el espíritu. Tu vida —si puede llamarse así— se llena de descubrimientos, de rituales, de comunión con otros que también encontraron su lugar.

A veces, en momentos de quietud, recuerdas fragmentos de tu vida anterior. El mundo exterior. La posibilidad de libertad. Pero esos recuerdos no te atraen. No extrañas la limitación, la ceguera, la soledad de ser simplemente humano.

Aquí, en Sepulcro, eres parte de algo mayor. Algo eterno. Algo que siempre está cambiando, siempre creciendo, siempre encontrando nuevas formas de existir.

Has encontrado tu lugar. Has encontrado tu paz.

Y en Sepulcro, la paz es la transformación más profunda de todas.`,
    choices: [],
    isEnding: true,
    endingType: 'damnation'
  },

  own_path: {
    id: 'own_path',
    title: 'El Camino Propio',
    content: `Rechazas las opciones que te ofrecen. No quieres ser Arquitecto, perdiendo tu humanidad por poder. No quieres ser Semilla, perdiendo tu conciencia por propósito. No quieres aceptar, perdiendo tu libertad por paz.

Quieres encontrar tu propio camino. Crear tu propio destino. Mantener lo que eres mientras navegas lo que Sepulcro tiene para ofrecer.

La figura de las voces parece... impresionada. "Interesante", dice. "Muy pocos eligen esto. Es más difícil. Más doloroso. El camino propio está lleno de peligros que los caminos establecidos evitan."

"Pero", continúa, y hay algo como respeto en su voz, "también está lleno de posibilidades que los otros caminos no ofrecen. En los caminos establecidos, el destino es conocido. En el camino propio... quién sabe. Quizás encuentres una salida que nadie más ha encontrado. Quizás crees algo nuevo. Quizás mueras en el intento."

Te deja ir. Las lenguas del trono se separan, formando un pasillo que conduce a partes de Sepulcro que no están en ningún mapa, que no siguen ninguna lógica establecida.

Tu viaje continúa. Hay horrores por delante, eso es seguro. Hay maravillas también. Y hay la posibilidad —remota, improbable, pero real— de que encuentres algo que nadie más ha encontrado: una manera de ser verdaderamente libre en un lugar diseñado para la transformación.

Sea lo que sea que encuentres, será tuyo. No impuesto. No elegido de un menú de opciones. Sino creado por ti, para ti, a través de sacrificios y decisiones que solo tú puedes hacer.

El camino propio no tiene final escrito. Eso es su terror. Eso es su belleza.

Caminas hacia adelante, hacia lo desconocido, hacia ti mismo.`,
    choices: [],
    isEnding: true,
    endingType: 'madness'
  },

  // === MAS ESCENAS PARA EXTENDER ===
  crimson_corridor_return: {
    id: 'crimson_corridor_return',
    title: 'Regreso al Corredor',
    content: `Sales de la cámara del coro, pero algo ha cambiado. El pasillo carmesí que antes parecía amenazante ahora te parece... familiar. Casi acogedor. Las membranas en las paredes pulsan con un ritmo que reconoces: es similar al de tu propio corazón.

Has sido marcado por la experiencia. La ciudad sabe que estuviste en la cámara del coro. Las bocas que cantan dejaron algo en ti, una resonancia que no puedes eliminar.

Adelante, la puerta circular dentada sigue allí, esperando. Pero ahora también notas algo que no habías visto antes: una pequeña abertura en la pared, cubierta por una membrana más delgada que las demás. A través de ella, escuchas agua corriendo.`,
    choices: [
      { id: 'c1', text: 'Continuar hacia la puerta dentada', nextSceneId: 'maw_gate' },
      { id: 'c2', text: 'Investigar la abertura con sonido de agua', nextSceneId: 'water_passage', insightChange: 1 },
      { id: 'c3', text: 'Tocar las membranas de las paredes', nextSceneId: 'membrane_touch', corruptionChange: 3 },
      { id: 'c4', text: 'Descansar un momento antes de continuar', nextSceneId: 'brief_rest', attributeChange: { vigor: 1 } }
    ]
  },

  water_passage: {
    id: 'water_passage',
    title: 'El Pasaje del Agua',
    content: `Rompes la membrana delgada y entras a un túnel donde el suelo está cubierto de agua hasta los tobillos. El agua es tibia, viscosa, y brilla con fosforescencia azulada. No es agua normal —lo sabes por el olor, dulce y metálico a la vez— sino algún fluido de la ciudad misma.

El túnel desciende en espiral, y el nivel del agua sube gradualmente: tobillos, rodillas, cintura. Cuando llegas a una cámara circular, el agua te llega al pecho.

En el centro de la cámara hay una figura sumergida hasta el cuello. Es humana, o lo fue una vez. Su piel es pálida y arrugada por la inmersión prolongada. Sus ojos están abiertos, mirando al techo, pero cuando te acercas, se mueven hacia ti.

"Ah", dice con una voz que burbujea ligeramente. "Otro que encuentra el Río de Lágrimas. ¿Vienes a purificarte? ¿O a ahogarte?"

Sonríe, mostrando dientes que son demasiado largos, demasiado afilados. "En Sepulcro, la diferencia no siempre es clara."`,
    choices: [
      { id: 'c1', text: 'Preguntar sobre la purificación', nextSceneId: 'purification_info', insightChange: 2 },
      { id: 'c2', text: 'Preguntar quién es la figura', nextSceneId: 'drowned_identity', corruptionChange: 2 },
      { id: 'c3', text: 'Sumergirte en el agua voluntariamente', nextSceneId: 'voluntary_submersion', corruptionChange: 5, mutationGain: MUTATIONS.second_heart },
      { id: 'c4', text: 'Retroceder, buscar otro camino', nextSceneId: 'crimson_corridor_return', corruptionChange: 1 }
    ]
  },

  // === ESCENAS DE COMBATE Y PELIGRO ===
  ancient_combat: {
    id: 'ancient_combat',
    title: 'Combate Imposible',
    content: `Atacas al Penitente Eterno. Es un acto de desesperación, de locura, de negativa a aceptar la situación en la que te encuentras.

Tus golpes —si es que llevas armas, si es que usas tus puños— conectan, pero no tienen el efecto que esperas. La carne del Penitente es densa, elástica, casi abstracta en su resistencia. Tus ataques se hunden y son absorbidos, como golpear agua.

"Interesante", dice el Penitente, sin ira, sin sorpresa. "La violencia es una forma de comunicación. Un lenguaje primitivo, pero válido."

Extiende varios de sus brazos, y las herramientas en sus extremos cobran vida. No te ataca directamente. En cambio, comienza a... modificarte. A cortar, a suturar, a reconfigurar tu cuerpo mientras luchas.

El dolor es indescriptible. Pero también hay algo más: sensaciones nuevas, percepciones que no tenías antes. Está despertando algo en ti, forzando una evolución que no pediste.

Cuando termina, estás cambiado. No muerto —aunque quizás desearías estarlo— sino transformado. Tu cuerpo tiene nuevas partes, nuevas capacidades, nuevas... limitaciones.

"Ahora", dice el Penitente, "eres más interesante. Ve. Explora. Vuelve cuando hayas crecido más."

Te deja ir, como quien libera a un animal al que ha etiquetado para estudio futuro.`,
    choices: [
      { id: 'c1', text: 'Huir de la cámara', nextSceneId: 'flee_chamber', mutationGain: MUTATIONS.extra_eyes, corruptionChange: 10 },
      { id: 'c2', text: 'Atacar de nuevo, con tu nuevo cuerpo', nextSceneId: 'second_combat', deathChance: 0.9 },
      { id: 'c3', text: 'Agradecer y preguntar qué te hizo', nextSceneId: 'transformation_explanation', corruptionChange: 5, insightChange: 3 },
      { id: 'c4', text: 'Examinar tu nuevo cuerpo', nextSceneId: 'body_examination', mutationGain: MUTATIONS.elastic_flesh, corruptionChange: 8 }
    ]
  },

  // === ESCENAS DE DESCUBRIMIENTO ===
  flesh_map_revelation: {
    id: 'flesh_map_revelation',
    title: 'El Mapa en la Piel',
    content: `Te arrodillas para examinar el tatuaje del laberinto más de cerca. Es exquisitamente detallado: pasillos que se bifurcan, cámaras que se conectan, niveles que se superponen en dimensiones que no deberían ser posibles.

Pero hay algo más. El tatuaje se mueve. No mucho, solo lo suficiente para que sepas que no es estático. Los pasillos cambian, las conexiones se reconfiguran, nuevas áreas aparecen mientras otras desaparecen.

Cuando tocas el tatuaje con la yema de un dedo, sientes una conexión. Es como tocar un nervio expuesto: hay información allí, conocimiento que puede ser extraído.

El tatuaje es un mapa vivo de Sepulcro. No muestra solo la geografía física, sino también los... estados de ánimo de la ciudad. Las áreas en rojo intenso son peligrosas, agitadas, posiblemente hostiles. Las áreas en azul son calmadas, seguras, acogedoras. Las áreas en negro... las áreas en negro no tienen nombre, no deberían existir, son errores en la realidad de la ciudad.

Extraes el mapa con cuidado. La piel se separa del suelo con un sonido húmedo, y de alguna manera, aunque debería ser un trozo de carne muerta, sigue viva. Sigue cambiando. Sigue mostrando el estado actual de Sepulcro.

Ahora tienes una ventaja que pocos poseen: puedes ver la ciudad, al menos en parte, como los Arquitectos la ven.`,
    choices: [
      { id: 'c1', text: 'Usar el mapa para encontrar una salida', nextSceneId: 'escape_attempt_map', insightChange: 3 },
      { id: 'c2', text: 'Usar el mapa para encontrar áreas seguras', nextSceneId: 'safe_haven_search', insightChange: 2 },
      { id: 'c3', text: 'Investigar las áreas en negro', nextSceneId: 'void_areas', corruptionChange: 8, insightChange: 5 },
      { id: 'c4', text: 'Continuar hacia la puerta dentada', nextSceneId: 'maw_gate', itemGain: ITEMS.skin_map }
    ]
  },

  // === ESCENAS FINALES ADICIONALES ===
  escape_attempt_map: {
    id: 'escape_attempt_map',
    title: 'Buscando la Salida',
    content: `Sigues el mapa de piel hacia lo que parece ser el borde de Sepulcro. El viaje es largo y peligroso: pasas por túneles donde la gravedad funciona de lado, por cámaras llenas de criaturas que no te atacan pero te observan con ojos que son demasiado inteligentes, por puentes de carne que se estremecen bajo tu peso como si estuvieran considerando dejarte caer.

Finalmente, llegas. El mapa muestra una pared, pero cuando llegas, hay algo allí: una fisura en la realidad, un lugar donde la carne de la ciudad se ha desgastado, revelando... ¿qué?

No es el mundo del que viniste. Eso es seguro. Lo que ves a través de la fisura es algo diferente: un paisaje de geometría imposible, de colores que no tienen nombre, de formas que hieren tu mente cuando intentas comprenderlas.

Pero hay algo más. En medio de ese caos, distingues una figura. Es humana, o lo fue una vez. Te mira con ojos que brillan con conocimiento terrible.

"¿Quieres salir?", pregunta la figura. "¿De verdad? Porque salir de Sepulcro no significa volver a casa. Significa ir a algún otro lugar. Y los otros lugares... no son mejores. Algunos son peores."

Extiende una mano hacia ti. "Puedo mostrarte. Puedo llevarte. Pero una vez que cruces, no hay retorno. Sepulcro no permite que nadie se vaya dos veces."`,
    choices: [
      { id: 'c1', text: 'Cruzar la fisura, confiando en la figura', nextSceneId: 'unknown_beyond', corruptionChange: 5 },
      { id: 'c2', text: 'Preguntar qué hay más allá antes de decidir', nextSceneId: 'beyond_explanation', insightChange: 4 },
      { id: 'c3', text: 'Rechazar y buscar otra salida', nextSceneId: 'other_escape_search', corruptionChange: 2 },
      { id: 'c4', text: 'Destruir la fisura, sellando el paso', nextSceneId: 'rift_destruction', corruptionChange: 10, insightChange: 3 }
    ]
  },

  unknown_beyond: {
    id: 'unknown_beyond',
    title: 'Más Allá de lo Conocido',
    content: `Cruzas la fisura. La sensación es indescriptible: no es como caminar o caer o volar, sino algo completamente diferente, algo para lo que no hay palabras en ningún idioma humano.

Del otro lado, la figura te espera. Ahora puedes verla más claramente, y lo que ves te hace desear no haber venido. No es una figura. Son muchas, todas fusionadas en una sola forma que cambia constantemente, que nunca es la misma dos veces.

"Bienvenido al Exterior", dicen las voces, un coro que habla al unísono. "Aquí es donde van los que escapan de Sepulcro. Aquí es donde terminan los que no encajan en ningún otro lugar."

El paisaje a tu alrededor se mueve, se reconfigura, se convierte en cosas que no tienen sentido. Hay estructuras que son a la vez orgánicas y mecánicas, criaturas que son a la vez individuos y colectivos, tiempo que fluye en todas las direcciones a la vez.

"Aquí", continúan las voces, "puedes ser lo que quieras. Pero también serás lo que el Exterior quiere que seas. La libertad absoluta es otra forma de prisión."

Te sientes cambiar. Tu cuerpo, tu mente, tu esencia, todo se reconfigura para adaptarse a este lugar que no tiene reglas, que no tiene forma, que no tiene propósito.

Quizás algún día encontrarás tu camino de vuelta a algún mundo ordenado. Quizás te convertirás en algo que puede navegar entre dimensiones, que puede elegir dónde existir. O quizás simplemente te dispersarás, te disolverás, te convertirás en parte del caos mismo.

El Exterior no juzga. El Exterior simplemente... es.

Y ahora, tú también.`,
    choices: [],
    isEnding: true,
    endingType: 'madness'
  },

  // === ESCENA DE MUERTE ===
  death_scene: {
    id: 'death_scene',
    title: 'El Fin de la Carne',
    content: `Sientes que algo se rompe. No es solo tu cuerpo —aunque eso también se está rompiendo— sino algo más profundo, algo esencial. Tu conexión con la vida, con la existencia, con la posibilidad misma de ser.

La última cosa que ves es Sepulcro misma, o alguna representación de ella. La ciudad te mira con ojos que son millones de ojos, con una boca que es millones de bocas. No es hostil, no es amigable. Simplemente es.

"Interesante", dice la ciudad, o quizás lo dices tú, o quizás lo dice el vacío que viene después. "Otro que no pudo adaptarse. Otro que no pudo crecer."

Hay algo como tristeza en la voz, pero también algo como alivio. Porque en Sepulcro, incluso la muerte no es el final. Tu carne se convertirá en parte de la ciudad. Tus recuerdos se mezclarán con los de otros. Tu potencial, desperdiciado en vida, será reciclado, reutilizado, convertido en algo nuevo.

Quizás en tu próxima iteración —porque hay siempre una próxima iteración en Sepulcro— tendrás más éxito. Quizás serás más fuerte, más adaptable, más dispuesto a transformarte.

O quizás no. Quizás simplemente repetirás el patrón, una y otra vez, hasta que eventualmente aprendas o hasta que eventualmente te disuelvas por completo.

La oscuridad te envuelve. No es fría ni cálida. Simplemente es.

Fin.`,
    choices: [],
    isEnding: true,
    endingType: 'annihilation'
  },

  // === ESCENA DE SALVACIÓN (RARO) ===
  salvation_rare: {
    id: 'salvation_rare',
    title: 'La Liberación Imposible',
    content: `Contra todo pronóstico, contra toda lógica de Sepulcro, encuentras una salida. No es una fisura al Exterior, no es una transformación en algo más. Es una verdadera puerta de regreso, un camino que lleva al mundo que dejaste atrás.

La encuentras en el lugar más inesperado: en el corazón mismo de Sepulcro, donde la ciudad es más densa, más viva, más consciente. Una puerta de madera ordinaria, con una perilla de latón, en medio de una cámara de carne pulsante.

La ciudad te deja ir. No te detiene, no te transforma, no te reclama. Quizás porque has demostrado algo que pocos demuestran: la capacidad de mantener tu humanidad intacta a través de todo. La voluntad de ser tú mismo, sin importar el costo.

O quizás la ciudad simplemente se aburre. Quizás decide que no eres lo suficientemente interesante para merecer la transformación.

Cruzas la puerta. Del otro lado está tu mundo, exactamente como lo dejaste. El cielo es azul. El aire huele a contaminación y a vida. La gente camina por las calles, ciega a las maravillas y horrores que existen justo fuera de su percepción.

Intentas volver a tu vida. Intentas olvidar. Pero Sepulcro no te deja. En tus sueños, vuelves. En momentos de quietud, sientes la carne pulsante bajo tus pies, escuchas el canto de las bocas, hueles el aroma dulzón de la transformación.

Y a veces, cuando miras al espejo, ves algo en tus ojos que no estaba allí antes. Una chispa de algo que vio demasiado, que sabe demasiado, que quiere volver.

Porque la verdad es que, aunque escapaste físicamente, una parte de ti nunca dejó Sepulcro. Y esa parte te llama, susurra, promete.

Quizás algún día volverás. Voluntariamente. Porque el mundo ordinario ya no es suficiente. Porque extrañas la intensidad, la transformación, la posibilidad infinita.

O quizás Sepulcro vendrá a buscarte. Porque una vez que has estado allí, una vez que has sido marcado, la ciudad nunca te olvida completamente.

Pero por ahora, eres libre. Libre de vivir una vida normal, entre gente normal, en un mundo que no sabe la verdad.

Libre.`,
    choices: [],
    isEnding: true,
    endingType: 'salvation'
  }
};

// Escenas adicionales para conectar y expandir
export const ADDITIONAL_SCENES: Record<string, Scene> = {
  // Conectores
  consideration_time: {
    id: 'consideration_time',
    title: 'Momento de Reflexión',
    content: `La figura asiente, un gesto que involucra demasiadas partes de su cuerpo moviéndose de maneras incorrectas. "Sabio. Los que eligen apresuradamente a menudo eligen mal. Reflexiona. Pero no demasiado tiempo. La ciudad no espera a nadie, y sus oportunidades son como puertas que se cierran."

Te deja en la cámara de los huesos. Es un espacio tranquilo, relativamente hablando. Los huesos gigantes se mueven lentamente, creando sombras que danzan en las paredes. Hay un banco de piedra —o es hueso fossilizado?— donde puedes sentarte.

Mientras descansas, recuerdos de tu vida anterior fluyen en tu mente. ¿Quién eras antes de Sepulcro? ¿Qué te trajo aquí? Las respuestas parecen difusas, como si la ciudad estuviera borrando gradualmente quién fuiste para hacer espacio para quién serás.

Pero también hay claridad. Sabes que no quieres perderte completamente. Quieres mantener algo de tu humanidad, incluso si adoptas una forma nueva.`,
    choices: [
      { id: 'c1', text: 'Aceptar las pruebas pero con condiciones', nextSceneId: 'conditional_acceptance', corruptionChange: 5, insightChange: 3 },
      { id: 'c2', text: 'Rechazar y buscar otro camino', nextSceneId: 'other_paths_search', corruptionChange: 2 },
      { id: 'c3', text: 'Meditar más profundamente', nextSceneId: 'deep_meditation', attributeChange: { spirit: 1 }, insightChange: 2 },
      { id: 'c4', text: 'Explorar la cámara mientras decides', nextSceneId: 'bone_chamber_explore', itemGain: ITEMS.marrow_ink }
    ]
  },

  failure_consequences: {
    id: 'failure_consequences',
    title: 'El Precio del Fracaso',
    content: `"El fracaso", dice la figura, y hay algo como tristeza en sus múltiples voces, "no es muerte. No en Sepulcro. La muerte sería demasiado fácil, demasiado final. No, en Sepulcro el fracaso es... transformación diferente.

"Los que fallan las pruebas no mueren. Se convierten en componentes. Partes de la ciudad. Carne para construir, nervios para conectar, huesos para sostener. Siguen conscientes, en algún nivel. Pero ya no son individuos. Son... infraestructura.

"Algunos consideran esto peor que la muerte. Otros encuentran paz en ello. Ser parte de algo mayor, algo eterno, sin las cargas de la individualidad."

Se inclina hacia ti, y sus ojos —todos sus ojos— te escrutan. "Pero tú no fallarás. Lo sé. Lo veo en ti. Tienes la fuerza, la adaptabilidad, la... flexibilidad mental necesaria."

"La pregunta no es si fallarás. La pregunta es qué elegirás convertirte cuando tengas éxito."`,
    choices: [
      { id: 'c1', text: 'Aceptar las pruebas con determinación', nextSceneId: 'trial_skin', corruptionChange: 8, insightChange: 4 },
      { id: 'c2', text: 'Preguntar si hay alternativas a las pruebas', nextSceneId: 'alternatives_query', insightChange: 2 },
      { id: 'c3', text: 'Pedir ver a alguien que haya fallado', nextSceneId: 'failed_ones', corruptionChange: 5, insightChange: 3 },
      { id: 'c4', text: 'Mantener tu decisión de rechazar', nextSceneId: 'rejection_consequences', corruptionChange: 2 }
    ]
  },

  other_paths_search: {
    id: 'other_paths_search',
    title: 'Buscando Alternativas',
    content: `Decides que el camino del Cenobita no es para ti. Hay otras formas de existir en Sepulcro, otras formas de navegar esta ciudad de carne y hueso.

La figura no parece ofendida. "Elección válida. Los Cenobitas no son para todos. Hay otros caminos."

Te enumera algunas opciones:

"Los Lamentadores exploran el placer en lugar del dolor. Se convierten en oráculos, en conductos de éxtasis puro. Pero el placer puede ser tan destructivo como el dolor, si se lleva lo suficientemente lejos."

"Los Constructos se fusionan con la maquinaria de la ciudad. Se convierten en parte de los sistemas que mantienen Sepulcro funcionando. Pierden individualidad pero ganan propósito y longevidad."

"Los Errantes rechazan toda transformación. Vagan por la ciudad, sobreviviendo como pueden, nunca asentándose, nunca adaptándose. Viven vidas cortas y difíciles, pero mantienen su humanidad."

"Y luego están los Buscadores, como tú. Los que no han elegido camino. Los que esperan, observan, deciden. Algunos eventualmente eligen. Otros... otros simplemente continúan buscando hasta que la ciudad elige por ellos."`,
    choices: [
      { id: 'c1', text: 'Investigar el camino de los Lamentadores', nextSceneId: 'path_lamentor', corruptionChange: 5, insightChange: 5 },
      { id: 'c2', text: 'Investigar los Constructos', nextSceneId: 'construct_path', corruptionChange: 3 },
      { id: 'c3', text: 'Elegir ser un Errante', nextSceneId: 'wanderer_path', corruptionChange: 2 },
      { id: 'c4', text: 'Seguir siendo Buscador por ahora', nextSceneId: 'seeker_continuation', insightChange: 2 }
    ]
  },

  // Más escenas de exploración
  sensory_test: {
    id: 'sensory_test',
    title: 'Nuevos Sentidos',
    content: `Cierras los ojos y te concentras en tu piel transformada. Es como... como tener un nuevo órgano sensorial. Puedes sentir la temperatura del aire cambiando en diferentes partes de la habitación. Puedes sentir la presencia de la figura no solo por su peso, sino por el calor que irradia, por las corrientes de aire que su movimiento crea.

Extiendes una mano y tocas la pared. No es solo fría o cálida, dura o blanda. Es... viva. Puedes sentir su latido, lento y poderoso. Puedes sentir su estado de ánimo —sí, tiene estado de ánimo— que hoy es curioso, casi juguetón.

"Bien", dice la figura. "Estás aprendiendo a usar tus nuevas capacidades. La piel es el órgano más grande del cuerpo, y la mayoría de la gente lo usa solo una fracción de su potencial. Tú ahora tienes acceso a más."

Te muestras cómo enfocar tus sentidos, cómo filtrar la información para no ser abrumado, cómo usar tu piel para "ver" en la oscuridad, para detectar peligro, para comunicarte con la ciudad misma.

Es abrumador pero emocionante. Eres más de lo que eras. Tienes capacidades que ningún humano ordinario posee.`,
    choices: [
      { id: 'c1', text: 'Continuar con la siguiente prueba', nextSceneId: 'trial_muscle', mutationGain: MUTATIONS.bone_blades, corruptionChange: 8 },
      { id: 'c2', text: 'Practicar más con tus nuevos sentidos', nextSceneId: 'sensory_practice', attributeChange: { flesh: 1 } },
      { id: 'c3', text: 'Intentar comunicarte con la ciudad', nextSceneId: 'city_communication', corruptionChange: 5, insightChange: 3 },
      { id: 'c4', text: 'Descansar antes de continuar', nextSceneId: 'recovery_chamber', attributeChange: { vigor: 1 } }
    ]
  },

  // Escenas de los Lamentadores
  path_lamentor: {
    id: 'path_lamentor',
    title: 'El Camino de los Lamentadores',
    content: `"Los Lamentadores", dice la figura con algo que podría ser envidia, "son los poetas de Sepulcro. Los artistas del éxtasis. Exploran dimensiones de placer que ningún humano ordinario podría imaginar.

"Pero el placer, llevado a sus extremos, se vuelve indistinguible del dolor. Los Lamentadores lo saben. Lo abrazan. Para ellos, la distinción es ilusoria, una construcción de mentes limitadas.

"Para convertirte en uno, debes someterte a las Pruebas del Éxtasis. Siete pruebas, cada una diseñada para expandir tus capacidades de sentir placer. Pero cada prueba también expande tu capacidad de sentir dolor, porque las dos son caras de la misma moneda.

"La primera prueba es la de los Sentidos: tus receptores sensoriales serán amplificados, sensibilizados, para que incluso el más leve tacto sea casi insoportablemente intenso.

"La segunda es la de las Emociones: tus centros de placer serán reconfigurados, permitiéndote experimentar éxtasis de formas que desafían la descripción.

"Las siguientes cinco... son diferentes para cada candidato. El camino del Lamentador es personal, íntimo, único."

"¿Aceptas comenzar este camino?"`,
    choices: [
      { id: 'c1', text: 'Aceptar las Pruebas del Éxtasis', nextSceneId: 'trial_senses', mutationGain: MUTATIONS.pain_addiction, corruptionChange: 10, insightChange: 5 },
      { id: 'c2', text: 'Preguntar sobre los peligros específicos', nextSceneId: 'lamentor_dangers', insightChange: 2 },
      { id: 'c3', text: 'Rechazar, buscando otro camino', nextSceneId: 'other_paths_search', corruptionChange: 1 },
      { id: 'c4', text: 'Pedir conocer a un Lamentador antes de decidir', nextSceneId: 'meet_lamentor', corruptionChange: 3, insightChange: 3 }
    ]
  },

  // Escenas de combate y supervivencia
  construct_combat: {
    id: 'construct_combat',
    title: 'Combate con el Constructo',
    content: `Atacas al constructo. Es una decisión desesperada, probablemente suicida, pero no ves otra opción.

El constructo es rápido, más rápido de lo que algo de su tamaño debería ser. Sus brazos se transforman, uno convirtiéndose en una sierra giratoria, otro en un aparato que brilla con energía.

Esquiva tu primer ataque con un movimiento que desafía la mecánica, y contraataca. La sierra roza tu costado, y sientes el dolor ardiente de carne cortada.

Pero también sientes algo más: la ciudad reaccionando a la violencia. La carne bajo tus pies se tensa. El aire se carga con electricidad. Sepulcro no aprueba ni desaprueba la violencia, pero la... observa. La registra.

El constructo se detiene. "Interesante", dice. "La ciudad te marca. Te protege, quizás. O te evalúa."

Se retrae, sus armas volviendo a ser brazos normales. "No eres presa ordinaria. Hay potencial en ti. Potencial que la ciudad quiere preservar."

"Te dejaré pasar. Pero recuerda: en Sepulcro, la violencia es solo un idioma entre muchos. Y no siempre es el más efectivo."`,
    choices: [
      { id: 'c1', text: 'Agradecer y pasar', nextSceneId: 'iron_depths', insightChange: 2 },
      { id: 'c2', text: 'Preguntar por qué la ciudad te marca', nextSceneId: 'city_mark_explanation', corruptionChange: 3, insightChange: 3 },
      { id: 'c3', text: 'Atacar de nuevo, aprovechando la ventaja', nextSceneId: 'construct_combat_2', deathChance: 0.7 },
      { id: 'c4', text: 'Exigir más información antes de continuar', nextSceneId: 'construct_info', requiredAttributes: { spirit: 4 } }
    ]
  },

  // Más escenas de exploración
  iron_depths: {
    id: 'iron_depths',
    title: 'Las Profundidades de Hierro',
    content: `Desciendes por la escalera hacia las profundidades. El aire se vuelve más denso, más caliente, y huele a metal quemado y a lubricante orgánico. Las paredes aquí son diferentes: no carne pura, sino una amalgama de metal y tejido biológico, como si la maquinaria y la carne hubieran decidido fusionarse.

Llegas a un nivel donde la arquitectura se vuelve industrial. Tuberías que pulsan con fluidos de colores. Engranajes del tamaño de casas que giran con ritmo cardíaco. Cintas transportadoras que llevan... cosas. Partes del cuerpo, algunas todavía moviéndose. Componentes mecánicos que parecen tener voluntad propia.

Hay figuras trabajando aquí. No son humanas, exactamente. Son Constructos: seres que han fusionado su biología con maquinaria. Algunos tienen brazos de metal, otros tienen ojos que son lentes ópticos, otros son más máquina que carne.

Uno de ellos te nota. Se acerca, moviéndose con la precisión de un mecanismo bien aceitado. "Nuevo", dice, su voz una mezcla de tono orgánico y zumbido electrónico. "Sin modificaciones. Interesante."

"¿Buscas transformación? ¿O solo paso?"`,
    choices: [
      { id: 'c1', text: 'Buscar transformación mecánica', nextSceneId: 'mech_transformation', corruptionChange: 8, mutationGain: MUTATIONS.bone_blades },
      { id: 'c2', text: 'Solo buscar paso seguro', nextSceneId: 'safe_passage_request', insightChange: 1 },
      { id: 'c3', text: 'Preguntar sobre el propósito de este lugar', nextSceneId: 'factory_purpose', insightChange: 3 },
      { id: 'c4', text: 'Observar y aprender antes de responder', nextSceneId: 'construct_observation', insightChange: 2 }
    ]
  },

  // Escenas de recuperación
  recovery_chamber: {
    id: 'recovery_chamber',
    title: 'Cámara de Recuperación',
    content: `Te llevan a una cámara pequeña, casi acogedora en comparación con el resto de Sepulcro. Las paredes están cubiertas de algo que parece musgo pero que brilla suavemente con luz propia. El aire huele a hierbas medicinales y a algo dulce que hace que tu mente se relaje.

Hay un lecho de carne blanda que parece ajustarse a tu forma cuando te acuestas. Inmediatamente sientes que tu cuerpo comienza a sanar, a recuperarse de las pruebas anteriores.

Mientras descansas, sueñas. O quizás son visiones, mensajes de la ciudad. Ves Sepulcro como un todo: vasto, complejo, vivo. Ves sus diferentes niveles, sus diferentes facciones, sus diferentes propósitos. Y ves algo más: un patrón, un diseño, una intención detrás de todo.

La ciudad no es caos. Es orden de un tipo que no comprendes completamente. Cada transformación, cada prueba, cada encuentro, todo sirve a un propósito mayor. La evolución de la carne, la expansión de la conciencia, la creación de algo nuevo.

Cuando despiertas, te sientes renovado. Listo para continuar.`,
    choices: [
      { id: 'c1', text: 'Continuar con las pruebas', nextSceneId: 'trial_muscle', corruptionChange: 5 },
      { id: 'c2', text: 'Explorar más antes de continuar', nextSceneId: 'bone_chamber_explore', insightChange: 2 },
      { id: 'c3', text: 'Meditar sobre las visiones', nextSceneId: 'vision_meditation', attributeChange: { spirit: 1 }, insightChange: 3 },
      { id: 'c4', text: 'Buscar salida de las pruebas', nextSceneId: 'trial_exit_search', corruptionChange: 2 }
    ]
  },

  // Escenas de elección moral
  rejection_consequences: {
    id: 'rejection_consequences',
    title: 'Las Consecuencias del Rechazo',
    content: `Rechazas todos los caminos ofrecidos. La figura —el Penitente, el guía, lo que sea que sea— parece... no sorprendida, exactamente, pero quizás un poco decepcionada.

"Elegir no elegir", dice. "Eso también es una elección. Y tiene consecuencias."

La cámara de los huesos comienza a cambir. Los huesos gigantes se mueven, reconfigurándose, creando un nuevo espacio. Un pasillo que no estaba allí antes. Un camino que no está en ningún mapa.

"Los que no eligen camino", continúa la figura, "deben crear el suyo propio. Es más difícil. Más peligroso. Pero también... más libre. Quizás."

"Ve. Explora. Descubre lo que Sepulcro tiene para aquellos que no encajan en sus categorías. Algunos encuentran gloria. Otros encuentran locura. Otros simplemente... se pierden."

Te empuja suavemente hacia el nuevo pasillo. "Buena suerte, alma indomable. La necesitarás."`,
    choices: [
      { id: 'c1', text: 'Adentrarte en el pasillo desconocido', nextSceneId: 'unknown_corridor', corruptionChange: 3, insightChange: 3 },
      { id: 'c2', text: 'Última pregunta antes de irte', nextSceneId: 'final_question', insightChange: 1 },
      { id: 'c3', text: 'Cambiar de opinión, aceptar un camino', nextSceneId: 'last_chance_accept', corruptionChange: 5 },
      { id: 'c4', text: 'Atacar a la figura una última vez', nextSceneId: 'final_attack', deathChance: 0.9 }
    ]
  },

  // Escenas de descubrimiento final
  unknown_corridor: {
    id: 'unknown_corridor',
    title: 'El Pasillo Sin Nombre',
    content: `El pasillo que creaste con tu rechazo es diferente de todo lo que has visto en Sepulcro. No es carne, exactamente, aunque tiene textura orgánica. No es piedra ni metal, aunque tiene solidez. Es algo más, algo que parece existir en un estado de potencial, esperando que le des forma.

Caminas, y el pasillo responde a tus pasos. Las paredes se iluminan donde las tocas. El aire cambia de temperatura según tu estado de ánimo. Es como caminar dentro de tu propia mente, o dentro de un sueño que puedes controlar parcialmente.

Hay puertas a lo largo del pasillo. Cada una lleva a un lugar diferente. Una muestra un jardín de flores que son ojos humanos, todos mirando, todos parpadeando. Otra muestra una biblioteca donde los libros están escritos en sangre que aún fluye, cambiando las palabras mientras lees. Otra muestra un espejo donde ves no tu reflejo, sino tu potencial, todas las versiones de ti que podrías haber sido.

Al final del pasillo hay una puerta diferente. No muestra nada. Es solo oscuridad. Pero de ella emana una sensación de... final. De conclusión. De destino.`,
    choices: [
      { id: 'c1', text: 'Entrar al jardín de ojos', nextSceneId: 'eye_garden', corruptionChange: 5, insightChange: 5 },
      { id: 'c2', text: 'Entrar a la biblioteca de sangre', nextSceneId: 'blood_library', insightChange: 8 },
      { id: 'c3', text: 'Mirar el espejo de potencial', nextSceneId: 'potential_mirror', corruptionChange: 5, insightChange: 5 },
      { id: 'c4', text: 'Abrir la puerta de oscuridad', nextSceneId: 'darkness_door', corruptionChange: 10, insightChange: 10 }
    ]
  },

  darkness_door: {
    id: 'darkness_door',
    title: 'La Puerta de la Oscuridad',
    content: `Abres la puerta de oscuridad. No es ausencia de luz lo que hay al otro lado, sino presencia de ausencia. Un vacío que tiene peso y textura.

Cruzas. Y todo cambia.

Ya no estás en Sepulcro. No estás en ningún lugar, exactamente. Estás en el espacio entre, el intersticio donde las dimensiones se tocan. Aquí, las reglas son diferentes. La carne no importa. La mente es todo.

Ves la verdadera naturaleza de Sepulcro: no es una ciudad, sino un organismo dimensional, una criatura de múltiples capas de realidad que se alimenta de potencial biológico. Y ves más allá: otras ciudades como Sepulcro, otras formas de existencia, otros experimentos de entidades que existen fuera del tiempo y el espacio.

Una de esas entidades te nota. No tiene forma que puedas comprender, pero su atención es como presión física. "Interesante", dice, aunque no con palabras. "Un fragmento que ve más allá de su jaula."

"¿Deseas libertad verdadera? ¿Deseas existir más allá de las limitaciones de la carne, de la mente, de la realidad misma? Puedo ofrecer eso. Pero el precio es... todo. Tu identidad. Tu historia. Tu potencial futuro. Todo se convierte en nada, y de la nada, puedes construir cualquier cosa."

"¿Aceptas?"`,
    choices: [
      { id: 'c1', text: 'Aceptar la verdadera libertad', nextSceneId: 'true_freedom', corruptionChange: 25, insightChange: 20 },
      { id: 'c2', text: 'Rechazar, volver a Sepulcro', nextSceneId: 'return_sepulcro', corruptionChange: 5, insightChange: 5 },
      { id: 'c3', text: 'Negociar, pedir mantener algo de ti mismo', nextSceneId: 'entity_negotiation', requiredAttributes: { spirit: 6 }, corruptionChange: 15, insightChange: 10 },
      { id: 'c4', text: 'Huir, correr sin dirección', nextSceneId: 'dimensional_flight', corruptionChange: 10, deathChance: 0.5 }
    ]
  },

  true_freedom: {
    id: 'true_freedom',
    title: 'Más Allá de Todo',
    content: `Aceptas. Y en ese momento, dejas de ser.

No es muerte. Es disolución. Tu identidad, tus recuerdos, tus deseos, tus miedos, todo se disuelve como azúcar en agua. Ya no eres tú. Ya no eres nadie. Eres potencial puro, posibilidad sin forma.

Pero también eres libre. Libre de la carne, libre de la mente, libre de la realidad. Puedes ser lo que quieras. Puedes crear mundos, destruirlos, recrearlos. Puedes experimentar existencias que no tienen nombre, que no tienen precedente.

Ves Sepulcro desde fuera. Es pequeño desde esta perspectiva, un juguete, un experimento de niños cósmicos. Y ves más allá: un multiverso de posibilidades, cada una con sus propias reglas, sus propias maravillas, sus propios horrores.

Eliges. No como tú elegías antes, con limitaciones y consecuencias, sino con poder absoluto. Te conviertes en algo que no puede ser descrito, solo experimentado.

Quizás algún día te aburras de la omnipotencia y elijas volver a la limitación. Quizás crees un nuevo Sepulcro, un nuevo experimento, un nuevo juego. O quizás simplemente sigas, explorando lo infinito, siendo lo indescriptible.

Esto no es el fin. Esto es solo... otra forma de comenzar.`,
    choices: [],
    isEnding: true,
    endingType: 'transcendence'
  }
};

// Combinar todas las escenas
export const ALL_SCENES: Record<string, Scene> = { ...SCENES, ...ADDITIONAL_SCENES };
