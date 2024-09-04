import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, Star } from 'lucide-react'

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
          <CardTitle className='text-sm font-medium'>Total Projects</CardTitle>
          <DollarSign className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>71+</div>
          <p className='text-xs text-muted-foreground'>+4 from last month</p>
        </CardContent>
      </Card>
      <Card
        className='text-card-foreground border-border/60 bg-[#171719d9]/30 backdrop-blur'
        x-chunk='dashboard-01-chunk-0'
      >
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Satisfaction clients{' '}
          </CardTitle>
          <DollarSign className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>100%</div>
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
          <CardTitle className='text-sm font-medium'>
            Rating from Fiverr
          </CardTitle>
          <Star className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl flex gap-1 font-bold'>
            <Star className={'w-5'} />
            <Star className={'w-5'} />
            <Star className={'w-5'} />
            <Star className={'w-5'} />
            <Star className={'w-5'} />
          </div>
          <p className='text-xs text-muted-foreground'>
            20+ successful projects
          </p>
        </CardContent>
      </Card>
      <Card
        className='text-card-foreground border-border/60 bg-[#171719d9]/30 backdrop-blur'
        x-chunk='dashboard-01-chunk-0'
      >
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            {' '}
            Rating from Upwork
          </CardTitle>
          <Star className='h-4 w-4 text-muted-foreground' />
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
