import Link from 'next/link'
import { ImageSlider } from '../Motion/ImageSlider'
import { MotionDiv } from '../Motion'

const CHILD_VARIANTS = {
   init: { y: 12, opacity: 0, filter: 'blur(8px)' },
   view: { y: 0, opacity: 1, filter: 'blur(0px)' },
   exit: { y: -8, opacity: 0, filter: 'blur(6px)', transition: { delay: 0 } },
}

export function ProjectCard({
   value,
}: {
   value: {
      href: string
      src: string[]
      date: string
      title: string
      desc: string
      stack: string[]
      children: string[][]
   }
}) {
   return (
      <>
         <MotionDiv variants={CHILD_VARIANTS} transition={{ duration: 0.5 }}>
            <Link
               href={value.href}
               target="_blank"
               className="block w-full overflow-hidden duration-300 md:h-[40%] md:hover:opacity-90"
            >
               <ImageSlider images={value.src} alt={value.href} />
            </Link>
         </MotionDiv>

         <MotionDiv
            variants={CHILD_VARIANTS}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="py-1 md:min-h-[100px] md:border-t md:border-zinc-500 md:py-2 xl:py-4"
         >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-10">
               <div className="flex-col md:flex-row">
                  <span className="block font-mono text-xs tracking-widest text-zinc-300 md:text-base">
                     {value.date}
                  </span>
                  <h2 className="text-xl leading-tight font-bold text-white md:text-3xl">
                     {value.title}
                  </h2>
               </div>
               <p className="text-sm leading-relaxed break-keep text-zinc-200 md:flex-1 md:text-lg">
                  {value.desc}
               </p>
               <div className="md flex flex-wrap gap-1.5 md:w-[200px] md:items-end">
                  {value.stack.map((s) => (
                     <span
                        key={s}
                        className="border border-zinc-700 px-2 py-0.5 font-mono text-xs text-zinc-200 md:text-base"
                     >
                        {s}
                     </span>
                  ))}
               </div>
            </div>
         </MotionDiv>

         <div className="grid grid-cols-1 gap-5 md:gap-2 lg:gap-4">
            {value.children.map((child, idx) => (
               <MotionDiv
                  key={`${value.title}-child-${idx}`}
                  variants={CHILD_VARIANTS}
                  transition={{ delay: 0.25 + idx * 0.1, duration: 0.4 }}
                  className="flex flex-col divide-y divide-zinc-700/80 border-l border-zinc-700 pl-4"
               >
                  {child.map((text) => (
                     <p
                        key={text}
                        className="py-2.5 text-xs leading-[1.75] text-zinc-200 first:pt-0 last:pb-0 md:py-1 md:text-base lg:py-2.5"
                     >
                        {text}
                     </p>
                  ))}
               </MotionDiv>
            ))}
         </div>
      </>
   )
}
