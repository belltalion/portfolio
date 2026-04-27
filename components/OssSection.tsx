'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { Title } from './DetailPortfolio/Title'
import { MotionDiv } from './Motion'

const OSS_PROJECTS = [
   {
      name: 'devup-ui',
      tagline: 'Zero-runtime CSS-in-JS Preprocessor for React',
      date: '2025.02 - Present',
      description:
         '빌드 타임에 JSX 스타일을 정적 CSS로 추출하는 React용 라이브러리. @devup-ui/components UI 컴포넌트 및 공식 랜딩 페이지 개발, 실서비스 도입을 통한 Edge Case 발굴 및 안정성 확보. 개발자 경험(DX) 개선을 위한 기획 피드백 및 API 인터페이스 의사 결정 참여.',
      lang: ['React', 'TypeScript'],
      contribution: '컴포넌트 / 랜딩 개발',
      github: 'https://github.com/dev-five-git/devup-ui',
      site: 'https://devup-ui.com/',
   },
   {
      name: 'Vespertide',
      tagline: 'Rust/Axum 생태계 선언적 DB 스키마·마이그레이션 도구',
      date: '2025.12 - Present',
      description:
         'JSON으로 DB 스키마를 선언하면 PostgreSQL/MySQL/SQLite 마이그레이션을 자동 생성해주는 Rust/Axum 생태계용 CLI. 실서비스 도입을 통한 Edge Case 발굴 및 안정성 확보. 개발자 경험(DX) 개선을 위한 기획 피드백 및 API 인터페이스 의사 결정 참여.',
      lang: ['Rust', 'Axum'],
      github: 'https://github.com/dev-five-git/vespertide',
   },
   {
      name: 'Vespera',
      tagline: 'Rust/Axum용 OpenAPI 자동 생성 프레임워크',
      date: '2025.12 - Present',
      description:
         'Rust/Axum 라우트 핸들러를 컴파일 타임에 스캔해 openapi.json·Swagger UI를 자동 생성하고 schema_type! 매크로로 SeaORM 엔티티 기반 스키마 파생을 지원. 실서비스 도입을 통한 Edge Case 발굴 및 안정성 확보. 개발자 경험(DX) 개선을 위한 기획 피드백 및 API 인터페이스 의사 결정 참여.',
      lang: ['Rust', 'Axum', 'SeaORM'],
      github: 'https://github.com/dev-five-git/vespera',
   },
   {
      name: 'devup-api',
      tagline: 'OpenAPI 기반 타입 안전 API 클라이언트 생성 라이브러리',
      date: '2025.12 - Present',
      description:
         'openapi.json을 읽어 fetch 호환의 타입 안전 API 클라이언트를 자동 생성하는 라이브러리. Vite/Next.js/Webpack 빌드 플러그인과 React Query, Zod, React Hook Form, CRUD UI 등 통합 패키지 제공. 실서비스 도입을 통한 Edge Case 발굴 및 안정성 확보.',
      lang: ['TypeScript', 'React', 'Vite'],
      github: 'https://github.com/dev-five-git/devup-api',
   },
]

const CARD_VARIANTS = {
   init: { y: 20, opacity: 0, filter: 'blur(8px)' },
   view: { y: 0, opacity: 1, filter: 'blur(0px)' },
}

const LIST_VARIANTS = {
   init: {},
   view: {
      transition: {
         staggerChildren: 0.08,
         delayChildren: 0.1,
      },
   },
}

export function OssSection() {
   return (
      <section className={clsx('mx-auto w-full max-w-[1200px] py-10 md:py-20', 'px-5 md:px-10')}>
         <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-3">
               <Title
                  label="Open Source"
                  textClassName="text-emerald-400"
                  lineClassName="bg-zinc-200"
                  useViewport
               />
               <p className="break-keep font-mono text-xs leading-relaxed text-zinc-500 md:text-sm">
                  사내 오픈소스의 실서비스 도입을 통한{' '}
                  <span className="text-zinc-400">Edge Case 발굴 및 안정성 확보</span>, 개발자
                  경험(DX) 개선을 위한{' '}
                  <span className="text-zinc-400">
                     기획 피드백 및 API 인터페이스 의사 결정 참여
                  </span>
               </p>
            </div>

            {/* Cards */}
            <MotionDiv
               className="grid grid-cols-1 gap-4 md:grid-cols-2"
               variants={LIST_VARIANTS}
               initial="init"
               whileInView="view"
               viewport={{ once: true, amount: 0.1 }}
            >
               {OSS_PROJECTS.map((project) => (
                  <MotionDiv
                     key={project.name}
                     variants={CARD_VARIANTS}
                     transition={{ duration: 0.5, ease: 'easeOut' }}
                     className="h-full"
                  >
                     <div className="group flex h-full flex-col gap-5 border border-zinc-800 bg-zinc-900/40 p-5 transition-all duration-300 hover:border-emerald-500/30 hover:bg-zinc-900/80">
                        {/* Terminal bar */}
                        <div className="flex items-center gap-1.5">
                           <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 transition-colors duration-300 group-hover:bg-red-500/60" />
                           <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 transition-colors duration-300 group-hover:bg-yellow-500/60" />
                           <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 transition-colors duration-300 group-hover:bg-emerald-500/60" />
                           <span className="ml-auto font-mono text-[10px] tracking-widest text-zinc-400 md:text-xs lg:text-[13px]">
                              {project.date}
                           </span>
                        </div>

                        {/* Name & tagline */}
                        <div className="flex flex-col gap-1.5">
                           <h3 className="font-mono text-lg font-bold text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300 md:text-xl lg:text-2xl">
                              {project.name}
                           </h3>
                           <p className="text-sm leading-snug break-keep text-zinc-300 md:text-base lg:text-lg">
                              {project.tagline}
                           </p>
                        </div>

                        {/* Description */}
                        <p className="flex-1 break-keep text-xs leading-relaxed text-zinc-300 md:text-sm">
                           {project.description}
                        </p>

                        {/* Footer */}
                        <div className="flex flex-col gap-3">
                           <div className="flex flex-wrap gap-1.5">
                              <span className="border border-emerald-800 bg-emerald-950/50 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400 md:text-xs">
                                 Early Adopter &amp; Validator
                              </span>
                              {project.contribution && (
                                 <span className="border border-zinc-700 px-2.5 py-0.5 font-mono text-[10px] text-zinc-300 md:text-xs">
                                    {project.contribution}
                                 </span>
                              )}
                              {project.lang.map((l) => (
                                 <span
                                    key={l}
                                    className="bg-zinc-800 px-2.5 py-0.5 font-mono text-[10px] text-zinc-300 md:text-xs"
                                 >
                                    {l}
                                 </span>
                              ))}
                           </div>
                           <div className="flex gap-4">
                              <Link
                                 href={project.github}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="font-mono text-[11px] text-zinc-400 transition-colors duration-200 hover:text-emerald-400 md:text-xs lg:text-[13px]"
                              >
                                 ↗ GitHub
                              </Link>
                              {project.site && (
                                 <Link
                                    href={project.site}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-[11px] text-zinc-400 transition-colors duration-200 hover:text-emerald-400 md:text-xs lg:text-[13px]"
                                 >
                                    ↗ {project.site.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                                 </Link>
                              )}
                           </div>
                        </div>
                     </div>
                  </MotionDiv>
               ))}
            </MotionDiv>
         </div>
      </section>
   )
}
