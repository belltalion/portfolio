'use client'

import clsx from 'clsx'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'
import React, { CSSProperties, useState } from 'react'
import { MotionDiv } from '.'

export function TiltCard({
   children,
   className,
   motionClassName,
   style,
}: {
   children: React.ReactNode
   className?: string
   motionClassName?: string
   style?: CSSProperties
}) {
   const [pressed, setPressed] = useState(false)

   const x = useMotionValue(0)
   const y = useMotionValue(0)

   const mouseXSpring = useSpring(x)
   const mouseYSpring = useSpring(y)

   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['20deg', '-20deg'])
   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-20deg', '20deg'])

   // 공통 핸들러: 마우스와 터치 모두 대응
   const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()

      const width = rect.width
      const height = rect.height

      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5

      x.set(xPct)
      y.set(yPct)
   }

   const handlePointerLeave = () => {
      x.set(0)
      y.set(0)
      setPressed(false)
   }

   return (
      <MotionDiv
         // 1. onPointerMove는 마우스와 터치를 모두 감지합니다.
         onPointerMove={handlePointerMove}
         onPointerLeave={handlePointerLeave}
         onPointerDown={() => setPressed(true)}
         onPointerUp={() => setPressed(false)}
         // 2. 모바일에서 터치 중일 때만 동작하게 하려면 whileTap을 활용해 스케일을 조절하거나 효과를 줄 수 있습니다.
         whileTap={{ scale: 0.98 }}
         style={{
            rotateY,
            rotateX,
            transformStyle: 'preserve-3d',
            touchAction: 'none', // 모바일에서 터치 시 스크롤 방지 (선택 사항)
         }}
         className={clsx('w-fit rounded-2xl from-white/20 to-white/5', motionClassName)}
      >
         <div
            style={{
               transform: 'translateZ(40px)',
               transformStyle: 'preserve-3d',
               ...style,
            }}
            className={clsx(
               'w-fit outline-zinc-300',
               'transition-shadow duration-300 md:hover:border-1 md:hover:border-zinc-200',
               pressed && 'border-1 border-zinc-200',
               className,
            )}
         >
            {children}
         </div>
      </MotionDiv>
   )
}
