import { Prompt, CopilotPlan } from './types'

export const prompts: Prompt[] = [
  {
    id: 'learn-1',
    category: 'Aprender',
    title: 'Explicar un concepto desde cero',
    description: 'Para entender cualquier tecnología o concepto nuevo',
    prompt: 'Explícame [concepto/tecnología] como si nunca hubiera programado antes. Usa analogías simples y ejemplos del mundo real.',
    tags: ['principiante', 'conceptos']
  },
  {
    id: 'learn-2',
    category: 'Aprender',
    title: 'Tutorial paso a paso',
    description: 'Crear un tutorial completo sobre un tema',
    prompt: 'Crea un tutorial paso a paso para aprender [tecnología/concepto]. Incluye explicaciones, ejemplos de código comentados y ejercicios prácticos.',
    tags: ['tutorial', 'práctica']
  },
  {
    id: 'learn-3',
    category: 'Aprender',
    title: 'Comparar tecnologías',
    description: 'Entender diferencias entre opciones similares',
    prompt: 'Compara [tecnología A] vs [tecnología B]. Explica cuándo usar cada una, sus ventajas y desventajas, y dame ejemplos prácticos.',
    tags: ['comparación', 'decisión']
  },
  {
    id: 'learn-4',
    category: 'Aprender',
    title: 'Roadmap personalizado',
    description: 'Crear plan de aprendizaje estructurado',
    prompt: 'Crea un roadmap de 3 meses para aprender [tecnología/stack] desde cero. Incluye recursos gratuitos, proyectos incrementales y hitos claros.',
    tags: ['roadmap', 'planificación']
  },
  {
    id: 'create-1',
    category: 'Crear Código',
    title: 'Componente desde cero',
    description: 'Generar un componente completo con estilos',
    prompt: 'Crea un componente [descripción del componente] en React con TypeScript. Incluye estilos con Tailwind CSS, props tipadas y comentarios explicativos.',
    tags: ['react', 'componente']
  },
  {
    id: 'create-2',
    category: 'Crear Código',
    title: 'Función con validación',
    description: 'Crear función robusta con manejo de errores',
    prompt: 'Crea una función que [descripción de funcionalidad]. Incluye validación de entrada, manejo de errores y documentación JSDoc.',
    tags: ['función', 'validación']
  },
  {
    id: 'create-3',
    category: 'Crear Código',
    title: 'API REST endpoint',
    description: 'Generar endpoint con buenas prácticas',
    prompt: 'Crea un endpoint REST para [operación]. Incluye validación de datos, manejo de errores HTTP apropiados y ejemplos de uso.',
    tags: ['api', 'backend']
  },
  {
    id: 'create-4',
    category: 'Crear Código',
    title: 'Página completa',
    description: 'Generar página web responsive',
    prompt: 'Crea una página web responsive para [propósito]. Usa HTML semántico, CSS moderno y JavaScript vanilla. Incluye accesibilidad (ARIA labels).',
    tags: ['página', 'responsive']
  },
  {
    id: 'understand-1',
    category: 'Entender Código',
    title: 'Explicar código existente',
    description: 'Entender qué hace un código complejo',
    prompt: 'Explica este código línea por línea en español simple: [pegar código]. ¿Qué hace cada parte y cómo funciona en conjunto?',
    tags: ['lectura', 'comprensión']
  },
  {
    id: 'understand-2',
    category: 'Entender Código',
    title: 'Identificar problemas',
    description: 'Encontrar bugs o malas prácticas',
    prompt: 'Analiza este código y identifica: 1) posibles bugs, 2) problemas de rendimiento, 3) mejoras de legibilidad: [pegar código]',
    tags: ['debugging', 'análisis']
  },
  {
    id: 'understand-3',
    category: 'Entender Código',
    title: 'Traducir entre lenguajes',
    description: 'Convertir código de un lenguaje a otro',
    prompt: 'Traduce este código de [lenguaje origen] a [lenguaje destino] manteniendo la misma funcionalidad: [pegar código]',
    tags: ['traducción', 'lenguajes']
  },
  {
    id: 'improve-1',
    category: 'Mejorar y Refactorizar',
    title: 'Refactorizar para legibilidad',
    description: 'Hacer código más limpio y mantenible',
    prompt: 'Refactoriza este código para mejorar legibilidad y mantenibilidad. Aplica principios SOLID y mejores prácticas: [pegar código]',
    tags: ['refactor', 'clean-code']
  },
  {
    id: 'improve-2',
    category: 'Mejorar y Refactorizar',
    title: 'Optimizar rendimiento',
    description: 'Mejorar velocidad y eficiencia',
    prompt: 'Optimiza este código para mejor rendimiento. Explica qué cambios haces y por qué mejoran la eficiencia: [pegar código]',
    tags: ['optimización', 'rendimiento']
  },
  {
    id: 'improve-3',
    category: 'Mejorar y Refactorizar',
    title: 'Hacer código accesible',
    description: 'Mejorar accesibilidad web',
    prompt: 'Mejora la accesibilidad de este componente HTML/React. Añade ARIA labels apropiados, navegación por teclado y soporte para lectores de pantalla: [pegar código]',
    tags: ['a11y', 'accesibilidad']
  },
  {
    id: 'improve-4',
    category: 'Mejorar y Refactorizar',
    title: 'Documentar código',
    description: 'Añadir documentación completa',
    prompt: 'Añade documentación completa a este código: comentarios explicativos, JSDoc/docstrings, y un README con ejemplos de uso: [pegar código]',
    tags: ['documentación', 'comments']
  },
  {
    id: 'test-1',
    category: 'Testing',
    title: 'Tests unitarios',
    description: 'Generar suite de tests completa',
    prompt: 'Crea tests unitarios completos para esta función/componente usando [framework de testing]. Incluye casos felices, edge cases y manejo de errores: [pegar código]',
    tags: ['unit-test', 'testing']
  },
  {
    id: 'test-2',
    category: 'Testing',
    title: 'Casos de prueba',
    description: 'Identificar escenarios a testear',
    prompt: 'Para esta funcionalidad, identifica todos los casos de prueba importantes: casos felices, edge cases, errores esperados y validaciones: [descripción de funcionalidad]',
    tags: ['test-cases', 'qa']
  },
  {
    id: 'debug-1',
    category: 'Debugging',
    title: 'Encontrar bug',
    description: 'Identificar causa de un error',
    prompt: 'Este código genera el error: [mensaje de error]. Identifica la causa raíz y sugiere una solución: [pegar código]',
    tags: ['bug', 'error']
  },
  {
    id: 'debug-2',
    category: 'Debugging',
    title: 'Añadir logging',
    description: 'Agregar logs para debugging',
    prompt: 'Añade logging estratégico a este código para facilitar debugging. Incluye información relevante en cada punto crítico: [pegar código]',
    tags: ['logging', 'debugging']
  },
  {
    id: 'project-1',
    category: 'Proyectos',
    title: 'Idea de proyecto',
    description: 'Generar ideas de proyectos para portafolio',
    prompt: 'Dame 5 ideas de proyectos para mi portafolio tech. Soy [nivel de experiencia] y quiero demostrar habilidades en [tecnologías]. Cada proyecto debe ser completable en [tiempo].',
    tags: ['ideas', 'portafolio']
  },
  {
    id: 'project-2',
    category: 'Proyectos',
    title: 'Arquitectura de proyecto',
    description: 'Diseñar estructura de un proyecto',
    prompt: 'Diseña la arquitectura completa para un proyecto de [descripción]. Incluye: estructura de carpetas, tecnologías recomendadas, componentes principales y flujo de datos.',
    tags: ['arquitectura', 'diseño']
  },
  {
    id: 'project-3',
    category: 'Proyectos',
    title: 'Features para MVP',
    description: 'Definir funcionalidades mínimas viables',
    prompt: 'Para una aplicación de [descripción], define las features del MVP. Prioriza funcionalidad core vs nice-to-have. Dame un roadmap de implementación.',
    tags: ['mvp', 'planificación']
  },
  {
    id: 'readme-1',
    category: 'README y Documentación',
    title: 'README de proyecto',
    description: 'Crear README profesional para repositorio',
    prompt: 'Crea un README profesional para mi proyecto: [descripción del proyecto]. Incluye: descripción, tecnologías, instalación, uso, screenshots, contribución y licencia.',
    tags: ['readme', 'documentación']
  },
  {
    id: 'readme-2',
    category: 'README y Documentación',
    title: 'README de perfil GitHub',
    description: 'Generar README personal atractivo',
    prompt: 'Crea un README para mi perfil de GitHub. Soy [descripción profesional], busco [tipo de oportunidad], y mis skills son [lista]. Hazlo visual con badges, stats y call-to-action.',
    tags: ['perfil', 'personal-branding']
  },
  {
    id: 'readme-3',
    category: 'README y Documentación',
    title: 'Documentación API',
    description: 'Documentar endpoints de API',
    prompt: 'Documenta esta API: [descripción/endpoints]. Incluye para cada endpoint: método HTTP, URL, parámetros, ejemplo de request, ejemplo de response y códigos de error.',
    tags: ['api-docs', 'documentación']
  },
  {
    id: 'cv-1',
    category: 'CV y Carrera',
    title: 'Descripción de proyecto para CV',
    description: 'Transformar proyecto técnico en bullet point profesional',
    prompt: 'Tengo este proyecto: [descripción técnica]. Escribe 2-3 bullet points profesionales para mi CV destacando impacto, tecnologías y resultados medibles.',
    tags: ['cv', 'carrera']
  },
  {
    id: 'cv-2',
    category: 'CV y Carrera',
    title: 'Experiencia académica como experiencia laboral',
    description: 'Presentar proyectos universitarios profesionalmente',
    prompt: 'Transforma este proyecto universitario en experiencia profesional para CV: [descripción del proyecto académico]. Enfócate en skills transferibles y resultados.',
    tags: ['cv', 'académico']
  },
  {
    id: 'cv-3',
    category: 'CV y Carrera',
    title: 'Skills y tecnologías',
    description: 'Listar habilidades técnicas apropiadamente',
    prompt: 'Organiza mis skills técnicos para mi CV: [lista de tecnologías/herramientas]. Agrúpalos por categoría (Frontend, Backend, Tools, etc.) y nivel de dominio.',
    tags: ['skills', 'cv']
  },
  {
    id: 'interview-1',
    category: 'Entrevistas',
    title: 'Preparar respuestas técnicas',
    description: 'Practicar preguntas técnicas comunes',
    prompt: 'Simula una entrevista técnica para posición de [rol]. Hazme 5 preguntas técnicas sobre [tecnologías] con dificultad [nivel]. Dame feedback sobre mis respuestas.',
    tags: ['entrevista', 'preparación']
  },
  {
    id: 'interview-2',
    category: 'Entrevistas',
    title: 'Explicar proyecto en entrevista',
    description: 'Practicar presentación de proyectos',
    prompt: 'Ayúdame a preparar cómo presentar este proyecto en una entrevista: [descripción]. Dame un script de 2-3 minutos destacando decisiones técnicas y desafíos superados.',
    tags: ['entrevista', 'storytelling']
  },
  {
    id: 'interview-3',
    category: 'Entrevistas',
    title: 'Preguntas conductuales',
    description: 'Preparar respuestas STAR',
    prompt: 'Para la pregunta de entrevista "[pregunta conductual]", ayúdame a estructurar mi respuesta usando el método STAR basándome en esta experiencia: [descripción].',
    tags: ['entrevista', 'conductual']
  },
  {
    id: 'portfolio-1',
    category: 'Portafolio',
    title: 'Seleccionar proyectos',
    description: 'Elegir mejores proyectos para mostrar',
    prompt: 'Tengo estos proyectos: [lista con breve descripción]. Ayúdame a seleccionar los 3-5 mejores para mi portafolio tech y explica por qué destacan.',
    tags: ['portafolio', 'curación']
  },
  {
    id: 'portfolio-2',
    category: 'Portafolio',
    title: 'Descripción de proyecto para portafolio',
    description: 'Escribir descripción atractiva de proyecto',
    prompt: 'Escribe una descripción atractiva para mi portafolio sobre este proyecto: [descripción técnica]. Incluye: problema resuelto, tecnologías usadas, desafíos y aprendizajes clave.',
    tags: ['portafolio', 'copywriting']
  },
  {
    id: 'portfolio-3',
    category: 'Portafolio',
    title: 'Bio profesional',
    description: 'Crear biografía profesional impactante',
    prompt: 'Escribe una bio profesional para mi portafolio web. Background: [tu historia], Skills: [tus skills], Buscando: [tipo de oportunidad]. Tono: profesional pero cercano.',
    tags: ['portafolio', 'bio']
  },
  {
    id: 'git-1',
    category: 'Git y GitHub',
    title: 'Mensajes de commit',
    description: 'Escribir commits descriptivos',
    prompt: 'Ayúdame a escribir mensajes de commit siguiendo conventional commits para estos cambios: [descripción de cambios]. Usa formato: tipo(scope): descripción.',
    tags: ['git', 'commits']
  },
  {
    id: 'git-2',
    category: 'Git y GitHub',
    title: 'Pull Request description',
    description: 'Crear descripción completa de PR',
    prompt: 'Crea una descripción de Pull Request profesional para estos cambios: [descripción]. Incluye: qué cambió, por qué, cómo testearlo y screenshots si aplica.',
    tags: ['github', 'pr']
  },
  {
    id: 'git-3',
    category: 'Git y GitHub',
    title: 'Issue template',
    description: 'Reportar bug o feature claramente',
    prompt: 'Ayúdame a crear un issue en GitHub para: [bug/feature]. Usa formato profesional con: descripción, pasos para reproducir, comportamiento esperado vs actual.',
    tags: ['github', 'issues']
  }
]

