import { Card } from '@/components/ui/card'
import { StepCard } from '../StepCard'
import { CopyButton } from '../CopyButton'
import { Rocket } from '@phosphor-icons/react'

export function PortfolioGuide() {
  const starterHTML = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Nombre - Portafolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <h1>Tu Nombre</h1>
            <ul>
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <section id="hero">
        <h2>Hola, soy Tu Nombre</h2>
        <p>Desarrolladora Frontend apasionada por crear experiencias web increíbles</p>
        <a href="#contact" class="cta-button">Contactar</a>
    </section>

    <section id="about">
        <h2>Sobre mí</h2>
        <p>Tu historia aquí...</p>
    </section>

    <section id="projects">
        <h2>Proyectos</h2>
        <div class="project-grid">
            <!-- Añade tarjetas de proyectos aquí -->
        </div>
    </section>

    <section id="skills">
        <h2>Tecnologías</h2>
        <!-- Lista de skills -->
    </section>

    <section id="contact">
        <h2>Contacto</h2>
        <form>
            <input type="text" placeholder="Nombre" required>
            <input type="email" placeholder="Email" required>
            <textarea placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar</button>
        </form>
    </section>

    <footer>
        <p>© 2024 Tu Nombre. Hecho con 💙</p>
    </footer>
</body>
</html>`

  const starterCSS = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #0D74FF;
    --dark: #24292e;
    --light: #f6f8fa;
    --white: #ffffff;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.6;
    color: var(--dark);
}

header {
    background: var(--white);
    padding: 1rem 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

nav ul {
    display: flex;
    gap: 2rem;
    list-style: none;
}

nav a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    transition: color 0.3s;
}

nav a:hover {
    color: var(--primary);
}

section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

#hero {
    text-align: center;
    padding: 6rem 2rem;
    background: var(--light);
}

#hero h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.cta-button {
    display: inline-block;
    padding: 1rem 2rem;
    background: var(--primary);
    color: var(--white);
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    margin-top: 2rem;
    transition: transform 0.3s;
}

.cta-button:hover {
    transform: translateY(-2px);
}

/* Añade más estilos según necesites */`

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Actividad: Crear tu Portafolio Web</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Crea un portafolio web minimalista y profesional en 30-40 minutos con GitHub Copilot y publícalo gratis con GitHub Pages.
        </p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="flex gap-3 items-start">
          <Rocket size={28} weight="duotone" className="text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Lo que vas a crear</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Un sitio web personal con diseño minimalista inspirado en GitHub, 100% responsive, 
              con secciones de presentación, proyectos, habilidades y contacto. 
              Al final, estará publicado en una URL tipo: tu-usuario.github.io
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Guía paso a paso</h2>

        <StepCard number={1} title="Crear repositorio en GitHub">
          <ol className="space-y-2 text-sm list-decimal ml-4">
            <li>Ve a GitHub → "New repository"</li>
            <li>Nombre: <code className="bg-muted px-2 py-1 rounded">tu-usuario.github.io</code> (reemplaza tu-usuario con tu username exacto)</li>
            <li>Marca "Public" y "Add a README file"</li>
            <li>Click "Create repository"</li>
          </ol>
        </StepCard>

        <StepCard number={2} title="Clonar y abrir en VS Code">
          <ol className="space-y-2 text-sm list-decimal ml-4">
            <li>En la página del repo, click en "Code" → Copiar URL</li>
            <li>Abre VS Code → Terminal → <code className="bg-muted px-2 py-1 rounded">git clone [URL]</code></li>
            <li>Abre la carpeta del proyecto en VS Code</li>
            <li>Activa GitHub Copilot si aún no lo has hecho</li>
          </ol>
        </StepCard>

        <StepCard number={3} title="Crear estructura básica">
          <p className="mb-3 text-sm">Crea estos archivos en tu proyecto:</p>
          <ul className="space-y-2 text-sm mb-4">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <code className="bg-muted px-2 py-1 rounded">index.html</code> - La página principal
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <code className="bg-muted px-2 py-1 rounded">styles.css</code> - Los estilos
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <code className="bg-muted px-2 py-1 rounded">script.js</code> - Interactividad (opcional)
            </li>
          </ul>
          <p className="text-xs text-muted-foreground mb-3">
            Usa esta estructura inicial como base:
          </p>
          <div className="bg-muted p-4 rounded">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold">index.html</span>
              <CopyButton text={starterHTML} label="Copiar" />
            </div>
            <pre className="text-xs overflow-x-auto max-h-64">
              {starterHTML}
            </pre>
          </div>
        </StepCard>

        <StepCard number={4} title="Usar Copilot para personalizar">
          <p className="mb-3 text-sm">Abre Copilot Chat y usa estos prompts para ir construyendo:</p>
          <div className="space-y-3">
            <Card className="p-3 bg-muted">
              <div className="text-xs font-mono mb-2 bg-background p-2 rounded">
                "Crea una sección hero moderna y minimalista con mi nombre, título profesional y botón CTA. Usa los colores de GitHub."
              </div>
              <CopyButton 
                text="Crea una sección hero moderna y minimalista con mi nombre, título profesional y botón CTA. Usa los colores de GitHub."
              />
            </Card>

            <Card className="p-3 bg-muted">
              <div className="text-xs font-mono mb-2 bg-background p-2 rounded">
                "Crea tarjetas de proyecto responsive. Cada tarjeta debe tener: imagen, título, descripción breve, tecnologías usadas con badges, y botones para 'Ver código' y 'Ver demo'."
              </div>
              <CopyButton 
                text="Crea tarjetas de proyecto responsive. Cada tarjeta debe tener: imagen, título, descripción breve, tecnologías usadas con badges, y botones para 'Ver código' y 'Ver demo'."
              />
            </Card>

            <Card className="p-3 bg-muted">
              <div className="text-xs font-mono mb-2 bg-background p-2 rounded">
                "Crea una sección de skills que muestre tecnologías con íconos. Hazla responsive y con hover effects sutiles."
              </div>
              <CopyButton 
                text="Crea una sección de skills que muestre tecnologías con íconos. Hazla responsive y con hover effects sutiles."
              />
            </Card>

            <Card className="p-3 bg-muted">
              <div className="text-xs font-mono mb-2 bg-background p-2 rounded">
                "Crea un formulario de contacto con validación HTML5. Campos: nombre, email, mensaje. Estilo minimalista y accesible."
              </div>
              <CopyButton 
                text="Crea un formulario de contacto con validación HTML5. Campos: nombre, email, mensaje. Estilo minimalista y accesible."
              />
            </Card>
          </div>
        </StepCard>

        <StepCard number={5} title="Añadir estilos con colores GitHub">
          <p className="mb-3 text-sm">Usa esta paleta base en tu CSS:</p>
          <div className="bg-muted p-4 rounded mb-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold">styles.css - Variables de color</span>
              <CopyButton text={starterCSS} label="Copiar base CSS" />
            </div>
            <pre className="text-xs overflow-x-auto max-h-48">
              {starterCSS}
            </pre>
          </div>
          <Card className="p-3 bg-primary/10 text-sm">
            <strong>Prompt para Copilot:</strong> "Completa este CSS para que el sitio se vea moderno, minimalista y responsive. Añade animaciones sutiles en hover y transiciones suaves."
          </Card>
        </StepCard>

        <StepCard number={6} title="Hacer responsive (Mobile-first)">
          <p className="mb-3 text-sm">Asegúrate de que se vea bien en todos los dispositivos:</p>
          <Card className="p-3 bg-muted mb-3">
            <div className="text-xs font-mono mb-2 bg-background p-2 rounded">
              "Añade media queries para hacer este sitio completamente responsive. Optimiza para móviles primero, luego tablets y desktop. Haz que el nav se convierta en hamburger menu en mobile."
            </div>
            <CopyButton 
              text="Añade media queries para hacer este sitio completamente responsive. Optimiza para móviles primero, luego tablets y desktop. Haz que el nav se convierta en hamburger menu en mobile."
            />
          </Card>
          <p className="text-xs text-muted-foreground">
            Prueba en diferentes tamaños: Click derecho → Inspeccionar → Toggle device toolbar
          </p>
        </StepCard>

        <StepCard number={7} title="Publicar en GitHub Pages">
          <ol className="space-y-2 text-sm list-decimal ml-4 mb-3">
            <li>Guarda todos tus archivos</li>
            <li>En terminal: 
              <div className="bg-muted p-2 rounded font-mono text-xs mt-1 space-y-1">
                <div>git add .</div>
                <div>git commit -m "Portafolio completo"</div>
                <div>git push origin main</div>
              </div>
            </li>
            <li>Ve a tu repo en GitHub → Settings → Pages</li>
            <li>En "Source" selecciona "Deploy from branch"</li>
            <li>Branch: "main", Folder: "/ (root)" → Save</li>
            <li>Espera 1-2 minutos y visita <code className="bg-muted px-2 py-1 rounded">tu-usuario.github.io</code></li>
          </ol>
          <div className="bg-primary/10 p-3 rounded text-sm">
            <strong>¡Listo! 🎉</strong> Tu portafolio está en línea. Comparte esta URL en tu CV, LinkedIn y redes sociales.
          </div>
        </StepCard>

        <StepCard number={8} title="Mejoras opcionales (si tienes tiempo)">
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span><strong>Favicon:</strong> Añade un ícono personalizado en la pestaña del navegador</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span><strong>Animaciones:</strong> Usa CSS animations para entrada suave de elementos</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span><strong>Modo oscuro:</strong> Botón para alternar entre tema claro/oscuro</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span><strong>Smooth scroll:</strong> Navegación suave entre secciones</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span><strong>SEO:</strong> Meta tags para mejor visibilidad en buscadores</span>
            </li>
          </ul>
          <Card className="p-3 bg-muted mt-3">
            <div className="text-xs font-mono bg-background p-2 rounded mb-2">
              "Añade modo oscuro a este sitio web usando CSS variables y un botón toggle. Guarda la preferencia del usuario en localStorage."
            </div>
            <CopyButton 
              text="Añade modo oscuro a este sitio web usando CSS variables y un botón toggle. Guarda la preferencia del usuario en localStorage."
            />
          </Card>
        </StepCard>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <h3 className="font-semibold text-lg mb-3">✅ Checklist: Tu portafolio debe incluir</h3>
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          <div className="flex gap-2"><span className="text-primary">☐</span><span>Navbar con links a secciones</span></div>
          <div className="flex gap-2"><span className="text-primary">☐</span><span>Hero section con tu nombre y CTA</span></div>
          <div className="flex gap-2"><span className="text-primary">☐</span><span>Sección "Sobre mí" con tu historia</span></div>
          <div className="flex gap-2"><span className="text-primary">☐</span><span>Galería de proyectos (mínimo 3)</span></div>
          <div className="flex gap-2"><span className="text-primary">☐</span><span>Sección de habilidades/tecnologías</span></div>
          <div className="flex gap-2"><span className="text-primary">☐</span><span>Formulario de contacto funcional</span></div>
          <div className="flex gap-2"><span className="text-primary">☐</span><span>Footer con links a redes sociales</span></div>
          <div className="flex gap-2"><span className="text-primary">☐</span><span>100% responsive (mobile, tablet, desktop)</span></div>
          <div className="flex gap-2"><span className="text-primary">☐</span><span>Colores consistentes (paleta GitHub)</span></div>
          <div className="flex gap-2"><span className="text-primary">☐</span><span>Transiciones y hover effects sutiles</span></div>
          <div className="flex gap-2"><span className="text-primary">☐</span><span>Accesibilidad básica (alt text, labels)</span></div>
          <div className="flex gap-2"><span className="text-primary">☐</span><span>Publicado en GitHub Pages</span></div>
        </div>
      </Card>

      <Card className="p-6 border-primary/20 bg-primary/5">
        <h3 className="font-semibold mb-2">🚀 Siguientes pasos</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li className="flex gap-2">
            <span className="text-primary">1.</span>
            <span>Añade la URL de tu portafolio a tu README de GitHub</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">2.</span>
            <span>Compártelo en LinkedIn y menciona que lo creaste con GitHub Copilot</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">3.</span>
            <span>Actualiza tu CV incluyendo la URL del portafolio</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">4.</span>
            <span>Mantén tu portafolio actualizado con nuevos proyectos</span>
          </li>
        </ul>
      </Card>
    </div>
  )
}
