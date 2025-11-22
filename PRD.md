# Planning Guide

Una guía interactiva y visual tipo manual de bolsillo que empodera a mujeres principiantes en tecnología para aprovechar GitHub y GitHub Copilot en su camino hacia su primer empleo tech.

**Experience Qualities**:
1. **Empowering** - Cada sección debe inspirar confianza y demostrar que la tecnología es accesible para todas, sin importar su nivel inicial.
2. **Clear & Visual** - Información presentada en bloques digestibles con iconografía, colores distintivos y ejemplos prácticos que facilitan el aprendizaje.
3. **Action-Oriented** - No solo teoría: cada sección incluye pasos concretos, prompts copiables y actividades guiadas que las participantes pueden completar inmediatamente.

**Complexity Level**: Complex Application (advanced functionality, accounts)
Esta aplicación requiere navegación multinivel, gestión de estado para progreso del usuario, sistema de categorización de contenido, funcionalidad de copiar/descargar, y persistencia de datos para seguimiento de secciones completadas.

## Essential Features

### 1. Sistema de Navegación Principal
- **Functionality**: Sidebar navegable con 10 secciones principales, cada una con subsecciones expandibles
- **Purpose**: Permitir acceso rápido a cualquier tema mientras se mantiene el contexto del contenido completo
- **Trigger**: Clic en item del menú o navegación por teclado
- **Progression**: Usuario ve sidebar → Expande sección → Selecciona subsección → Contenido se carga en panel principal → Puede marcar como completada
- **Success criteria**: Navegación fluida sin recargas, estado visual claro de sección activa, progreso persistente

### 2. Guía "Qué es GitHub" (Nivel Principiante)
- **Functionality**: Explicación visual interactiva de conceptos básicos con diagramas, animaciones sutiles y definiciones claras
- **Purpose**: Desmitificar GitHub para personas sin experiencia técnica previa
- **Trigger**: Selección de sección desde sidebar o inicio de la aplicación
- **Progression**: Intro visual → Conceptos básicos (repositorio, commit, branch) → Por qué importa para empleo → Glosario interactivo → Quiz opcional
- **Success criteria**: Conceptos explicados con analogías del mundo real, términos técnicos con tooltips, 100% comprensible para no-programadoras

### 3. Guía "Qué es GitHub Copilot"
- **Functionality**: Explicación completa de Copilot con ejemplos de uso, comparativa de planes y tabla de licencias
- **Purpose**: Mostrar cómo la IA puede acelerar el aprendizaje y desarrollo profesional
- **Trigger**: Navegación a sección Copilot
- **Progression**: Qué es Copilot → Cómo funciona (demo visual) → Tabla comparativa de planes → Cómo obtener acceso gratuito → Casos de uso por tipo de usuario
- **Success criteria**: Tabla clara y responsive, enlaces a registro gratuito, ejemplos visuales de antes/después con Copilot

### 4. Repositorio de Prompts Copiables
- **Functionality**: Colección categorizada de prompts listos para usar con botón de copiar
- **Purpose**: Eliminar la barrera de "no sé qué preguntarle a Copilot"
- **Trigger**: Navegación a sección de prompts o búsqueda por categoría
- **Progression**: Usuario busca categoría → Ve lista de prompts con descripción → Clic en copiar → Toast confirma copia → Puede usar inmediatamente en Copilot
- **Success criteria**: Mínimo 40 prompts organizados en 8 categorías, función copiar funciona en todos los navegadores, feedback visual claro

### 5. Actividad Guiada: README Profesional
- **Functionality**: Tutorial paso a paso con código editable en vivo para crear README de perfil
- **Purpose**: Que cada participante termine el taller con un perfil de GitHub profesional
- **Trigger**: Usuario accede a sección "Crear README"
- **Progression**: Explicación de qué es README de perfil → Ejemplos inspiradores → Paso 1: Estructura básica → Paso 2: Añadir badges → Paso 3: Sección de proyectos → Paso 4: CTA profesional → Preview en vivo → Copiar código final → Instrucciones para publicar
- **Success criteria**: Código editable con preview, plantillas predefinidas, resultado exportable, guía de publicación clara

### 6. Actividad Guiada: Portafolio Web con Deploy
- **Functionality**: Tutorial completo para crear portafolio minimalista con deploy en GitHub Pages
- **Purpose**: Proyecto concreto que demuestra habilidades y se puede completar en 30-40 minutos
- **Trigger**: Usuario accede a sección "Crear Portafolio"
- **Progression**: Diseño y estructura → Código inicial → Personalización con Copilot → Añadir proyectos → Deploy en GitHub Pages → Compartir URL
- **Success criteria**: Código starter descargable, prompts específicos para cada sección del portafolio, instrucciones de deploy paso a paso con screenshots

