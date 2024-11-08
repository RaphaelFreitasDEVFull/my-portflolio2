import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
  label: string
  href: string
}

const NavItem = ({ label, href }: NavItemProps) => {
  const pathName = usePathname()

  const isActive = pathName === href

  return (
    <Link
      href={href}
      className={cn(
        'text-gray-400 flex items-center gap-2 font-medium font-mono',
        isActive && 'text-gray-50'
      )}
    >
      <span className="text-emerald-400">#</span>
      {label}
    </Link>
  )
}

export default NavItem
