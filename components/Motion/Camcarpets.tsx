'use client'
import { MotionDiv } from '.'

interface CamcarpetsProps {
   items: string[]
}
export function Camcarpets({ items }: CamcarpetsProps) {
   const Y = Array(items.length)
      .fill(0)
      .map((_, idx) => '-' + idx * 40 + 'px')
      .concat('0px')
   console.log(Y)
   return (
      <div className="overflow-hidden">
         <MotionDiv
            className="flex"
            animate={{ x: Y }}
            transition={{
               repeat: Infinity,
               duration: 10,
            }}
         >
            {items.map((v, idx) => (
               <div key={idx} className="letters text-4xl whitespace-nowrap text-white">
                  {v}
               </div>
            ))}
         </MotionDiv>
      </div>
   )
}
