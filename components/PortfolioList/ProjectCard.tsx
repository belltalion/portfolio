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
   desc?: string[]
   tag?: string[]
}

const VARIANTS = {
   init: { y: 20, opacity: 0, filter: 'blur(8px)' },
   view: { y: 0, opacity: 1, filter: 'blur(0px)' },
}

export function ProjectCard({
   title,
   link,
   date,
   tech,
   desc,
   role,
   tag,
   className,
}: ProjectCardProps) {
   const Content = (
      <div
         className={clsx(
            'group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-950/80 p-5 backdrop-blur-sm transition-all duration-500 md:p-6',
            link
               ? 'hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl hover:shadow-blue-500/10'
               : 'cursor-default',
         )}
      >
         {/* Decorative gradient orb */}
         {link && (
            <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-purple-500/0 blur-3xl transition-all duration-700 group-hover:from-blue-500/20 group-hover:via-blue-500/10 group-hover:to-purple-500/20" />
         )}

         {/* Top accent line */}
         <div
            className={clsx(
               'pointer-events-none absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent transition-all duration-500',
               link && 'group-hover:via-blue-400/60',
            )}
         />

         <div className="relative flex flex-col gap-2">
            <div className="flex items-start justify-between gap-4">
               <h3
                  className={clsx(
                     'text-lg leading-snug font-bold text-white transition-colors duration-300 md:text-xl lg:text-2xl',
                     link && 'group-hover:text-blue-300',
                  )}
               >
                  {title}
               </h3>
               <span className="mt-1.5 shrink-0 font-mono text-[11px] tracking-widest text-zinc-300 md:text-[13px] lg:text-sm">
                  {date}
               </span>
            </div>

            {desc && desc.length > 0 && (
               <ul className="mt-1 flex flex-col gap-1.5">
                  {desc.map((value, idx) => (
                     <li
                        key={'desc' + idx}
                        className="relative flex gap-2.5 text-sm leading-relaxed text-zinc-200 md:text-[15px]"
                     >
                        <span
                           className={clsx(
                              'mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500 transition-colors duration-300 md:mt-[0.65em] md:h-2 md:w-2',
                              link && 'group-hover:bg-blue-400',
                           )}
                           aria-hidden
                        />
                        <span className="flex-1">{value}</span>
                     </li>
                  ))}
               </ul>
            )}
         </div>

         <div className="relative mt-auto flex flex-wrap items-center gap-1.5 pt-2">
            {role && (
               <span className="border border-blue-400/40 bg-blue-500/15 px-3 py-1 font-mono text-xs font-medium text-blue-200 md:text-sm">
                  {role}
               </span>
            )}
            {tech &&
               tech.map((t) => (
                  <span
                     key={t}
                     className="border border-zinc-600/60 bg-zinc-800 px-3 py-1 font-mono text-xs font-medium text-zinc-100 md:text-sm"
                  >
                     {t}
                  </span>
               ))}
            {tag &&
               tag.map((t, idx) => (
                  <span
                     key={'tag' + idx}
                     className="border border-purple-400/40 bg-purple-500/15 px-3 py-1 font-mono text-xs font-medium text-purple-200 md:text-sm"
                  >
                     {t}
                  </span>
               ))}
            {link && (
               <span className="ml-auto inline-flex items-center gap-1 font-mono text-xs text-zinc-300 transition-all duration-300 group-hover:text-blue-300 md:text-sm">
                  <span className="max-w-[140px] truncate md:max-w-none">
                     {link.replace(/^https?:\/\//, '').split('/')[0]}
                  </span>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="14"
                     height="14"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                     aria-hidden
                  >
                     <path d="M7 17L17 7" />
                     <path d="M7 7h10v10" />
                  </svg>
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
