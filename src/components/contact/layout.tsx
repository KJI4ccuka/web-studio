import React from 'react'
import { BgcGradients, Container } from '@/components'
import { cn } from '@/components/ui/utils'

interface IProps {
  form: React.ReactNode
  className?: string
}

export const Layout: React.FC<IProps> = ({ form, className }) => {
  return (
    <div className={cn(className, 'relative isolate')}>
      <BgcGradients position={'top-left'} />

      <Container>
        <div className='mx-auto max-w-3xl'>{form}</div>
      </Container>

      <BgcGradients position={'bottom'} />
    </div>
  )
}
