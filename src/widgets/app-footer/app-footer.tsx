import React from 'react'
import { Layout } from '@/widgets/app-footer/_ui/layout'

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

export const AppFooter: React.FC<IProps> = ({ className }) => {
  return <Layout navItems={NAV_ITEMS} />
}
