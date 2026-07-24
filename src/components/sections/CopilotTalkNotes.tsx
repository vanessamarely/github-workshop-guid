import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Presentation, GithubLogo, Wrench, Terminal, Desktop, ArrowSquareOut } from '@phosphor-icons/react'
import { slides } from '@/lib/slideContent'
import { StepCard } from '@/components/StepCard'

/**
 * Espejo en texto de `src/lib/slideContent.ts` — el deck (pestaña "Charla:
 * GitHub Copilot") y esta página consumen la misma fuente de datos, así que
 * el contenido nunca puede desincronizarse entre las dos.
 */
function groupByTopic() {
  const groups: { topic: string; items: typeof slides }[] = []
  for (const slide of slides) {
    const last = groups[groups.length - 1]
    if (last && last.topic === slide.topic) {
      last.items.push(slide)
    } else {
      groups.push({ topic: slide.topic, items: [slide] })
    }
  }
  return groups
}

export function CopilotTalkNotes() {
  const groups = groupByTopic()

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Presentation size={32} weight="fill" className="text-primary" />
          <h1 className="text-4xl font-bold">Charla: Notas y Ejercicios</h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Versión de lectura completa de la charla "GitHub Copilot en profundidad" — el mismo contenido
          del slide deck, con cada punto desarrollado en texto, más ejercicios para practicarlo en
          github.com, VS Code, el Copilot CLI y la Copilot App.
        </p>
      </div>

      {groups.map((group) => (
        <Card key={group.topic} className="p-8">
          <h2 className="text-2xl font-semibold mb-6">{group.topic}</h2>
          <div className="space-y-6">
            {group.items.map((slide) => (
              <div key={slide.id}>
                {slide.photo && (
                  <img
                    src={slide.photo}
                    alt={slide.title}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md float-right ml-4 mb-2"
                  />
                )}
                <h3 className="font-semibold text-lg mb-2">{slide.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">{slide.notes}</p>
                <ul className="ml-4 space-y-1 text-sm text-muted-foreground">
                  {slide.bullets.map((bullet, i) => (
                    <li key={i}>• {bullet}</li>
                  ))}
                </ul>
                {slide.links && slide.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-4 clear-right">
                    {slide.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary font-medium border border-primary/30 rounded-full px-3 py-1 hover:bg-primary/10 transition-colors"
                      >
                        <span className="font-semibold">{link.label}</span>
                        {link.handle && <span className="text-primary/70 font-normal">{link.handle}</span>}
                        <ArrowSquareOut size={14} className="flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                )}
                {slide.image && (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full rounded-xl border mt-4 clear-right"
                  />
                )}
              </div>
            ))}
          </div>
        </Card>
      ))}

      <div>
        <h2 className="text-2xl font-semibold mb-2">Ejercicios: llévalo a la práctica</h2>
        <p className="text-muted-foreground mb-6">
          Cuatro ejercicios cortos, uno por plataforma. No necesitas hacerlos todos de una sola vez —
          elige el que tengas más a mano ahora mismo.
        </p>

        <div className="space-y-4">
          <StepCard number={1} title={
            <span className="flex items-center gap-2">
              <GithubLogo size={20} weight="fill" /> github.com — Pide un code review a Copilot
            </span>
          }>
            <ol className="space-y-2 text-sm list-decimal ml-4 mb-3">
              <li>Abre cualquier Pull Request tuyo en GitHub (o crea uno pequeño: cambia una línea de un README y ábrelo como PR)</li>
              <li>En la pestaña "Reviewers" del PR, agrega a <strong>Copilot</strong> como reviewer</li>
              <li>Espera unos segundos — Copilot deja comentarios directamente sobre las líneas que considera mejorables</li>
              <li>Lee cada comentario: ¿tiene sentido? ¿lo aplicarías?</li>
            </ol>
            <div className="bg-muted p-3 rounded text-sm">
              <strong>Resultado esperado:</strong> al menos un comentario de Copilot en el PR, con una sugerencia concreta
              (no solo "esto se ve bien").
            </div>
          </StepCard>

          <StepCard number={2} title={
            <span className="flex items-center gap-2">
              <Wrench size={20} weight="fill" /> VS Code — Escribe tu copilot-instructions.md
            </span>
          }>
            <ol className="space-y-2 text-sm list-decimal ml-4 mb-3">
              <li>En cualquier proyecto tuyo, crea la carpeta <code className="bg-muted px-1 rounded">.github/</code> si no existe</li>
              <li>Dentro, crea <code className="bg-muted px-1 rounded">copilot-instructions.md</code> con 4 secciones: Stack, Convenciones, Reglas de negocio, Qué NO hacer (mínimo 2 líneas por sección)</li>
              <li>Abre Copilot Chat y pregunta: <em>"¿qué instrucciones tienes sobre este proyecto?"</em></li>
              <li>Ahora selecciona una función en tu código, adjúntala con <code className="bg-muted px-1 rounded">#selection</code>, y pide un refactor</li>
            </ol>
            <div className="bg-muted p-3 rounded text-sm">
              <strong>Resultado esperado:</strong> Copilot repite tus reglas específicas (no algo genérico) cuando le preguntas,
              y el refactor sigue las convenciones que escribiste.
            </div>
          </StepCard>

          <StepCard number={3} title={
            <span className="flex items-center gap-2">
              <Terminal size={20} weight="fill" /> Copilot CLI — Plan Mode en la terminal
            </span>
          }>
            <ol className="space-y-2 text-sm list-decimal ml-4 mb-3">
              <li>Instala el CLI: <code className="bg-muted px-1 rounded">npm install -g @github/copilot</code> (requiere Node.js 22+)</li>
              <li>Ejecuta <code className="bg-muted px-1 rounded">copilot</code> en la carpeta de un proyecto tuyo, y si hace falta, <code className="bg-muted px-1 rounded">/login</code></li>
              <li>Presiona <kbd className="bg-muted px-2 py-1 rounded">Shift+Tab</kbd> para activar Plan Mode</li>
              <li>Pide algo concreto: <em>"agrega un archivo CONTRIBUTING.md básico"</em></li>
              <li>Lee el plan completo antes de aprobarlo — ¿qué archivos va a tocar?</li>
            </ol>
            <div className="bg-muted p-3 rounded text-sm">
              <strong>Resultado esperado:</strong> ves el plan completo en la terminal antes de que se ejecute nada, y
              decides si lo apruebas.
            </div>
          </StepCard>

          <StepCard number={4} title={
            <span className="flex items-center gap-2">
              <Desktop size={20} weight="fill" /> Copilot App — Supervisa una sesión
            </span>
          }>
            <ol className="space-y-2 text-sm list-decimal ml-4 mb-3">
              <li>Descarga la Copilot App para tu sistema operativo</li>
              <li>Conecta tu cuenta de GitHub y agrega uno de tus repositorios</li>
              <li>Desde "My Work", lanza una sesión con una tarea simple (ej. "agrega comentarios explicativos a este archivo")</li>
              <li>Observa el progreso en tiempo real, sin tener VS Code ni la terminal abiertos</li>
            </ol>
            <div className="bg-muted p-3 rounded text-sm">
              <strong>Resultado esperado:</strong> puedes seguir el avance de la tarea (qué archivos toca, qué comandos corre)
              desde la app, sin otra ventana abierta.
            </div>
          </StepCard>

          <StepCard number={5} title="Cierre: el loop completo, de un issue a un PR">
            <p className="mb-3 text-sm text-muted-foreground">
              Este ejercicio conecta los cuatro anteriores con el patrón del punto "Ciclo de vida con IA" de la charla.
            </p>
            <ol className="space-y-2 text-sm list-decimal ml-4 mb-3">
              <li>En un repo tuyo (github.com), crea un Issue describiendo una tarea chica y concreta — trátalo como la spec: qué debe pasar, qué archivos probablemente involucra, cómo sabes que quedó bien</li>
              <li>Si tienes acceso a Copilot coding agent, asígnaselo al Issue. Si no, resuelve el Issue tú mismo usando Agent Mode en VS Code, con el Issue abierto como referencia</li>
              <li>Cuando el PR esté abierto, agrega a Copilot como reviewer (Ejercicio 1)</li>
              <li>Revisa el PR: ¿el resultado cumple lo que pediste en el Issue?</li>
            </ol>
            <Badge variant="secondary">Conecta los 4 ejercicios anteriores</Badge>
          </StepCard>
        </div>
      </div>
    </div>
  )
}
