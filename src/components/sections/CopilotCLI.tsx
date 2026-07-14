import { Card } from '@/components/ui/card'
import { StepCard } from '../StepCard'
import { CopyButton } from '../CopyButton'
import { Terminal, Robot, MagicWand, Lightbulb, Warning, Plugs } from '@phosphor-icons/react'

export function CopilotCLI() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">GitHub Copilot CLI</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          El mismo Copilot que usas en tu editor, pero viviendo directamente en tu terminal.
          Le pides tareas en lenguaje natural y él escribe código, ejecuta comandos y trabaja con Git y GitHub por ti.
        </p>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="flex gap-4 items-start">
          <Terminal size={32} weight="duotone" className="text-primary flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold mb-3">¿Qué es y por qué usarlo?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Copilot CLI es un agente de línea de comandos: en lugar de escribir comandos de terminal exactos,
              le describes lo que quieres lograr ("crea un script que renombre estos archivos", "explica por qué
              falla este build") y Copilot decide qué comandos ejecutar, con tu aprobación en cada paso.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Es especialmente útil cuando ya no estás editando un solo archivo, sino haciendo tareas del proyecto:
              instalar dependencias, correr tests, revisar el estado de Git, crear un PR, o investigar un error
              que aparece al ejecutar tu app.
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Instalación y Primeros Pasos</h2>

        <StepCard number={1} title="Requisitos">
          <ul className="space-y-2 text-sm list-disc ml-4">
            <li>Node.js 22 o superior instalado en tu computadora</li>
            <li>Una cuenta de GitHub con Copilot activo (el plan Free también funciona)</li>
            <li>Una terminal: la integrada de VS Code, o la de tu sistema operativo</li>
          </ul>
        </StepCard>

        <StepCard number={2} title="Instalar Copilot CLI">
          <p className="text-sm mb-3">Desde tu terminal, instala el paquete globalmente con npm:</p>
          <div className="flex items-center gap-2 bg-muted p-3 rounded font-mono text-sm">
            <span className="flex-1">npm install -g @github/copilot</span>
            <CopyButton text="npm install -g @github/copilot" />
          </div>
        </StepCard>

        <StepCard number={3} title="Iniciar sesión">
          <p className="text-sm mb-3">Escribe <code className="bg-muted px-2 py-1 rounded">copilot</code> para abrirlo, y si no has iniciado sesión, usa el comando de login:</p>
          <div className="flex items-center gap-2 bg-muted p-3 rounded font-mono text-sm mb-2">
            <span className="flex-1">copilot</span>
            <CopyButton text="copilot" />
          </div>
          <div className="flex items-center gap-2 bg-muted p-3 rounded font-mono text-sm">
            <span className="flex-1">/login</span>
            <CopyButton text="/login" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Sigue las instrucciones en pantalla para autorizar con tu cuenta de GitHub.
          </p>
        </StepCard>

        <StepCard number={4} title="Tu primera tarea">
          <p className="text-sm mb-3">
            Navega (<code className="bg-muted px-1 rounded">cd</code>) a la carpeta de tu proyecto, confirma que confías
            en los archivos cuando te lo pregunte, y escribe tu primera petición en español:
          </p>
          <div className="bg-primary/10 p-3 rounded text-sm font-mono">
            "Explícame qué hace este proyecto y cómo está organizado"
          </div>
        </StepCard>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Modos de Trabajo</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Terminal size={24} weight="duotone" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold">Modo Interactivo</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              El modo por defecto: le pides algo, te muestra qué comandos o cambios quiere hacer, y tú apruebas
              cada paso antes de que se ejecute.
            </p>
          </Card>
          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <MagicWand size={24} weight="duotone" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold">Plan Mode</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Presiona <kbd className="bg-muted px-2 py-1 rounded text-xs">Shift+Tab</kbd> para que Copilot primero
              te proponga un plan de pasos, y tú lo ajustes antes de que escriba una sola línea de código.
            </p>
          </Card>
          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Robot size={24} weight="duotone" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold">Autopilot</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Copilot completa tareas de varios pasos con menos interrupciones, pidiendo aprobación solo en
              acciones sensibles. Útil para tareas largas y repetitivas.
            </p>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Funciones Útiles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Referenciar archivos</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Usa <code className="bg-muted px-1 rounded">@nombre-archivo</code> para darle contexto exacto de un archivo:
            </p>
            <div className="bg-muted p-2 rounded font-mono text-xs">
              "Revisa @package.json y dime si falta alguna dependencia"
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex gap-2 items-center mb-2">
              <Plugs size={20} className="text-primary" />
              <h3 className="font-semibold">Servidores MCP</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Copilot CLI viene con el servidor MCP de GitHub incluido (issues, PRs, repos) y permite conectar
              servidores MCP personalizados para extender lo que el agente puede hacer.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Agentes personalizados</h3>
            <p className="text-sm text-muted-foreground">
              Puedes crear "agentes" especializados (por ejemplo, uno solo para revisar código o solo para
              investigar bugs) con sus propias instrucciones y herramientas permitidas.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Entrada por voz</h3>
            <p className="text-sm text-muted-foreground">
              En lugar de escribir, puedes dictar tu petición por voz — útil cuando quieres describir una tarea larga
              sin escribir un párrafo completo.
            </p>
          </Card>
        </div>
      </div>

      <Card className="p-6 border-l-4 border-destructive">
        <div className="flex gap-3 items-start mb-2">
          <Warning size={24} weight="fill" className="text-destructive flex-shrink-0" />
          <h3 className="font-semibold text-lg">Cuidado con la autonomía</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Copilot CLI puede ejecutar comandos reales en tu computadora (instalar paquetes, borrar archivos, hacer
          push a un repositorio). Revisa siempre lo que te propone antes de aprobar, especialmente en modo
          Autopilot, y evita usarlo sin supervisión en proyectos con datos sensibles.
        </p>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <div className="flex gap-4 items-start">
          <Lightbulb size={32} weight="duotone" className="text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-xl mb-3">¿Editor o terminal? Usa ambos</h3>
            <p className="text-muted-foreground leading-relaxed">
              No reemplaza a Copilot en VS Code, lo complementa. Usa el editor para escribir y revisar código de cerca,
              y la CLI para tareas de todo el proyecto: configurar el entorno, depurar errores de instalación,
              automatizar tareas repetitivas o trabajar en un proyecto sin abrir siquiera un editor.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
