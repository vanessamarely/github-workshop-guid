import { Card } from '@/components/ui/card'
import { ReactNode } from 'react'

interface StepCardProps {
  number: number
  title: string
  children: ReactNode
}

export function StepCard({ number, title, children }: StepCardProps) {
  return (
    <Card className="p-6">
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-3">{title}</h3>
          <div className="text-foreground leading-relaxed">{children}</div>
        </div>
      </div>
    </Card>
  )
}
