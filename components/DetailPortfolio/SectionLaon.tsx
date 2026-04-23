'use client'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import { AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import { Title } from './Title'
import { ProjectCard } from './ProjectCard'
import { MotionDiv } from '../Motion'

const DATA = [
   {
      href: 'https://girokspace.com/',
      src: [
         './images/laon_swingcraft_1.webp',
         './images/laon_swingcraft_2.webp',
         './images/laon_swingcraft_3.webp',
      ],
      date: 'JAN. 2026 – MAY. 2026',
      title: '기록공간',
      desc: '주식회사 리브유의 AI 자서전 서비스 솔루션 앱 기록공간 풀스택 개발',
      stack: ['Next', 'Axum', 'Ts', 'Rust', 'PostgreSql', 'React-Native'],
      children: [
         [
            '아이디어 단계의 프로젝트를 기획·설계하고 기술 스택을 총괄하여, 시장 출시가 가능한 제품으로 완성시키는 프로젝트 리더 역할을 수행했습니다."',
            '지인과 AI가 사용자에게 궁금한 질문을 하면 STT를 통해 이야기를 수집하고 AI 캐릭터 별로 교정 및 이야기 개선을 진행하여 일관된 이야기구조로 자서전을 제작할 수 있는 서비스입니다.',
         ],
         [
            'PostgreSQL 기반 26개 테이블 스키마 설계, B2C 뿐 아닌 B2B 위한 선물 시스템 DB 설계, 동반 작가, 추천사, 프로젝트-주제 연결 등 N:N 관계 설계',
            'HTTP 요청이 끊겨도 API서버 백그라운드 내에서 AI 작업이 계속 진행될 수 있도록 tokio spawn 적용',
            'Kakao·Naver·Google·Apple OAuth 및 JWT 인증 구현, 토스페이먼츠 결제 연동 및 환불 처리 구현, AWS S3 파일 업로드 처리',
            'Firebase 통해 모바일 기기 푸시 알림 연동, 사용자 중심 UI/UX/CX 설계, AI 프롬프트 응답 대기 CX를 Suspense·pending 으로 처리',
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
      date: 'JUL. 2025 – DEC. 2025',
      title: 'LAON SWINGCRAFT',
      desc: '주식회사 라온피플의 AI 골프 솔루션 SwingCraft 웹사이트 고도화 및 글로벌 리브랜딩 풀스택 개발',
      stack: ['Next', 'Fast-api', 'Ts', 'Python', 'PostgreSql'],
      children: [
         ['처음으로 개발리드하여 전체 프로젝트 전반적인 프론트와 백, DB 구축을 진행했습니다.'],
         [
            'Framer Motion의 viewport·scroll 을 사용하여 인터렉션 UI/UX를 제작하였습니다.',
            'Next-Intl 라이브러리를 사용하여 다국어 지원과 CMS 연동을 통해 다국어 컨텐츠의 수정과 확장이 가능하게 설계하였습니다.',
            'React-hook-form으로 문의 페이지를 제작하였으며 문의 발생 시 SMTP와 연동하여 자동으로 이메일을 발송하도록 구축하였습니다.',
         ],
      ],
   },
   {
      href: 'https://devfive.kr/ko/',
      src: ['./images/devfive_1.webp', './images/devfive_2.webp', './images/devfive_3.webp'],
      date: 'JUL. 2025 – DEC. 2025',
      title: 'DEVFIVE',
      stack: ['Next', 'Fast-api', 'Ts', 'Python', 'PostgreSql'],
      desc: '주식회사 데브파이브의 홈페이지 및 업무관리 페이지 풀스택 개발',
      children: [
         [
            '주식회사 데브파이브의 홈페이지의 글로벌 리뉴얼 및 업무 및 컨텐츠 관리 페이지 기능 설계, 구축을 진행하였습니다.',
         ],
         [
            '홈페이지는 Framer Motion 기반 인터렉티브 UI/UX를 제작하였습니다.',
            '홈페이지 제작 문의 시 자동으로 Slack, 카카오톡, SMS 전송 연동을 진행했습니다.',
            '견적서 제작 시 고객의 문의를 기반으로 AI 연계를 통해 자동으로 견적서 내용이 기입되도록 제작하였으며 사내 기획팀과 경영팀의 결재 연동 시스템 구축과 페이지 내에서 고객에게 견적서 이메일을 발송하도록 연동하였습니다.',
            '나라장터 G2B 공고를 업무관리 페이지에서 확인할 수 있도록 스케쥴러를 통해 자동 수집 및 DB 적재, 경영 기획팀에게 카카오톡·SMS 자동 발송 파이프라인을 설계 후 구축하였습니다.',
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
      if (step !== currentStep) setStep(currentStep)
   })

   return (
      <section className={clsx('mx-auto w-full max-w-[1200px]', 'px-8 md:px-10')}>
         {/* ── 모바일: 정적 리스트 ── */}
         <div className="flex flex-col gap-2 py-8 break-keep md:hidden">
            <div className="flex items-center gap-4">
               <span className="shrink-0 font-mono text-xs tracking-[0.3em] text-zinc-200 uppercase">
                  PROJECTS
               </span>
               <div className="h-px flex-1 bg-zinc-200" />
            </div>
            <div className="flex flex-col gap-10">
               {DATA.map((value) => (
                  <MotionDiv
                     key={value.title}
                     viewport={{
                        margin: '-20%',
                        once: true,
                     }}
                     whileInView={'view'}
                     initial="init"
                     className="flex w-full flex-col gap-4"
                  >
                     <ProjectCard value={value} />
                  </MotionDiv>
               ))}
            </div>
         </div>

         {/* ── 데스크탑: sticky scroll ── */}
         <div ref={ref} className="hidden md:block" style={{ height: 200 * DATA.length + 'svh' }}>
            <div className="sticky top-0 flex min-h-[100svh] w-full flex-col justify-center break-keep">
               <AnimatePresence mode="wait">
                  {step >= 0 && <Title key={step} />}

                  {DATA.map(
                     (value, dataIdx) =>
                        dataIdx === step && (
                           <MotionDiv
                              key={value.title}
                              className="flex w-full flex-col gap-4 md:gap-2 lg:gap-4"
                              initial="init"
                              animate="view"
                              exit="exit"
                           >
                              <ProjectCard key={value.title} value={value} />,
                           </MotionDiv>
                        ),
                  )}
               </AnimatePresence>
            </div>
         </div>
      </section>
   )
}
