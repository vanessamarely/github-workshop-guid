import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CopyButton } from './CopyButton'
import { Prompt } from '@/lib/types'

interface PromptCardProps {
  prompt: Prompt
}

export function PromptCard({ prompt }: PromptCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{prompt.title}</h3>
          <p className="text-sm text-muted-foreground">{prompt.description}</p>
        </div>
        <Badge variant="secondary">{prompt.category}</Badge>
      </div>
      
      <div className="bg-muted p-4 rounded-md mb-4 font-mono text-sm">
        {prompt.prompt}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {prompt.tags?.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <CopyButton text={prompt.prompt} />
      </div>
    </Card>
  )
}
