'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { MotionDiv, MotionImg } from '../Motion'

interface ProjectCardProps {
   title: string
   link?: string
   date: string
   image?: string
   index: number
}

const VARIANTS = {
   init: { y: 20, opacity: 0, filter: 'blur(8px)' },
   view: { y: 0, opacity: 1, filter: 'blur(0px)' },
}

export function ProjectCard({ title, link, date, image, index }: ProjectCardProps) {
   const Content = (
      <div
         className={clsx(
            'group relative flex flex-col gap-2 border-l border-zinc-700 py-4 pl-6 transition-colors duration-300',
            link ? 'hover:border-blue-500' : 'cursor-default',
         )}
      >
         {image && (
            <MotionDiv
               variants={VARIANTS}
               transition={{ duration: 0.5 }}
               className="mb-4 overflow-hidden rounded-md"
            >
               <MotionImg src={image} alt={title} className="h-auto w-full object-cover" />
            </MotionDiv>
         )}
         <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <h3
               className={clsx(
                  'text-lg font-bold text-white transition-colors duration-300 md:text-xl',
                  link && 'group-hover:text-blue-500',
               )}
            >
               {title}
            </h3>
            <span className="font-mono text-xs tracking-widest text-zinc-400 md:text-sm">
               {date}
            </span>
         </div>
         {link && (
            <span className="font-mono text-[10px] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300">
               {link.replace(/^https?:\/\//, '')}
            </span>
         )}
      </div>
   )

   return (
      <MotionDiv
         variants={VARIANTS}
         initial="init"
         whileInView="view"
         viewport={{ once: true, margin: '-10%' }}
         transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: 'easeOut',
         }}
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
