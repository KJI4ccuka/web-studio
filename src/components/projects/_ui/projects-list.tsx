'use client'

import React, { useEffect, useState } from 'react'
import { Project } from '@/components/projects/_ui/project'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
import { ProjectSkeleton } from '@/components/projects/_ui/skeleton'

interface IProject {
  _id: string
  title: string
  description: string
  technologies: string[]
  thumbnail: string
}

interface IProps {
  className?: string
}

export const ProjectsList: React.FC<IProps> = ({ className }) => {
  const [projects, setProjects] = useState<IProject[]>([])
  const [projectsLoading, setProjectsLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetch('/api/projects')
      const projects: IProject[] = await data.json()

      setProjects(projects)
      setProjectsLoading(false)
    }

    fetchProjects()
  }, [projectsLoading])

  return (
    <TabsContent value={'All projects'}>
      <Card className='text-foreground drop-shadow-xl shadow-white/10 border-border/60 bg-[#171719d9]/30 backdrop-blur'>
        <CardHeader className={'text-center p-4 sm:p-6'}>
          <CardTitle className='text-2xl text-foreground font-medium sm:pt-2 sm:text-3xl'>
            All our projects
          </CardTitle>
          <CardDescription>All projects on our platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7'>
            {!projectsLoading
              ? projects.map((project, index) => (
                  <Project key={project._id} project={project} index={index} />
                ))
              : new Array(2)
                  .fill(null)
                  .map((project, index) => <ProjectSkeleton key={index} />)}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  )
}
