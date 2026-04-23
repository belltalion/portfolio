import { MotionDiv, MotionText } from '../Motion'

export function Title() {
   return (
      <MotionDiv
         initial="init"
         animate="view"
         className="flex w-full items-center gap-4 overflow-hidden"
         exit="exit"
      >
         <MotionText
            className="shrink-0 font-mono text-xs tracking-[0.3em] text-zinc-200 uppercase md:text-lg"
            transition={{ ease: 'easeOut', duration: 0.4 }}
            variants={{
               init: { y: '100%' },
               view: { y: '0' },
               exit: { y: '100%' },
            }}
         >
            PROJECTS
         </MotionText>
         <MotionDiv
            transition={{ duration: 0.5, ease: 'easeOut' }}
            variants={{
               init: { scaleX: 0 },
               view: { scaleX: 1 },
               exit: { scaleX: 0 },
            }}
            style={{ originX: 0 }}
            className="h-px flex-1 bg-zinc-200"
         />
      </MotionDiv>
   )
}
