'use client'

import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { EmailIcon, NameIcon, PhoneNumberIcon } from '@/components/icons/icons'
import { Button } from '@/components/ui/button'
import { contactFormSchema } from '@/types/zodSchemas'
import { Spinner } from '@/components/ui/spinner'
import { cn } from '@/components/ui/utils'
import { TermsCheckbox } from '@/components/contact/_ui/terms-checkbox'
import { FormErrors } from '@/components/contact/_ui/form-errors'

type IForm = {
  name: string
  email: string
  phoneNumber?: string
  message?: string
  agreeToTerms: boolean
}

interface IProps {
  className?: string
}

export const Form: React.FC<IProps> = ({ className }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<IForm>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await res.json()

    if (res.ok) {
      alert('Message sent successfully!')
    } else {
      alert(`Failed to send message: ${result.error}`)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(className, 'mx-auto max-w-xl sm:mt-10')}
    >
      <div className='grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 text-left font-light sm:gap-y-6'>
        <div className='sm:col-span-2'>
          <div className='relative'>
            <input
              type='text'
              id='name'
              {...register('name')}
              autoComplete='given-name'
              placeholder='Your First Name'
              className='block w-full border rounded-full py-5 text-lg px-7 bg-background/0 placeholder-foreground/70 focus:outline-none'
            />
            <span className='absolute inset-y-0 right-[25px] flex items-center opacity-80'>
              <NameIcon />
            </span>
          </div>

          <FormErrors message={errors.name?.message} />
        </div>
        <div className='sm:col-span-2'>
          <div className='mt-2 relative'>
            <input
              type='email'
              id='email'
              {...register('email')}
              placeholder='Your Email'
              autoComplete='email'
              className='block w-full border rounded-full py-5 text-lg px-7 bg-background/0 placeholder-foreground/70 focus:outline-none'
            />
            <span className='absolute inset-y-0 right-[25px] flex items-center opacity-80'>
              {<EmailIcon />}
            </span>
          </div>

          <FormErrors message={errors?.email?.message} />
        </div>
        <div className='sm:col-span-2'>
          <div className='relative mt-2.5'>
            <div className='absolute inset-y-0 left-0 flex items-center'>
              <label htmlFor='country' className='sr-only'>
                Country
              </label>
            </div>
            <input
              type='tel'
              id='phone-number'
              {...register('phoneNumber')}
              placeholder='Your Phone'
              autoComplete='tel'
              className='block w-full border rounded-full py-5 text-lg px-7 bg-background/0 placeholder-foreground/70 focus:outline-none'
            />
            <span className='absolute inset-y-0 right-[25px] flex items-center opacity-80'>
              {<PhoneNumberIcon />}
            </span>
          </div>

          <FormErrors message={errors.phoneNumber?.message} />
        </div>
        <div className='sm:col-span-2 relative'>
          <div className='mt-2.5'>
            <textarea
              placeholder='Message'
              id='message'
              rows={4}
              className='block w-full border rounded-[1.5rem] py-5 text-lg px-7 bg-background/0 placeholder-foreground/70 focus:outline-none'
              {...register('message')}
            />

            <FormErrors message={errors.message?.message} />
          </div>
        </div>
        <div className='sm:col-span-2'>
          <Controller
            name='agreeToTerms'
            control={control}
            defaultValue={true}
            render={({ field }) => (
              <TermsCheckbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />

          <FormErrors message={errors.agreeToTerms?.message} />
        </div>
      </div>
      <div className='mt-3 sm:mt-6'>
        <Button
          type='submit'
          className='rounded-full mt-2 w-full px-20 py-8 bg-background/0 font-medium tracking-wide text-2xl text-foreground border-solid border border-border sm:mt-5'
        >
          {isSubmitting ? (
            <Spinner className='h-2 w-2 animate-spin' aria-label='Loading' />
          ) : (
            'SEND'
          )}
        </Button>
      </div>
    </form>
  )
}
