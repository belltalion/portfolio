import { clsx } from 'clsx'
import { MotionDiv, MotionText } from '../Motion'

interface TitleProps {
   label?: string
   textClassName?: string
   lineClassName?: string
   useViewport?: boolean
}

export function Title({
   label = 'PROJECTS',
   textClassName = 'text-zinc-200',
   lineClassName = 'bg-zinc-200',
   useViewport = false,
}: TitleProps) {
   const motionProps = useViewport
      ? { whileInView: 'view' as const, viewport: { once: true } }
      : { animate: 'view' as const }

   return (
      <MotionDiv
         initial="init"
         {...motionProps}
         exit="exit"
         className="flex w-full items-center gap-4 overflow-hidden"
      >
         <MotionText
            className={clsx(
               'shrink-0 font-mono text-xs tracking-[0.3em] uppercase md:text-lg',
               textClassName,
            )}
            transition={{ ease: 'easeOut', duration: 0.4 }}
            variants={{
               init: { y: '100%' },
               view: { y: '0' },
               exit: { y: '100%' },
            }}
         >
            {label}
         </MotionText>
         <MotionDiv
            transition={{ duration: 0.5, ease: 'easeOut' }}
            variants={{
               init: { scaleX: 0 },
               view: { scaleX: 1 },
               exit: { scaleX: 0 },
            }}
            style={{ originX: 0 }}
            className={clsx('h-px flex-1', lineClassName)}
         />
      </MotionDiv>
   )
}
