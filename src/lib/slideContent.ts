export type SceneAccent =
  | 'intro'
  | 'harness'
  | 'architecture'
  | 'models'
  | 'byok'
  | 'context'
  | 'tokens'
  | 'lifecycle'
  | 'closing'

export interface SlideLink {
  label: string
  url: string
  /** Usuario/handle visible en el pill — no todos van a hacer clic, así que
   * se puede leer y anotar aunque no se toque el link. */
  handle?: string
}

/** Redes de contacto — una sola fuente para el slide de perfil y el de cierre. */
export const SOCIAL_LINKS: SlideLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vanessa-marely-aristizabal-angel', handle: 'vanessa-marely-aristizabal-angel' },
  { label: 'Instagram', url: 'https://www.instagram.com/vanessamarelycode/', handle: '@vanessamarelycode' },
]

export interface Slide {
  id: string
  /** Grupo temático — usado para agrupar en la guía de texto (CopilotTalkNotes) */
  topic: string
  title: string
  bullets: string[]
  /** Prosa completa para la versión de guía/lectura — más detallada que los bullets del slide */
  notes: string
  sceneAccent: SceneAccent
  /** Ilustración en public/images/talk/ — si está presente, reemplaza el fondo de Three.js en este slide */
  image?: string
  /** Ruta de una foto circular (usado en el slide de perfil) */
  photo?: string
  /** Links sociales (usado en el slide de perfil) */
  links?: SlideLink[]
  /** Diagrama Three.js hecho a medida para este slide — vive en el panel derecho, contenido */
  diagram?: 'think-act-observe'
}

