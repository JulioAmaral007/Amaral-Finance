import { BarChart, Folder, Wallet } from 'lucide-react'

import { NavItem } from './NavItem'

export function Navigation() {
  return (
    <nav className="flex flex-col gap-0.5">
      <NavItem icon={BarChart} title="Dashboard" link="/" />
      <NavItem icon={Wallet} title="Carteiras" link="/wallets" />
      <NavItem icon={Folder} title="Categorias" link="/categories" />
    </nav>
  )
}
