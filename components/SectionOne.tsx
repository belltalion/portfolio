import { clsx } from 'clsx'

const LOCATION = [
   { x: 20, y: 20 },
   { x: 10, y: 80 },
   { x: 50, y: 40 },
   { x: 60, y: 50 },
   { x: 80, y: 30 },
]

const CONTENTS = [
   {
      title: 'CORE IMPACT',
      content: '15+ Production Apps Released',
   },
   {
      title: 'BACKEND',
      content: 'Fast Api / Python / Axum / Rust',
   },
   {
      title: 'FRONTEND',
      content: 'Next / React / Vite / Ts / Js\nFramer Motion /React Hook Form\nReact Query / i18n',
   },
]
export function SectionOne() {
   return (
      <section
         className={clsx(
            'relative flex h-screen w-screen items-center overflow-hidden',
            'border-b border-zinc-900',
            'px-10 md:px-20',
         )}
      >
         <div className="z-10 flex h-fit flex-col gap-5">
            <p className={clsx('font-mono', 'text-blue-500')}>
               <span className="inline-block animate-pulse">_</span> Full-stack Lead to Frontend
               focused
            </p>
            <span
               className={clsx(
                  'text-6xl leading-none font-bold tracking-tighter text-white',
                  'md:text-9xl',
               )}
            >
               LEE <br /> TAEHYUN
            </span>
            <div
               className={clsx('z-10 flex flex-wrap font-medium text-zinc-500', 'gap-x-12 gap-y-4')}
            >
               <p className="text-sm">
                  <span className="mr-2 text-zinc-700">01</span> Based in Seoul
               </p>
               <p className="text-sm">
                  <span className="mr-2 text-zinc-700">02</span> Team Lead at DevFive
               </p>
               <p className="text-sm">
                  <span className="mr-2 text-zinc-700">03</span> Computer Science B.S.
               </p>
            </div>
         </div>
         {CONTENTS.map(({ title, content }, idx) => (
            <div
               key={'item-' + idx}
               className={clsx('absolute', 'border-l border-zinc-800 pl-4')}
               style={{ left: `${LOCATION[idx].x}%`, top: `${LOCATION[idx].y}%` }}
            >
               <p className="font-mono text-sm tracking-widest text-zinc-500 uppercase">{title}</p>
               <p className="text-m mt-1 font-medium whitespace-pre-wrap text-zinc-300">
                  {content}
               </p>
            </div>
         ))}
      </section>
   )
}
