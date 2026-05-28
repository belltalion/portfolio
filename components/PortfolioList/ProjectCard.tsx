'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { MotionDiv } from '../Motion'

interface ProjectCardProps {
   title: string
   link?: string
   date: string
   image?: string
   tech?: string[]
   role?: string
   className?: string
}

const VARIANTS = {
   init: { y: 20, opacity: 0, filter: 'blur(8px)' },
   view: { y: 0, opacity: 1, filter: 'blur(0px)' },
}

export function ProjectCard({ title, link, date, image, tech, role, className }: ProjectCardProps) {
   const Content = (
      <div
         className={clsx(
            'group relative flex flex-col gap-3 border border-zinc-800 bg-zinc-900/50 p-5 transition-all duration-300',
            link ? 'hover:border-zinc-700 hover:bg-zinc-900' : 'cursor-default',
         )}
      >
         <div className="flex flex-col gap-1.5">
            <div className="flex justify-between">
               <h3
                  className={clsx(
                     'text-base leading-snug font-bold text-white transition-colors duration-300 md:text-2xl lg:text-2xl',
                     link && 'group-hover:text-blue-400',
                  )}
               >
                  {title}
               </h3>
               <span className="shrink-0 font-mono text-[10px] tracking-widest text-zinc-400 md:text-xs lg:text-[13px]">
                  {date}
               </span>
            </div>

            {/* {subtitle && (
               <p className="text-xs leading-relaxed text-zinc-400 md:text-sm">{subtitle}</p>
            )} */}
         </div>

         <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-1">
            {role && (
               <span className="border border-zinc-700 px-2.5 py-0.5 font-mono text-[10px] text-zinc-200 md:text-xs">
                  {role}
               </span>
            )}
            {tech &&
               tech.map((t) => (
                  <span
                     key={t}
                     className="bg-zinc-800 px-2.5 py-0.5 font-mono text-[10px] text-zinc-200 md:text-xs"
                  >
                     {t}
                  </span>
               ))}
            {link && (
               <span className="ml-auto font-mono text-[10px] text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200 md:text-xs">
                  {link.replace(/^https?:\/\//, '').split('/')[0]}
               </span>
            )}
         </div>
      </div>
   )

   return (
      <MotionDiv
         variants={VARIANTS}
         transition={{ duration: 0.5, ease: 'easeOut' }}
         className={className}
      >
         {link ? (
            <Link href={link} target="_blank" rel="noopener noreferrer">
               {Content}
            </Link>
         ) : (
            Content
         )}
      </MotionDiv>
   )
}
