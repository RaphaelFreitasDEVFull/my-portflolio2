import HorizontalDivider from '@/app/components/divider/horizontal'
import SectionTitle from '@/app/components/section-title/page'
import ProjectCard from './project-card'
import Link from '@/app/components/link/page'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '@/app/types/projects'

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

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou</span>
          <Link href={'/projects'} className="inline-flex">
            Ver Todos <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}

export default HighLightedProjects
