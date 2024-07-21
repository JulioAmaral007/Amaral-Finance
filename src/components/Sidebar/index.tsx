'use client'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

import { Cog, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { NavItem } from './Navigation/NavItem'
import { Profile } from './Profile'

export function Sidebar() {
  return (
    <Collapsible className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 overflow-hidden border-b border-zinc-200 bg-white p-4 scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-300 data-[state=open]:bottom-0 lg:bottom-0 lg:right-auto lg:h-auto lg:w-80 lg:overflow-auto lg:border-b-0 lg:border-r lg:px-5 lg:py-8">
      <div className="flex items-center justify-between">
        <Logo />
        <CollapsibleTrigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6 text-zinc-500" />
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent
        asChild
        forceMount
        className="data-[state=closed]:hidden data-[state=closed]:animate-slideUpAndFade data-[state=open]:animate-slideDownAndFade lg:data-[state=closed]:flex"
      >
        <div className="flex flex-1 flex-col gap-6">
          <Navigation />

          <div className="mt-auto flex flex-col gap-6">
            <nav className="flex flex-col gap-1">
              <NavItem icon={Cog} title="Configurações" />
            </nav>

            <Separator />

            <Profile />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
