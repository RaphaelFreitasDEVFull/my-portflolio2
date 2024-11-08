import ProjectSections from '@/app/components/pages/project/proejct-sections'
import ProjectDetails from '@/app/components/pages/project/project-details'
import {
  ProjectPageData,
  ProjectPageDataStatic,
  ProjectsPageData,
} from '@/app/types/page-info'
import { fetchHighGraph } from '@/app/utils/fetchHighGraph'
import { Metadata } from 'next'

type ProjectProps = {
  params: {
    slug: string
  }
}

const getPageDatails = async (slug: string): Promise<ProjectsPageData> => {
  const query = `
    query MyQuery {
  project(where: {slug: "${slug}"}) {
    githubUrl
    liveProjectUrl
    title
    shortDescription
    descripition {
      raw
      text
    }
    technologies {
      name
    }
    pageThumbnail {
      url
    }
    thumnail {
      url
    }
    sections {
      image {
        url
      }
      title
    }
  }
}
    `

  return fetchHighGraph(
    query,
    1000 * 60 * 60 * 24 // 1 day
  )
}

const Project = async ({ params: { slug } }: ProjectProps) => {
  const { project } = await getPageDatails(slug)

  return (
    <section>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </section>
  )
}

export async function generateStaticParams() {
  const query = `query ProjectSlugQuery {
    projects(first: 100){
      slug
    }
  }`

  const { projects } = await fetchHighGraph<ProjectPageDataStatic>(query)

  return projects
}

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const { project } = await getPageDatails(slug)

  return {
    title: project.title,
    description: project.descripition.text,
    openGraph: {
      images: [{ url: project.thumnail.url, width: 1200, height: 630 }],
    },
  }
}

export default Project
