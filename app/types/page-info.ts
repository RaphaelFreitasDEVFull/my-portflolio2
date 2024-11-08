import { KnowTechs, Project } from './projects'
import type { RichTextContent } from '@graphcms/rich-text-types'

export type Social = {
    link: string
    iconSvg: string
}

export type HomePageInfo = {
    introduction: {
        raw: RichTextContent
    }
    technologies: KnowTechs[]
    profilePicture: {
        url: string
    }
    social: Social[]
    knowTechs: KnowTechs[]
    highlightProjects: Project[]
    workExperience: WorkExperience[]
}

export type WorkExperience = {
    companyLogo: {
        url: string
    }
    role: string
    companyName: string
    companyUrl: string
    startDate: string
    endDate: string
    description: {
        raw: RichTextContent
    }
    technologies: KnowTechs[]
}

export type ProjectsPageData = {
    project: Project
}

export type ProjectPageData = {
    projects: Project[]
}

export type HomePageData = {
    page: HomePageInfo
}

export type ProjectPageDataStatic = {
    projects: {
        slug: string
    }[]
}
