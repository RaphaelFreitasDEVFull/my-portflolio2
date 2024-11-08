'use client'

import Button from '@/app/components/button/page'
import CMSIcon from '@/app/components/cms-icon'
import RichText from '@/app/components/rich-text'
import TechBadge from '@/app/components/tech-badge/page'
import { HomePageInfo } from '@/app/types/page-info'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { techBadgeAnimation } from '@/app/lib/animation'

type HeroSectionProps = {
  homeInfo: HomePageInfo
}

const HeroSection = ({ homeInfo }: HeroSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:max-w-[520px] pt-3 lg:pt-0 "
        >
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Raphael Silva Freitas</h2>
          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.knowTechs.map((tech, index) => (
              <TechBadge
                name={tech.name}
                key={tech.name}
                {...techBadgeAnimation}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
              />
            ))}
          </div>
          <div className="flex sm:items-center mt-6 lg:mt-10 sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em Contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
              {homeInfo.social.map((contact, index) => (
                <a
                  href={contact.link}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-100 transition-colors"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            width={420}
            height={404}
            src={homeInfo.profilePicture.url}
            alt="foto de perfil de Raphael Silva Freitas"
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
