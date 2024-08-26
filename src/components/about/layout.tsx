import React from 'react'
import { BgcGradients } from '@/components/bgc-gradients'
import { cn } from '@/components/ui/utils'
import { Container } from '@/components'

interface IProps {
  projectsChart: React.ReactNode
  ourGraphics: React.ReactNode
  faqs: React.ReactNode
  className?: string
}

export const Layout: React.FC<IProps> = ({
  projectsChart,
  ourGraphics,
  faqs,
  className,
}) => {
  return (
    <div className={cn(className, 'relative isolate')}>
      <BgcGradients position={'top-left'} />

      <Container>
        <div className={'mb-12'}>{projectsChart}</div>
        <div className={'mb-8'}>{ourGraphics}</div>
        <div>{faqs}</div>
      </Container>

      <BgcGradients position={'bottom'} />
    </div>
  )
}
