'use client'

import { fadeUpAnimation } from '@/app/lib/animation'
import { ProjectSection } from '@/app/types/projects'
import { motion } from 'framer-motion'
import Image from 'next/image'

type ProjectSectionsProps = {
  sections: ProjectSection[]
}

const ProjectSections = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-10">
      {sections.map((section, index) => (
        <motion.div
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
          key={`${section.title}-${index}`}
          className="flex flex-col gap-6 md:gap-12"
        >
          <h2
            className="text-2xl md:text-3xl font-medium text-gray-300"
            key={`title-${index}`}
          >
            {section.title}
          </h2>
          <Image
            src={section.image.url}
            key={`image-${index}`}
            width={1080}
            height={672}
            className="w-full aspect-auto object-cover rounded-lg"
            alt="printscreen"
            unoptimized
          />
        </motion.div>
      ))}
    </section>
  )
}

export default ProjectSections
