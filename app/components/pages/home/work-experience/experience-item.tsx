'use client'

import RichText from '@/app/components/rich-text'
import TechBadge from '@/app/components/tech-badge/page'
import { WorkExperience } from '@/app/types/page-info'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animation'

type ExperienceItemProps = {
  work: WorkExperience
}

const ExperienceItem = ({ work }: ExperienceItemProps) => {
  const startDate = new Date(work.startDate)
  const endDate = new Date(work.endDate)

  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })
  const formattEndDate = endDate
    ? format(endDate, 'MMM yyyy', { locale: ptBR })
    : 'O momento'

  const end = endDate ? endDate : new Date()

  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)
  const monthReaming = months % 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthReaming > 0
            ? ` e ${monthReaming} mes${monthReaming > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`

  return (
    <motion.div
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={work.companyLogo.url}
            width={40}
            height={40}
            alt="logo empresa"
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-400"></div>
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={work.companyUrl}
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            @{work.companyName}
          </a>
          <h4 className="text-gray-400">{work.role}</h4>
          <span className="text-gray-500">
            {formattedStartDate} - {formattEndDate} - ({formattedDuration})
          </span>
          <div className="text-gray-400">
            <RichText content={work.description.raw} />
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competencias
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8 ">
          {work.technologies.map((tech, index) => (
            <TechBadge
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              name={tech.name}
              key={`${work.companyName}-tech-${tech.name}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ExperienceItem
