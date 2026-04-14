'use client'

import { MotionText } from '.'

interface TypeTextProps {
   text: string
   delay?: number
}
export function TypeText({ text, delay = 0 }: TypeTextProps) {
   const textArray = [...text]
   return (
      <div className="relative inline-flex">
         {textArray.map((v, idx) => {
            return (
               <MotionText
                  key={idx}
                  initial={{
                     opacity: 0,
                  }}
                  animate={{
                     opacity: 1,
                  }}
                  transition={{
                     duration: 0,
                     delay: delay + idx * 0.1,
                  }}
               >
                  {v}
               </MotionText>
            )
         })}
      </div>
   )
}
