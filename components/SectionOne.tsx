import { clsx } from 'clsx'
import { MotionDiv, MotionText } from './Motion'
import { TypeText } from './Motion/TypeText'
import { TiltCard } from './Motion/TiltCard'

const CONTENTS = [
   {
      title: 'Core Impact',
      content: '15+ Production Apps Released',
   },
   {
      title: 'FrontEnd',
      content:
         'Next / React / Vite / Ts / Js \nFramer Motion /React Hook Form \nReact Query / i18n',
   },
   {
      title: 'BackEnd',
      content: 'Fast Api / Python / Axum / Rust',
   },
   {
      title: 'Global Architecture Lead',
      content:
         'Next.js 기반 i18n 다국어 시스템 \n구축 및 다양한 글로벌 프로덕트의 기술 고도화 주도',
   },
   {
      title: 'OSS Validator & Contributor',
      content:
         'Devup UI / Vespera 등 사내 오픈소스의 실서비스 \n최적화 및 개발자 경험(DX) 향상을 위한 \n인터페이스 설계 참여',
   },
]

const CAPTIONS = ['Based in Anyang', 'Team Lead at DevFive', 'Computer Science B.S.']

export function SectionOne() {
   return (
      <section
         className={clsx(
            'flex h-screen flex-col items-center justify-center overflow-hidden',
            'md:flex-row md:justify-between',
            'mx-auto w-[100%] max-w-[1024px] px-4',
            'gap-10',
            'border-b border-zinc-900',
         )}
      >
         <div className="z-10 flex h-fit flex-col gap-5">
            <span className={clsx('sm:text-md font-mono text-xs', 'text-blue-500')}>
               <MotionText
                  transition={{
                     duration: 0.8,
                     repeat: Infinity,
                  }}
                  animate={{ opacity: [1, 0] }}
               >
                  _
               </MotionText>{' '}
               Full-stack Lead to Frontend focused
            </span>
            <span
               className={clsx(
                  'leading-none font-bold tracking-tighter text-white',
                  'text-4xl sm:text-6xl md:text-7xl lg:text-8xl',
               )}
            >
               <TypeText text="LEE" />
               <br /> <TypeText delay={0.3} text="TAEHYUN" />
            </span>
            <div
               className={clsx('z-10 flex flex-wrap font-medium text-zinc-500', 'gap-x-6 gap-y-4')}
            >
               {CAPTIONS.map((v, idx) => (
                  <p className="text-xs md:text-sm" key={'caption' + idx}>
                     <span className="mr-2 text-zinc-700">0{idx + 1}</span> {v}
                  </p>
               ))}
            </div>
         </div>
         <div className="flex flex-col gap-4 md:gap-8">
            {CONTENTS.map(({ title, content }, idx) => (
               <MotionDiv
                  initial={{
                     x: -50,
                     opacity: 0,
                     filter: 'blur(10px)',
                  }}
                  transition={{
                     delay: 1 + idx * 0.3,
                  }}
                  animate={{
                     x: 0,
                     opacity: 1,
                     filter: 'blur(0px)',
                  }}
                  key={'item-' + idx}
                  style={
                     { '--md-ml': `${idx * 12}px`, '--ml': `${idx * 4}px` } as React.CSSProperties
                  }
                  className={clsx(`ml-[var(--ml)] md:ml-[var(--md-ml)]`)}
               >
                  <TiltCard>
                     <p
                        className={clsx(
                           'font-mono text-sm tracking-widest text-zinc-500 uppercase',
                           'sm:text-md text-xs md:text-lg',
                        )}
                     >
                        {title}
                     </p>
                     <p
                        className={clsx(
                           'mt-1 font-medium text-zinc-300 md:whitespace-pre-wrap',
                           'md:text-m text-xs sm:text-sm',
                        )}
                     >
                        {content}
                     </p>
                  </TiltCard>
               </MotionDiv>
            ))}
         </div>
      </section>
   )
}
