import { useState, useEffect } from 'react'
import { useKV } from '@github/spark/hooks'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Toaster } from '@/components/ui/sonner'
import { 
  List, 
  Book, 
  Lightning, 
  Lightbulb, 
  Code, 
  Path, 
  FileText, 
  House, 
  Cloud, 
  Wrench,
  CheckCircle,
  GithubLogo
} from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

import { WhatIsGitHub } from '@/components/sections/WhatIsGitHub'
import { WhatIsCopilot } from '@/components/sections/WhatIsCopilot'
import { CopilotGuide } from '@/components/sections/CopilotGuide'
import { PromptRepository } from '@/components/sections/PromptRepository'
import { BeginnerRoadmap } from '@/components/sections/BeginnerRoadmap'
import { ReadmeGuide } from '@/components/sections/ReadmeGuide'
import { PortfolioGuide } from '@/components/sections/PortfolioGuide'
import { GitHubEcosystem } from '@/components/sections/GitHubEcosystem'
import { VSCodeSetup } from '@/components/sections/VSCodeSetup'

interface SectionDef {
  id: string
  title: string
  icon: typeof Book
  component: React.ComponentType
}

const sections: SectionDef[] = [
  { id: 'what-is-github', title: '¿Qué es GitHub?', icon: Book, component: WhatIsGitHub },
  { id: 'what-is-copilot', title: '¿Qué es Copilot?', icon: Lightning, component: WhatIsCopilot },
  { id: 'copilot-guide', title: 'Guía de Copilot', icon: Lightbulb, component: CopilotGuide },
  { id: 'prompts', title: 'Repositorio de Prompts', icon: Code, component: PromptRepository },
  { id: 'roadmap', title: 'Cómo Empezar', icon: Path, component: BeginnerRoadmap },
  { id: 'readme', title: 'Crear README Profesional', icon: FileText, component: ReadmeGuide },
  { id: 'portfolio', title: 'Crear Portafolio Web', icon: House, component: PortfolioGuide },
  { id: 'ecosystem', title: 'Ecosistema GitHub', icon: Cloud, component: GitHubEcosystem },
  { id: 'vscode', title: 'VS Code + Copilot', icon: Wrench, component: VSCodeSetup },
]

function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const [completedSections, setCompletedSections] = useKV<string[]>('completed-sections', [])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || sections[0].component

  const progressPercentage = ((completedSections || []).length / sections.length) * 100

  const toggleComplete = (sectionId: string) => {
    setCompletedSections((current: string[] | undefined) => {
      const currentArray = current || []
      if (currentArray.includes(sectionId)) {
        return currentArray.filter(id => id !== sectionId)
      }
      return [...currentArray, sectionId]
    })
  }

  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }, [activeSection])

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b">
        <div className="flex items-center gap-3 mb-2">
          <GithubLogo size={32} weight="fill" />
          <div>
            <h1 className="text-xl font-bold">GitHub Guide</h1>
            <p className="text-xs text-muted-foreground">Tu Manual de Bolsillo Tech</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-muted-foreground">Progreso</span>
            <span className="font-semibold">{(completedSections || []).length}/{sections.length}</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </div>

      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-1 px-3">
          {sections.map((section) => {
            const Icon = section.icon
            const isActive = activeSection === section.id
            const isCompleted = (completedSections || []).includes(section.id)

            return (
              <div key={section.id} className="group relative">
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 h-auto py-3 px-3",
                    isActive && "bg-muted border-l-4 border-primary"
                  )}
                  onClick={() => setActiveSection(section.id)}
                >
                  <Icon size={20} weight={isActive ? 'fill' : 'regular'} className="flex-shrink-0" />
                  <span className="flex-1 text-left text-sm">{section.title}</span>
                  {isCompleted && (
                    <CheckCircle size={18} weight="fill" className="text-primary flex-shrink-0" />
                  )}
                </Button>
                {isActive && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleComplete(section.id)
                    }}
                  >
                    {isCompleted ? (
                      <span className="text-xs">Desmarcar</span>
                    ) : (
                      <span className="text-xs">Completar</span>
                    )}
                  </Button>
                )}
              </div>
            )
          })}
        </nav>
      </ScrollArea>

      <div className="p-4 border-t">
        <p className="text-xs text-muted-foreground text-center">
          Hecho con 💙 para el taller de GitHub
        </p>
      </div>
    </div>
  )

  return (
    <div className="h-screen flex overflow-hidden bg-background">
      <aside className="hidden lg:flex w-80 border-r flex-col">
        <SidebarContent />
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="lg:hidden border-b p-4 flex items-center justify-between bg-background sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <GithubLogo size={24} weight="fill" />
            <h1 className="font-bold">GitHub Guide</h1>
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <List size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <SidebarContent />
            </SheetContent>
          </Sheet>
        </header>

        <ScrollArea className="flex-1">
          <div className="max-w-4xl mx-auto p-6 lg:p-12">
            <ActiveComponent />
          </div>
        </ScrollArea>
      </main>

      <Toaster />
    </div>
  )
}

export default App