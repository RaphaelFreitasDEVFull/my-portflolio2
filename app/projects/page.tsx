import PageIntroduction from '../components/pages/projects/page-introduction'
import ProjectsList from '../components/pages/projects/projects-list'
import { ProjectPageData } from '../types/page-info'
import { fetchHighGraph } from '../utils/fetchHighGraph'

export const metadata = {
  title: 'Projetos',
}

const getPageData = async (): Promise<ProjectPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        pageThumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `

  return fetchHighGraph(
    query,
    60, // 1 day
  )
}

export default async function Projects() {
  const { projects } = await getPageData()

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  )
}
