'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import NavItem from './nav-item'
import Image from 'next/image'

const NAV_ITEM = [
  { label: 'Home', href: '/' },
  { label: 'Projetos', href: '/projects' },
]

const Header = () => {
  return (
    <motion.header
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
    >
      <div className="container flex items-center justify-between">
        <Link href={'/'}>
          <Image
            src={'/images/logo.png'}
            height={200}
            width={130}
            alt="logo"
            className="-ml-4"
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEM.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
