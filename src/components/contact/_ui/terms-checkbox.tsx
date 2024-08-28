import React from 'react'
import { cn } from '@/components/ui/utils'
import { Checkbox } from '@/components/ui/checkbox'

interface IProps {
  checked: boolean
  onCheckedChange: () => void
  className?: string
}

export const TermsCheckbox: React.FC<IProps> = ({
  checked,
  onCheckedChange,
  className,
}) => {
  return (
    <div className={cn(className, 'items-top flex space-x-2')}>
      <Checkbox
        className={'w-5 h-5 border-border'}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <div className='grid gap-1.5 text-left leading-none'>
        <label
          htmlFor='terms1'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          Accept terms and conditions
        </label>
        <p className='text-sm text-muted-foreground'>
          You agree to our <span className={'underline'}>Privacy Policy</span>
        </p>
      </div>
    </div>
  )
}
