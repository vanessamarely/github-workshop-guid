import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { StepCard } from '../StepCard'
import { CopyButton } from '../CopyButton'
import { Sparkle, GithubLogo, Star, ArrowSquareOut } from '@phosphor-icons/react'

export function ReadmeGuide() {
  const [selectedTemplate, setSelectedTemplate] = useState(0)

  const templates = [
    {
      name: 'Minimalista',
      code: `# ¡Hola! 👋 Soy [Tu Nombre]

## Sobre mí
[Breve descripción de quién eres y qué haces]

## 🛠️ Tecnologías
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 📫 Contacto
- LinkedIn: [tu-perfil](https://linkedin.com/in/tu-perfil)
- Email: tu@email.com
- Portfolio: [tu-sitio.com](https://tu-sitio.com)`
    },
    {
      name: 'Completo',
      code: `<h1 align="center">👋 Hola, soy [Tu Nombre]</h1>
<h3 align="center">[Tu título profesional] | [Tu ciudad, País]</h3>

<p align="center">
  <a href="https://linkedin.com/in/tu-perfil"><img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white"/></a>
  <a href="mailto:tu@email.com"><img src="https://img.shields.io/badge/-Email-D14836?style=flat&logo=gmail&logoColor=white"/></a>
  <a href="https://tu-portafolio.com"><img src="https://img.shields.io/badge/-Portfolio-000000?style=flat&logo=About.me&logoColor=white"/></a>
</p>

## 🚀 Sobre mí

[Párrafo sobre ti: tu historia, qué te apasiona, qué estás aprendiendo]

[Qué tipo de oportunidades buscas]

## 💻 Stack Tecnológico

**Frontend**
\`\`\`
HTML5 • CSS3 • JavaScript • React • Tailwind CSS
\`\`\`

**Backend**
\`\`\`
Node.js • Express • MongoDB
\`\`\`

**Herramientas**
\`\`\`
Git • GitHub • VS Code • Figma
\`\`\`

## 🌟 Proyectos Destacados

### [Nombre del Proyecto](link-al-repo)
Descripción breve del proyecto y las tecnologías usadas.

### [Nombre del Proyecto](link-al-repo)
Descripción breve del proyecto y las tecnologías usadas.

## 📊 GitHub Stats

![Tus GitHub stats](https://github-readme-stats.vercel.app/api?username=tu-usuario&show_icons=true&theme=radical)

## 📫 Conectemos

Siempre abierta a nuevas oportunidades y colaboraciones.

📧 Email: tu@email.com
💼 LinkedIn: [tu-perfil](https://linkedin.com/in/tu-perfil)
🌐 Portfolio: [tu-sitio.com](https://tu-sitio.com)`
    },
    {
      name: 'Creativo',
      code: `<div align="center">

# 🌸 [Tu Nombre]

### [Tu descripción en una línea]

\`\`\`javascript
const yo = {
  código: ["JavaScript", "HTML", "CSS", "React"],
  herramientas: ["VS Code", "GitHub", "Figma"],
  aprendiendo: "TypeScript y Node.js",
  buscando: "Primera oportunidad como desarrolladora"
};
\`\`\`

</div>

---

## ⚡ Lo que hago

- 🎨 Creo interfaces web hermosas y funcionales
- 📱 Diseño experiencias responsive y accesibles  
- 🚀 Aprendo nuevas tecnologías constantemente
- 💡 Convierto ideas en código

## 🛠 Mi caja de herramientas

<p>
  <img src="https://img.shields.io/badge/-HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/-CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=white"/>
</p>

## 🌱 Actualmente

- 📚 Aprendiendo [tecnología que estás aprendiendo]
- 👯 Abierta a colaborar en proyectos open source
- 💬 Pregúntame sobre HTML, CSS, JavaScript
- ⚡ Fun fact: [algo interesante sobre ti]

## 📬 Contacto

<p align="center">
  <a href="mailto:tu@email.com">
    <img src="https://img.shields.io/badge/-Email_me-c14438?style=for-the-badge&logo=Gmail&logoColor=white"/>
  </a>
  <a href="https://linkedin.com/in/tu-perfil">
    <img src="https://img.shields.io/badge/-Connect_on_LinkedIn-0077B5?style=for-the-badge&logo=LinkedIn&logoColor=white"/>
  </a>
  <a href="https://tu-portfolio.com">
    <img src="https://img.shields.io/badge/-Visit_Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white"/>
  </a>
</p>

<div align="center">

---

💙 *"Code is poetry"*

</div>`
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Actividad: Crear tu README Profesional</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Tu README de perfil es lo primero que ven los reclutadores al visitar tu GitHub. 
          Hagámoslo memorable en 30 minutos con ayuda de Copilot.
        </p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="flex gap-3 items-start">
          <Sparkle size={28} weight="duotone" className="text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg mb-2">¿Qué es un README de perfil?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Es un repositorio especial que aparece en la parte superior de tu perfil de GitHub. 
              Se crea haciendo un repo con el mismo nombre que tu usuario. Por ejemplo, si tu usuario es "maria-garcia", 
              creas un repositorio llamado "maria-garcia" con un archivo README.md dentro.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
        <div className="flex gap-3 items-start">
          <GithubLogo size={28} weight="duotone" className="text-accent flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg mb-2">🎨 Atajo: generá tu README visualmente</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Si prefieres no escribir el markdown a mano,{' '}
              <a href="https://github.com/vanessamarely/profile-generator" target="_blank" rel="noopener noreferrer" className="text-primary font-medium underline underline-offset-2">
                Profile Generator
              </a>{' '}
              es un proyecto open source (mío) que arma todo esto con una interfaz de arrastrar y soltar: agregás
              secciones (bio, skills, GitHub stats con temas, badges de shields.io, redes sociales, trophies,
              heatmap de contribuciones), ves la vista previa en tiempo real, y exportás el markdown listo para
              pegar en tu repo de perfil. Cubre secciones que la plantilla manual de aquí no trae — podés usarlo
              para armar la base rápido, y volver a esta guía para pulir la bio y el storytelling con los prompts
              de Copilot del Paso 3.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm">
                <a href="https://profile-generator-umber.vercel.app" target="_blank" rel="noopener noreferrer">
                  Probar Profile Generator <ArrowSquareOut size={14} className="ml-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href="https://github.com/vanessamarely/profile-generator" target="_blank" rel="noopener noreferrer">
                  <Star size={14} weight="fill" className="mr-1" /> Ver repo y dejar un Star
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Es un proyecto open source hecho por mí — si te sirvió, dale <strong>Star</strong> al repo.
              No cuesta nada, pero sí ayuda: hace que el proyecto sea más fácil de encontrar y le muestra a
              otras personas que el contenido realmente funciona.
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Paso a paso</h2>

        <StepCard number={1} title="Crear el repositorio especial">
          <ol className="space-y-2 text-sm list-decimal ml-4">
            <li>Ve a GitHub → Click en "+" arriba a la derecha → "New repository"</li>
            <li>En "Repository name" escribe tu username exacto (GitHub te dirá que es especial)</li>
            <li>Marca "Public" y "Add a README file"</li>
            <li>Click en "Create repository"</li>
          </ol>
        </StepCard>

        <StepCard number={2} title="Elige una plantilla base">
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-3">
              Selecciona el estilo que más te guste como punto de partida:
            </p>
            <div className="flex gap-2 flex-wrap">
              {templates.map((template, idx) => (
                <Button
                  key={idx}
                  variant={selectedTemplate === idx ? 'default' : 'outline'}
                  onClick={() => setSelectedTemplate(idx)}
                >
                  {template.name}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold">Plantilla {templates[selectedTemplate].name}</span>
              <CopyButton text={templates[selectedTemplate].code} label="Copiar plantilla" />
            </div>
            <pre className="text-xs overflow-x-auto">
              {templates[selectedTemplate].code}
            </pre>
          </div>
        </StepCard>

        <StepCard number={3} title="Personaliza con Copilot">
          <p className="mb-3 text-sm">
            Ahora viene la magia. Usa estos prompts en Copilot Chat para personalizar tu README:
          </p>
          <div className="space-y-3">
            <Card className="p-4 bg-muted">
              <div className="font-semibold text-sm mb-2">📝 Para escribir tu bio:</div>
              <div className="font-mono text-xs bg-background p-3 rounded mb-2">
                "Ayúdame a escribir una bio profesional para mi README de GitHub. Soy [tu situación actual], 
                mis skills son [tus habilidades], y busco [tipo de oportunidad]. Hazlo en 2-3 oraciones, 
                profesional pero cercano."
              </div>
              <CopyButton 
                text='Ayúdame a escribir una bio profesional para mi README de GitHub. Soy [tu situación actual], mis skills son [tus habilidades], y busco [tipo de oportunidad]. Hazlo en 2-3 oraciones, profesional pero cercano.' 
                label="Copiar prompt"
              />
            </Card>

            <Card className="p-4 bg-muted">
              <div className="font-semibold text-sm mb-2">🎨 Para mejorar el diseño:</div>
              <div className="font-mono text-xs bg-background p-3 rounded mb-2">
                "Mejora este README para que se vea más visual y profesional. Añade emojis apropiados, 
                alineación, y secciones bien organizadas: [pega tu README actual]"
              </div>
              <CopyButton 
                text='Mejora este README para que se vea más visual y profesional. Añade emojis apropiados, alineación, y secciones bien organizadas: [pega tu README actual]' 
                label="Copiar prompt"
              />
            </Card>

            <Card className="p-4 bg-muted">
              <div className="font-semibold text-sm mb-2">🏆 Para añadir sección de proyectos:</div>
              <div className="font-mono text-xs bg-background p-3 rounded mb-2">
                "Crea una sección 'Proyectos Destacados' para mi README. Tengo estos proyectos: [describe 2-3 proyectos]. 
                Hazlo visual con descripción breve, tecnologías usadas, y badges."
              </div>
              <CopyButton 
                text='Crea una sección "Proyectos Destacados" para mi README. Tengo estos proyectos: [describe 2-3 proyectos]. Hazlo visual con descripción breve, tecnologías usadas, y badges.' 
                label="Copiar prompt"
              />
            </Card>
          </div>
        </StepCard>

        <StepCard number={4} title="Añadir badges de tecnologías">
          <p className="mb-3 text-sm">
            Los badges hacen tu perfil más visual. Usa este generador o pídele a Copilot:
          </p>
          <Card className="p-4 bg-muted mb-3">
            <div className="font-mono text-xs bg-background p-3 rounded mb-2">
              "Genera badges de shields.io para estas tecnologías: HTML, CSS, JavaScript, React, Git, VS Code. 
              Usa el estilo 'for-the-badge' con los colores oficiales de cada tecnología."
            </div>
            <CopyButton 
              text="Genera badges de shields.io para estas tecnologías: HTML, CSS, JavaScript, React, Git, VS Code. Usa el estilo 'for-the-badge' con los colores oficiales de cada tecnología." 
              label="Copiar prompt"
            />
          </Card>
          <p className="text-xs text-muted-foreground">
            💡 Tip: También puedes usar <code className="bg-background px-2 py-1 rounded">shields.io</code> directamente para personalizar tus badges
          </p>
        </StepCard>

        <StepCard number={5} title="Añadir GitHub Stats (opcional pero wow)">
          <p className="mb-3 text-sm">
            Muestra tus estadísticas de GitHub automáticamente:
          </p>
          <div className="bg-muted p-4 rounded font-mono text-xs mb-3">
            {`![GitHub stats](https://github-readme-stats.vercel.app/api?username=TU-USERNAME&show_icons=true&theme=radical)`}
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Reemplaza TU-USERNAME con tu usuario de GitHub. Puedes cambiar el theme por: radical, dracula, tokyonight, nord, dark, etc.
          </p>
        </StepCard>

        <StepCard number={6} title="Añadir call-to-action claro">
          <p className="mb-3 text-sm">
            Termina con una invitación clara a conectar contigo:
          </p>
          <Card className="p-4 bg-muted">
            <div className="font-mono text-xs bg-background p-3 rounded mb-2">
              "Crea una sección de contacto con call-to-action para mi README. Incluye: 
              Email ([tu-email]), LinkedIn ([tu-perfil]), y Portfolio ([tu-sitio]). 
              Hazlo con badges visibles y mensaje que invite a contactarme."
            </div>
            <CopyButton 
              text="Crea una sección de contacto con call-to-action para mi README. Incluye: Email ([tu-email]), LinkedIn ([tu-perfil]), y Portfolio ([tu-sitio]). Hazlo con badges visibles y mensaje que invite a contactarme." 
              label="Copiar prompt"
            />
          </Card>
        </StepCard>

        <StepCard number={7} title="Publicar y verificar">
          <ol className="space-y-2 text-sm list-decimal ml-4">
            <li>En tu repositorio README especial, click en el archivo README.md</li>
            <li>Click en el ícono de lápiz (editar)</li>
            <li>Pega tu README personalizado</li>
            <li>Scroll abajo → "Commit changes"</li>
            <li>Ve a tu perfil de GitHub y verifica que se ve genial</li>
            <li>Si algo no se ve bien, edita de nuevo hasta que quede perfecto</li>
          </ol>
        </StepCard>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <h3 className="font-semibold text-lg mb-3">✨ Checklist final: Tu README debe tener</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2">
            <span className="text-primary">☐</span>
            <span>Título con tu nombre y una descripción de quién eres</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">☐</span>
            <span>Bio breve (2-4 oraciones) que muestre tu personalidad</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">☐</span>
            <span>Sección de tecnologías/skills con badges visuales</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">☐</span>
            <span>Proyectos destacados (al menos 2-3) con links</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">☐</span>
            <span>Información de contacto clara (email, LinkedIn, portfolio)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">☐</span>
            <span>Call-to-action al final invitando a conectar</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">☐</span>
            <span>Emojis apropiados para hacerlo más visual (sin exagerar)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">☐</span>
            <span>Sin errores ortográficos (pídele a Copilot que revise)</span>
          </li>
        </ul>
      </Card>

      <Card className="p-6 border-primary/20 bg-primary/5">
        <h3 className="font-semibold mb-2">🎯 Resultado esperado</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Al terminar, cualquier reclutador que visite tu GitHub verá inmediatamente quién eres, 
          qué sabes hacer, y cómo contactarte. Tu perfil se verá profesional y te diferenciará 
          de perfiles vacíos o poco cuidados. ¡Es tu tarjeta de presentación digital!
        </p>
      </Card>
    </div>
  )
}
