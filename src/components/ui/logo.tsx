import Link from 'next/link'
import React from 'react'
import { cn } from '@/components/ui/utils'

interface Props {
  text: string
  size: 'small' | 'medium' | 'large'
  className?: string
}

export const Logo: React.FC<Props> = ({ text, size, className }) => {
  const logoSizes = {
    small: 'text-lg lg:text-xl',
    medium: 'text-xl lg:text-2xl',
    large: 'text-2xl lg:text-4xl',
  }

  return (
    <Link href={'/'}>
      <span
        className={cn(
          logoSizes[size],
          'pl-1 font-bold inline-block text-foreground',
        )}
      >
        {text}
      </span>
    </Link>
  )
}
