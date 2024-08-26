import React from 'react'
import { Layout } from '@/components/projects/layout'
import { ProjectsSidebar } from '@/components/projects/_ui/projects-sidebar'
import { ProjectsList } from '@/components/projects/_ui/projects-list'

export default function ProjectsPage({}) {
  return (
    <Layout
      projectsSidebar={<ProjectsSidebar />}
      projectsList={<ProjectsList />}
    />
  )
}
