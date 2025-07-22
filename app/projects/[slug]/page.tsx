import ProjectSections from '@/app/components/pages/project/proejct-sections'
import ProjectDetails from '@/app/components/pages/project/project-details'
import { ProjectsPageData, ProjectPageDataStatic } from '@/app/types/page-info'
import { fetchHighGraph } from '@/app/utils/fetchHighGraph'
import { Metadata } from 'next'

// ✅ Função para buscar os dados do projeto
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
  return fetchHighGraph(query, 1000 * 60 * 60 * 24)
}

// ✅ Componente da página com tipagem inline segura
const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const { project } = await getPageDetails(params.slug)

  return (
    <section>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </section>
  )
}

// ✅ Geração dos slugs para rotas estáticas
export async function generateStaticParams() {
  const query = `
    query ProjectSlugQuery {
      projects(first: 100) {
        slug
      }
    }
  `
  const { projects } = await fetchHighGraph<ProjectPageDataStatic>(query)
  return projects.map((project) => ({ slug: project.slug }))
}

// ✅ Metadata com tipagem inline também
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { project } = await getPageDetails(params.slug)

  return {
    title: project.title,
    description: project.descripition.text,
    openGraph: {
      images: [{ url: project.thumnail.url, width: 1200, height: 630 }],
    },
  }
}

export default ProjectPage
