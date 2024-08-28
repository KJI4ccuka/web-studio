import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/components/ui/utils'
import { TechnologiesGraphics } from '@/components/projects/_ui/technologies-graphics'

interface IProps {
  className?: string
}

export const ProjectsSidebar: React.FC<IProps> = ({ className }) => {
  const nav = ['All projects', 'React', 'JavaScript', 'Tilda', 'WordPress']
  return (
    <Card
      className={cn(
        className,
        'text-card-foreground mb-3 border-border/60 bg-[#171719d9]/30 backdrop-blur',
      )}
      x-chunk='dashboard-01-chunk-0'
    >
      <CardHeader className={'border-b'}>
        <TechnologiesGraphics />
      </CardHeader>
      <CardContent className={'py-4'}>
        <TabsList className='h-full space-x-2 bg-card/35 backdrop-blur border rounded-lg'>
          {nav.map((item, index) => (
            <TabsTrigger
              key={index}
              className={'text-[16px] leading-6'}
              value={item}
            >
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
      </CardContent>
    </Card>
  )
}
