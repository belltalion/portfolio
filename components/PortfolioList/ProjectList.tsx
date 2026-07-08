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
      title: '바시필라테스 코리아 - 웹 사이트 리뉴얼',
      date: '2026.06 - present',
      desc: [
         '바시필라테스 코리아 웹 사이트 리뉴얼 구축',
         '클라이언트의 요구사항 정의 및 WBS 작성 등 프로젝트 리딩',
      ],
      role: 'PL / 백엔드',
      tech: ['Rust, Axum'],
      tag: ['SI'],
   },
   {
      title: '브레일리파이스튜디오(터칭메모리) - 점역 및 점자 문서 인쇄 솔루션 RnD',
      date: '2025.11 - present',
      desc: [
         '점자 번역 및 점자 문서 에디터 브레일리파이스튜디오 웹 사이트 제작 연구 개발사업',
         '점자 번역 오픈소스 라이브러리 Braillify 제작',
         'Figma 라이크 다중 유저 접속 및 에디팅 웹소켓 연동',
      ],
      role: '풀스택',
      tech: ['Rust, Python, Axum, Next.js, Typescript'],
      tag: ['솔루션'],
   },
   {
      title: '개발일보 - 온라인 언론사 웹 사이트 구축',
      date: '2025.09 - 2025.10',
      link: 'https://play.google.com/store/apps/details?id=com.syworks.roundtable&hl=ko',
      image: './images/roundtable.webp',
      desc: [
         '데브파이브 온라인 언론사 웹 사이트 구축',
         '기사 작성용 노션 라이크 에디터 Devup-editor 사내 라이브러리 제작',
         'CMS 이메일 전송을 위한 사내 SMTP 서버 구축 및 배포',
         '기사 작성, 승인, 발행 플로우 제작',
      ],
      role: 'PL / 풀스택',
      tech: ['Axum, Rust, PostgreSQL, Next.js, Ts'],
      tag: ['솔루션'],
   },
   {
      title: '기록공간 - AI 자서전 및 실물 책 제작 서비스 구축',
      date: '2026.01 - 2026.05',
      link: 'https://play.google.com/store/apps/details?id=com.girokspace.app&hl=ko',
      image: './images/roundtable.webp',
      desc: [
         '주식회사 리브유 AI 자서전 및 실물 책 제작 서비스 웹, 앱 구축',
         '사용자가 원하는 자서전을 STT로 입력하면 AI 캐릭터의 교정을 통해 내용 다듬어 일관된 구조로 책으로 제작할 수 있는 솔루션',
         'B2B, B2C를 위한 프로젝트 구조 설계',
         'Firebase 연동으로 웹앱 푸시 알림 구현',
         '토스페이먼츠 결제 및 환불 연동',
      ],
      role: 'PL / 풀스택 / 앱개발',
      tech: ['Axum, Rust, PostgreSQL, Next.js, Ts, React Native'],
      tag: ['SI'],
   },
   {
      title: '라온스윙크래프트 — SwingCraft 글로벌 리브랜딩 웹 사이트 구축',
      date: '2025.10 - 2025.12',
      link: 'https://laonswingcraft.com/ko',
      image: './images/roundtable.webp',
      desc: [
         'AI 골프 솔루션 SwingCraft 외국인 유입을 위한 글로벌 리브랜딩 풀스택 개발',
         'Next-Intl 라이브러리 사용으로 i18n 다국어 지원 구조 설계 및 CMS 내 텍스트 수정 연동',
         'Framer Motion 적극 사용으로 인터렉션 UI/UX 제작',
         '문의 발생 이메일 SMTP 연동으로 구현',
      ],
      role: 'PL / 풀스택',
      tech: ['Fast-api, Python, PostgreSQL, Next.js, Ts'],
      tag: ['SI'],
   },
   {
      title: '라운드테이블 — 외국인 한국어 학습 솔루션 유지보수',
      date: '2025.09 - 2025.10',
      link: 'https://play.google.com/store/apps/details?id=com.syworks.roundtable&hl=ko',
      image: './images/roundtable.webp',
      desc: [
         '에듀록스의 외국인을 위한 AI 대화형 한국어 학습 솔루션 라운드테이블 앱 유지보수 및 신규 기능 개발',
         'CMS 내 AI 프롬프트 관리 기능 및 플로우 수정',
         '구글 플레이스토어, 애플 앱스토어 인앱 구독 정기 결제 연동',
      ],
      role: '앱개발',
      tech: ['Flutter, Dart'],
      tag: ['SI'],
   },
   {
      title: '데브파이브 - 홈페이지 글로벌 웹 사이트 리뉴얼',
      date: '2025.7 - 2025.12',
      link: 'https://devfive.kr/ko/',
      image: './images/roundtable.webp',
      desc: [
         '주식회사 데브파이브 홈페이지 글로벌 리뉴얼',
         'Next-Intl 라이브러리 사용으로 i18n 다국어 지원 구조 설계 및 CMS 내 텍스트 수정 연동',
         'Framer Motion 적극 사용으로 인터렉션 UI/UX 제작',
      ],
      role: 'PL / 풀스택',
      tech: ['Fast-api, Python, PostgreSQL, Next.js, Ts'],
      tag: ['솔루션'],
   },
   {
      title: '데브파이브 - CMS, 업무관리 웹 사이트 리뉴얼',
      date: '2025.7 - 2025.12',
      link: 'https://devfive.kr/ko/',
      image: './images/roundtable.webp',
      desc: [
         '주식회사 데브파이브 랜딩 CMS 리뉴얼',
         '웹사이트 SI 제작 문의 Slack, 카카오톡, SMS 전송 알림 연동',
         '웹사이트 SI 제작 문의 내용 수집 후 견적서 자동 제작 AI 연동 및 견적서 발송 시스템 구축',
         '나라장터 G2b 지원사업 확인을 위한 공고 자동 수집 및 알림 스케쥴러 제작',
      ],
      role: 'PL / 풀스택',
      tech: ['Fast-api, Python, PostgreSQL, Next.js, Ts'],
      tag: ['솔루션'],
   },
   {
      title: '로또전설 — 로또 번호 조합 서비스 웹사이트, 크로스플랫폼 앱 구축',
      date: '2025.05 - 2025.08',
      link: 'https://play.google.com/store/apps/details?id=com.lottolegend.app&hl=ko',
      image: './images/lottolegend.webp',
      desc: [
         '로또 당첨 결과 확인 및 번호 조합 솔루션 웹사이트 구축 및 앱 제작 배포',
         '로또 랜덤 번호 조합기 제작',
         'Rust 기반 크로스플랫폼 라이브러리 Tauri를 사용하여 앱 제작',
      ],
      role: '풀스택',
      tech: ['Fast-api, Python, PostgreSQL, Next.js, Ts, Tauri'],
      tag: ['SI'],
   },
   {
      title: 'NH 올원뱅크 캐시백쿠폰몰 — 캐시백쿠폰몰 미니앱 서비스 제작',
      date: '2025.04 - 2025.08',
      link: 'https://play.google.com/store/apps/details?id=com.nonghyup.nhallonebank&hl=ko',
      image: './images/nh.webp',
      desc: [
         '주식회사 포인트파크의 캐시백 쿠폰몰 솔루션 페이팡을 NH 올원뱅크 내 미니앱으로 이식하는 프로젝트',
         '위치기반 캐시백 쿠폰 사용처 표시 UI/UX 제작',
         'Lottie, Framer motion 기반 애니메이션 UI 제작',
      ],
      role: '프론트엔드',
      tech: ['Next.js, Ts'],
      tag: ['SI'],
   },
   {
      title: '한국농식품벤처투자협회 — 공식 웹 사이트 구축',
      date: '2025.03 - 2025.05',
      link: 'https://kavia.org/',
      image: './images/kavia.webp',
      desc: ['사단법인 한국농식품벤처투자협회 공식 웹 사이트 구축'],
      role: '풀스택',
      tech: ['Fast-api, Python, PostgreSQL, Next.js, Ts'],
      tag: ['SI'],
   },
   {
      title: '페이팡 (Paypang) — 결제 페이백 솔루션 웹앱 리뉴얼',
      date: '2024.11 - 2025.07',
      link: 'https://play.google.com/store/apps/details?id=com.pointpark.popaArdApp',
      image: './images/paypang.webp',
      desc: [
         '주식회사 포인트파크의 캐시백 쿠폰몰 솔루션 웹앱 리뉴얼',
         'Lottie, Framer motion 기반 애니메이션 UI 제작',
      ],
      role: '프론트엔드',
      tech: ['Vite, Ts'],
      tag: ['SI'],
   },
   {
      title: 'SERA RMS — 승강기 원격 관리 및 모니터링 시스템',
      date: '2024.07 - 2024.12',
      role: '프론트엔드',
      tech: ['Next.js'],
      tag: ['SI'],
   },
   {
      title: '더브릿지 (The Bridge) — 후원 및 자립 지원 글로벌 플랫폼 유지보수, 웹 사이트 리뉴얼',
      date: '2023.03 - 2025.05',
      link: 'https://www.thebridgeint.com/',
      image: './images/thebridge.webp',
      desc: [
         '사단법인 더브릿지의 개발도상국, 탈북민 자립 지원 웹사이트 유지보수 및 웹 사이트 리뉴얼',
         'Next-Intl 라이브러리 사용으로 i18n 다국어 지원 구조 설계 및 CMS 내 텍스트 수정 연동',
         '후원금 모금 관리 솔루션 스마트레이저 백엔드 연동',
      ],
      role: '풀스택 / 개발 리드',
      tech: ['Fast-api, Python, PostgreSQL, Next.js, Ts', 'Django'],
      tag: ['SI'],
   },
   {
      title: '서초구 아이돌봄 지원 시스템 — 돌봄 서비스 신청 및 운영 관리 웹',
      date: '2023.07 - 2023.12',
      role: '프론트엔드',
      tech: ['Next.js'],
      tag: ['SI'],
   },
   {
      title: '조아라 (Joara) — 웹소설 플랫폼 통합 및 글로벌 확장 All-In-One 프로젝트',
      date: '2022.06 - 2022.09',
      role: '프론트엔드',
      tech: ['React'],
      tag: ['SI'],
   },
   {
      title: '플랜비 (Planbi) — AI 기반 일정 관리 하이브리드 앱',
      date: '2022.05 - 2022.07',
      link: 'https://play.google.com/store/apps/details?id=com.bluesignal.planbi2&hl=ko',
      image: './images/planbi.webp',
      role: '프론트엔드',
      tech: ['React'],
      tag: ['SI'],
   },
   {
      title: '유틸서포트 — 유틸리티 모음 플랫폼',
      date: '2023.03 - Present',
      link: 'https://util.support/',
      image: './images/utill-support.webp',
      role: '프론트엔드',
      tech: ['Next.js'],
      tag: ['솔루션'],
   },
   {
      title: '저스트큐 — 입점형 멀티 채널 판매 솔루션 랜딩 웹사이트 구축 및 벤더 유지보수',
      date: '2024.02 - 2024.08',
      link: 'https://www.justq.com/',
      image: './images/justq.webp',
      role: '프론트엔드',
      tech: ['Next.js, React.js'],
      tag: ['SI'],
   },
   {
      title: '유어테스트 — 성격·MBTI 테스트 플랫폼',
      date: '2023.08 - 2024.02',
      link: 'https://yourtest.kr/',
      image: './images/yourtest.webp',
      role: '풀스택',
      tech: ['FastAPI', 'Next.js'],
      tag: ['솔루션'],
   },
   {
      title: '빌런즈: 로봇 배틀로얄 — 모바일 게임 웹 포털',
      date: '2022.08 - 2023.01',
      link: 'http://portal.villainsbattle.com/',
      image: './images/villains.webp',
      role: '프론트엔드',
      tech: ['Next.js'],
      tag: ['SI'],
   },
   {
      title: '데브드로우 — 데브파이브 견적 문의 플랫폼',
      date: '2024.05 - 2024.09',
      role: '프론트엔드',
      tech: ['Next.js'],
      tag: ['솔루션'],
   },
]

export function ProjectList() {
   return (
      <section className={clsx('mx-auto w-full max-w-[1200px] py-10 md:py-20', 'px-5 md:px-10')}>
         <div className="flex flex-col gap-8">
            <Title
               label="Projects"
               textClassName="text-zinc-200"
               lineClassName="bg-zinc-200"
               useViewport
            />

            <MotionDiv
               className="gap-4"
               variants={LIST_VARIANTS}
               initial="init"
               whileInView="view"
               viewport={{ once: true, amount: 0.1 }}
            >
               {PROJECTS.map((project) => (
                  <ProjectCard
                     key={project.title}
                     className="mb-4 break-inside-avoid"
                     {...project}
                  />
               ))}
            </MotionDiv>
         </div>
      </section>
   )
}
