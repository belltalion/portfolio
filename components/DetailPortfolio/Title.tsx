import { MotionDiv, MotionText } from '../Motion'

export function Title() {
   return (
      <MotionDiv
         initial="init"
         animate="view"
         className="w-[100%] items-center gap-2 overflow-hidden"
         exit="exit"
      >
         <MotionText
            className="text-2xl font-bold text-white"
            transition={{
               ease: 'easeOut',
               duration: 0.4,
            }}
            variants={{
               init: {
                  y: '100%',
               },
               view: {
                  y: '0',
               },
               exit: {
                  y: '100%',
               },
            }}
         >
            PROJECTS
         </MotionText>
         <MotionDiv
            transition={{
               duration: 0.4,
               ease: 'easeOut',
            }}
            variants={{
               init: {
                  scaleX: 0,
               },
               view: {
                  scaleX: 1,
               },
               exit: {
                  scaleX: 0,
               },
            }}
            className="h-[1px] flex-1 bg-zinc-500"
         />
      </MotionDiv>
   )
}
