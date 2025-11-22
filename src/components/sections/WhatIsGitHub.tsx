import { Card } from '@/components/ui/card'
import { GitBranch, Book, FileText, GitPullRequest, Warning, House } from '@phosphor-icons/react'

export function WhatIsGitHub() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">¿Qué es GitHub?</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Una plataforma donde guardas, organizas y compartes tu código. Es como Google Drive pero diseñado específicamente para desarrolladores.
        </p>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">¿Para qué sirve?</h2>
        <ul className="space-y-3 text-lg leading-relaxed">
          <li className="flex gap-3">
            <span className="text-primary">✓</span>
            <span><strong>Guardar tu código en la nube</strong> - Nunca pierdas tu trabajo</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">✓</span>
            <span><strong>Colaborar con otras personas</strong> - Trabajen juntas en el mismo proyecto</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">✓</span>
            <span><strong>Mostrar tu portafolio</strong> - Los reclutadores revisan tu GitHub</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">✓</span>
            <span><strong>Aprender viendo código de otros</strong> - Millones de proyectos open source</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">✓</span>
            <span><strong>Publicar tus proyectos web gratis</strong> - Con GitHub Pages</span>
          </li>
        </ul>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-6">¿Por qué es importante para conseguir empleo?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6">
            <div className="text-4xl mb-3">👀</div>
            <h3 className="font-semibold mb-2">Los reclutadores lo revisan</h3>
            <p className="text-sm text-muted-foreground">
              El 89% de reclutadores tech revisan el perfil de GitHub de los candidatos antes de entrevistar.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-semibold mb-2">Demuestra tu experiencia</h3>
            <p className="text-sm text-muted-foreground">
              Aunque no tengas experiencia laboral, tus proyectos en GitHub muestran que sabes programar.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="font-semibold mb-2">Te diferencia</h3>
            <p className="text-sm text-muted-foreground">
              Un perfil activo y bien documentado te hace destacar entre cientos de CVs similares.
            </p>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Conceptos básicos que debes conocer</h2>
        <div className="space-y-4">
          <Card className="p-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Book size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Repositorio (Repo)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Es como una carpeta donde guardas todo tu proyecto: código, imágenes, documentos. 
                  Cada proyecto tiene su propio repositorio. Ejemplo: "mi-portafolio-web", "calculadora-js"
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Commit</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Es como guardar una versión de tu trabajo con una nota de qué cambiaste. 
                  Por ejemplo: "Añadí formulario de contacto" o "Corregí error en el botón".
                  Cada commit es un punto en la historia de tu proyecto.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GitBranch size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Branch (Rama)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Imagina que quieres probar algo nuevo sin romper tu código que funciona. 
                  Creas una rama (como una copia temporal) para experimentar. 
                  Si funciona, la juntas con la rama principal. Si no, la borras.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GitPullRequest size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Pull Request (PR)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Es decir "Hey, hice cambios en mi rama, ¿los revisas antes de añadirlos al proyecto principal?". 
                  Se usa mucho en equipos para revisar código antes de aceptarlo.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Warning size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Issue</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Es como una nota o ticket para reportar un problema, sugerir una mejora o hacer una pregunta sobre el proyecto.
                  Por ejemplo: "El botón de enviar no funciona en mobile" o "Sería genial añadir modo oscuro".
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">README</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Es el archivo más importante de tu repositorio. Es la primera impresión que dan tus proyectos.
                  Debe explicar: qué hace tu proyecto, cómo usarlo, qué tecnologías usaste y cómo instalarlo.
                  Un buen README hace que tu proyecto se vea profesional.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-lg">
                <House size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">GitHub Pages</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Servicio gratuito de GitHub que convierte tu código HTML/CSS/JS en un sitio web en vivo.
                  Perfecto para publicar tu portafolio, proyectos personales o documentación. 
                  Tu sitio quedará en una URL tipo: tunombre.github.io
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-6 bg-primary/5 border-primary/20">
        <h3 className="font-semibold text-lg mb-3">💡 Tip importante</h3>
        <p className="text-muted-foreground leading-relaxed">
          No te agobies si al principio no entiendes todo. GitHub se aprende usándolo. 
          Lo importante es que empieces a crear repositorios, subir proyectos y documentarlos bien. 
          Con el tiempo todo esto se vuelve natural.
        </p>
      </Card>
    </div>
  )
}
