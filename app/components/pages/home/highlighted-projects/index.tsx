import HorizontalDivider from '@/app/components/divider/horizontal'
import SectionTitle from '@/app/components/section-title'
import { Project } from '@/app/types/projects'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import ProjectCard from './project-card'

type HighLightedProjectsProps = {
  projects: Project[]
}

const HighLightedProjects = ({ projects }: HighLightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em Destaque" />
      <HorizontalDivider className="mb-16" />

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}

        <p className="flex items-center justify-center gap-1.5">
          <span className="text-gray-400">Se interessou</span>
          <Link href={'/projects'} className="flex gap-2 items-center">
            Ver Todos <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}

export default HighLightedProjects