### 7. Roadmap de Aprendizaje Personalizado
- **Functionality**: Rutas de aprendizaje diferenciadas según nivel (sin experiencia vs con código pero sin experiencia laboral)
- **Purpose**: Guiar el camino de aprendizaje según el punto de partida de cada persona
- **Trigger**: Usuario selecciona su nivel de experiencia
- **Progression**: Usuario responde 2-3 preguntas → Sistema muestra roadmap personalizado → Recursos específicos por etapa → Proyectos sugeridos → Hitos claros
- **Success criteria**: Dos rutas claramente diferenciadas, recursos linkados, proyectos con nivel de dificultad marcado

### 8. Guía del Ecosistema GitHub
- **Functionality**: Mapa interactivo mostrando cómo conectar todas las herramientas gratuitas de GitHub
- **Purpose**: Maximizar el valor de las herramientas gratuitas disponibles
- **Trigger**: Navegación a sección "Ecosistema"
- **Progression**: Vista general de herramientas → Codespaces → GitHub Pages → GitHub Classroom → Actions (conceptual) → VS Code + extensiones → Cómo combinarlas en workflow real
- **Success criteria**: Diagrama visual de conexiones, enlaces directos a cada herramienta, ejemplo de workflow completo

### 9. Sección VS Code + Copilot Setup
- **Functionality**: Guía de instalación y configuración completa
- **Purpose**: Que las participantes tengan su entorno listo para trabajar
- **Trigger**: Acceso a sección "Configuración"
- **Progression**: Descargar VS Code → Instalar extensiones recomendadas → Configurar Copilot → Primera prueba → Atajos de teclado útiles → Control de versiones integrado
- **Success criteria**: Checklist interactiva, links de descarga directos, GIFs o imágenes de cada paso

### 10. Tracking de Progreso
- **Functionality**: Sistema que persiste qué secciones han sido completadas
- **Purpose**: Motivar a completar la guía y poder retomar donde se quedaron
- **Trigger**: Usuario marca sección como completada o sistema detecta scroll hasta el final
- **Progression**: Usuario lee contenido → Marca como completado → Indicador visual en sidebar → Barra de progreso general → Celebración al completar 100%
- **Success criteria**: Progreso guardado en useKV, visible en sidebar, badge al completar todo

## Edge Case Handling

- **Usuario sin JavaScript**: Mostrar mensaje simple indicando que la aplicación requiere JS para funcionalidad completa
- **Viewport muy pequeño**: Sidebar se convierte en drawer/hamburger menu, contenido se apila verticalmente
- **Copiar al portapapeles falla**: Fallback a selección automática del texto con instrucción visual
- **Contenido muy largo**: Implementar scroll virtual o lazy loading para secciones extensas
- **Usuario vuelve días después**: Restaurar última sección vista desde localStorage/KV
- **Sin acceso a internet**: Service worker básico para contenido crítico (nice to have)

## Design Direction

El diseño debe evocar la identidad visual moderna de GitHub Copilot con su característico púrpura/violeta - tecnológico pero accesible, innovador pero nunca intimidante, con una estética que inspira creatividad y pertenencia al futuro del desarrollo con IA.

## Color Selection

Analogous con complemento de acento - Los tonos púrpura/violeta de GitHub Copilot crean una identidad visual moderna e innovadora que representa la inteligencia artificial y el futuro del desarrollo.

- **Primary Color**: Púrpura Copilot (oklch(0.55 0.22 285)) - Representa innovación, tecnología e inteligencia artificial; usado para CTAs, links y elementos interactivos principales
- **Secondary Colors**: 
  - Púrpura Oscuro (oklch(0.45 0.18 285)) - Para contraste secundario y elementos hover
  - Lavanda Claro (oklch(0.96 0.01 285)) - Para backgrounds suaves y cards, mantiene la identidad de marca
- **Accent Color**: Magenta Vibrante (oklch(0.65 0.25 300)) - Para highlights, animaciones y elementos que requieren máxima atención
- **Foreground/Background Pairings**:
  - Background principal (Blanco casi puro oklch(0.99 0 0)): Negro text (oklch(0.15 0 0)) - Ratio 16.2:1 ✓
  - Card (Blanco puro oklch(1 0 0)): Negro text (oklch(0.15 0 0)) - Ratio 17:1 ✓
  - Primary/Púrpura Copilot (oklch(0.55 0.22 285)): White text (oklch(1 0 0)) - Ratio 5.2:1 ✓
  - Secondary/Púrpura oscuro (oklch(0.45 0.18 285)): White text (oklch(1 0 0)) - Ratio 7.8:1 ✓
  - Accent/Magenta (oklch(0.65 0.25 300)): White text (oklch(1 0 0)) - Ratio 4.9:1 ✓
  - Muted (oklch(0.96 0.01 285)): Gris medio text (oklch(0.47 0 0)) - Ratio 8.5:1 ✓

## Font Selection

