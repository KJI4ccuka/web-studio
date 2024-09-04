import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

interface IProps {
  className?: string
}
export const ProjectSkeleton: React.FC<IProps> = ({ className }) => {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='h-[280px] w-full rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  )
}
