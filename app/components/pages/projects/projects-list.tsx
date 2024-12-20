'use client'

import { fadeUpAnimation } from '@/app/lib/animation'
import { Project } from '@/app/types/projects'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ProjectCard from './porject-card'

type ProjectsListProps = {
  projects: Project[]
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
  console.log(projects)

  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project, i) => (
        <motion.div
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          key={project.title}
        >
          <Link href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        </motion.div>
      ))}
    </section>
  )
}

export default ProjectsList
