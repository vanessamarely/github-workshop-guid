import { Card } from '@/components/ui/card'
import { StepCard } from '../StepCard'
import { Lightbulb, Warning, CheckCircle, Robot } from '@phosphor-icons/react'

export function CopilotGuide() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Guía: Sacar el máximo potencial a Copilot</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Tips, trucos y mejores prácticas para que Copilot se convierta en tu mejor aliado para programar y aprender.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Prompt Engineering para Principiantes</h2>
        <div className="space-y-4">
          <StepCard number={1} title="Sé específica y clara">
            <p className="mb-3">
              Cuanto más detalle des, mejor será la respuesta. En lugar de decir "crea un botón", di "crea un botón azul con bordes redondeados que diga 'Enviar' y cambie de color al hacer hover".
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-destructive/10 p-3 rounded border-l-4 border-destructive">
                <div className="font-semibold mb-1 text-destructive">❌ Malo:</div>
                <code>"Haz una función"</code>
              </div>
              <div className="bg-primary/10 p-3 rounded border-l-4 border-primary">
                <div className="font-semibold mb-1 text-primary">✓ Bueno:</div>
                <code>"Crea una función en JavaScript que valide si un email es correcto usando regex"</code>
              </div>
            </div>
          </StepCard>

          <StepCard number={2} title="Menciona el lenguaje o framework">
            <p className="mb-3">
              Siempre especifica en qué tecnología quieres el código. Copilot puede generar en muchos lenguajes.
            </p>
            <div className="bg-muted p-4 rounded font-mono text-sm">
              "Crea un componente de tarjeta en <span className="text-primary font-bold">React con TypeScript y Tailwind CSS</span>"
            </div>
          </StepCard>

          <StepCard number={3} title="Pide ejemplos y explicaciones">
            <p className="mb-3">
              No solo pidas código, pide que te explique. Aprenderás mucho más.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>"Explícame qué hace este código línea por línea"</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>"Dame 3 ejemplos de cómo usar esta función"</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>"Compara este approach vs usar [alternativa]"</span>
              </li>
            </ul>
          </StepCard>

          <StepCard number={4} title="Itera y refina">
            <p className="mb-3">
              Si la primera respuesta no es perfecta, pide ajustes. Copilot mantiene el contexto de la conversación.
            </p>
            <div className="space-y-2 text-sm">
              <div className="bg-muted p-3 rounded">
                <span className="text-muted-foreground">Tú:</span> "Crea un formulario de login"
              </div>
              <div className="bg-primary/10 p-3 rounded">
                <span className="text-primary font-semibold">Copilot:</span> [genera formulario]
              </div>
              <div className="bg-muted p-3 rounded">
                <span className="text-muted-foreground">Tú:</span> "Ahora añádele validación y muestra errores en rojo"
              </div>
              <div className="bg-primary/10 p-3 rounded">
                <span className="text-primary font-semibold">Copilot:</span> [mejora el código]
              </div>
            </div>
          </StepCard>

          <StepCard number={5} title="Usa comentarios en tu código">
            <p className="mb-3">
              Escribe comentarios en español describiendo qué quieres, y Copilot generará el código automáticamente.
            </p>
            <div className="bg-muted p-4 rounded font-mono text-sm space-y-2">
              <div className="text-muted-foreground">// Función que convierte Celsius a Fahrenheit</div>
              <div className="text-primary">// [Presiona Enter y Copilot completa el código]</div>
            </div>
          </StepCard>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Elige el modo correcto para cada tarea</h2>
        <Card className="p-6 mb-4 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="flex gap-3 items-start mb-4">
            <Robot size={28} weight="duotone" className="text-primary flex-shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Copilot Chat ya no es solo "preguntar y recibir código". Hoy tiene varios modos, y elegir el correcto
              te ahorra tiempo y créditos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-background/60 p-4 rounded border">
              <div className="font-semibold mb-1">💬 Ask (Preguntar)</div>
              <p className="text-muted-foreground">Para entender código, resolver dudas o pedir explicaciones. No modifica archivos.</p>
            </div>
            <div className="bg-background/60 p-4 rounded border">
              <div className="font-semibold mb-1">✏️ Edit</div>
              <p className="text-muted-foreground">Para cambios puntuales en uno o varios archivos que ya tienes abiertos. Tú revisas cada cambio.</p>
            </div>
            <div className="bg-background/60 p-4 rounded border">
              <div className="font-semibold mb-1">🤖 Agent</div>
              <p className="text-muted-foreground">Para tareas completas de varios pasos: Copilot decide qué archivos tocar, ejecuta comandos y corrige errores solo.</p>
            </div>
          </div>
        </Card>

        <StepCard number={6} title="Dale contexto permanente con instrucciones personalizadas">
          <p className="mb-3">
            Puedes crear un archivo <code className="bg-muted px-2 py-1 rounded">.github/copilot-instructions.md</code> en
            tu repositorio con reglas del proyecto (convenciones de nombres, stack usado, qué evitar). Copilot lo lee
            automáticamente en cada conversación, así no repites el mismo contexto una y otra vez.
          </p>
          <div className="bg-muted p-4 rounded font-mono text-xs">
            # .github/copilot-instructions.md<br />
            Este proyecto usa React + TypeScript + Tailwind.<br />
            Los componentes van en src/components. Usa nombres en inglés para variables.
          </div>
        </StepCard>

        <StepCard number={7} title="Elige el modelo según la tarea">
          <p>
            Desde el selector de modelo en el chat puedes cambiar entre Claude, Gemini o GPT (o dejar la selección
            automática). Para dudas rápidas o completaciones, el modelo automático es suficiente; para tareas
            complejas de arquitectura o refactors grandes, prueba un modelo más avanzado.
          </p>
        </StepCard>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Mejores Prácticas</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6">
            <div className="flex gap-3 mb-3">
              <CheckCircle size={24} weight="fill" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold">Lee y entiende el código generado</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Nunca copies código que no entiendes. Si algo no te queda claro, pregúntale a Copilot que te lo explique.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 mb-3">
              <CheckCircle size={24} weight="fill" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold">Prueba el código generado</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Copilot no es infalible. Siempre prueba que el código funcione correctamente antes de usarlo en producción.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 mb-3">
              <CheckCircle size={24} weight="fill" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold">Aprende los fundamentos primero</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Usa Copilot para acelerar, no para reemplazar el aprendizaje. Entiende HTML, CSS y JavaScript básico primero.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 mb-3">
              <CheckCircle size={24} weight="fill" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold">Combina con documentación oficial</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Usa Copilot junto con la documentación de las tecnologías. Lee la docs y usa Copilot para implementar.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 mb-3">
              <CheckCircle size={24} weight="fill" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold">Pide múltiples alternativas</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              "Dame 3 formas diferentes de hacer esto" te ayuda a ver distintos approaches y elegir el mejor.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex gap-3 mb-3">
              <CheckCircle size={24} weight="fill" className="text-primary flex-shrink-0" />
              <h3 className="font-semibold">Úsalo para aprender patrones</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Observa cómo Copilot estructura el código, qué nombres usa para variables, cómo organiza funciones.
            </p>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Errores Comunes y Cómo Evitarlos</h2>
        <div className="space-y-4">
          <Card className="p-6 border-l-4 border-destructive">
            <div className="flex gap-3 items-start mb-3">
              <Warning size={24} weight="fill" className="text-destructive flex-shrink-0" />
              <h3 className="font-semibold text-lg">Copiar sin entender</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problema:</strong> Copias código de Copilot sin saber qué hace, y luego no puedes modificarlo o arreglar bugs.
            </p>
            <p className="text-sm text-primary">
              <strong>Solución:</strong> Siempre pide "Explica este código" o "Comenta cada línea" antes de usarlo.
            </p>
          </Card>

          <Card className="p-6 border-l-4 border-destructive">
            <div className="flex gap-3 items-start mb-3">
              <Warning size={24} weight="fill" className="text-destructive flex-shrink-0" />
              <h3 className="font-semibold text-lg">Prompts demasiado vagos</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problema:</strong> "Haz una app" o "Arregla esto" no le da suficiente contexto a Copilot.
            </p>
            <p className="text-sm text-primary">
              <strong>Solución:</strong> Sé específica: qué hace la app, qué tecnologías, qué features, qué estilo visual.
            </p>
          </Card>

          <Card className="p-6 border-l-4 border-destructive">
            <div className="flex gap-3 items-start mb-3">
              <Warning size={24} weight="fill" className="text-destructive flex-shrink-0" />
              <h3 className="font-semibold text-lg">No validar el código</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problema:</strong> Asumes que todo lo que genera Copilot es perfecto y funciona.
            </p>
            <p className="text-sm text-primary">
              <strong>Solución:</strong> Prueba todo. Revisa edge cases. Pregunta "¿Qué pasa si [escenario inesperado]?"
            </p>
          </Card>

          <Card className="p-6 border-l-4 border-destructive">
            <div className="flex gap-3 items-start mb-3">
              <Warning size={24} weight="fill" className="text-destructive flex-shrink-0" />
              <h3 className="font-semibold text-lg">Depender 100% de Copilot</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problema:</strong> Sin Copilot no puedes escribir ni una línea de código.
            </p>
            <p className="text-sm text-primary">
              <strong>Solución:</strong> Practica sin Copilot también. Úsalo 50% del tiempo al principio, aumenta gradualmente.
            </p>
          </Card>

          <Card className="p-6 border-l-4 border-destructive">
            <div className="flex gap-3 items-start mb-3">
              <Warning size={24} weight="fill" className="text-destructive flex-shrink-0" />
              <h3 className="font-semibold text-lg">No iterar en las respuestas</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problema:</strong> Si la primera respuesta no es buena, te rindes o empiezas desde cero.
            </p>
            <p className="text-sm text-primary">
              <strong>Solución:</strong> Di "Mejora esto", "Hazlo más simple", "Añade [feature]". Itera hasta que esté bien.
            </p>
          </Card>
        </div>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <div className="flex gap-4 items-start">
          <Lightbulb size={32} weight="duotone" className="text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-xl mb-3">Pro Tip: Usa Copilot como tutor personal</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En lugar de buscar en Google o Stack Overflow, pregúntale directamente a Copilot. 
              Es como tener un mentor 24/7 que conoce tu código y tu contexto.
            </p>
            <div className="space-y-2 text-sm">
              <p className="font-mono bg-background p-2 rounded">
                "¿Por qué este código da error?"
              </p>
              <p className="font-mono bg-background p-2 rounded">
                "¿Cuál es la diferencia entre let, const y var?"
              </p>
              <p className="font-mono bg-background p-2 rounded">
                "¿Cómo puedo hacer esto más eficiente?"
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
