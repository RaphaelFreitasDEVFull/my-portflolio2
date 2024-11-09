'use client'

import { HiArrowNarrowLeft } from 'react-icons/hi'
import Link from '../../link'
import SectionTitle from '../../section-title'
import { motion } from 'framer-motion'

const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2 ">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus non
          nesciunt quibusdam ullam fuga sapiente, debitis autem illum eveniet
          alias. Ea amet voluptate asperiores, repudiandae natus quam. Modi, eos
          officia.
        </p>
        <Link href={'/'}>
          <HiArrowNarrowLeft />
          Voltar para Home
        </Link>
      </motion.div>
    </section>
  )
}

export default PageIntroduction
