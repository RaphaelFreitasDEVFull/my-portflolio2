'use client'

import { TbArrowNarrowUp } from 'react-icons/tb'
import Button from '../button/page'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const BackToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const [show, setShow] = useState(false)

    const handleScroll = useCallback(() => {
        if (!show && window.scrollY > 500) {
            setShow(true)
        }
        if (show && window.scrollY <= 500) {
            setShow(false)
        }
    }, [show])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return (
        <AnimatePresence>
            {show ? (
                <motion.div
                    initial={{ opacity: 0, right: -10 }}
                    whileInView={{ opacity: 1, right: 16 }}
                    exit={{ opacity: 0, right: -10 }}
                    className="fixed right-4 bottom-4 z-20"
                >
                    <Button
                        className="shadow-lg shadow-emerald-400/20"
                        onClick={scrollToTop}
                    >
                        <TbArrowNarrowUp size={20} />
                    </Button>
                </motion.div>
            ) : null}
        </AnimatePresence>
    )
}

export default BackToTop
