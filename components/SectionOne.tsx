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
            'flex flex-col items-center overflow-hidden md:justify-between',
            'md:h-screen md:flex-row md:justify-between',
            'mx-auto w-[100%] max-w-[1200px] px-10',
            'gap-10',
         )}
      >
         <div className="z-10 flex h-screen flex-col justify-center gap-5 md:h-fit">
            <TiltCard className="w-fit p-2">
               <div className={'overflow-hidden'}>
                  <MotionDiv
                     initial={{
                        y: '100%',
                     }}
                     transition={{
                        delay: 1,
                        duration: 0.4,
                        ease: 'easeOut',
                     }}
                     animate={{
                        y: 0,
                     }}
                     className={clsx('sm:text-md font-mono text-xs', 'text-blue-500')}
                  >
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
                  </MotionDiv>
               </div>
            </TiltCard>
            <TiltCard>
               <span
                  className={clsx(
                     'leading-none font-bold tracking-tighter text-white',
                     'text-6xl md:text-7xl lg:text-8xl',
                  )}
               >
                  <TypeText text="LEE" />
                  <br /> <TypeText delay={0.3} text="TAEHYEON" />
               </span>
            </TiltCard>
            <div
               className={clsx('z-10 flex flex-wrap font-medium text-zinc-500', 'gap-x-6 gap-y-4')}
            >
               {CAPTIONS.map((v, idx) => (
                  <TiltCard key={'caption' + idx} className="p-1">
                     <MotionText
                        transition={{
                           delay: 1.2,
                           duration: 0.6 + 0.1 * idx,
                           ease: 'easeOut',
                        }}
                        initial={{
                           y: 10,
                           opacity: 0,
                           filter: 'blur(10px)',
                        }}
                        animate={{
                           y: 0,
                           opacity: 1,
                           filter: 'blur(0)',
                        }}
                     >
                        <span className="text-xs md:text-sm">
                           <span className="mr-2 text-zinc-700">0{idx + 1}</span> {v}
                        </span>
                     </MotionText>
                  </TiltCard>
               ))}
            </div>
         </div>
         <MotionDiv
            className="flex h-screen flex-col gap-15 md:h-fit md:gap-8"
            viewport={{ once: true }}
            initial={'init'}
            whileInView={'view'}
         >
            {CONTENTS.map(({ title, content }, idx) => (
               <MotionDiv
                  variants={{
                     init: {
                        x: -20,
                        opacity: 0,
                        filter: 'blur(10px)',
                     },
                     view: {
                        x: 0,
                        opacity: 1,
                        filter: 'blur(0px)',
                     },
                  }}
                  transition={{
                     duration: 0.4,
                     delay: 1 + idx * 0.3,
                  }}
                  key={'item-' + idx}
                  style={
                     { '--md-ml': `${idx * 12}px`, '--ml': `${idx * 4}px` } as React.CSSProperties
                  }
                  className={clsx(`ml-[var(--ml)] md:ml-[var(--md-ml)]`)}
               >
                  <TiltCard className="flex flex-col gap-1 border-l-1 border-zinc-800 p-0 pl-4 md:p-2">
                     <p
                        className={clsx(
                           'font-mono text-sm tracking-widest text-zinc-500 uppercase',
                           'md:text-md text-sm',
                        )}
                     >
                        {title}
                     </p>
                     <p
                        className={clsx(
                           'break-keep',
                           'mt-1 font-medium text-zinc-300',
                           'md:text-md text-sm',
                        )}
                     >
                        {content}
                     </p>
                  </TiltCard>
               </MotionDiv>
            ))}
         </MotionDiv>
      </section>
   )
}
