import { Prompt, CopilotPlan } from './types'

export const prompts: Prompt[] = [
  {
    id: 'learn-1',
    category: 'Aprender',
    title: 'Explicar un concepto desde cero',
    description: 'Para entender cualquier tecnología o concepto nuevo',
    prompt: 'Explícame [concepto/tecnología] como si nunca hubiera programado antes. Usa analogías simples y ejemplos del mundo real.',
    tags: ['principiante', 'conceptos'],
    modelHint: 'El modelo automático (o uno base) alcanza de sobra para explicaciones — no gastes créditos premium aquí.'
  },
  {
    id: 'learn-2',
    category: 'Aprender',
    title: 'Tutorial paso a paso',
    description: 'Crear un tutorial completo sobre un tema',
    prompt: 'Crea un tutorial paso a paso para aprender [tecnología/concepto]. Incluye explicaciones, ejemplos de código comentados y ejercicios prácticos.',
    tags: ['tutorial', 'práctica'],
    modelHint: 'Contenido educativo — el modelo automático redacta bien esto, no necesitas uno premium.'
  },
  {
    id: 'learn-3',
    category: 'Aprender',
    title: 'Comparar tecnologías',
    description: 'Entender diferencias entre opciones similares',
    prompt: 'Compara [tecnología A] vs [tecnología B]. Explica cuándo usar cada una, sus ventajas y desventajas, y dame ejemplos prácticos.',
    tags: ['comparación', 'decisión'],
    modelHint: 'Es conocimiento general, no razonamiento profundo — el modelo automático responde bien.'
  },
  {
    id: 'learn-4',
    category: 'Aprender',
    title: 'Roadmap personalizado',
    description: 'Crear plan de aprendizaje estructurado',
    prompt: 'Crea un roadmap de 3 meses para aprender [tecnología/stack] desde cero. Incluye recursos gratuitos, proyectos incrementales y hitos claros.',
    tags: ['roadmap', 'planificación'],
    modelHint: 'Tarea de planificación/redacción — el modelo automático es suficiente, no necesitas uno premium.'
  },
  {
    id: 'create-1',
    category: 'Crear Código',
    title: 'Componente desde cero',
    description: 'Generar un componente completo con estilos',
    prompt: 'Crea un componente [descripción del componente] en React con TypeScript. Incluye estilos con Tailwind CSS, props tipadas y comentarios explicativos.',
    tags: ['react', 'componente'],
    modelHint: 'Para un componente estándar, el modelo automático rinde bien. Sube a uno premium solo si la lógica interna es compleja.'
  },
  {
    id: 'create-2',
    category: 'Crear Código',
    title: 'Función con validación',
    description: 'Crear función robusta con manejo de errores',
    prompt: 'Crea una función que [descripción de funcionalidad]. Incluye validación de entrada, manejo de errores y documentación JSDoc.',
    tags: ['función', 'validación'],
    modelHint: 'Función acotada y bien definida — el modelo automático la resuelve sin problema.'
  },
  {
    id: 'create-3',
    category: 'Crear Código',
    title: 'API REST endpoint',
    description: 'Generar endpoint con buenas prácticas',
    prompt: 'Crea un endpoint REST para [operación]. Incluye validación de datos, manejo de errores HTTP apropiados y ejemplos de uso.',
    tags: ['api', 'backend'],
    modelHint: 'Para un CRUD estándar, el modelo automático rinde bien. Solo sube a uno premium si la lógica de negocio es compleja.'
  },
  {
    id: 'create-4',
    category: 'Crear Código',
    title: 'Página completa',
    description: 'Generar página web responsive',
    prompt: 'Crea una página web responsive para [propósito]. Usa HTML semántico, CSS moderno y JavaScript vanilla. Incluye accesibilidad (ARIA labels).',
    tags: ['página', 'responsive'],
    modelHint: 'HTML/CSS/JS estándar — el modelo automático alcanza. Reserva el premium para lógica de negocio compleja.'
  },
  {
    id: 'understand-1',
    category: 'Entender Código',
    title: 'Explicar código existente',
    description: 'Entender qué hace un código complejo',
    prompt: 'Explica este código línea por línea en español simple: [pegar código]. ¿Qué hace cada parte y cómo funciona en conjunto?',
    tags: ['lectura', 'comprensión'],
    modelHint: 'Explicar código ya escrito no exige mucho razonamiento — el modelo automático es la opción más barata.'
  },
  {
    id: 'understand-2',
    category: 'Entender Código',
    title: 'Identificar problemas',
    description: 'Encontrar bugs o malas prácticas',
    prompt: 'Analiza este código y identifica: 1) posibles bugs, 2) problemas de rendimiento, 3) mejoras de legibilidad: [pegar código]',
    tags: ['debugging', 'análisis'],
    modelHint: 'Un modelo premium suele encontrar más en un solo pase — vale la pena aquí, en vez de iterar varias veces con uno básico.'
  },
  {
    id: 'understand-3',
    category: 'Entender Código',
    title: 'Traducir entre lenguajes',
    description: 'Convertir código de un lenguaje a otro',
    prompt: 'Traduce este código de [lenguaje origen] a [lenguaje destino] manteniendo la misma funcionalidad: [pegar código]',
    tags: ['traducción', 'lenguajes'],
    modelHint: 'El automático funciona bien para traducciones directas. Si los lenguajes tienen paradigmas muy distintos, prueba con uno premium.'
  },
  {
    id: 'improve-1',
    category: 'Mejorar y Refactorizar',
    title: 'Refactorizar para legibilidad',
    description: 'Hacer código más limpio y mantenible',
    prompt: 'Refactoriza este código para mejorar legibilidad y mantenibilidad. Aplica principios SOLID y mejores prácticas: [pegar código]',
    tags: ['refactor', 'clean-code'],
    modelHint: 'Refactors con principios de diseño se benefician de un modelo premium — mejor razonamiento sobre trade-offs.'
  },
  {
    id: 'improve-2',
    category: 'Mejorar y Refactorizar',
    title: 'Optimizar rendimiento',
    description: 'Mejorar velocidad y eficiencia',
    prompt: 'Optimiza este código para mejor rendimiento. Explica qué cambios haces y por qué mejoran la eficiencia: [pegar código]',
    tags: ['optimización', 'rendimiento'],
    modelHint: 'La optimización pide buen razonamiento — usa un modelo premium, sobre todo si el código ya es complejo.'
  },
  {
    id: 'improve-3',
    category: 'Mejorar y Refactorizar',
    title: 'Hacer código accesible',
    description: 'Mejorar accesibilidad web',
    prompt: 'Mejora la accesibilidad de este componente HTML/React. Añade ARIA labels apropiados, navegación por teclado y soporte para lectores de pantalla: [pegar código]',
    tags: ['a11y', 'accesibilidad'],
    modelHint: 'Son patrones bien documentados — el modelo automático los aplica correctamente sin gastar de más.'
  },
  {
    id: 'improve-4',
    category: 'Mejorar y Refactorizar',
    title: 'Documentar código',
    description: 'Añadir documentación completa',
    prompt: 'Añade documentación completa a este código: comentarios explicativos, JSDoc/docstrings, y un README con ejemplos de uso: [pegar código]',
    tags: ['documentación', 'comments'],
    modelHint: 'Documentar código ya escrito es redacción, no lógica nueva — el modelo automático alcanza.'
  },
  {
    id: 'test-1',
    category: 'Testing',
    title: 'Tests unitarios',
    description: 'Generar suite de tests completa',
    prompt: 'Crea tests unitarios completos para esta función/componente usando [framework de testing]. Incluye casos felices, edge cases y manejo de errores: [pegar código]',
    tags: ['unit-test', 'testing'],
    modelHint: 'Generar tests estándar no necesita un modelo premium — el automático cubre bien esto.'
  },
  {
    id: 'test-2',
    category: 'Testing',
    title: 'Casos de prueba',
    description: 'Identificar escenarios a testear',
    prompt: 'Para esta funcionalidad, identifica todos los casos de prueba importantes: casos felices, edge cases, errores esperados y validaciones: [descripción de funcionalidad]',
    tags: ['test-cases', 'qa'],
    modelHint: 'El automático cubre bien los casos típicos. Si la funcionalidad es crítica o muy compleja, un modelo premium encuentra más edge cases.'
  },
  {
    id: 'debug-1',
    category: 'Debugging',
    title: 'Encontrar bug',
    description: 'Identificar causa de un error',
    prompt: 'Este código genera el error: [mensaje de error]. Identifica la causa raíz y sugiere una solución: [pegar código]',
    tags: ['bug', 'error'],
    modelHint: 'Empieza con el automático. Si el bug es difícil de rastrear y ya llevas 2-3 intentos, cambia a uno premium — sale más barato que seguir iterando.'
  },
  {
    id: 'debug-2',
    category: 'Debugging',
    title: 'Añadir logging',
    description: 'Agregar logs para debugging',
    prompt: 'Añade logging estratégico a este código para facilitar debugging. Incluye información relevante en cada punto crítico: [pegar código]',
    tags: ['logging', 'debugging'],
    modelHint: 'Agregar logs es mecánico — el modelo automático lo hace bien y más barato.'
  },
  {
    id: 'project-1',
    category: 'Proyectos',
    title: 'Idea de proyecto',
    description: 'Generar ideas de proyectos para portafolio',
    prompt: 'Dame 5 ideas de proyectos para mi portafolio tech. Soy [nivel de experiencia] y quiero demostrar habilidades en [tecnologías]. Cada proyecto debe ser completable en [tiempo].',
    tags: ['ideas', 'portafolio'],
    modelHint: 'Es brainstorming, no ejecución — el modelo automático da buenas ideas sin gastar de más.'
  },
  {
    id: 'project-2',
    category: 'Proyectos',
    title: 'Arquitectura de proyecto',
    description: 'Diseñar estructura de un proyecto',
    prompt: 'Diseña la arquitectura completa para un proyecto de [descripción]. Incluye: estructura de carpetas, tecnologías recomendadas, componentes principales y flujo de datos.',
    tags: ['arquitectura', 'diseño'],
    modelHint: 'Decisiones de arquitectura se benefician de un modelo premium — es un gasto puntual que evita rehacer el proyecto después.'
  },
  {
    id: 'project-3',
    category: 'Proyectos',
    title: 'Features para MVP',
    description: 'Definir funcionalidades mínimas viables',
    prompt: 'Para una aplicación de [descripción], define las features del MVP. Prioriza funcionalidad core vs nice-to-have. Dame un roadmap de implementación.',
    tags: ['mvp', 'planificación'],
    modelHint: 'El automático prioriza bien para la mayoría de los casos. Si el producto es muy complejo, un modelo premium ayuda a decidir mejor los trade-offs.'
  },
  {
    id: 'readme-1',
    category: 'README y Documentación',
    title: 'README de proyecto',
    description: 'Crear README profesional para repositorio',
    prompt: 'Crea un README profesional para mi proyecto: [descripción del proyecto]. Incluye: descripción, tecnologías, instalación, uso, screenshots, contribución y licencia.',
    tags: ['readme', 'documentación'],
    modelHint: 'Redacción y formato — el modelo automático es la opción más barata y funciona bien.'
  },
  {
    id: 'readme-2',
    category: 'README y Documentación',
    title: 'README de perfil GitHub',
    description: 'Generar README personal atractivo',
    prompt: 'Crea un README para mi perfil de GitHub. Soy [descripción profesional], busco [tipo de oportunidad], y mis skills son [lista]. Hazlo visual con badges, stats y call-to-action.',
    tags: ['perfil', 'personal-branding'],
    modelHint: 'Es texto y formato, no lógica — el modelo automático te da un resultado igual de bueno gastando menos.'
  },
  {
    id: 'readme-3',
    category: 'README y Documentación',
    title: 'Documentación API',
    description: 'Documentar endpoints de API',
    prompt: 'Documenta esta API: [descripción/endpoints]. Incluye para cada endpoint: método HTTP, URL, parámetros, ejemplo de request, ejemplo de response y códigos de error.',
    tags: ['api-docs', 'documentación'],
    modelHint: 'Documentación estructurada — el modelo automático la arma bien y más barato.'
  },
  {
    id: 'cv-1',
    category: 'CV y Carrera',
    title: 'Descripción de proyecto para CV',
    description: 'Transformar proyecto técnico en bullet point profesional',
    prompt: 'Tengo este proyecto: [descripción técnica]. Escribe 2-3 bullet points profesionales para mi CV destacando impacto, tecnologías y resultados medibles.',
    tags: ['cv', 'carrera'],
    modelHint: 'Tarea de copywriting — el modelo automático es suficiente, guarda los créditos premium para código.'
  },
  {
    id: 'cv-2',
    category: 'CV y Carrera',
    title: 'Experiencia académica como experiencia laboral',
    description: 'Presentar proyectos universitarios profesionalmente',
    prompt: 'Transforma este proyecto universitario en experiencia profesional para CV: [descripción del proyecto académico]. Enfócate en skills transferibles y resultados.',
    tags: ['cv', 'académico'],
    modelHint: 'Redacción y reencuadre — el modelo automático es la opción más económica.'
  },
  {
    id: 'cv-3',
    category: 'CV y Carrera',
    title: 'Skills y tecnologías',
    description: 'Listar habilidades técnicas apropiadamente',
    prompt: 'Organiza mis skills técnicos para mi CV: [lista de tecnologías/herramientas]. Agrúpalos por categoría (Frontend, Backend, Tools, etc.) y nivel de dominio.',
    tags: ['skills', 'cv'],
    modelHint: 'Es organizar una lista, no razonar — el modelo automático sobra para esto.'
  },
  {
    id: 'interview-1',
    category: 'Entrevistas',
    title: 'Preparar respuestas técnicas',
    description: 'Practicar preguntas técnicas comunes',
    prompt: 'Simula una entrevista técnica para posición de [rol]. Hazme 5 preguntas técnicas sobre [tecnologías] con dificultad [nivel]. Dame feedback sobre mis respuestas.',
    tags: ['entrevista', 'preparación'],
    modelHint: 'Para dificultad senior o feedback más detallado, un modelo premium simula mejor la entrevista real. Para nivel básico, el automático alcanza.'
  },
  {
    id: 'interview-2',
    category: 'Entrevistas',
    title: 'Explicar proyecto en entrevista',
    description: 'Practicar presentación de proyectos',
    prompt: 'Ayúdame a preparar cómo presentar este proyecto en una entrevista: [descripción]. Dame un script de 2-3 minutos destacando decisiones técnicas y desafíos superados.',
    tags: ['entrevista', 'storytelling'],
    modelHint: 'Es storytelling, no código — el modelo automático arma un buen script sin gastar de más.'
  },
  {
    id: 'interview-3',
    category: 'Entrevistas',
    title: 'Preguntas conductuales',
    description: 'Preparar respuestas STAR',
    prompt: 'Para la pregunta de entrevista "[pregunta conductual]", ayúdame a estructurar mi respuesta usando el método STAR basándome en esta experiencia: [descripción].',
    tags: ['entrevista', 'conductual'],
    modelHint: 'Estructurar una respuesta STAR es redacción — el modelo automático es suficiente.'
  },
  {
    id: 'portfolio-1',
    category: 'Portafolio',
    title: 'Seleccionar proyectos',
    description: 'Elegir mejores proyectos para mostrar',
    prompt: 'Tengo estos proyectos: [lista con breve descripción]. Ayúdame a seleccionar los 3-5 mejores para mi portafolio tech y explica por qué destacan.',
    tags: ['portafolio', 'curación'],
    modelHint: 'Es curación y criterio, no código — el modelo automático hace bien esta selección.'
  },
  {
    id: 'portfolio-2',
    category: 'Portafolio',
    title: 'Descripción de proyecto para portafolio',
    description: 'Escribir descripción atractiva de proyecto',
    prompt: 'Escribe una descripción atractiva para mi portafolio sobre este proyecto: [descripción técnica]. Incluye: problema resuelto, tecnologías usadas, desafíos y aprendizajes clave.',
    tags: ['portafolio', 'copywriting'],
    modelHint: 'Copywriting puro — el modelo automático te da un buen resultado sin gastar de más.'
  },
  {
    id: 'portfolio-3',
    category: 'Portafolio',
    title: 'Bio profesional',
    description: 'Crear biografía profesional impactante',
    prompt: 'Escribe una bio profesional para mi portafolio web. Background: [tu historia], Skills: [tus skills], Buscando: [tipo de oportunidad]. Tono: profesional pero cercano.',
    tags: ['portafolio', 'bio'],
    modelHint: 'Redacción de bio — usa el modelo automático, no necesitas gastar más créditos en esto.'
  },
  {
    id: 'git-1',
    category: 'Git y GitHub',
    title: 'Mensajes de commit',
    description: 'Escribir commits descriptivos',
    prompt: 'Ayúdame a escribir mensajes de commit siguiendo conventional commits para estos cambios: [descripción de cambios]. Usa formato: tipo(scope): descripción.',
    tags: ['git', 'commits'],
    modelHint: 'Esto es lo más barato que le puedes pedir a Copilot — el modelo automático sobra.'
  },
  {
    id: 'git-2',
    category: 'Git y GitHub',
    title: 'Pull Request description',
    description: 'Crear descripción completa de PR',
    prompt: 'Crea una descripción de Pull Request profesional para estos cambios: [descripción]. Incluye: qué cambió, por qué, cómo testearlo y screenshots si aplica.',
    tags: ['github', 'pr'],
    modelHint: 'Redactar una descripción de PR es barato — el modelo automático sobra.'
  },
  {
    id: 'git-3',
    category: 'Git y GitHub',
    title: 'Issue template',
    description: 'Reportar bug o feature claramente',
    prompt: 'Ayúdame a crear un issue en GitHub para: [bug/feature]. Usa formato profesional con: descripción, pasos para reproducir, comportamiento esperado vs actual.',
    tags: ['github', 'issues'],
    modelHint: 'Formato de issue estándar — el modelo automático es la opción más barata.'
  }
]

