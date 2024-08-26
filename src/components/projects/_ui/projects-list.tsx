'use client'

import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Project } from '@/components/projects/_ui/project'
import { TabsContent } from '@/components/ui/tabs'

interface IProps {
  className?: string
}

export const ProjectsList: React.FC<IProps> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <TabsContent value={'All courses'}>
        <Card className='text-foreground drop-shadow-xl shadow-white/10 border-border/60 bg-[#171719d9]/30 backdrop-blur'>
          <CardHeader className={'text-center p-4 sm:p-6'}>
            <CardTitle className='text-2xl text-foreground font-medium sm:pt-2 sm:text-3xl'>
              All our projects
            </CardTitle>
            <CardDescription>All projects on our platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7'>
              <Project />
              <Project />
              <Project />
              <Project />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  )
}
