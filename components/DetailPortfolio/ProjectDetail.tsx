import Link from 'next/link'
import { MotionDiv } from '../Motion'
import { ImageSlider } from '../Motion/ImageSlider'

const CHILD_VARIANTS = {
   init: { y: 12, opacity: 0, filter: 'blur(8px)' },
   view: { y: 0, opacity: 1, filter: 'blur(0px)' },
   exit: { y: -8, opacity: 0, filter: 'blur(6px)', transition: { delay: 0 } },
}

export function ProjectDetail({
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
         <MotionDiv
            variants={CHILD_VARIANTS}
            transition={{ duration: 0.5 }}
            className="flex w-full justify-center"
         >
            <Link
               href={value.href}
               target="_blank"
               className="relative block aspect-video w-full overflow-hidden duration-300 md:h-[35vh] md:w-auto lg:h-[40vh] xl:h-[50vh]"
            >
               <ImageSlider images={value.src} alt={value.href} />
            </Link>
         </MotionDiv>

         <MotionDiv
            variants={CHILD_VARIANTS}
            transition={{ duration: 0.4, delay: 0.15 }}
            // padding과 간격을 미세하게 조정하여 공간 확보
            className="py-1 md:min-h-[80px] md:border-t md:border-zinc-500 md:py-2 xl:py-4"
         >
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-8">
               <div className="flex-shrink-0 flex-col md:flex-row">
                  <span className="block font-mono text-[10px] tracking-widest text-zinc-300 md:text-sm">
                     {value.date}
                  </span>
                  <h2 className="text-lg leading-tight font-bold text-white md:text-2xl lg:text-3xl">
                     {value.title}
                  </h2>
               </div>
               <p className="text-xs leading-relaxed break-keep text-zinc-200 md:flex-1 md:text-sm lg:text-base">
                  {value.desc}
               </p>
               {/* 스택 부분도 화면이 작을 땐 컴팩트하게 */}
               <div className="flex flex-wrap gap-1 md:w-[150px] md:items-end lg:w-[240px]">
                  {value.stack.map((s) => (
                     <span
                        key={s}
                        className="border border-zinc-700 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200 md:text-sm"
                     >
                        {s}
                     </span>
                  ))}
               </div>
            </div>
         </MotionDiv>

         {/* 상세 설명 리스트 간격 조정 */}
         <div className="grid grid-cols-1 gap-2 md:gap-1 lg:gap-3">
            {value.children.map((child, idx) => (
               <MotionDiv
                  key={`${value.title}-child-${idx}`}
                  variants={CHILD_VARIANTS}
                  transition={{ delay: 0.25 + idx * 0.1, duration: 0.4 }}
                  className="flex flex-col divide-y divide-zinc-700/80 border-l border-zinc-700 pl-3"
               >
                  {child.map((text) => (
                     <p
                        key={text}
                        className="py-1.5 text-xs leading-snug text-zinc-200 first:pt-0 last:pb-0 md:py-0.5 md:text-xs lg:py-1.5 lg:text-base"
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
