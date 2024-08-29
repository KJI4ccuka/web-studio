import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface IProps {
  nav: string[]
  className?: string
}

export const Sorted: React.FC<IProps> = ({ nav, className }) => {
  return (
    <Select>
      <SelectTrigger className='w-[180px] bg-card border-border'>
        <SelectValue placeholder='Filter by:' />
      </SelectTrigger>
      <SelectContent className={'bg-card/55 text-card-foreground'}>
        <SelectGroup>
          <SelectLabel className={'border-b'}>Filter by views</SelectLabel>
          {nav.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
