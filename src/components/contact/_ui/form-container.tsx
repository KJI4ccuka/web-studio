import React from 'react'
import { cn } from '@/components/ui/utils'
import { Form } from '@/components/contact/_ui/form'

interface IProps {
  className?: string
}

export const FormContainer: React.FC<IProps> = ({ className }) => {
  return (
    <div
      className={cn(
        className,
        'py-10 px-4 rounded-3xl border border-white/50 xs:p-16 xs:px-8 sm:p-20',
      )}
    >
      <div className='mx-auto max-w-2xl text-center flex flex-col items-center'>
        <h2 className='text-2xl font-bold tracking-tight text-foreground sm:text-5xl'>
          Get in Touch
        </h2>
        <p className='mt-3 mb-4 text-sm  text-muted-foreground font-light max-w-[360px] text-center sm:text-lg sm:mb-0'>
          Fill out the form and we will contact you to discuss your project
        </p>
      </div>

      <Form />
    </div>
  )
}
