import { useState } from 'react'
import { Copy, Check } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

interface CopyButtonProps {
  text: string
  label?: string
}

export function CopyButton({ text, label = 'Copiar' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      toast.success('Copiado al portapapeles')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error('Error al copiar. Intenta seleccionar manualmente.')
    }
  }

  return (
    <Button
      onClick={handleCopy}
      variant={copied ? 'secondary' : 'outline'}
      size="sm"
      className="gap-2"
    >
      {copied ? (
        <>
          <Check weight="bold" />
          ¡Copiado!
        </>
      ) : (
        <>
          <Copy />
          {label}
        </>
      )}
    </Button>
  )
}