La tipografía debe reflejar la claridad y accesibilidad de la documentación de GitHub mientras mantiene una personalidad moderna y amigable - optamos por Segoe UI como primaria (nativa de GitHub) con Inter como fallback universal.

- **Typographic Hierarchy**:
  - H1 (Títulos de sección principal): Segoe UI Bold/32px/tight (-0.02em) - Máximo impacto visual
  - H2 (Subsecciones): Segoe UI Semibold/24px/tight (-0.01em) - Clara jerarquía secundaria
  - H3 (Subtítulos de contenido): Segoe UI Semibold/18px/normal - Agrupación de contenido
  - Body (Texto principal): Segoe UI Regular/16px/relaxed (leading 1.6) - Óptima legibilidad
  - Small (Metadata, captions): Segoe UI Regular/14px/normal - Información secundaria
  - Code snippets: SF Mono, Monaco, monospace/14px - Distinción clara de código

## Animations

Las animaciones deben ser sutiles y funcionales, sirviendo para guiar la atención y confirmar interacciones sin distraer del contenido educativo - cada movimiento tiene un propósito claro.

- **Purposeful Meaning**: 
  - Expansión de acordeones en sidebar (200ms ease-out) - Revela contenido progresivamente
  - Fade-in de secciones nuevas (300ms) - Transición suave al cambiar contenido
  - Hover en botones de copiar (150ms) - Feedback de interactividad
  - Checkmark al completar sección (400ms spring) - Celebración micro de logro
  - Scroll suave entre secciones - Mantiene contexto espacial

- **Hierarchy of Movement**: 
  1. Interacciones directas (botones, inputs) - Respuesta inmediata
  2. Navegación y cambios de estado - Transiciones suaves
  3. Feedback de éxito - Animaciones celebratorias sutiles
  4. Decorativo (parallax en hero, si existe) - Último nivel de prioridad

## Component Selection

- **Components**: 
  - `ScrollArea` para sidebar con muchas secciones - Scroll customizado que mantiene la estética
  - `Accordion` para subsecciones expandibles - Organización jerárquica del contenido
  - `Card` para bloques de contenido, prompts, y ejemplos - Agrupación visual clara
  - `Button` (variant primary para CTAs, secondary para acciones secundarias, ghost para navegación) - Jerarquía de acciones
  - `Badge` para categorías de prompts y estados de completado - Etiquetado visual rápido
  - `Tabs` para alternar entre roadmaps (principiante vs con experiencia) - Contenido alternativo en mismo espacio
  - `Dialog` para previews de README y ejemplos expandidos - Foco temporal sin perder contexto
  - `Separator` para dividir secciones de contenido - Jerarquía visual sutil
  - `Tooltip` para definiciones de términos técnicos - Ayuda contextual sin saturar
  - `Progress` para tracking de secciones completadas - Visualización de avance

- **Customizations**: 
  - CopyButton component personalizado con estado de "copiado" y icono de check
  - PromptCard component con categoría, descripción y botón copiar integrado
  - StepCard component numerado para actividades guiadas
  - ProgressIndicator en sidebar mostrando % completado

- **States**: 
  - Buttons: Default con sombra sutil, hover con lift effect (translateY -2px), active con scale 0.98, disabled con opacity 0.5
  - Sidebar items: Default, hover con bg-muted, active con border-l-4 azul Copilot y bg-muted
  - Cards: Default con border sutil, hover con sombra más pronunciada
  - Copy buttons: Default → Hover → Active → Success (checkmark, 2s) → Reset

- **Icon Selection**: 
  - @phosphor-icons/react como biblioteca principal
  - `Book` para secciones de aprendizaje
  - `Code` para prompts y ejemplos de código
  - `Rocket` para actividades guiadas
  - `GraduationCap` para roadmaps
  - `CheckCircle` para secciones completadas
  - `Copy` / `Check` para funcionalidad de copiar
  - `GithubLogo` para branding GitHub
  - `Lightning` para features de Copilot
  - `CaretRight` / `CaretDown` para acordeones

- **Spacing**: 
  - Contenedor principal: px-6 py-8 (mobile) → px-12 py-12 (desktop)
  - Gap entre cards: gap-4 (mobile) → gap-6 (desktop)
  - Padding interno de cards: p-6
  - Margen entre secciones: mb-8
  - Gap en sidebar items: gap-1
  - Espaciado de línea en contenido: leading-relaxed (1.625)

- **Mobile**: 
  - Sidebar fijo se convierte en Sheet/Drawer desplegable desde hamburger menu
  - Cards stack verticalmente con width full
  - Font sizes reducidos en 2px para H1/H2
  - Padding reducido a px-4 py-6
  - Tabla de planes de Copilot se hace scrolleable horizontalmente
  - Botones de acción se hacen full-width en mobile
  - Sticky header con título de sección actual y botón de menú
