import ProjectSections from '@/app/components/pages/project/proejct-sections'
import ProjectDetails from '@/app/components/pages/project/project-details'
import { ProjectsPageData, ProjectPageDataStatic } from '@/app/types/page-info'
import { fetchHighGraph } from '@/app/utils/fetchHighGraph'
import { Metadata } from 'next'

type PageProps = {
  params: { slug: string }
  searchParams?: Record<string, string | string[]>
}

const getPageDetails = async (slug: string): Promise<ProjectsPageData> => {
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

  return fetchHighGraph(query, 1000 * 60 * 60 * 24) // 1 day
}

const Project = async ({ params }: PageProps) => {
  const { project } = await getPageDetails(params.slug)

  return (
    <section>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </section>
  )
}

export async function generateStaticParams() {
  const query = `
    query ProjectSlugQuery {
      projects(first: 100) {
        slug
      }
    }
  `

  const { projects } = await fetchHighGraph<ProjectPageDataStatic>(query)
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { project } = await getPageDetails(params.slug)

  return {
    title: project.title,
    description: project.descripition.text,
    openGraph: {
      images: [{ url: project.thumnail.url, width: 1200, height: 630 }],
    },
  }
}

export default Project
