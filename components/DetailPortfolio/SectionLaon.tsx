'use client'
import clsx from 'clsx'
import { MotionDiv, MotionImg } from '../Motion'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { Title } from './Title'

export function SectionLaon() {
   const [step, setStep] = useState()

   const ref = useRef<HTMLDivElement>(null)

   const { scrollYProgress } = useScroll({
      axis: 'y',
      target: ref,
   })

   useMotionValueEvent(scrollYProgress, 'change', (v) => {
      console.log(v)
   })

   return (
      <section
         ref={ref}
         className={clsx(
            'mx-auto flex max-w-[1200px] flex-col items-center',
            'h-[300vh]',
            'px-10',
            'gap-10',
         )}
      >
         <Title />
         <div className={'flex'}>
            <Link href="https://laonswingcraft.com/en" target="_blank">
               <MotionDiv
                  className="relative flex w-[100%] flex-1 flex-col gap-1 overflow-hidden"
                  initial="init"
                  whileInView="view"
                  viewport={{
                     once: true,
                     margin: '-200px',
                  }}
               >
                  <MotionImg
                     src="/images/laon_swingcraft.png"
                     alt="laon"
                     className="flex w-[100%] duration-[0.2s] hover:scale-102"
                     width={500}
                     height={500}
                     transition={{
                        delay: 1,
                     }}
                     variants={{
                        init: {
                           opacity: 0,
                           filter: 'blur(20px)',
                        },
                        view: {
                           opacity: 1,
                           filter: 'blur(0)',
                        },
                     }}
                  />
                  <MotionDiv
                     className="absolute right-2 bottom-2 flex flex-col p-4 backdrop-grayscale-100"
                     transition={{
                        duration: 0.4,
                     }}
                     variants={{
                        init: {
                           y: '100%',
                        },
                        view: {
                           y: '0',
                        },
                     }}
                  >
                     <span className="text-md text-white">JULY. 2025 - DECEMBER. 2025</span>
                     <span className="text-6xl font-bold text-white">LAON SWINGCRAFT</span>
                     <span className="text-md text-white">
                        라온피플의 AI 골프 솔루션 SwingCraft 웹사이트 고도화 및 리브랜딩 개발 리드
                     </span>
                     <span className="text-md text-white">풀스택 개발</span>
                  </MotionDiv>
               </MotionDiv>
            </Link>
         </div>
      </section>
   )
}
