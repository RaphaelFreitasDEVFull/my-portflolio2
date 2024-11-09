import HeroSection from './components/pages/home/hero-section'
import HighLightedProjects from './components/pages/home/highlighted-projects'
import KnowTechs from './components/pages/home/know-techs'
import WorkExperience from './components/pages/home/work-experience'
import { HomePageData } from './types/page-info'
import { fetchHighGraph } from './utils/fetchHighGraph'

const getPageData = async (): Promise<HomePageData> => {
  const query = `query PageInfoQuery {
  page(where: {slug: "home"}) {
    introduction {
      raw
    }
    introTechnologies {
      name
    }
    profilePicture {
      url
    }
    social {
      iconSvg
      link
    }
    knowTechs {
      iconSvg
      name
      startDate
    }
    highlightProjects {
      slug
      thumnail {
        url
      }
      title
      shortDescription
      technologies {
        name
      }
    }
    workExperience{
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        technologies {
          name
        }
    }
        }
}
  `

  return fetchHighGraph(query, 60 * 60 * 24)
}

export default async function Home() {
  const { page: pageData } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnowTechs techs={pageData.knowTechs} />
      <HighLightedProjects projects={pageData.highlightProjects} />
      <WorkExperience works={pageData.workExperience} />
    </>
  )
}