export const copilotPlans: CopilotPlan[] = [
  {
    name: 'GitHub Copilot Free',
    price: 'Gratis',
    features: [
      '2,000 completaciones de código por mes',
      '50 mensajes de chat por mes',
      'Sugerencias de código en tiempo real',
      'Soporte para múltiples lenguajes',
      'Uso en VS Code, Neovim y más',
      'Límites mensuales renovables'
    ],
    bestFor: 'Estudiantes y personas que están comenzando a programar',
    cta: 'Ideal para este taller'
  },
  {
    name: 'Copilot Individual',
    price: '$10/mes o $100/año',
    features: [
      'Completaciones ilimitadas de código',
      'Chat ilimitado con Copilot',
      'Sugerencias avanzadas multi-línea',
      'Soporte prioritario',
      'Acceso a modelos más avanzados',
      'Sin límites mensuales'
    ],
    bestFor: 'Desarrolladores profesionales freelance o que trabajan de forma independiente'
  },
  {
    name: 'Copilot for Students',
    price: 'Gratis (verificación requerida)',
    features: [
      'Todo lo de Copilot Individual',
      'Acceso completo sin restricciones',
      'Requiere GitHub Student Developer Pack',
      'Verificación de estatus estudiantil',
      'Acceso mientras seas estudiante',
      'Incluye otros beneficios de Student Pack'
    ],
    bestFor: 'Estudiantes universitarios verificados',
    cta: 'Solicita Student Pack'
  },
  {
    name: 'Copilot Business',
    price: '$19/usuario/mes',
    features: [
      'Todo lo de Individual',
      'Gestión de organización',
      'Políticas empresariales',
      'Filtrado de código',
      'Sin retención de datos para entrenamiento',
      'Soporte empresarial'
    ],
    bestFor: 'Equipos y empresas'
  }
]
