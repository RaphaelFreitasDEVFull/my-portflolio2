'use client'

import { Project, ProjectSection } from '@/app/types/projects'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/app/lib/animation'

type ProjectSectionsProps = {
    sections: ProjectSection[]
}

const ProjectSections = ({ sections }: ProjectSectionsProps) => {
    return (
        <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-10">
            {sections.map((section) => (
                <motion.div
                    {...fadeUpAnimation}
                    transition={{ duration: 0.5 }}
                    key={section.title}
                    className="flex flex-col gap-6 md:gap-12"
                >
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
                        {section.title}
                    </h2>
                    <Image
                        src={section.image.url}
                        width={1080}
                        height={672}
                        className="w-fulll aspect-auto object-cover rounded-lg"
                        alt="printscress"
                        unoptimized
                    />
                </motion.div>
            ))}
        </section>
    )
}

export default ProjectSections
