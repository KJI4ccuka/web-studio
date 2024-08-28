import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

interface IProps {
  className?: string
}

export const TechnologiesGraphics: React.FC<IProps> = ({ className }) => {
  return (
    <div className={'grid grid-cols-4 gap-2.5 w-full sm:gap-7'}>
      <Card
        className='text-card-foreground border-border/60 bg-[#171719d9]/30 backdrop-blur'
        x-chunk='dashboard-01-chunk-0'
      >
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
          <DollarSign className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>$45,231</div>
          <p className='text-xs text-muted-foreground'>
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card
        className='text-card-foreground border-border/60 bg-[#171719d9]/30 backdrop-blur'
        x-chunk='dashboard-01-chunk-0'
      >
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
          <DollarSign className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>$45,231</div>
          <p className='text-xs text-muted-foreground'>
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card
        className='text-card-foreground border-border/60 bg-[#171719d9]/30 backdrop-blur'
        x-chunk='dashboard-01-chunk-0'
      >
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
          <DollarSign className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>$45,231</div>
          <p className='text-xs text-muted-foreground'>
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card
        className='text-card-foreground border-border/60 bg-[#171719d9]/30 backdrop-blur'
        x-chunk='dashboard-01-chunk-0'
      >
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
          <DollarSign className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>$45,231</div>
          <p className='text-xs text-muted-foreground'>
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
