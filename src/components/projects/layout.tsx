import React from 'react'
import { BgcGradients, Container } from '@/components'
import { cn } from '@/components/ui/utils'
import { Tabs } from '@/components/ui/tabs'

interface IProps {
  projectsSidebar: React.ReactNode
  projectsList: React.ReactNode
  className?: string
}

export const Layout: React.FC<IProps> = ({
  projectsSidebar,
  projectsList,
  className,
}) => {
  return (
    <>
      <div className={cn(className, 'relative isolate min-h-screen')}>
        <BgcGradients position={'top-left'} />

        <Container>
          <section className='max-w-7xl mx-auto'>
            <Tabs defaultValue={'All courses'}>
              {projectsSidebar}
              {projectsList}
            </Tabs>
          </section>
        </Container>

        <BgcGradients position={'bottom'} />
      </div>
    </>
  )
}
