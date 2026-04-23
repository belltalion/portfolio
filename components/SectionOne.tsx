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
         'Next / React / Vite / Ts / Js\nFramer Motion / React Hook Form\nReact Query / i18n',
   },
   {
      title: 'BackEnd',
      content: 'Fast Api / Python / Axum / Rust',
   },
   {
      title: 'Global Architecture Lead',
      content:
         'Next.js 기반 i18n 다국어 시스템\n구축 및 다양한 글로벌 프로덕트의 기술 고도화 주도',
   },
   {
      title: 'OSS Validator & Contributor',
      content:
         'Devup UI / Vespera 등 사내 오픈소스의\n실서비스 최적화 및 개발자 경험(DX) 향상을 위한\n인터페이스 설계 참여',
   },
]

const CAPTIONS = ['Based in Anyang', 'Team Lead at DevFive', 'Computer Science B.S.']

export function SectionOne() {
   return (
      <section
         className={clsx(
            'flex flex-col items-center overflow-hidden',
            'md:h-screen md:flex-row md:justify-between',
            'mx-auto w-full max-w-[1200px] px-8 md:px-10',
            'gap-10 md:gap-16',
         )}
      >
         {/* Left: Name & Identity */}
         <div className="z-10 flex h-screen flex-col justify-center gap-6 md:h-fit md:min-w-[280px]">
            <TiltCard className="w-fit p-2">
               <div className="overflow-hidden">
                  <MotionDiv
                     initial={{ y: '100%' }}
                     transition={{ delay: 1, duration: 0.4, ease: 'easeOut' }}
                     animate={{ y: 0 }}
                     className="flex items-center gap-1.5 font-mono text-xs text-zinc-500"
                  >
                     <MotionText
                        transition={{ duration: 0.8, repeat: Infinity }}
                        animate={{ opacity: [1, 0] }}
                        className="text-blue-500"
                     >
                        ▍
                     </MotionText>
                     Full-stack Lead to Frontend focused
                  </MotionDiv>
               </div>
            </TiltCard>

            <TiltCard>
               <span
                  className={clsx(
                     'leading-[0.9] font-bold tracking-tighter text-white',
                     'text-6xl md:text-7xl lg:text-8xl',
                  )}
               >
                  <TypeText text="LEE" />
                  <br />
                  <TypeText delay={0.3} text="TAEHYEON" />
               </span>
            </TiltCard>

            {/* Thin separator */}
            <MotionDiv
               initial={{ scaleX: 0, opacity: 0 }}
               animate={{ scaleX: 1, opacity: 1 }}
               transition={{ delay: 1.4, duration: 0.5, ease: 'easeOut' }}
               style={{ originX: 0 }}
               className="h-px w-full bg-zinc-800"
            />

            {/* Captions */}
            <div className="flex flex-col gap-2.5">
               {CAPTIONS.map((v, idx) => (
                  <TiltCard key={'caption' + idx} className="p-0.5 w-fit">
                     <MotionText
                        transition={{
                           delay: 1.5 + idx * 0.1,
                           duration: 0.5,
                           ease: 'easeOut',
                        }}
                        initial={{ y: 8, opacity: 0, filter: 'blur(6px)' }}
                        animate={{ y: 0, opacity: 1, filter: 'blur(0)' }}
                        className="flex items-center gap-3 text-xs text-zinc-500 md:text-sm"
                     >
                        <span className="font-mono text-zinc-700">0{idx + 1}</span>
                        {v}
                     </MotionText>
                  </TiltCard>
               ))}
            </div>
         </div>

         {/* Right: Skills & Info */}
         <MotionDiv
            className="flex h-screen flex-col gap-5 md:h-fit md:gap-5 md:max-w-[400px]"
            viewport={{ once: true }}
            initial="init"
            whileInView="view"
         >
            {CONTENTS.map(({ title, content }, idx) => (
               <MotionDiv
                  variants={{
                     init: {
                        x: 20,
                        opacity: 0,
                        filter: 'blur(8px)',
                     },
                     view: {
                        x: 0,
                        opacity: 1,
                        filter: 'blur(0px)',
                     },
                  }}
                  transition={{
                     duration: 0.45,
                     delay: 1 + idx * 0.25,
                     ease: 'easeOut',
                  }}
                  key={'item-' + idx}
               >
                  <TiltCard className="flex flex-col gap-2 border-l border-zinc-700 py-1 pl-4">
                     <p className="font-mono text-xs tracking-widest text-zinc-600 uppercase">
                        {title}
                     </p>
                     <p className="whitespace-pre-wrap text-sm font-medium leading-relaxed text-zinc-200 break-keep">
                        {content}
                     </p>
                  </TiltCard>
               </MotionDiv>
            ))}
         </MotionDiv>
      </section>
   )
}
