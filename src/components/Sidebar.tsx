'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/writing', label: 'Writing' },
  { href: '/investments', label: 'Investments' },
  { href: '/boutique', label: 'Boutique' },
  { href: '/podcasts', label: 'Podcasts' }
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 p-6 border-r border-gray-800 flex flex-col justify-between min-h-screen">
      <nav className="space-y-4 text-sm font-medium text-gray-300">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'block hover:text-white transition-colors',
              pathname === href && 'text-white font-semibold'
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}