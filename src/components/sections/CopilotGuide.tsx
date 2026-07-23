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
              <div className="font-semibold mb-1">🗺️ Plan</div>
              <p className="text-muted-foreground">Te muestra el plan completo de archivos a cambiar antes de tocar nada. Apruebas el plan y recién ahí se ejecuta.</p>
            </div>
            <div className="bg-background/60 p-4 rounded border">
              <div className="font-semibold mb-1">🤖 Agent</div>
              <p className="text-muted-foreground">Para cambios directos o tareas completas de varios pasos: Copilot edita, ejecuta comandos y corrige errores solo. Tú revisas el resultado.</p>
            </div>
          </div>
        </Card>

        <StepCard number={6} title="Dale contexto permanente con instrucciones personalizadas">
          <p className="mb-3">
            Puedes crear un archivo <code className="bg-muted px-2 py-1 rounded">.github/copilot-instructions.md</code> en
            tu repositorio con reglas del proyecto. Copilot lo lee automáticamente en cada conversación (chat, Agent Mode,
            y también en el code review), así no repites el mismo contexto una y otra vez. La estructura que mejor funciona
            tiene cuatro secciones:
          </p>
          <ul className="ml-4 mb-3 space-y-1 text-sm text-muted-foreground">
            <li>• <strong>Stack</strong> — qué tecnologías usa el proyecto (lenguaje, framework, librerías clave)</li>
            <li>• <strong>Convenciones</strong> — cómo se nombran archivos, carpetas, variables</li>
            <li>• <strong>Reglas de negocio</strong> — cosas específicas del dominio que Copilot no puede adivinar</li>
            <li>• <strong>Qué NO hacer</strong> — restricciones explícitas (ej. "no uses librerías de pago", "nunca borres tests")</li>
          </ul>
          <div className="bg-muted p-4 rounded font-mono text-xs whitespace-pre-line">
{`# .github/copilot-instructions.md

## Stack
React + TypeScript + Tailwind CSS

## Convenciones
Componentes en PascalCase, variables en inglés, un componente por archivo

## Reglas de negocio
Los precios siempre se muestran con 2 decimales y símbolo de moneda

## Qué NO hacer
No agregar dependencias nuevas sin preguntar primero`}
          </div>
        </StepCard>

        <StepCard number={7} title="Elige el modelo según la tarea">
          <p className="mb-3">
            Desde el selector de modelo en el chat puedes elegir entre varios modelos (Claude, Gemini, GPT, según tu
            plan) o dejar la selección automática. No es solo preferencia — cada plan de Copilot da acceso a un grupo
            distinto de modelos:
          </p>
          <ul className="ml-4 space-y-1 text-sm text-muted-foreground">
            <li>• <strong>Modelo automático</strong> — Copilot elige el más eficiente para la tarea; consume créditos IA igual que cualquier chat, pero menos que uno premium</li>
            <li>• <strong>Modelos estándar</strong> — disponibles desde el plan Pro, buenos para chat y tareas de todos los días</li>
            <li>• <strong>Modelos premium</strong> — los más capaces (mejor razonamiento, mejor para arquitectura o refactors grandes), consumen más créditos por uso y suelen requerir un plan más alto (Pro+, Max, Business o Enterprise, según el modelo)</li>
          </ul>
          <div className="bg-muted p-3 rounded text-sm mt-3">
            Ojo con confundir esto: lo que <strong>nunca</strong> consume créditos son las completions mientras escribes
            y las Next Edit Suggestions — no el chat. Abrir el chat, aunque sea con el modelo automático, siempre
            gasta créditos.
          </div>
          <p className="mt-3 text-sm">
            La tabla completa de planes está en la sección "¿Qué es Copilot?".</p>
        </StepCard>

        <StepCard number={8} title="BYOK: usar tu propia clave de modelo (para organizaciones)">
          <p className="mb-3">
            BYOK (<em>Bring Your Own Key</em>, "trae tu propia clave") deja que una organización conecte su propia
            cuenta de un proveedor de IA — Anthropic, OpenAI, Google AI Studio, AWS Bedrock, Microsoft Foundry, o
            cualquier endpoint compatible con OpenAI — y usar esos modelos dentro de Copilot, en vez de depender
            solo de los modelos que GitHub ofrece por defecto.
          </p>
          <ul className="ml-4 space-y-1 text-sm text-muted-foreground">
            <li>• Lo configura un administrador de la organización (no cada persona por separado)</li>
            <li>• Sirve para usar un modelo específico que la empresa ya paga o prefiere, o cumplir una política interna</li>
            <li>• Ya funciona en VS Code, en el Copilot CLI y en la Copilot App — no solo en el navegador</li>
          </ul>
          <div className="bg-muted p-3 rounded text-sm mt-3">
            No es algo que necesites configurar como estudiante o developer individual — está pensado para planes
            Business/Enterprise. Es útil saber que existe, por si en tu primer trabajo el equipo ya lo usa.
          </div>
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
