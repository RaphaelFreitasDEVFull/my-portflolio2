import type { RichTextContent } from "@graphcms/rich-text-types";

export type KnowTechs = {
  iconSvg: string;
  name: string;
  startDate: string;
};

export type ProjectSection = {
  title: string;
  image: {
    url: string;
  };
};

export type Project = {
  slug: string;
  thumnail: {
    url: string;
  };
  title: string;
  shortDescription: string;
  technologies: KnowTechs[];
  pageThumbnail: {
    url: string;
  };
  sections: ProjectSection[];
  descripition: {
    raw: RichTextContent;
    text: string;
  };
  liveProjectUrl?: string;
  githubUrl?: string;
};
