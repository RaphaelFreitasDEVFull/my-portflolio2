'use client'

import TechBadge from '@/app/components/tech-badge'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animation'
import { Project } from '@/app/types/projects'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const animProps = fadeUpAnimation

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
    >
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="w-full lg:min-h-full  h-[200px] sm:h-[300px] lg:w-[420px]"
      >
        <Image
          src={project.thumnail.url}
          width={420}
          height={304}
          alt={`Thumbnail projeto ${project.title}`}
          className="object-cover h-full rounded-lg w-full "
        />
      </motion.div>

      <div className="flex-1 lg:py-[18px]">
        <motion.h3
          {...animProps}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 font-medium text-lg text-gray-50"
        >
          <Image
            width={20}
            height={20}
            alt=""
            src={'/images/icons/project-title-icon.svg'}
          />
          {project.title}
        </motion.h3>
        <motion.p
          {...animProps}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-gray-400 my-6"
        >
          {project.shortDescription}
        </motion.p>
        <div className="flex gap-x-2 gap-y-2 flex-wrap mb-8 lg:max-w-[350px]">
          {project.technologies?.map((tech, index) => (
            <TechBadge
              {...techBadgeAnimation}
              transition={{
                duration: 0.2,
                delay: 0.5 + index * 0.1,
              }}
              name={tech.name}
              key={`${project.title}-tech-${tech.name}`}
            />
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="flex items-center gap-2"
        >
          Ver Projeto <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard
