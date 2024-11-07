import SectionTitle from "@/app/components/section-title/page";
import ExperienceItem from "./experience-item";
import { WorkExperience as IWorkExperience } from "@/app/types/page-info";

type WorkExperienceProps = {
  works: IWorkExperience[];
};

const WorkExperience = ({ works }: WorkExperienceProps) => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle subtitle="experiencia" title="Experiencia Profissional" />
        <p className="text-gray-400 mt-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          qui facere modi dolores provident, assumenda tempore repellendus
          aspernatur sed nesciunt.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {works.map((work) => (
          <ExperienceItem work={work} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
