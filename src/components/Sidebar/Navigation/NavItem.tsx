import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ElementType } from 'react'

type NavItemProps = {
  title: string
  link: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon, link }: NavItemProps) {
  const path = usePathname()

  return (
    <Link
      href={`${link}`}
      className={`group flex items-center gap-3 rounded px-3 py-2 outline-none hover:bg-primary/5 focus-visible:ring-2 focus-visible:ring-primary-foreground ${path === `${link}` ? 'bg-primary/50 hover:bg-primary/50' : ''}`}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <span className="font-medium">{title}</span>
    </Link>
  )
}
