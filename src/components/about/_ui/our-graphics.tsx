import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react'
import { cn } from '@/components/ui/utils'

interface IProps {
  className?: string
}

export const OurGraphics: React.FC<IProps> = ({ className }) => {
  return (
    <div className={cn(className, '')}>
      <h3 className='text-2xl text-center font-semibold mb-5 sm:mb-8 sm:text-4xl '>
        Some of our graphics
      </h3>
      <div className='grid grid-cols-2 gap-2 w-full sm:gap-7'>
        <Card
          className='text-card-foreground border-border/60 bg-[#171719d9]/30 backdrop-blur'
          x-chunk='dashboard-01-chunk-0'
        >
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent className={'text-center'}>
            <div className='text-2xl font-bold'>$45,231</div>
            <p className='text-xs text-muted-foreground'>
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card
          className='text-card-foreground border-border/60 bg-[#171719d9]/30 backdrop-blur'
          x-chunk='dashboard-01-chunk-1'
        >
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Community</CardTitle>
            <Users className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent className={'text-center'}>
            <div className='text-2xl font-bold'>+2350</div>
            <p className='text-xs text-muted-foreground'>
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card
          className='text-card-foreground border-border/60 bg-[#171719d9]/30 backdrop-blur'
          x-chunk='dashboard-01-chunk-2'
        >
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Sales</CardTitle>
            <CreditCard className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent className={'text-center'}>
            <div className='text-2xl font-bold'>+12,234</div>
            <p className='text-xs text-muted-foreground'>
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card
          className='text-card-foreground border-border/60 bg-[#171719d9]/30 backdrop-blur'
          x-chunk='dashboard-01-chunk-3'
        >
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Active Now</CardTitle>
            <Activity className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent className={'text-center'}>
            <div className='text-2xl font-bold'>+573</div>
            <p className='text-xs text-muted-foreground'>
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
