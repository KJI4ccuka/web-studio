'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/components/ui/utils'
import { INavItem } from '@/types'

interface IProps {
  navItems: INavItem[]
  className?: string
}

export const NavBar: React.FC<IProps> = ({ navItems, className }) => {
  const currentPage = usePathname()

  return (
    <nav className={cn(className, 'flex items-start gap-6 text-sm flex-col')}>
      <div className='flex items-center text-xl'>
        <ul className='flex gap-7 text-[16px]'>
          {navItems.map(({ href, label, _blank = false, exact }) => (
            <li key={label}>
              <Link
                href={href}
                className={cn(
                  currentPage === href ||
                    (exact && currentPage.startsWith(href))
                    ? 'text-foreground font-normal'
                    : 'text-foreground/60 font-light',
                  'transition-colors hover:text-foreground/90',
                )}
                target={_blank ? '_blank' : '_self'}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex gap-2.5 ml-16 text-[16px] items-center'>
          <span className='text-foreground opacity-70 pt-1'>En </span> |{' '}
          <p className='pt-1 opacity-20'>Cz</p>
        </div>
      </div>
    </nav>
  )
}