export const copilotPlans: CopilotPlan[] = [
  {
    name: 'GitHub Copilot Free',
    price: 'Gratis',
    features: [
      'Completaciones de código y Next Edit Suggestions (no consumen créditos)',
      'Chat y Agent Mode con selección automática de modelo',
      'Uso limitado de modelos premium (Claude, Gemini, GPT) vía créditos IA',
      'Disponible en VS Code, Visual Studio, JetBrains, Neovim, github.com y más',
      'Sin tarjeta de crédito, solo necesitas una cuenta de GitHub'
    ],
    bestFor: 'Estudiantes y personas que están comenzando a programar',
    cta: 'Ideal para este taller'
  },
  {
    name: 'Copilot Pro',
    price: '$10/mes o $100/año',
    features: [
      'Completaciones ilimitadas de código',
      'Créditos IA mensuales para chat y Agent Mode',
      'Acceso a múltiples modelos (Claude, Gemini, GPT)',
      'Copilot coding agent (delega tareas que abren su propio PR)',
      'Acceso a GitHub Copilot CLI y a la app de escritorio'
    ],
    bestFor: 'Personas aprendiendo o programando de forma independiente'
  },
  {
    name: 'Copilot Pro+',
    price: '$39/mes o $390/año',
    features: [
      'Todo lo de Pro, con mayor asignación mensual de créditos IA',
      'Acceso a los modelos más avanzados (ej. variantes de Claude Opus)',
      'Modo rápido ("fast mode") en algunos modelos',
      'Ideal para quienes usan Copilot intensivamente todos los días'
    ],
    bestFor: 'Desarrolladores freelance con uso muy intensivo de IA'
  },
  {
    name: 'GitHub Copilot for Students',
    price: 'Gratis (verificación requerida)',
    features: [
      'Equivalente a Copilot Pro sin costo',
      'Requiere GitHub Student Developer Pack',
      'Verificación de estatus estudiantil (correo o carnet)',
      'Acceso mientras mantengas tu estatus de estudiante',
      'Incluye otros beneficios del Student Pack (dominios, hosting, créditos cloud)'
    ],
    bestFor: 'Estudiantes universitarios verificados',
    cta: 'Solicita Student Pack'
  },
  {
    name: 'Copilot Business',
    price: '$19/usuario/mes',
    features: [
      'Todo lo de Pro para cada persona del equipo',
      'Copilot coding agent en la nube',
      'Gestión centralizada y políticas de organización',
      'Bolsa de créditos IA compartida entre el equipo',
      'Sin retención de datos del código para entrenar modelos'
    ],
    bestFor: 'Equipos y empresas'
  }
]
