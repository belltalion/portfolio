'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import { Title } from './Title'
import { TiltCard } from '../Motion/TiltCard'
import { MotionDiv } from '../Motion'
import { ImageSlider } from '../Motion/ImageSlider'

const CHILD_VARIANTS = {
   init: {
      x: '10%',
      opacity: 0,
      filter: 'blur(15px)',
   },
   view: {
      x: '0',
      opacity: 1,
      filter: 'blur(0px)',
   },
   exit: {
      x: '-10%',
      opacity: 0,
      filter: 'blur(10px)',
      transition: {
         delay: 0,
      },
   },
}

const DATA = [
   {
      href: 'https://laonswingcraft.com/ko',
      src: [
         './images/laon_swingcraft_1.png',
         './images/laon_swingcraft_2.png',
         './images/laon_swingcraft_3.png',
      ],
      date: 'JULY. 2025 - DECEMBER. 2025',
      title: 'LAON SWINGCRAFT',
      desc: '라온피플의 AI 골프 솔루션 SwingCraft 웹사이트 고도화 및 글로벌 리브랜딩',
      children: [
         '주식회사 라온피플의 AI 골프 솔루션\n라온 스윙크래프트의 글로벌 리브랜딩 페이지입니다.\n처음으로 전반적인 프론트와 백, DB 구축을 진행했습니다.',
         '- Framer motion의 viewport, scroll 등을 사용하여 인터렉션 UI/UX를 제작하였습니다.\n- Next-Intl 라이브러리를 사용하여 다국어 지원,\n- CMS와 연동을 통해 페이지 전반적인 다국어 컨텐츠의 수정 및 확장 가능하게 설계하였습니다.',
      ],
   },
   {
      href: 'https://devfive.kr/ko/',
      src: ['./images/devfive_1.png', './images/devfive_2.png', './images/devfive_3.png'],
      date: 'JULY. 2025 - DECEMBER. 2025',
      title: 'LAON SWINGCRAFT2',
      desc: '라온피플의 AI 골프 솔루션 SwingCraft 웹사이트 고도화 및 글로벌 리브랜딩',
      children: [
         '주식회사 라온피플의 AI 골프 솔루션\n라온 스윙크래프트의 글로벌 리브랜딩 페이지입니다.\n처음으로 전반적인 프론트와 백, DB 구축을 진행했습니다.',
         '- Framer motion의 viewport, scroll 등을 사용하여 인터렉션 UI/UX를 제작하였습니다.\n- Next-Intl 라이브러리를 사용하여 다국어 지원,\n- CMS와 연동을 통해 페이지 전반적인 다국어 컨텐츠의 수정 및 확장 가능하게 설계하였습니다.',
      ],
   },
]

export function SectionLaon() {
   const [step, setStep] = useState(-1)

   const ref = useRef<HTMLDivElement>(null)

   const { scrollYProgress } = useScroll({
      axis: 'y',
      target: ref,
      offset: ['start center', 'end center'],
   })

   useMotionValueEvent(scrollYProgress, 'change', (v) => {
      if (v <= 0) {
         if (step !== -1) setStep(-1)
         return
      }

      if (v >= 1) {
         if (step !== -1) setStep(-1)
         return
      }

      const currentStep = Math.floor(v * DATA.length)

      if (step !== currentStep) {
         setStep(currentStep)
      }
   })

   return (
      <section
         ref={ref}
         className={clsx(
            'mx-auto flex max-w-[1200px] flex-col items-center',
            'px-2 md:px-10',
            'gap-10',
         )}
         style={{
            height: 100 * DATA.length + 'vh',
         }}
      >
         <div className="sticky top-0 flex min-h-[100dvh] flex-col justify-center gap-0 md:gap-2">
            {step >= 0 && <Title />}
            <AnimatePresence mode="wait">
               {DATA.map(
                  (value, dataIdx) =>
                     dataIdx === step && (
                        <MotionDiv
                           key={value.title}
                           className="relative flex w-full flex-col gap-1"
                           initial="init"
                           animate="view"
                           exit="exit"
                        >
                           {/* 메인 이미지 */}
                           <Link
                              key={value.href}
                              href={value.href}
                              target="_blank"
                              className="w-full"
                           >
                              <ImageSlider images={value.src} alt={value.href} />
                           </Link>

                           {/* 우측 정보 영역 */}
                           <div className="right-0 bottom-0 hidden flex-col gap-1 p-0 md:absolute md:flex md:items-end md:gap-2 md:p-2">
                              <MotionDiv
                                 transition={{
                                    duration: 0.4,
                                    delay: 0.3,
                                 }}
                                 variants={CHILD_VARIANTS}
                              >
                                 <TiltCard className="flex flex-col gap-3 border bg-black/65 p-0 shadow-2xl backdrop-blur-lg md:border-white/10 md:p-6">
                                    <span className="text-xs font-medium tracking-wider text-zinc-400">
                                       {value.date}
                                    </span>
                                    <h2 className="text-3xl font-bold text-white drop-shadow-sm">
                                       {value.title}
                                    </h2>
                                    <p className="text-[15px] leading-relaxed text-zinc-200/90">
                                       {value.desc}
                                    </p>
                                 </TiltCard>
                              </MotionDiv>

                              {/* 서브 업무 리스트 */}
                              {value.children.map((child, idx) => (
                                 <MotionDiv
                                    key={`${value.title}-child-${idx}`}
                                    transition={{
                                       delay: 0.3 + (idx + 1) * 0.1,
                                       duration: 0.4,
                                    }}
                                    variants={CHILD_VARIANTS}
                                 >
                                    <TiltCard className="flex flex-col gap-3 border bg-black/65 p-0 shadow-2xl backdrop-blur-lg md:border-white/10 md:p-6">
                                       <span className="text-sm whitespace-pre-wrap text-white">
                                          {child}
                                       </span>
                                    </TiltCard>
                                 </MotionDiv>
                              ))}
                           </div>
                           <div className="flex flex-col gap-2 p-0 md:hidden">
                              <MotionDiv
                                 transition={{
                                    duration: 0.4,
                                    delay: 0.3,
                                 }}
                                 variants={CHILD_VARIANTS}
                              >
                                 <span className="text-xs font-medium tracking-wider text-zinc-400">
                                    {value.date}
                                 </span>
                                 <h2 className="text-xl font-bold text-white drop-shadow-sm">
                                    {value.title}
                                 </h2>
                                 <p className="text-[15px] leading-relaxed text-zinc-200/90">
                                    {value.desc}
                                 </p>
                              </MotionDiv>

                              {/* 서브 업무 리스트 */}
                              {value.children.map((child, idx) => (
                                 <MotionDiv
                                    key={`${value.title}-child-${idx}`}
                                    transition={{
                                       delay: 0.3 + (idx + 1) * 0.1,
                                       duration: 0.4,
                                    }}
                                    variants={CHILD_VARIANTS}
                                 >
                                    <span className="text-sm whitespace-pre-wrap text-white">
                                       {child}
                                    </span>
                                 </MotionDiv>
                              ))}
                           </div>
                        </MotionDiv>
                     ),
               )}
            </AnimatePresence>
         </div>
      </section>
   )
}
