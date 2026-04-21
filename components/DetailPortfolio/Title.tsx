import { MotionDiv, MotionText } from '../Motion'

export function Title() {
   return (
      <MotionDiv
         initial="init"
         animate="view"
         className="w-[100%] items-center gap-2 overflow-hidden"
      >
         <MotionText
            className="text-2xl font-bold text-white"
            transition={{
               ease: 'easeOut',
            }}
            variants={{
               init: {
                  y: '100%',
               },
               view: {
                  y: '0',
               },
            }}
         >
            PROJECTS
         </MotionText>
         <MotionDiv
            transition={{
               delay: 1,
               duration: 1,
               ease: 'easeOut',
            }}
            variants={{
               init: {
                  scaleX: 0,
               },
               view: {
                  scaleX: 1,
               },
            }}
            className="h-[1px] flex-1 bg-zinc-500"
         />
      </MotionDiv>
   )
}
