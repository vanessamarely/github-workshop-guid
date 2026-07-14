import { Card } from '@/components/ui/card'
import { Code, Cloud, GraduationCap, House, Lightning, Wrench, Terminal, Desktop } from '@phosphor-icons/react'

export function GitHubEcosystem() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Ecosistema GitHub: Herramientas Gratuitas</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          GitHub ofrece un conjunto completo de herramientas gratuitas que, combinadas, 
          te permiten aprender, desarrollar y publicar proyectos profesionales sin gastar un peso.
        </p>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">El Workflow Completo</h2>
        <p className="text-muted-foreground mb-6">
          Así es como todas estas herramientas trabajan juntas para crear un entorno de desarrollo profesional:
        </p>
        <div className="bg-background/50 p-6 rounded-lg border text-sm">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
              <span><strong>VS Code</strong> → Tu editor de código principal</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
              <span><strong>GitHub Copilot</strong> → Te ayuda a escribir código más rápido</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
              <span><strong>Git (integrado en VS Code)</strong> → Guarda versiones de tu trabajo</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
              <span><strong>GitHub</strong> → Almacena tu código en la nube</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">5</div>
              <span><strong>GitHub Pages</strong> → Publica tu sitio web gratis</span>
            </div>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Herramientas del Ecosistema</h2>
        <div className="space-y-4">
          <Card className="p-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Code size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">GitHub Copilot (Free Tier)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  2,000 completaciones y 50 chats al mes gratis. Perfecto para empezar y aprender.
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Cómo usarlo:</strong> Actívalo en VS Code con tu cuenta de GitHub. 
                  Usa comentarios en español para generar código automáticamente.
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Cloud size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">GitHub Codespaces (60 horas gratis/mes)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Un VS Code completo en el navegador. No necesitas instalar nada en tu computadora.
                </p>
                <div className="bg-muted p-3 rounded text-sm space-y-2">
                  <div><strong>Ideal para:</strong></div>
                  <ul className="ml-4 space-y-1">
                    <li>• Programar desde cualquier dispositivo</li>
                    <li>• Probar proyectos sin configurar tu máquina</li>
                    <li>• Colaborar en tiempo real con otras personas</li>
                  </ul>
                  <div className="mt-2"><strong>Cómo usar:</strong> En cualquier repo → Click en "Code" → "Codespaces" → "Create codespace"</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg">
                <House size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">GitHub Pages (Hosting gratuito ilimitado)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Publica sitios web estáticos (HTML, CSS, JS) gratis con HTTPS automático.
                </p>
                <div className="bg-muted p-3 rounded text-sm space-y-2">
                  <div><strong>Qué puedes publicar:</strong></div>
                  <ul className="ml-4 space-y-1">
                    <li>• Tu portafolio personal</li>
                    <li>• Proyectos de frontend (React, Vue, etc.)</li>
                    <li>• Documentación de tus proyectos</li>
                    <li>• Landing pages</li>
                  </ul>
                  <div className="mt-2">Tu sitio queda en: <code className="bg-background px-2 py-1 rounded">usuario.github.io/nombre-repo</code></div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">GitHub Classroom</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Plataforma para aprender programación con ejercicios y proyectos guiados.
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Cómo usarlo:</strong> Muchos cursos y bootcamps gratuitos usan GitHub Classroom. 
                  También puedes encontrar ejercicios públicos para practicar.
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Lightning size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">GitHub Actions (2,000 minutos gratis/mes)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Automatiza tareas: testing, deploy automático, y más.
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Ejemplo básico:</strong> Cada vez que hagas push a tu repo, Actions puede 
                  automáticamente publicar tu sitio en GitHub Pages, correr tests, o notificarte si algo falló.
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Wrench size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">GitHub Templates</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Empieza proyectos desde plantillas pre-configuradas.
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Cómo usarlo:</strong> Al crear un nuevo repo, busca "Choose a template"
                  y selecciona entre miles de templates para React, portfolios, landing pages, y más.
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Terminal size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">GitHub Copilot CLI</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Copilot como agente de terminal: le pides tareas en lenguaje natural y él ejecuta comandos por ti.
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Cómo usarlo:</strong> Instálalo con <code className="bg-background px-1 rounded">npm install -g @github/copilot</code> y
                  ejecuta <code className="bg-background px-1 rounded">copilot</code> en cualquier proyecto. Ver sección "Copilot CLI".
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Desktop size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">GitHub Copilot App (Escritorio)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  App independiente para Windows, Mac y Linux que permite supervisar varios agentes de Copilot en paralelo.
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Ideal para:</strong> gestionar varias tareas o proyectos a la vez desde una sola vista. Ver sección "Copilot Desktop".
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <h2 className="text-xl font-semibold mb-4">🔗 Cómo combinar todo</h2>
        <div className="space-y-4 text-sm">
          <div className="bg-background/50 p-4 rounded border">
            <h3 className="font-semibold mb-2">Escenario: Crear y publicar un proyecto</h3>
            <ol className="space-y-2 ml-4 list-decimal text-muted-foreground">
              <li>Abre VS Code con Copilot activado</li>
              <li>Crea tu proyecto con ayuda de Copilot para el código</li>
              <li>Usa Git (integrado en VS Code) para hacer commits de tu progreso</li>
              <li>Sube el proyecto a GitHub desde VS Code</li>
              <li>Activa GitHub Pages en la configuración del repo</li>
              <li>Tu proyecto está en vivo en minutos 🎉</li>
            </ol>
          </div>

          <div className="bg-background/50 p-4 rounded border">
            <h3 className="font-semibold mb-2">Escenario: Aprender sin instalar nada</h3>
            <ol className="space-y-2 ml-4 list-decimal text-muted-foreground">
              <li>Encuentra un tutorial o proyecto en GitHub</li>
              <li>Abre el repo → Click en "Codespaces" → Crea uno nuevo</li>
              <li>Tienes un entorno completo en el navegador con Copilot incluido</li>
              <li>Practica y experimenta sin riesgo</li>
              <li>Si quieres guardar cambios, haz fork y push a tu GitHub</li>
            </ol>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-primary/20 bg-primary/5">
        <h3 className="font-semibold text-lg mb-3">💡 Pro Tip: GitHub Student Developer Pack</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Si eres estudiante, el Student Developer Pack te da acceso GRATIS a:
          Copilot ilimitado, Codespaces con más horas, dominios gratis (.me), 
          créditos en servicios cloud, y más de $200,000 en herramientas y servicios. 
          Solicítalo en: <code className="bg-background px-2 py-1 rounded">education.github.com/pack</code>
        </p>
      </Card>
    </div>
  )
}
