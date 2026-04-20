import { MotionDiv, MotionText } from '../Motion'

export function Title() {
   return (
      <MotionDiv
         initial="init"
         whileInView="view"
         className="flex w-[100%] items-center gap-2 overflow-hidden"
         viewport={{
            once: true,
            margin: '-200px',
         }}
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
                  width: '0',
               },
               view: {
                  width: '100%',
               },
            }}
            className="h-[1px] bg-zinc-500"
         />
      </MotionDiv>
   )
}
