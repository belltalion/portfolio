'use client'

import { clsx } from 'clsx'
import { ProjectCard } from './ProjectCard'

const PROJECTS = [
   {
      title: 'Vespera UI',
      date: '2025 - Present',
      link: 'https://github.com/devfive-agency/vespera-ui',
      image: '/images/devfive_1.webp',
   },
   {
      title: 'Devup UI',
      date: '2024 - 2025',
      link: 'https://github.com/devfive-agency/devup-ui',
   },
   {
      title: 'Portfolio Template',
      date: '2024',
   },
   {
      title: 'Internal Admin System',
      date: '2023 - 2024',
   },
]

export function ProjectList() {
   return (
      <section className={clsx('mx-auto w-full max-w-[1200px] py-20', 'px-8 md:px-10')}>
         <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
               <span className="shrink-0 font-mono text-xs tracking-[0.3em] text-zinc-400 uppercase">
                  Other Projects
               </span>
               <div className="h-px flex-1 bg-zinc-800" />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
               {PROJECTS.map((project, idx) => (
                  <ProjectCard
                     image="./images/devfive_1.webp"
                     key={project.title}
                     title={project.title}
                     date={project.date}
                     link={project.link}
                     index={idx}
                  />
               ))}
            </div>
         </div>
      </section>
   )
}
