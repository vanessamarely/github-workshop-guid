import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Lightning, ChatCircle, Code, MagicWand, Sparkle, GraduationCap, Lightbulb, Terminal, Desktop, Robot } from '@phosphor-icons/react'
import { copilotPlans } from '@/lib/data'

export function WhatIsCopilot() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">¿Qué es GitHub Copilot?</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Tu asistente de programación con inteligencia artificial. Es como tener un programador experto a tu lado que te ayuda a escribir código, aprender y resolver problemas.
        </p>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <Lightning size={32} weight="fill" className="text-primary" />
          <h2 className="text-2xl font-semibold">¿Cómo funciona?</h2>
        </div>
        <p className="text-lg leading-relaxed mb-4">
          Copilot usa inteligencia artificial entrenada con millones de líneas de código público. 
          Mientras escribes, te sugiere código completo en tiempo real. Es como el autocompletado de tu teléfono, pero para programar.
        </p>
        <div className="bg-background/50 p-4 rounded-lg border-2 border-primary/20">
          <p className="font-mono text-sm mb-2 text-muted-foreground">// Tú escribes un comentario:</p>
          <p className="font-mono text-sm mb-3">// Crear función que valide email</p>
          <p className="font-mono text-sm text-muted-foreground mb-2">// Copilot te sugiere:</p>
          <pre className="font-mono text-sm text-primary">
{`function validateEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}`}
          </pre>
        </div>
      </Card>

      <Card className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <Robot size={32} weight="fill" className="text-primary" />
          <h2 className="text-2xl font-semibold">El "harness": lo que hace que Copilot sea más que un modelo de IA</h2>
        </div>
        <p className="leading-relaxed mb-4">
          Cuando escribes un prompt, no le hablas directamente al modelo de IA (Claude, GPT, Gemini). Le hablas al
          <strong> harness</strong> — el sistema que rodea al modelo y lo conecta con tu código real: lee los archivos
          que necesita, arma el contexto (tus instrucciones del proyecto, el archivo abierto, tu selección), se lo
          entrega al modelo, y después toma la respuesta y la convierte en una acción real sobre tu proyecto (una
          sugerencia, un archivo editado, un comando ejecutado).
        </p>
        <div className="grid sm:grid-cols-3 gap-3 text-sm">
          <div className="bg-background/60 p-4 rounded border text-center">
            <div className="font-semibold mb-1">1. Pensar</div>
            <p className="text-muted-foreground">El modelo analiza tu prompt + el contexto que el harness le armó</p>
          </div>
          <div className="bg-background/60 p-4 rounded border text-center">
            <div className="font-semibold mb-1">2. Actuar</div>
            <p className="text-muted-foreground">El harness convierte la respuesta en algo real: código, un archivo editado, un comando</p>
          </div>
          <div className="bg-background/60 p-4 rounded border text-center">
            <div className="font-semibold mb-1">3. Observar</div>
            <p className="text-muted-foreground">El harness mira el resultado (¿corrió bien? ¿hay un error?) y decide el siguiente paso</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Por qué importa: la calidad de la respuesta depende tanto del modelo como de qué tan buen contexto le da
          el harness — por eso un prompt vago da una respuesta genérica, y un prompt con el archivo correcto
          adjuntado da una respuesta precisa. No es que el modelo "piense mejor", es que recibió mejor información.
        </p>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-6">¿Qué puedes hacer con Copilot?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Code size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Completar código automáticamente</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mientras escribes, Copilot sugiere la siguiente línea o bloque de código. 
              Presiona Tab para aceptar la sugerencia.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <ChatCircle size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Chatear y hacer preguntas</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Puedes preguntarle "¿Cómo hago un loop en JavaScript?" o "Explica este código". 
              Te responde en tu idioma y con ejemplos.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <MagicWand size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Generar código desde cero</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Describe lo que necesitas y Copilot genera el código completo. 
              "Crea un formulario de contacto con validación" → listo.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Sparkle size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Explicar código existente</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Selecciona código que no entiendes y pídele a Copilot que te lo explique. 
              Perfecto para aprender leyendo código de otros.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Code size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Refactorizar y mejorar</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dale código funcional pero desordenado y pídele que lo mejore. 
              Te ayuda a escribir código más limpio y profesional.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Lightning size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Encontrar y corregir bugs</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Copia el error que te da tu código, pégalo en el chat y Copilot te ayuda a identificar y solucionar el problema.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Robot size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Trabajar de forma autónoma (Agent Mode)</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dale una tarea completa ("añade validación de formulario en todos los inputs") y Copilot en modo Agente
              edita varios archivos, ejecuta comandos y corrige sus propios errores hasta terminar.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Sparkle size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Elegir entre varios modelos de IA</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Copilot no usa un solo modelo: puedes elegir entre Claude, Gemini o GPT según la tarea,
              o dejar que Copilot elija automáticamente el mejor para cada caso.
            </p>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">¿Dónde puedes usar Copilot?</h2>
        <p className="text-muted-foreground mb-6">
          Copilot ya no vive solo dentro del editor de código. Hoy puedes usarlo desde varios lugares según lo que necesites hacer.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Code size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold text-lg">En tu editor (VS Code y más)</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sugerencias mientras escribes, chat, Plan Mode y Agent Mode integrados directamente en tu editor.
              Es la forma más común de empezar. Ver sección "VS Code + Copilot".
            </p>
          </Card>
          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Terminal size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold text-lg">En la terminal (Copilot CLI)</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Un agente de IA que vive en tu línea de comandos: le pides tareas en lenguaje natural y él edita
              archivos, corre comandos y te ayuda con Git y GitHub. Ver sección "Copilot CLI".
            </p>
          </Card>
          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <Desktop size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold text-lg">En la app de escritorio</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Una aplicación independiente (Windows, Mac, Linux) para supervisar varios agentes de Copilot
              trabajando en paralelo en distintos repositorios. Ver sección "Copilot Desktop".
            </p>
          </Card>
          <Card className="p-6">
            <div className="flex gap-3 items-start mb-3">
              <ChatCircle size={28} weight="duotone" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold text-lg">En github.com y el móvil</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chatea con Copilot directamente desde cualquier página de GitHub.com, o desde la app móvil de GitHub,
              sin necesidad de tener un proyecto abierto.
            </p>
          </Card>
        </div>
        <Card className="p-6 mt-4 bg-muted/40">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Cuatro lugares, un mismo harness:</strong> no son cuatro productos distintos con lógica propia —
            las cuatro superficies (editor, terminal, app de escritorio, github.com) le hablan al mismo harness detrás
            de escena. Cambia dónde escribes el prompt y qué tan autónomo dejas que actúe, pero el ciclo Pensar →
            Actuar → Observar es el mismo en todas. Por eso lo que aprendes en una (por ejemplo, dar buen contexto)
            te sirve igual en las otras tres.
          </p>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Planes de GitHub Copilot</h2>

        <Card className="p-6 mb-6 bg-accent/10 border-accent/30">
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <Lightbulb size={24} weight="duotone" className="text-primary" />
            ¿Cómo funcionan los límites hoy? (créditos de IA)
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <div>
              <p className="font-semibold text-foreground mb-1">🔹 Completaciones de código: siempre incluidas</p>
              <p>
                Las sugerencias de código en línea (autocompletado) y las "Next Edit Suggestions" que aparecen
                mientras escribes <strong>no consumen créditos</strong> en ningún plan, incluido el gratuito.
                Puedes programar todo el día apoyándote en estas sugerencias sin preocuparte por límites.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">💬 Chat, Agent Mode y Coding Agent: consumen créditos IA</p>
              <p>
                Desde junio de 2026, cada plan incluye una bolsa mensual de <strong>créditos de IA</strong> que se gasta
                según el uso real de tokens al chatear, usar Agent Mode o delegar tareas al Coding Agent.
                Los modelos más potentes (como los más avanzados de Claude o GPT) consumen más créditos que los modelos base.
                El plan Free incluye una asignación limitada de créditos con selección automática de modelo.
              </p>
            </div>
            <p className="text-xs pt-2 border-t">
              💡 <strong>Tip:</strong> Los créditos se reinician cada mes. Para la mayoría de principiantes, la asignación gratuita
              alcanza perfectamente para aprender y completar este taller; si se agotan, siempre puedes seguir usando
              completaciones de código sin límite.
            </p>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copilotPlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`p-6 ${plan.cta ? 'border-2 border-primary shadow-lg' : ''}`}
            >
              {plan.cta && (
                <Badge className="mb-3 bg-primary text-primary-foreground">
                  {plan.cta}
                </Badge>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-primary mb-4">{plan.price}</div>
              <p className="text-sm text-muted-foreground mb-4 pb-4 border-b">
                {plan.bestFor}
              </p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2 text-sm">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="flex gap-4 items-start">
          <GraduationCap size={32} weight="duotone" className="text-primary flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold mb-3">¿Cómo conseguir Copilot gratis?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Opción 1: Cuenta gratuita</h3>
                <p className="text-sm">
                  Cualquier persona con cuenta de GitHub puede usar Copilot gratis con límites mensuales. 
                  Es perfecto para empezar y para este taller.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Opción 2: GitHub Student Developer Pack (recomendado)</h3>
                <p className="text-sm mb-2">
                  Si eres estudiante universitaria, puedes verificar tu estatus y obtener Copilot completamente ilimitado gratis.
                </p>
                <ol className="text-sm space-y-2 ml-4 list-decimal">
                  <li>Ve a <code className="bg-muted px-2 py-1 rounded">education.github.com/pack</code></li>
                  <li>Haz clic en "Get your pack"</li>
                  <li>Verifica con tu email universitario o ID de estudiante</li>
                  <li>Una vez aprobado, activa Copilot desde tu configuración</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-primary/5 border-primary/20">
        <h3 className="font-semibold text-lg mb-3">💡 Importante para principiantes</h3>
        <p className="text-muted-foreground leading-relaxed">
          Copilot es una herramienta increíble, pero no reemplaza aprender a programar. 
          Úsalo como un tutor que te ayuda, no como alguien que hace todo por ti. 
          Siempre lee y entiende el código que te sugiere. La mejor forma de aprender es combinar: 
          estudiar fundamentos + practicar con ayuda de Copilot.
        </p>
      </Card>
    </div>
  )
}
