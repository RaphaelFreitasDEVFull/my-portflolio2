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
    introTechnologies(first:100) {
      name
    }
    profilePicture {
      url
    }
    social {
      iconSvg
      link
    }
    knowTechs(first:100) {
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
        technologies(first: 100) {
          name
        }
    }
        }
}
  `

  return fetchHighGraph(query, 60)
}

export default async function Home() {
  const { page: pageData } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnowTechs techs={pageData.knowTechs} />
      <HighLightedProjects projects={pageData.highlightProjects} />
      {/* <WorkExperience works={pageData.workExperience} /> */}
    </>
  )
}
