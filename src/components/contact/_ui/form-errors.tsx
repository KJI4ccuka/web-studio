import React from 'react'
import { cn } from '@/components/ui/utils'

interface IProps {
  message: string | undefined
  className?: string
}

export const FormErrors: React.FC<IProps> = ({ message, className }) => {
  if (!message) {
    return null
  }

  return <p className={cn(className, 'text-sm text-red-500 pt-3')}>{message}</p>
}