export const slides: Slide[] = [
  {
    id: 'intro',
    topic: 'Introducción',
    title: 'GitHub Copilot en profundidad',
    bullets: [
      'Cómo piensa, no solo qué hace',
      'Cómo optimizar tokens y créditos',
      'Cómo cambió el ciclo de vida de desarrollo',
    ],
    notes:
      'Esta charla no es una lista de funciones de Copilot — es el modelo mental detrás de ellas. Vamos a ver cómo piensa Copilot (el harness), qué controla el costo real de usarlo (modelos, planes, tokens), y cómo el ciclo de vida de desarrollo de software cambió con agentes de IA, con GitHub como caso concreto.',
    sceneAccent: 'intro',
  },
  {
    id: 'profile',
    topic: 'Quién habla',
    title: 'Vanessa Aristizábal',
    bullets: [
      'Magíster en Ingeniería, especialización en Desarrollo de Software',
      'Google Developer Expert en Angular y Tecnologías Web',
      'GitHub Star',
      'Creadora de contenido tech',
    ],
    notes:
      'Magíster en Ingeniería, con especialización en Desarrollo de Software. Google Developer Expert en Angular y Tecnologías Web, y GitHub Star. Creadora de contenido tech. Apasionada por el código, los libros, la ilustración y el journaling.',
    sceneAccent: 'intro',
    photo: '/images/talk/profile.jpg',
    links: SOCIAL_LINKS,
  },
  {
    id: 'repo',
    topic: 'Repositorio',
    title: 'Encuentra el proyecto en GitHub',
    bullets: [
      'github.com/vanessamarely/github-workshop-guid',
      'Todo el código de esta guía y de este deck, open source',
      '¿Te gustó el proyecto? Dale clic en Star ⭐ — no cuesta nada y ayuda mucho',
    ],
    notes:
      'Todo lo que ves en esta charla —la guía interactiva y este mismo slide deck— vive en un único repositorio open source: github.com/vanessamarely/github-workshop-guid. Puedes clonarlo, revisar el código, o volver acá cuando quieras repasar un concepto. Si el proyecto te sirvió, dale clic en Star: no cuesta nada, pero sí ayuda — hace que el repositorio sea más fácil de encontrar en GitHub, y le muestra a otras personas (y a mí) que el contenido realmente sirvió.',
    sceneAccent: 'intro',
    image: '/images/talk/repo-qr.png',
    links: [{ label: 'Abrir repositorio', url: 'https://github.com/vanessamarely/github-workshop-guid' }],
  },
  {
    id: 'guide',
    topic: 'Guía interactiva',
    title: 'La guía, siempre disponible',
    bullets: [
      'github-workshop-guid.vercel.app',
      'El mismo contenido de este deck, en formato de lectura',
      'Ejercicios paso a paso para github.com, VS Code, CLI y la Copilot App',
    ],
    notes:
      'Esta charla también vive como guía de lectura, desplegada en github-workshop-guid.vercel.app — con cada punto del deck explicado en prosa completa, más los ejercicios prácticos para llevarlo a tu propio proyecto. Escanea el código o guarda el link para volver después.',
    sceneAccent: 'intro',
    image: '/images/talk/guide-qr.png',
    links: [{ label: 'Abrir guía', url: 'https://github-workshop-guid.vercel.app/' }],
  },
  {
    id: 'harness-1',
    topic: 'El harness',
    title: 'No le hablas al modelo. Le hablas al harness.',
    bullets: [
      'Modelo = el LLM (Claude, GPT, Gemini) — no es de GitHub, GitHub lo conecta',
      'Harness = GitHub Copilot en sí mismo: arma el contexto y ejecuta la respuesta',
      'Lo que usas a diario = GitHub Copilot (harness) + el modelo que elegiste',
    ],
    notes:
      'Cuando escribes un prompt en Copilot, no estás hablando directamente con un modelo de lenguaje. Estás hablando con el harness — y el harness, en este caso, ES GitHub Copilot: el producto entero, no una pieza aparte. Copilot es el sistema que rodea al modelo, decide qué contexto incluir (instrucciones del proyecto, archivo abierto, selección), se lo entrega al modelo que hayas elegido (Claude, GPT, Gemini — ninguno de ellos es de GitHub, GitHub los conecta), y después convierte la respuesta en una acción real sobre tu código: una sugerencia, un archivo editado, un comando ejecutado. Por eso cambiar de modelo en el selector no cambia "de Copilot" — cambias el motor, pero el harness (Copilot) sigue siendo el mismo.',
    sceneAccent: 'harness',
    image: '/images/talk/harness.jpg',
  },
  {
    id: 'harness-2',
    topic: 'El harness',
    title: 'El ciclo: Pensar → Actuar → Observar',
    bullets: [
      'Pensar: el modelo analiza tu prompt + el contexto que el harness armó',
      'Actuar: el harness convierte la respuesta en código, un archivo, un comando',
      'Observar: el harness mira el resultado y decide el siguiente paso',
    ],
    notes:
      'Este ciclo se repite en cada interacción, y es la razón por la que Copilot puede iterar solo en Agent Mode: piensa, actúa, observa el resultado (¿el build pasó? ¿hay un error?), y si algo falló, vuelve a pensar con esa nueva información. La calidad de la respuesta depende tanto del modelo como de qué tan buen contexto arma el harness — un prompt vago da una respuesta genérica porque el harness no tiene con qué trabajar, no porque el modelo "piense peor".',
    sceneAccent: 'harness',
    diagram: 'think-act-observe',
  },
  {
    id: 'architecture-1',
    topic: 'Arquitecturas',
    title: 'Un mismo harness, cuatro superficies',
    bullets: [
      'Editor (VS Code, Visual Studio, JetBrains, Neovim…)',
      'Terminal (Copilot CLI)',
      'App de escritorio (supervisión de varios agentes en paralelo)',
      'github.com y la app móvil',
    ],
    notes:
      'GitHub Copilot no es un producto — es el mismo harness expuesto en cuatro superficies distintas, cada una pensada para un momento distinto de tu trabajo: el editor para escribir código con contexto inmediato, la terminal para tareas de proyecto completo (instalar dependencias, correr tests, trabajar con git), la app de escritorio para supervisar varios agentes trabajando en paralelo en distintos repos, y github.com/mobile para preguntar o revisar sin tener un proyecto abierto. Lo que aprendes en una superficie —cómo dar buen contexto, cómo leer un plan antes de aprobarlo— te sirve igual en las otras tres.',
    sceneAccent: 'architecture',
  },
  {
    id: 'architecture-2',
    topic: 'Arquitecturas',
    title: 'Tres niveles de autonomía, no tres productos',
    bullets: [
      'Ask: conversación, cero cambios en tu código',
      'Plan: te muestra el mapa completo antes de ejecutar nada',
      'Agent: ejecuta directamente — de un cambio puntual a una tarea completa',
    ],
    notes:
      'Dentro de cualquier superficie, la decisión real no es "qué herramienta uso" sino "cuánta autonomía le doy". Ask es para pensar antes de actuar. Plan es para cuando quieres ver el alcance completo de un cambio antes de comprometerte. Agent ejecuta — puede ser un cambio de un archivo o una tarea de varios pasos encadenados, la diferencia la marca qué tan grande es lo que le pides, no un modo distinto. El error más común no es elegir mal la superficie, es usar Agent para una pregunta de dos líneas: gasta más créditos y tiempo de los necesarios.',
    sceneAccent: 'architecture',
    image: '/images/talk/architecture.jpg',
  },
  {
    id: 'models-1',
    topic: 'Modelos y planes',
    title: 'No todos los modelos cuestan lo mismo',
    bullets: [
      'El chat siempre consume créditos IA, elijas el modelo que elijas',
      'Modelo automático: Copilot elige el más eficiente para la tarea — consume menos créditos, no cero',
      'Modelos premium: mejor razonamiento, más créditos por uso',
    ],
    notes:
      'Copilot no usa un solo modelo — puedes elegir entre varios (Claude, Gemini, GPT, según tu plan) o dejar la selección automática. Ojo con un error común: usar el chat SIEMPRE consume créditos IA, sin importar qué modelo respondió — lo único que nunca consume créditos son las completions inline y las Next Edit Suggestions (eso lo vemos en el próximo punto). La selección automática simplemente elige el modelo más liviano que alcanza para la tarea, así que consume menos créditos que uno premium, pero no es gratis. Los modelos premium —los más capaces para arquitectura, refactors grandes o razonamiento profundo— consumen más créditos por uso y suelen requerir un plan más alto. Elegir el modelo correcto para cada tarea es la primera y mayor palanca de ahorro que tienes.',
    sceneAccent: 'models',
  },
  {
    id: 'models-2',
    topic: 'Modelos y planes',
    title: 'Créditos IA, no "premium requests"',
    bullets: [
      'Completions y Next Edit Suggestions: siempre gratis, en todos los planes pagos',
      'Chat, Agent Mode, code review y CLI: consumen créditos según tokens procesados',
      'Cada plan trae una bolsa mensual de créditos',
    ],
    notes:
      'Desde junio de 2026, GitHub reemplazó el sistema de "premium requests" por AI Credits: en vez de contar solicitudes, cada interacción se factura según los tokens que realmente procesa, con tarifas publicadas por modelo. Las completions inline y las Next Edit Suggestions nunca consumen créditos, sin importar el plan. Lo que sí consume créditos es todo lo conversacional y agéntico: chat, Agent Mode, code review, y el CLI. Entender esta distinción es la base para optimizar cómo usas Copilot sin gastar de más.',
    sceneAccent: 'models',
  },
  {
    id: 'byok-1',
    topic: 'BYOK',
    title: 'BYOK: trae tu propia clave',
    bullets: [
      'Conecta tu propia cuenta de un proveedor de IA',
      'Anthropic, OpenAI, Google AI Studio, AWS Bedrock, Microsoft Foundry, o cualquier endpoint compatible con OpenAI',
      'Ya funciona en VS Code, CLI y la Copilot App',
    ],
    notes:
      'BYOK (Bring Your Own Key) permite que una organización conecte su propia cuenta de un proveedor de modelos externo y use esos modelos dentro de Copilot, en vez de depender solo de lo que GitHub ofrece por defecto. Lo configura un administrador de la organización — no es algo que cada persona active por su cuenta. Sirve para usar un modelo específico que la empresa ya paga, cumplir una política interna de datos, o acceder a un modelo que aún no está en el catálogo estándar de Copilot. Es una feature de nivel organización (Business/Enterprise), pero vale la pena conocerla: es probable que tu primer equipo de trabajo ya la use.',
    sceneAccent: 'byok',
  },
  {
    id: 'context-1',
    topic: 'Contexto',
    title: 'copilot-instructions.md: el briefing que no repites',
    bullets: [
      '.github/copilot-instructions.md en la raíz del repo',
      'Se lee automáticamente en cada conversación',
      'Estructura: Stack, Convenciones, Reglas de negocio, Qué NO hacer',
    ],
    notes:
      'En vez de re-explicar el stack, las convenciones de nombres y las reglas del proyecto en cada prompt, las escribes una sola vez en .github/copilot-instructions.md y Copilot las lee automáticamente en cada conversación — chat, Agent Mode, e incluso en el code review. La estructura que mejor funciona tiene cuatro secciones: Stack (qué tecnologías usa el proyecto), Convenciones (cómo se nombra todo), Reglas de negocio (lo que Copilot no puede adivinar), y Qué NO hacer (restricciones explícitas). Es la inversión de contexto más rentable que existe: la escribes una vez, la usas en cada prompt del resto del proyecto.',
    sceneAccent: 'context',
  },
  {
    id: 'context-2',
    topic: 'Contexto',
    title: 'Señala, no describas',
    bullets: [
      '#file — un archivo específico (elígelo del picker, no lo escribas a mano)',
      '#selection — el texto seleccionado en el editor',
      '#codebase — búsqueda semántica en todo el repo',
      '#terminalLastCommand — el último error, sin copiarlo a mano',
      '#changes — tus cambios sin commitear',
    ],
    notes:
      'Las variables de contexto te dejan señalar exactamente qué debe ver Copilot, en vez de describirlo en palabras y esperar que lo encuentre solo. #file adjunta un archivo puntual — se selecciona desde el picker de tu editor, no se escribe como texto libre. #selection manda solo el bloque de código que tienes marcado. #codebase dispara la búsqueda semántica sobre todo el proyecto (el agente también la usa automáticamente cuando hace falta, sin que la escribas). #terminalLastCommand adjunta el último comando y su salida completa — ideal para pegar un error real sin copiarlo. #changes manda el diff de lo que no has commiteado todavía. Si viste "@workspace" mencionado en algún tutorial viejo: ya no existe como participante de chat, quedó reemplazado por #codebase.',
    sceneAccent: 'context',
  },
  {
    id: 'tokens-1',
    topic: 'Optimizar tokens',
    title: 'Cuatro palancas para gastar menos y mejor',
    bullets: [
      '1. El modelo correcto para cada tarea',
      '2. Contexto quirúrgico (#file en vez de #codebase para todo)',
      '3. copilot-instructions.md en vez de repetir contexto',
      '4. Nueva conversación al cambiar de tarea (no en cada mensaje)',
    ],
    notes:
      'La optimización de tokens no es "escribir menos" por escribir menos — es dejar de pagar por explicar algo que el proyecto ya sabe. Palanca 1: usa el modelo automático o estándar para tareas simples, reserva los modelos premium para lo que de verdad los necesita. Palanca 2: #file consume 5 a 8 veces menos contexto que #codebase para la misma pregunta, cuando ya sabes qué archivo es relevante — #codebase resuelve "encontrar", #file resuelve "analizar algo que ya encontraste", son problemas distintos. Palanca 3: lo que ya vive en copilot-instructions.md no necesitas retipearlo en el prompt. Palanca 4: una conversación larga acumula todo su historial como contexto en cada mensaje nuevo — no se trata de abrir una conversación por cada mensaje (seguir la misma conversación mientras trabajás en lo mismo es lo normal y lo correcto), sino de no arrastrar ese historial cuando ya cambiaste de tarea. Nota aparte sobre Plan Mode: no es una quinta palanca de tokens — no reduce el contexto de un mensaje. Lo que hace es evitarte iteraciones desperdiciadas (el agente corrigiendo un camino equivocado varias veces), que sí terminan costando más créditos que revisar el plan una vez antes de ejecutar. Son dos tipos de ahorro distintos y se complementan.',
    sceneAccent: 'tokens',
  },
  {
    id: 'tokens-2',
    topic: 'Optimizar tokens',
    title: 'El mismo resultado, con menos contexto pagado',
    bullets: [
      'Sin palancas: "Quiero validar un campo. El proyecto usa React, TypeScript, Tailwind, los componentes van en src/components, en PascalCase, usamos Zod para validar, no agregues librerías nuevas... agrega validación al email en JobForm"',
      'Con palancas: "#file:JobForm.tsx agrega validación al email"',
      'Copilot da la misma respuesta correcta en los dos casos — la diferencia es cuánto tuviste que escribir (y pagar) para llegar ahí',
    ],
    notes:
      'Compará los dos prompts de arriba: el primero repite en cada mensaje algo que copilot-instructions.md ya sabe (el stack, las convenciones, las reglas) — todo ese texto son tokens que pagás sin enseñarle nada nuevo a Copilot. El segundo prompt no repite nada de eso porque ya vive en las instrucciones permanentes del proyecto, y usa #file para señalar el archivo exacto en vez de dejar que #codebase tenga que buscarlo. El resultado que ves en pantalla es el mismo — Copilot igual sabe que es React+TypeScript+Tailwind+Zod y sigue las convenciones — pero llegaste ahí con un prompt mucho más corto. Esa diferencia, multiplicada por cada prompt que escribís en un mes, es la que se nota en tu consumo de créditos.',
    sceneAccent: 'tokens',
  },
  {
    id: 'lifecycle-1',
    topic: 'Ciclo de vida con IA',
    title: 'El ciclo de vida clásico',
    bullets: [
      'Planificar → Escribir código → Escribir tests → Abrir PR → Revisar → Mergear → Desplegar',
      'Una persona ejecuta cada paso',
      'La IA, si aparece, es autocompletado dentro de un paso',
    ],
    notes:
      'El ciclo de vida de desarrollo de software tradicional es una secuencia de pasos que una persona ejecuta uno por uno: planificar el trabajo, escribir el código, escribir tests, abrir un PR, esperar revisión, mergear, desplegar. La IA, en su forma más antigua (autocompletado), solo acelera un paso — sigue siendo una persona decidiendo y ejecutando cada etapa del ciclo.',
    sceneAccent: 'lifecycle',
  },
  {
    id: 'lifecycle-2',
    topic: 'Ciclo de vida con IA',
    title: 'El loop agéntico',
    bullets: [
      'Issue (la spec) → Agente → PR abierto automáticamente',
      'La persona supervisa y aprueba, no ejecuta cada paso',
      'El ciclo Pensar → Actuar → Observar corre dentro del agente, no en tu cabeza',
    ],
    notes:
      'Con agentes de IA (Copilot coding agent, Agent Mode, el CLI en autopilot), el ciclo cambia de forma: un issue bien escrito funciona como la spec, se lo asignas al agente, y el agente ejecuta su propio ciclo Pensar → Actuar → Observar — escribe código, corre tests, corrige errores — hasta abrir un Pull Request. Tu trabajo deja de ser "ejecutar cada paso" y pasa a ser "supervisar y aprobar": revisar el plan antes de que se ejecute, revisar el PR antes de mergear. El cuello de botella ya no es escribir código — es la calidad de la spec que le diste al agente.',
    sceneAccent: 'lifecycle',
    image: '/images/talk/lifecycle.jpg',
  },
  {
    id: 'lifecycle-3',
    topic: 'Ciclo de vida con IA',
    title: 'Todo el ciclo, dentro de GitHub',
    bullets: [
      'Issues → la spec del trabajo',
      'Copilot coding agent → ejecuta de forma asíncrona en la nube',
      'Pull Request → Copilot Code Review revisa antes que una persona',
      'Actions → tests y despliegue, igual que siempre',
    ],
    notes:
      'GitHub es el caso concreto de este patrón: un Issue bien escrito es la spec, se le asigna a Copilot coding agent (que trabaja en la nube, en un entorno aislado, y puede tardar minutos u horas), el agente abre un Pull Request cuando termina, Copilot Code Review deja comentarios automáticos antes de que una persona humana revise, y GitHub Actions sigue corriendo tests y despliegues como siempre. El ciclo completo — planificar, construir, probar, revisar, desplegar — ahora tiene un agente ejecutando el tramo intermedio, con humanos supervisando en los extremos: al escribir el issue, y al aprobar el PR.',
    sceneAccent: 'lifecycle',
  },
  {
    id: 'closing',
    topic: 'Cierre',
    title: 'Lo que te llevas',
    bullets: [
      'El contexto que le das al harness determina la calidad de la respuesta',
      'Elegir el modelo y la superficie correctos ahorra tiempo y créditos',
      'El nuevo ciclo de vida no elimina tu criterio — lo mueve a supervisar, no a ejecutar',
    ],
    notes:
      'Tres ideas para llevarte: primero, Copilot no es un modelo, es un modelo dentro de un harness — y el contexto que ese harness recibe determina la calidad de cada respuesta, más que cualquier otro factor. Segundo, elegir bien el modelo, la superficie y cuánto contexto le das es la diferencia entre usar Copilot barato y bien, o caro y mal. Tercero, el ciclo de vida de desarrollo con agentes no te saca del proceso — cambia dónde aplicas tu criterio: de ejecutar cada paso, a escribir buenas specs y revisar buenos resultados.',
    sceneAccent: 'closing',
    image: '/images/talk/closing.jpg',
    links: SOCIAL_LINKS,
  },
]
