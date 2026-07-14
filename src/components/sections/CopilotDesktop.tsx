import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { StepCard } from '../StepCard'
import { Desktop, Kanban, GitBranch, Rows, ArrowsClockwise, Lightbulb } from '@phosphor-icons/react'

export function CopilotDesktop() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold">GitHub Copilot App (Escritorio)</h1>
          <Badge className="bg-primary text-primary-foreground">Disponible desde 2026</Badge>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Una aplicación independiente para Windows, Mac y Linux pensada para supervisar varios agentes de Copilot
          trabajando al mismo tiempo, en lugar de vivir dentro de un solo editor.
        </p>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="flex gap-4 items-start">
          <Desktop size={32} weight="duotone" className="text-primary flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold mb-3">¿Qué problema resuelve?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Cuando trabajas con agentes de IA que hacen tareas completas (Agent Mode, Coding Agent), a veces
              quieres tener <strong>varios trabajando en paralelo</strong>: uno arreglando un bug, otro escribiendo
              tests, otro investigando un issue. Hacer esto dentro de un solo editor se vuelve caótico.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La app de Copilot es un "centro de control" separado: una vista donde ves todo el trabajo en marcha
              en tus repositorios de GitHub, sin importar si cada tarea corre en tu máquina o en la nube.
            </p>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Características Principales</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Kanban size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold text-lg">Vista "My Work"</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Un panel único donde ves sesiones activas, issues, pull requests y automatizaciones en curso
              de todos tus repositorios conectados, sin cambiar de pestaña.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <GitBranch size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold text-lg">Sesiones y Worktrees aisladas</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cada tarea corre en su propia copia de rama (git worktree), creada y limpiada automáticamente.
              Los agentes no pisan el trabajo de otros ni el tuyo.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Rows size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold text-lg">Agentes en paralelo</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lanza varias tareas a la vez y sigue su progreso desde un solo lugar, decidiendo si corren en
              tu computadora (con sandboxing local) o en la nube.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <ArrowsClockwise size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold text-lg">Canvases y Agent Merge</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Los "canvases" muestran planes, PRs, terminales y despliegues en tiempo real y son editables.
              "Agent Merge" avanza automáticamente un PR por revisión, checks de CI y fusión según reglas que defines.
            </p>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Cómo Empezar</h2>

        <StepCard number={1} title="Verifica los requisitos">
          <ul className="space-y-1 text-sm list-disc ml-4">
            <li>Windows 10 (22H2+) u 11, macOS 14 (Sonoma) o superior, o Linux con glibc 2.35+</li>
            <li>8 GB de RAM mínimo (16 GB recomendado si correrás varios agentes a la vez)</li>
            <li>Una cuenta de GitHub con cualquier plan de Copilot (Free incluido)</li>
          </ul>
        </StepCard>

        <StepCard number={2} title="Descarga e instala la app">
          <p className="text-sm">
            Descárgala desde la página oficial de GitHub Copilot para tu sistema operativo e inicia sesión con
            tu cuenta de GitHub, igual que harías en VS Code.
          </p>
        </StepCard>

        <StepCard number={3} title="Conecta tus repositorios">
          <p className="text-sm">
            Autoriza el acceso a los repositorios donde quieras que Copilot trabaje. Aparecerán en tu vista
            "My Work" junto con sus issues y pull requests abiertos.
          </p>
        </StepCard>

        <StepCard number={4} title="Lanza tu primera sesión">
          <p className="text-sm">
            Describe una tarea (por ejemplo, "arregla el issue #12") y elige si corre localmente o en la nube.
            Sigue el progreso desde el canvas de esa sesión y revisa el PR que se genera al terminar.
          </p>
        </StepCard>
      </div>

      <Card className="p-6 bg-primary/5 border-primary/20">
        <h3 className="font-semibold text-lg mb-3">¿Necesito esto para el taller?</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          No es imprescindible para empezar: VS Code + Copilot es más que suficiente mientras aprendes.
          La app de escritorio se vuelve útil más adelante, cuando manejes varios proyectos o quieras delegar
          tareas completas a Copilot mientras haces otra cosa.
        </p>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <div className="flex gap-4 items-start">
          <Lightbulb size={32} weight="duotone" className="text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-xl mb-3">VS Code vs. CLI vs. App de Escritorio</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm mt-2">
              <div className="bg-background/60 p-4 rounded border">
                <div className="font-semibold mb-1">VS Code</div>
                <p className="text-muted-foreground">Escribir y revisar código de cerca, línea por línea.</p>
              </div>
              <div className="bg-background/60 p-4 rounded border">
                <div className="font-semibold mb-1">Copilot CLI</div>
                <p className="text-muted-foreground">Tareas de terminal: instalar, depurar, automatizar, todo en texto.</p>
              </div>
              <div className="bg-background/60 p-4 rounded border">
                <div className="font-semibold mb-1">App de Escritorio</div>
                <p className="text-muted-foreground">Supervisar varios agentes y proyectos a la vez, en paralelo.</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
