import { Card } from '@/components/ui/card'
import { StepCard } from '../StepCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Rocket, Path, Briefcase } from '@phosphor-icons/react'

export function BeginnerRoadmap() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Cómo Empezar con GitHub y Programación</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Rutas de aprendizaje personalizadas según tu punto de partida. Elige tu situación y sigue los pasos.
        </p>
      </div>

      <Tabs defaultValue="no-experience" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="no-experience" className="gap-2">
            <Rocket size={20} />
            Sin experiencia en programación
          </TabsTrigger>
          <TabsTrigger value="has-code" className="gap-2">
            <Briefcase size={20} />
            Sé programar, no tengo experiencia laboral
          </TabsTrigger>
        </TabsList>

        <TabsContent value="no-experience" className="space-y-6 mt-6">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-semibold mb-3">Ruta: De Cero a Primera Contribución</h2>
            <p className="text-muted-foreground">
              Esta ruta te llevará desde no saber nada hasta tener tu primer portafolio en GitHub. 
              Tiempo estimado: 3-6 meses dedicando 2-3 horas diarias.
            </p>
          </Card>

          <div className="space-y-4">
            <StepCard number={1} title="Crea tu cuenta de GitHub (Semana 1)">
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Ve a github.com y crea tu cuenta (usa un username profesional)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Configura tu perfil: foto, bio breve, ubicación</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Si eres estudiante, solicita GitHub Student Developer Pack</span>
                </li>
              </ul>
              <div className="bg-primary/10 p-3 rounded text-sm">
                <strong>Con Copilot:</strong> Pídele que te ayude a escribir una bio profesional para tu perfil
              </div>
            </StepCard>

            <StepCard number={2} title="Aprende lo básico de HTML y CSS (Semanas 2-4)">
              <p className="mb-3 text-sm">
                Empieza con los fundamentos de cómo se construyen las páginas web.
              </p>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Recursos:</strong> freeCodeCamp (gratis), HTML & CSS en codecademy</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Práctica:</strong> Crea 3-5 páginas simples (sobre ti, receta de cocina, página de fan)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>GitHub:</strong> Sube cada proyecto a un repositorio diferente</span>
                </li>
              </ul>
              <div className="bg-primary/10 p-3 rounded text-sm space-y-2">
                <div><strong>Prompts útiles:</strong></div>
                <div className="font-mono bg-background p-2 rounded">
                  "Explícame HTML como si nunca hubiera programado"
                </div>
                <div className="font-mono bg-background p-2 rounded">
                  "Crea una estructura HTML básica para una página sobre mí"
                </div>
                <div className="font-mono bg-background p-2 rounded">
                  "Ayúdame a centrar este div con CSS"
                </div>
              </div>
            </StepCard>

            <StepCard number={3} title="Introducción a JavaScript (Semanas 5-8)">
              <p className="mb-3 text-sm">
                Aprende a hacer tus páginas interactivas.
              </p>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Fundamentos:</strong> Variables, funciones, if/else, loops, arrays</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Proyectos:</strong> Calculadora, to-do list, contador, juego simple</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>GitHub:</strong> Documenta cada proyecto con README explicando qué hace</span>
                </li>
              </ul>
              <div className="bg-primary/10 p-3 rounded text-sm">
                <strong>Con Copilot:</strong> "Explícame qué es una función en JavaScript con ejemplos" | 
                "Crea un ejercicio práctico para aprender loops"
              </div>
            </StepCard>

            <StepCard number={4} title="Tu primer proyecto guiado por Copilot (Semana 9-10)">
              <p className="mb-3 text-sm">
                Crea un proyecto más completo usando todo lo aprendido.
              </p>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Proyecto sugerido:</strong> Landing page personal con formulario de contacto</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Usa Copilot para:</strong> Generar estructura, añadir validación, crear animaciones</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Publica:</strong> Usa GitHub Pages para ponerlo en línea</span>
                </li>
              </ul>
            </StepCard>

            <StepCard number={5} title="Construye tu portafolio (Semana 11-12)">
              <p className="mb-3 text-sm">
                Crea un sitio que muestre todos tus proyectos.
              </p>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Sección "Sobre mí" contando tu historia</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Galería de proyectos con links a GitHub y demos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Lista de habilidades que has aprendido</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Formulario de contacto o links a redes sociales</span>
                </li>
              </ul>
              <div className="bg-primary/10 p-3 rounded text-sm">
                <strong>Siguiente paso:</strong> Usa la sección "Crear Portafolio Web" de esta guía
              </div>
            </StepCard>

            <StepCard number={6} title="README de perfil profesional">
              <p className="mb-3 text-sm">
                Crea tu README de perfil de GitHub para causar buena impresión.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Usa la actividad guiada "Crear README Profesional" de esta guía</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Incluye: quién eres, qué aprendiste, qué buscas, cómo contactarte</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Añade badges de tecnologías, stats de GitHub, link a portafolio</span>
                </li>
              </ul>
            </StepCard>
          </div>

          <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="font-semibold text-lg mb-3">🎯 Al final de esta ruta tendrás:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Conocimiento de HTML, CSS y JavaScript básico</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>5-8 proyectos en tu GitHub, todos documentados</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Un portafolio web publicado y funcional</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Perfil de GitHub profesional y atractivo</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Capacidad de usar Copilot para seguir aprendiendo</span>
              </li>
            </ul>
          </Card>
        </TabsContent>

        <TabsContent value="has-code" className="space-y-6 mt-6">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-semibold mb-3">Ruta: De Conocimiento a Primer Empleo</h2>
            <p className="text-muted-foreground">
              Ya sabes programar, pero necesitas demostrar tu experiencia para conseguir tu primera oportunidad laboral. 
              Tiempo estimado: 2-3 meses.
            </p>
          </Card>

          <div className="space-y-4">
            <StepCard number={1} title="Audita tu GitHub actual">
              <p className="mb-3 text-sm">
                Revisa qué tienes y qué necesitas mejorar.
              </p>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>¿Tienes repositorios públicos? ¿Cuántos?</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>¿Tienen README profesionales?</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>¿El código está bien organizado y comentado?</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>¿Tus proyectos funcionan y están deployados?</span>
                </li>
              </ul>
              <div className="bg-primary/10 p-3 rounded text-sm">
                <strong>Con Copilot:</strong> "Revisa el README de mi proyecto y sugiere mejoras para hacerlo más profesional"
              </div>
            </StepCard>

            <StepCard number={2} title="Transforma proyectos académicos en profesionales">
              <p className="mb-3 text-sm">
                Los proyectos universitarios son válidos, pero necesitan presentación profesional.
              </p>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Mejora el README:</strong> Enfócate en el problema resuelto, no en la calificación</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Refactoriza:</strong> Limpia el código, añade comentarios, mejora nombres de variables</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Deploy:</strong> Ponlo en línea aunque sea simple</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Documenta:</strong> Cómo instalarlo, usarlo, las decisiones técnicas que tomaste</span>
                </li>
              </ul>
              <div className="bg-primary/10 p-3 rounded text-sm">
                <strong>Prompt clave:</strong> "Convierte esta descripción de proyecto universitario en una descripción profesional para portafolio: [descripción]"
              </div>
            </StepCard>

            <StepCard number={3} title="Crea 3 proyectos portfolio-ready">
              <p className="mb-3 text-sm">
                Proyectos específicamente diseñados para demostrar tus habilidades a reclutadores.
              </p>
              <div className="space-y-3 text-sm mb-4">
                <div className="bg-muted p-3 rounded">
                  <div className="font-semibold mb-1">Proyecto 1: Full-stack CRUD app</div>
                  <div className="text-muted-foreground">
                    Demuestra que entiendes frontend, backend, base de datos y deploy. 
                    Ejemplo: App de notas, gestor de tareas con usuarios, blog personal.
                  </div>
                </div>
                <div className="bg-muted p-3 rounded">
                  <div className="font-semibold mb-1">Proyecto 2: Consumir API externa</div>
                  <div className="text-muted-foreground">
                    Muestra que puedes trabajar con datos reales. 
                    Ejemplo: Dashboard del clima, buscador de películas, visualizador de datos de GitHub.
                  </div>
                </div>
                <div className="bg-muted p-3 rounded">
                  <div className="font-semibold mb-1">Proyecto 3: Solución a problema real</div>
                  <div className="text-muted-foreground">
                    Demuestra pensamiento crítico. 
                    Ejemplo: Herramienta que resuelve algo que necesitas tú o tu comunidad.
                  </div>
                </div>
              </div>
              <div className="bg-primary/10 p-3 rounded text-sm">
                <strong>Con Copilot:</strong> "Dame ideas de proyectos full-stack para mi portafolio como [tu especialidad]. Que sean completables en 1-2 semanas."
              </div>
            </StepCard>

            <StepCard number={4} title="Documenta como profesional">
              <p className="mb-3 text-sm">
                La documentación es lo que diferencia un proyecto de estudiante de uno profesional.
              </p>
              <div className="bg-muted p-4 rounded text-sm mb-4">
                <div className="font-semibold mb-2">Cada proyecto debe tener:</div>
                <ul className="space-y-1 ml-4">
                  <li>• README completo (problema, solución, tech stack, instalación, uso)</li>
                  <li>• Screenshots o GIF demo</li>
                  <li>• Link al proyecto en vivo (deploy)</li>
                  <li>• Explicación de decisiones técnicas</li>
                  <li>• Sección de "Qué aprendí" o "Desafíos superados"</li>
                  <li>• Código limpio y comentado donde sea necesario</li>
                </ul>
              </div>
              <div className="bg-primary/10 p-3 rounded text-sm">
                Usa la sección "Repositorio de Prompts" → "README y Documentación" de esta guía
              </div>
            </StepCard>

            <StepCard number={5} title="Construye tu portafolio profesional">
              <p className="mb-3 text-sm">
                Un sitio web que sea tu carta de presentación.
              </p>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Hero section:</strong> Tu nombre, título (Frontend Dev, Full-stack Dev), breve tagline</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Sobre mí:</strong> Tu historia, qué te apasiona, qué buscas (2-3 párrafos)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Proyectos destacados:</strong> Tus 3 mejores con descripción, tech y links</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Skills:</strong> Lista visual de tecnologías que dominas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Contacto:</strong> Email, GitHub, LinkedIn, formulario opcional</span>
                </li>
              </ul>
              <div className="bg-primary/10 p-3 rounded text-sm">
                Sigue la actividad guiada "Crear Portafolio Web" de esta guía para implementarlo
              </div>
            </StepCard>

            <StepCard number={6} title="Optimiza tu perfil para reclutadores">
              <p className="mb-3 text-sm">
                Asegúrate de que tu GitHub cause la mejor impresión.
              </p>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>README de perfil:</strong> Usa la actividad "Crear README Profesional"</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Pin projects:</strong> Fija tus 6 mejores repositorios en tu perfil</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Actividad:</strong> Haz commits regularmente, aunque sean pequeños</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Contribuciones:</strong> Participa en proyectos open source (aunque sea documentación)</span>
                </li>
              </ul>
            </StepCard>

            <StepCard number={7} title="Prepara tu pitch de proyectos">
              <p className="mb-3 text-sm">
                Practica cómo presentar tus proyectos en entrevistas.
              </p>
              <div className="bg-muted p-4 rounded text-sm mb-4">
                <div className="font-semibold mb-2">Estructura STAR para cada proyecto:</div>
                <ul className="space-y-2 ml-4">
                  <li><strong>Situation:</strong> ¿Qué problema querías resolver?</li>
                  <li><strong>Task:</strong> ¿Qué te propusiste hacer?</li>
                  <li><strong>Action:</strong> ¿Cómo lo implementaste? ¿Qué tecnologías usaste? ¿Por qué?</li>
                  <li><strong>Result:</strong> ¿Qué lograste? ¿Qué aprendiste? ¿Métricas?</li>
                </ul>
              </div>
              <div className="bg-primary/10 p-3 rounded text-sm">
                <strong>Prompt:</strong> "Ayúdame a crear un pitch de 2 minutos sobre este proyecto usando método STAR: [descripción]"
              </div>
            </StepCard>
          </div>

          <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="font-semibold text-lg mb-3">🎯 Al completar esta ruta estarás lista para:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Aplicar a posiciones junior con confianza</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Mostrar un portafolio que impresione a reclutadores</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Hablar profesionalmente sobre tus proyectos en entrevistas</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Demostrar habilidades técnicas y profesionalismo</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Usar Copilot como ventaja competitiva en tu trabajo</span>
              </li>
            </ul>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="p-6 border-primary/20 bg-primary/5">
        <div className="flex gap-3 items-start">
          <Path size={28} weight="duotone" className="text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Recuerda: No es una carrera</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cada persona aprende a su ritmo. Estos tiempos son estimados. Lo importante es la consistencia: 
              mejor 1 hora diaria que 8 horas un solo día. Celebra cada pequeño avance y no te compares con otros. 
              Tu única competencia eres tú de ayer.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
