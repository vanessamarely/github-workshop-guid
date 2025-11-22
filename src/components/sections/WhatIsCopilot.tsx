import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Lightning, ChatCircle, Code, MagicWand, Sparkle, GraduationCap, Lightbulb } from '@phosphor-icons/react'
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
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Planes de GitHub Copilot</h2>
        
        <Card className="p-6 mb-6 bg-accent/10 border-accent/30">
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <Lightbulb size={24} weight="duotone" className="text-primary" />
            ¿Qué significan los límites del plan gratuito?
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <div>
              <p className="font-semibold text-foreground mb-1">🔹 2,000 completaciones de código</p>
              <p>
                Cada vez que Copilot te sugiere código y tú presionas <kbd className="px-2 py-0.5 bg-muted rounded text-xs font-mono">Tab</kbd> para aceptarlo, cuenta como 1 completación. 
                No importa si es una línea o 50 líneas de código, es una sola completación.
                Con 2,000 al mes tienes suficiente para programar varias horas al día.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">💬 50 mensajes de chat</p>
              <p>
                Son 50 preguntas o conversaciones que puedes tener con Copilot en el panel de chat.
                Un "mensaje" es cada vez que tú le escribes algo y él te responde, sin importar cuántos caracteres tenga tu pregunta o su respuesta.
                Si haces una pregunta y Copilot responde, eso es 1 mensaje usado. Puedes hacer preguntas largas y complejas sin problema.
              </p>
            </div>
            <p className="text-xs pt-2 border-t">
              💡 <strong>Tip:</strong> Los límites se reinician el primer día de cada mes. Para la mayoría de principiantes y estudiantes, estos límites son más que suficientes.
            </p>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
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
