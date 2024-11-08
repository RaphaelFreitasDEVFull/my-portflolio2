'use client'

import Image from 'next/image'
import Link from 'next/link'
import NavItem from './nav-item'
import { motion } from 'framer-motion'

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
                        src={'/images/logo.svg'}
                        height={49}
                        width={48}
                        alt="logo"
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
