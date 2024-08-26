import React from 'react'
import { Layout } from '@/widgets/app-header/_ui/layout'
import { Logo } from '@/components/ui/logo'
import { NavBar } from '@/widgets/app-header/_ui/nav-bar'
import { SidebarMenu } from '@/widgets/app-header/_ui/sidebar-menu'
import { SignInButton } from '@/components/sign-in-button'

interface IProps {
  className?: string
}

const NAV_ITEMS = [
  { href: '/', label: 'Home', exact: false },
  { href: '/projects', label: 'Projects', exact: true },
  { href: '/about', label: 'About us', exact: false },
  // { href: '/philosophy', label: 'Philosophy', exact: false  },
  { href: '/contact', label: 'Contact us', exact: false },
]

export const AppHeader: React.FC<IProps> = ({ className }) => {
  return (
    <Layout
      logo={<Logo size={'large'} text={'Web Studio'} />}
      nav={<NavBar navItems={NAV_ITEMS} />}
      button={<SignInButton />}
      sidebar={
        <SidebarMenu
          navItems={NAV_ITEMS}
          logo={<Logo size={'medium'} text={'Web Studio'} />}
        />
      }
    />
  )
}
