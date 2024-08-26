import React from 'react'
import { cn } from '@/components/ui/utils'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MenuIcon } from '@/components/icons/icons'

interface IProps {
  logo: React.ReactNode
  nav: React.ReactNode
  button: React.ReactNode
  sidebar: React.ReactNode
  className?: string
}

export const Layout: React.FC<IProps> = ({
  logo,
  nav,
  button,
  sidebar,
  className,
}) => {
  return (
    <header
      className={cn(
        'px-1 pt-3.5 border-b pb-1.5 xs:pb-3 xs:pt-5 xs:px-3 lg:px-6 fixed top-0 left-0 right-0 z-50 border-border/60 bg-background/95 backdrop-blur',
        className,
      )}
    >
      <div className='flex h-14 items-center justify-between lg:px-4'>
        <div className='mr-0 xs:mr-5 lg:mr-14'>{logo}</div>
        <div className='items-center flex'>
          <div className='hidden mr-5 lg:block '>{nav}</div>
          <div>{button}</div>
          <div className='mr-[-5px] xs:mr-0'>
            <Sheet>
              <SheetContent side='right'>{sidebar}</SheetContent>
              <SheetTrigger asChild>
                <Button variant='menu' className='px-2.5'>
                  <MenuIcon />
                </Button>
              </SheetTrigger>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
