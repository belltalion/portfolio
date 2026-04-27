'use client'

import { clsx } from 'clsx'
import { Title } from '../DetailPortfolio/Title'
import { MotionDiv } from '../Motion'
import { ProjectCard } from './ProjectCard'

const LIST_VARIANTS = {
   init: {},
   view: {
      transition: {
         staggerChildren: 0.07,
         delayChildren: 0.1,
      },
   },
}

const PROJECTS = [
   {
      title: '라운드테이블 — 한국어 교육 솔루션 인앱 결제 시스템 구축',
      date: '2025.09 - 2025.10',
      link: 'https://play.google.com/store/apps/details?id=com.syworks.roundtable&hl=ko',
      image: './images/roundtable.webp',
      role: '앱개발',
      tech: ['Flutter'],
   },
   {
      title: 'NH 올원뱅크 캐시백쿠폰몰 — 미니앱 기반 프로모션 서비스 개발',
      date: '2025.04 - 2025.08',
      link: 'https://play.google.com/store/apps/details?id=com.nonghyup.nhallonebank&hl=ko',
      image: './images/nh.webp',
      role: '프론트엔드',
      tech: ['Next.js'],
   },
   {
      title: '페이팡 (Paypang) — 결제 페이백 앱 하이브리드 웹 리뉴얼',
      date: '2024.11 - 2025.07',
      link: 'https://play.google.com/store/apps/details?id=com.pointpark.popaArdApp',
      image: './images/paypang.webp',
      role: '프론트엔드',
      tech: ['Vite'],
   },
   {
      title: 'SERA RMS — 승강기 원격 관리 및 모니터링 시스템',
      date: '2024.07 - 2024.12',
      role: '프론트엔드',
      tech: ['Next.js'],
   },
   {
      title: '서초구 아이돌봄 지원 시스템 — 돌봄 서비스 신청 및 운영 관리 웹',
      date: '2023.07 - 2023.12',
      role: '프론트엔드',
      tech: ['Next.js'],
   },
   {
      title: '더브릿지 (The Bridge) — 후원 및 자립 지원 글로벌 플랫폼 유지보수, 리뉴얼',
      date: '2023.03 - 2025.05',
      link: 'https://www.thebridgeint.com/',
      image: './images/thebridge.webp',
      role: '프론트엔드 / 개발 리드',
      tech: ['Next.js'],
   },
   {
      title: '조아라 (Joara) — 웹소설 플랫폼 통합 및 글로벌 확장 All-In-One 프로젝트',
      date: '2022.06 - 2022.09',
      role: '프론트엔드',
      tech: ['React'],
   },
   {
      title: '플랜비 (Planbi) — AI 기반 일정 관리 하이브리드 앱',
      date: '2022.05 - 2022.07',
      link: 'https://play.google.com/store/apps/details?id=com.bluesignal.planbi2&hl=ko',
      image: './images/planbi.webp',
      role: '프론트엔드',
      tech: ['React'],
   },
   {
      title: '로또전설 — 로또 번호 조합 서비스',
      date: '2022.05 - Present',
      link: 'https://www.lottolegend.co.kr/',
      image: './images/lottolegend.webp',
      role: '풀스택',
      tech: ['FastAPI', 'Next.js'],
   },
   {
      title: '유틸서포트 — 유틸리티 모음 플랫폼',
      date: '2023.03 - Present',
      link: 'https://util.support/',
      image: './images/utill-support.webp',
      role: '풀스택',
      tech: ['FastAPI', 'Next.js'],
   },
   {
      title: '한국농식품벤처투자협회 — 공식 사이트',
      date: '2023.06 - 2023.12',
      link: 'https://kavia.org/',
      image: './images/kavia.webp',
      role: '프론트엔드',
      tech: ['Next.js'],
   },
   {
      title: '저스트큐 — 입점형 멀티 채널 판매 솔루션',
      date: '2024.02 - 2024.08',
      link: 'https://www.justq.com/',
      image: './images/justq.webp',
      role: '프론트엔드',
      tech: ['Next.js'],
   },
   {
      title: '유어테스트 — 성격·MBTI 테스트 플랫폼',
      date: '2023.08 - 2024.02',
      link: 'https://yourtest.kr/',
      image: './images/yourtest.webp',
      role: '풀스택',
      tech: ['FastAPI', 'Next.js'],
   },
   {
      title: '빌런즈: 로봇 배틀로얄 — 모바일 게임 웹 포털',
      date: '2022.08 - 2023.01',
      link: 'http://portal.villainsbattle.com/',
      image: './images/villains.webp',
      role: '프론트엔드',
      tech: ['Next.js'],
   },
   {
      title: '데브드로우 — 데브파이브 견적 문의 플랫폼',
      date: '2024.05 - 2024.09',
      role: '프론트엔드',
      tech: ['Next.js'],
   },
]

export function ProjectList() {
   return (
      <section className={clsx('mx-auto w-full max-w-[1200px] py-10 md:py-20', 'px-5 md:px-10')}>
         <div className="flex flex-col gap-8">
            <Title
               label="Other Projects"
               textClassName="text-zinc-200"
               lineClassName="bg-zinc-200"
               useViewport
            />

            <MotionDiv
               className="columns-1 gap-4 md:columns-2 lg:columns-3"
               variants={LIST_VARIANTS}
               initial="init"
               whileInView="view"
               viewport={{ once: true, amount: 0.1 }}
            >
               {PROJECTS.map((project) => (
                  <ProjectCard
                     key={project.title}
                     className="mb-4 break-inside-avoid"
                     image={project.image}
                     title={project.title}
                     date={project.date}
                     link={project.link}
                     tech={project.tech}
                     role={project.role}
                  />
               ))}
            </MotionDiv>
         </div>
      </section>
   )
}
