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
      href: 'https://girokspace.com/',
      src: [
         './images/laon_swingcraft_1.webp',
         './images/laon_swingcraft_2.webp',
         './images/laon_swingcraft_3.webp',
      ],
      date: 'JANUARY. 2026 - MAY. 2026',
      title: '기록공간',
      desc: '주식회사 리브유의 AI 자서전 서비스 솔루션 앱 기록공간 풀스택 개발',
      stack: ['Next', 'Axum', 'Ts', 'Rust', 'PostgreSql', 'React-Native'],
      children: [
         [
            '아이디어 단계의 프로젝트를 기획 참여 와 설계하여 클라이언트가 만족할 수 있는\n프로젝트로 출시할 수 있도록 리드했습니다.',
            '지인과 AI가 사용자에게 궁금한 질문을 하면 STT를 통해 이야기를 수집하고 AI 캐릭터 별로\n교정 및 이야기 개선을 진행하여 일관된 이야기구조로 자서전을 제작할 수 있는 서비스입니다.',
         ],
         [
            '- PostgreSQL 기반 26개 테이블 스키마 설계, B2C 뿐 아닌 B2B 위한 선물 시스템 DB 설계, 동반 작가, 추천사, 프로젝트-주제 연결 등 N:N 관계 설계',
            '- Kakao·Naver·Google·Apple OAuth 및 JWT 인증 구현, 토스페이먼츠 결제 연동 및 환불 처리 구현, AWS S3 파일 업로드 처리',
            '- Firebase 통해 모바일 기기 푸시 알림 연동을 진행했습니다.',
            '- 사용자 중심 UI/UX/CX 설계를 진행했습니다.',
            '- 한 번에 많은 AI 프롬프트를 처리하기 위한 응답 대기 상태의 CX를 Suspense, pending 등으로 처리',
         ],
      ],
   },
   {
      href: 'https://laonswingcraft.com/ko',
      src: [
         './images/laon_swingcraft_1.webp',
         './images/laon_swingcraft_2.webp',
         './images/laon_swingcraft_3.webp',
      ],
      date: 'JULY. 2025 - DECEMBER. 2025',
      title: 'LAON SWINGCRAFT',
      desc: '주식회사 라온피플의 AI 골프 솔루션 SwingCraft 웹사이트\n고도화 및 글로벌 리브랜딩 풀스택 개발',
      stack: ['Next', 'Fast-api', 'Ts', 'Python', 'PostgreSql'],
      children: [
         ['처음으로 개발리드하여 전체 프로젝트 전반적인 프론트와 백, DB 구축을 진행했습니다.'],
         [
            '- Framer motion의 viewport, scroll 등을 사용하여 인터렉션 UI/UX를 제작하였습니다.',
            '- Next-Intl 라이브러리를 사용하여 다국어 지원과 CMS와 연동을 통해 페이지 전반적인\n 다국어 컨텐츠의 수정과 확장 가능하게 설계하였습니다.',
            '- React-hook-form으로 문의 페이지를 제작하였으며 문의 발생 시 smtp와 연동하여\n자동으로 이메일을 발송하도록 구축하였습니다.',
         ],
      ],
   },
   {
      href: 'https://devfive.kr/ko/',
      src: ['./images/devfive_1.webp', './images/devfive_2.webp', './images/devfive_3.webp'],
      date: 'JULY. 2025 - DECEMBER. 2025',
      title: 'DEVFIVE',
      stack: ['Next', 'Fast-api', 'Ts', 'Python', 'PostgreSql'],
      desc: '주식회사 데브파이브의 홈페이지 및 업무관리 페이지 풀스택 개발',
      children: [
         [
            '주식회사 데브파이브의 홈페이지의 글로벌 리뉴얼 및\n업무 및 컨텐츠 관리 페이지 기능 설계, 구축을 진행하였습니다.',
         ],
         [
            '- 홈페이지는 Framer motion 기반 인터렉티브 UI/UX를 제작하였습니다.',
            '- 홈페이지 제작 문의 시 자동으로 Slack, 카카오톡, SMS 전송 연동을 진행했습니다.',
            '- 견적서 제작 시 고객의 문의를 기반으로 AI 연계를 통해 자동으로 견적서 내용이\n 기입되도록 제작하였으며 사내 기획팀과 경영팀의 결재 연동 시스템 구축과\n 페이지 내에서 고객에게 견적서 이메일을 발송하도록 연동하였습니다.',
            '- 나라장터 G2B 공고를 업무관리 페이지에서 확인할 수 있도록 스케쥴러를 통해\n 자동 수집 및 DB 적재 경영 기획팀에게 카카오톡, SMS 자동 발송 파이프라인을\n 설계 후 구축하였습니다.',
         ],
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
            'px-4 md:px-10',
            'w-full gap-10',
         )}
         style={{
            height: 200 * DATA.length + 'svh',
         }}
      >
         <div className="sticky top-0 flex min-h-[100svh] w-full flex-col justify-center gap-1 break-keep md:gap-2">
            <AnimatePresence mode="wait">
               {step >= 0 && <Title key={step} />}
               {DATA.map(
                  (value, dataIdx) =>
                     dataIdx === step && (
                        <MotionDiv
                           key={value.title}
                           className="relative flex w-full flex-col gap-1 overflow-hidden"
                           initial="init"
                           animate="view"
                           exit="exit"
                        >
                           {/* 메인 이미지 */}
                           <Link
                              key={value.href}
                              href={value.href}
                              target="_blank"
                              className="w-full duration-200 md:hover:scale-102"
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
                                 <TiltCard className="flex flex-col items-end gap-3 border bg-black/65 p-0 shadow-2xl backdrop-blur-lg md:border-white/10 md:p-6">
                                    <span className="text-xs font-medium tracking-wider text-zinc-400">
                                       {value.date}
                                    </span>
                                    <h2 className="text-3xl font-bold text-white drop-shadow-sm">
                                       {value.title}
                                    </h2>
                                    <p className="text-[15px] leading-relaxed whitespace-pre-wrap text-zinc-200/90">
                                       {value.desc}
                                    </p>
                                    <div className="flex gap-1">
                                       {value.stack.map((s) => (
                                          <div className="bg-zinc-500 px-1" key={s}>
                                             {s}
                                          </div>
                                       ))}
                                    </div>
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
                                    <TiltCard className="flex max-w-[700px] flex-col gap-3 border bg-black/65 p-0 shadow-2xl backdrop-blur-lg md:border-white/10 md:p-6">
                                       {child.map((text) => (
                                          <div
                                             key={text}
                                             className="text-xs whitespace-pre-wrap text-white md:text-sm"
                                          >
                                             {text}
                                          </div>
                                       ))}
                                    </TiltCard>
                                 </MotionDiv>
                              ))}
                           </div>
                           <div className="flex flex-col gap-4 overflow-x-hidden p-0 md:hidden">
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
                                 <div className="flex gap-1">
                                    {value.stack.map((s) => (
                                       <div className="bg-zinc-500 px-1" key={s}>
                                          {s}
                                       </div>
                                    ))}
                                 </div>
                              </MotionDiv>

                              {/* 서브 업무 리스트 */}
                              {value.children.map((child, idx) => (
                                 <MotionDiv
                                    key={`${value.title}-child-${idx}`}
                                    transition={{
                                       delay: 0.3 + (idx + 1) * 0.1,
                                       duration: 0.4,
                                    }}
                                    className="flex flex-col gap-2"
                                    variants={CHILD_VARIANTS}
                                 >
                                    {child.map((text) => (
                                       <div key={text} className="text-xs text-white md:text-sm">
                                          {text}
                                       </div>
                                    ))}
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
