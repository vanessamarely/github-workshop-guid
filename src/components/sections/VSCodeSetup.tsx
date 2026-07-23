import { Card } from '@/components/ui/card'
import { StepCard } from '../StepCard'
import { Code, Lightning, Wrench, CheckCircle } from '@phosphor-icons/react'

export function VSCodeSetup() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">VS Code + GitHub Copilot: Setup Completo</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Configura tu entorno de desarrollo perfecto en 15 minutos. VS Code es el editor ideal para usar con GitHub Copilot.
        </p>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="flex gap-4 items-start">
          <Code size={32} weight="duotone" className="text-primary flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold mb-3">¿Por qué VS Code?</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span><strong>Gratis y open source</strong> - Desarrollado por Microsoft</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span><strong>Integración perfecta con Copilot</strong> - Funciona mejor que cualquier otro editor</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span><strong>Git integrado</strong> - No necesitas terminal para usar GitHub</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span><strong>Extensiones infinitas</strong> - Personalízalo como quieras</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span><strong>Ligero y rápido</strong> - No consume muchos recursos</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Instalación y Configuración</h2>

        <StepCard number={1} title="Descargar e Instalar VS Code">
          <ol className="space-y-2 text-sm list-decimal ml-4 mb-3">
            <li>Ve a <code className="bg-muted px-2 py-1 rounded">code.visualstudio.com</code></li>
            <li>Descarga la versión para tu sistema operativo (Windows, Mac, Linux)</li>
            <li>Instala siguiendo el asistente (todo por defecto está bien)</li>
            <li>Abre VS Code cuando termine la instalación</li>
          </ol>
        </StepCard>

        <StepCard number={2} title="Configurar tu cuenta de GitHub">
          <ol className="space-y-2 text-sm list-decimal ml-4">
            <li>En VS Code, click en el ícono de perfil (abajo a la izquierda)</li>
            <li>Click en "Sign in to Sync Settings"</li>
            <li>Elige "Sign in with GitHub"</li>
            <li>Autoriza en el navegador que se abre</li>
            <li>¡Listo! Ahora VS Code está conectado a tu GitHub</li>
          </ol>
        </StepCard>

        <StepCard number={3} title="Instalar GitHub Copilot">
          <ol className="space-y-2 text-sm list-decimal ml-4 mb-3">
            <li>En VS Code, click en el ícono de extensiones (cuadrados en la barra lateral)</li>
            <li>Busca "GitHub Copilot"</li>
            <li>Click en Install en la extensión de GitHub (autor: GitHub)</li>
            <li>Reinicia VS Code</li>
            <li>Se abrirá una ventana pidiendo autorización, acepta</li>
          </ol>
          <div className="bg-muted p-3 rounded text-sm mb-3">
            Desde finales de 2025, una sola extensión "GitHub Copilot" incluye todo: completions,
            chat y Agent Mode. Ya no hace falta instalar "GitHub Copilot Chat" por separado — si la ves
            en el Marketplace, es la versión vieja que ahora se instala automáticamente como parte de
            la principal.
          </div>
          <div className="bg-primary/10 p-3 rounded text-sm">
            <strong>Verificar que funciona:</strong> Crea un archivo .js, escribe un comentario como
            "// función que suma dos números" y presiona Enter. Deberías ver una sugerencia en gris.
          </div>
        </StepCard>

        <StepCard number={4} title="Extensiones Esenciales">
          <p className="text-sm mb-3">Instala estas extensiones para mejorar tu experiencia:</p>
          <div className="space-y-3">
            <div className="bg-muted p-4 rounded">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">Live Server</h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Abre tus páginas HTML con un servidor local que se recarga automáticamente
                  </p>
                  <code className="text-xs bg-background px-2 py-1 rounded">ritwickdey.liveserver</code>
                </div>
                <CheckCircle size={24} className="text-primary flex-shrink-0" />
              </div>
            </div>

            <div className="bg-muted p-4 rounded">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">Prettier - Code Formatter</h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Formatea tu código automáticamente para que se vea profesional
                  </p>
                  <code className="text-xs bg-background px-2 py-1 rounded">esbenp.prettier-vscode</code>
                </div>
                <CheckCircle size={24} className="text-primary flex-shrink-0" />
              </div>
            </div>

            <div className="bg-muted p-4 rounded">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">ES7+ React/Redux/React-Native snippets</h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Atajos para escribir código React más rápido
                  </p>
                  <code className="text-xs bg-background px-2 py-1 rounded">dsznajder.es7-react-js-snippets</code>
                </div>
                <CheckCircle size={24} className="text-primary flex-shrink-0" />
              </div>
            </div>

            <div className="bg-muted p-4 rounded">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">Auto Rename Tag</h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Renombra automáticamente pares de etiquetas HTML/XML
                  </p>
                  <code className="text-xs bg-background px-2 py-1 rounded">formulahendry.auto-rename-tag</code>
                </div>
                <CheckCircle size={24} className="text-primary flex-shrink-0" />
              </div>
            </div>

            <div className="bg-muted p-4 rounded">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">GitLens</h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Superpoderes de Git: ve quién cambió cada línea, historial, y más
                  </p>
                  <code className="text-xs bg-background px-2 py-1 rounded">eamodio.gitlens</code>
                </div>
                <CheckCircle size={24} className="text-primary flex-shrink-0" />
              </div>
            </div>

            <div className="bg-muted p-4 rounded">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">Path Intellisense</h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Autocompletado de rutas de archivos
                  </p>
                  <code className="text-xs bg-background px-2 py-1 rounded">christian-kohler.path-intellisense</code>
                </div>
                <CheckCircle size={24} className="text-primary flex-shrink-0" />
              </div>
            </div>
          </div>
        </StepCard>

        <StepCard number={5} title="Configurar Git en VS Code">
          <p className="text-sm mb-3">Configura tu identidad para que tus commits tengan tu nombre:</p>
          <ol className="space-y-2 text-sm list-decimal ml-4 mb-3">
            <li>Abre la terminal en VS Code (View → Terminal o Ctrl+`)</li>
            <li>Escribe estos comandos (reemplaza con tus datos):
              <div className="bg-muted p-3 rounded font-mono text-xs mt-2 space-y-1">
                <div>git config --global user.name "Tu Nombre"</div>
                <div>git config --global user.email "tu@email.com"</div>
              </div>
            </li>
            <li>Verifica con: <code className="bg-muted px-2 py-1 rounded text-xs">git config --list</code></li>
          </ol>
        </StepCard>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Cómo Usar Copilot en VS Code</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Lightning size={24} weight="fill" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold">Sugerencias en Línea y Next Edit Suggestions</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Mientras escribes, aparecen sugerencias en gris. Copilot también predice tu <strong>próxima edición</strong> en otras partes del archivo:</p>
              <ul className="ml-4 space-y-1">
                <li>• <kbd className="bg-muted px-2 py-1 rounded">Tab</kbd> - Aceptar sugerencia o saltar a la próxima edición sugerida</li>
                <li>• <kbd className="bg-muted px-2 py-1 rounded">Esc</kbd> - Rechazar</li>
                <li>• <kbd className="bg-muted px-2 py-1 rounded">Alt+]</kbd> - Siguiente sugerencia</li>
                <li>• <kbd className="bg-muted px-2 py-1 rounded">Alt+[</kbd> - Anterior sugerencia</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Lightning size={24} weight="fill" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold">Copilot Chat</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Chatea con Copilot para preguntas o generar código:</p>
              <ul className="ml-4 space-y-1">
                <li>• <kbd className="bg-muted px-2 py-1 rounded">Ctrl+Alt+I</kbd> (Mac: <kbd className="bg-muted px-2 py-1 rounded">Cmd+Ctrl+I</kbd>) - Abrir panel de Chat</li>
                <li>• <kbd className="bg-muted px-2 py-1 rounded">Ctrl+I</kbd> - Chat inline sobre el código seleccionado</li>
                <li>• Selecciona código + click derecho → "Copilot" → "Explain"</li>
                <li>• Elige el modo (Ask / Plan / Agent) y el modelo desde los selectores del panel</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Wrench size={24} weight="fill" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold">Agent Mode</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Para tareas de varios pasos, cambia el modo del chat a "Agent":</p>
              <ul className="ml-4 space-y-1">
                <li>• Copilot decide qué archivos editar y qué comandos correr</li>
                <li>• Te muestra cada cambio antes de aplicarlo (puedes aceptar o deshacer)</li>
                <li>• Ideal para "añade validación a este formulario" o "arregla este bug en todo el proyecto"</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Wrench size={24} weight="fill" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold">Variables de contexto</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Escribe <code className="bg-muted px-1 rounded">#</code> en el chat para señalar exactamente qué debe ver Copilot, en vez de esperar que lo adivine:</p>
              <ul className="ml-4 space-y-1">
                <li>• <code className="bg-muted px-1 rounded">#file</code> — adjunta un archivo específico (elígelo de la lista que aparece, no lo escribas a mano)</li>
                <li>• <code className="bg-muted px-1 rounded">#selection</code> — el texto que tienes seleccionado en el editor</li>
                <li>• <code className="bg-muted px-1 rounded">#codebase</code> — búsqueda semántica en todo el proyecto (el agente también la usa solo cuando hace falta)</li>
                <li>• <code className="bg-muted px-1 rounded">#terminalLastCommand</code> — el último comando de la terminal y su salida, útil para pegar un error sin copiarlo a mano</li>
                <li>• <code className="bg-muted px-1 rounded">#changes</code> — los cambios sin commitear (git diff)</li>
              </ul>
              <p className="text-xs pt-1">
                Si ves <code className="bg-muted px-1 rounded">@workspace</code> mencionado en algún tutorial viejo: ya no existe como participante de chat, quedó reemplazado por <code className="bg-muted px-1 rounded">#codebase</code>.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Wrench size={24} weight="fill" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold">Control de Versiones</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Git integrado sin necesidad de terminal:</p>
              <ul className="ml-4 space-y-1">
                <li>• Click en ícono de Source Control (barra lateral)</li>
                <li>• Ve cambios, escribe mensaje de commit</li>
                <li>• Click en ✓ para commit</li>
                <li>• Click en "..." → Push para subir a GitHub</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Code size={24} weight="fill" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold">Comandos Útiles</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Atajos que te harán más productiva:</p>
              <ul className="ml-4 space-y-1">
                <li>• <kbd className="bg-muted px-2 py-1 rounded">Ctrl+P</kbd> - Buscar archivo</li>
                <li>• <kbd className="bg-muted px-2 py-1 rounded">Ctrl+Shift+P</kbd> - Paleta de comandos</li>
                <li>• <kbd className="bg-muted px-2 py-1 rounded">Ctrl+B</kbd> - Toggle sidebar</li>
                <li>• <kbd className="bg-muted px-2 py-1 rounded">Ctrl+/</kbd> - Comentar línea</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <h3 className="font-semibold text-xl mb-4">🎯 Workflow Recomendado</h3>
        <div className="space-y-3 text-sm">
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold text-xs">1</div>
            <div>
              <strong>Planea:</strong> Antes de programar, escribe en comentarios qué quieres hacer
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold text-xs">2</div>
            <div>
              <strong>Deja que Copilot sugiera:</strong> Mientras escribes los comentarios, acepta las sugerencias útiles
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold text-xs">3</div>
            <div>
              <strong>Revisa y entiende:</strong> Lee el código generado, pide explicaciones si algo no está claro
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold text-xs">4</div>
            <div>
              <strong>Prueba:</strong> Ejecuta el código, verifica que funciona como esperas
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold text-xs">5</div>
            <div>
              <strong>Commit frecuente:</strong> Guarda versiones de tu progreso cada vez que algo funcione
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-primary/20 bg-primary/5">
        <h3 className="font-semibold mb-2">💡 Tips Finales</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Explora la paleta de comandos (Ctrl+Shift+P) - tiene todas las funciones de VS Code</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Personaliza tu tema: File → Preferences → Color Theme</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Aprende más atajos de teclado - te harán mucho más rápida</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Si Copilot no funciona bien, recarga VS Code (Ctrl+Shift+P → "Reload Window")</span>
          </li>
        </ul>
      </Card>
    </div>
  )
}
