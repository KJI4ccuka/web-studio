'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
import { cn } from '@/components/ui/utils'

interface IProps {
  className?: string
}

export const SignInButton: React.FC<IProps> = ({ className }) => {
  const handleSignIn = () => {
    return ''
  }

  return (
    <Button
      className={cn(
        className,
        'mr-5 py-[21px] pr-[18px] rounded-full text-lg text-foreground border-solid border border-border',
      )}
      variant='outline'
      onClick={handleSignIn}
    >
      <LogIn className='mr-1.5 h-[18px] w-[18px]' />{' '}
      <span className='text-[14px] font-medium sm:text-[16px] tracking-wide'>
        Login
      </span>
    </Button>
  )
}
