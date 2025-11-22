import { useState, useMemo } from 'react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { PromptCard } from '../PromptCard'
import { prompts } from '@/lib/data'

export function PromptRepository() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = useMemo(() => {
    const cats = Array.from(new Set(prompts.map(p => p.category)))
    return cats
  }, [])

  const filteredPrompts = useMemo(() => {
    return prompts.filter(prompt => {
      const matchesSearch = searchTerm === '' || 
        prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = !selectedCategory || prompt.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Repositorio de Prompts</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Más de 40 prompts listos para copiar y usar con GitHub Copilot. 
          Copia, pega en Copilot Chat y personaliza según tus necesidades.
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            placeholder="Buscar prompts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <Badge
            variant={selectedCategory === null ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(null)}
          >
            Todos ({prompts.length})
          </Badge>
          {categories.map(category => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category} ({prompts.filter(p => p.category === category).length})
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredPrompts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            No se encontraron prompts con esos criterios.
          </div>
        ) : (
          filteredPrompts.map(prompt => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))
        )}
      </div>

      <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
        <h3 className="font-semibold text-lg mb-3">💡 Cómo usar estos prompts</h3>
        <ol className="space-y-2 text-sm text-muted-foreground list-decimal ml-5">
          <li>Haz clic en "Copiar" en el prompt que necesites</li>
          <li>Abre VS Code y activa Copilot Chat (Ctrl/Cmd + I)</li>
          <li>Pega el prompt y reemplaza las partes entre [corchetes] con tu información específica</li>
          <li>Presiona Enter y Copilot te generará el código o respuesta</li>
          <li>Revisa siempre el resultado y ajusta según necesites</li>
        </ol>
      </div>
    </div>
  )
}
