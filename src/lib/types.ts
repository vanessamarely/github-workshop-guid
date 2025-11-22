export interface Section {
  id: string
  title: string
  icon: string
  subsections?: Subsection[]
}

export interface Subsection {
  id: string
  title: string
  content: React.ReactNode
}

export interface Prompt {
  id: string
  category: string
  title: string
  description: string
  prompt: string
  tags?: string[]
}

export interface CopilotPlan {
  name: string
  price: string
  features: string[]
  bestFor: string
  cta?: string
}

export interface LearningStep {
  number: number
  title: string
  description: string
  resources?: string[]
  prompts?: string[]
}
