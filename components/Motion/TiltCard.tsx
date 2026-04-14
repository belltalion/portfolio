'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React from 'react'

export function TiltCard({ children }: { children: React.ReactNode }) {
   // 1. 마우스 좌표를 담을 MotionValue 생성
   const x = useMotionValue(0)
   const y = useMotionValue(0)

   // 2. 움직임을 부드럽게 만들기 위한 Spring 설정
   const mouseXSpring = useSpring(x)
   const mouseYSpring = useSpring(y)

   // 3. 좌표를 회전 각도(-20도 ~ 20도)로 변환
   // 센터를 0.5로 잡고 계산합니다.
   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['20deg', '-20deg'])
   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-20deg', '20deg'])

   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()

      const width = rect.width
      const height = rect.height

      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      // 중심점을 기준으로 -0.5 ~ 0.5 범위의 값으로 정규화
      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5

      x.set(xPct)
      y.set(yPct)
   }

   const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
   }

   return (
      <motion.div
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         draggable
         style={{
            rotateY,
            rotateX,
            transformStyle: 'preserve-3d', // 3D 효과를 위해 필수
         }}
         className="relative rounded-2xl from-white/20 to-white/5"
      >
         <div
            style={{ transform: 'translateZ(40px)' }} // 콘텐츠가 튀어나와 보이는 효과
            className="flex flex-col gap-4 border-l-1 border-zinc-800 p-2 pl-4 outline-zinc-800 hover:outline-[1px]"
         >
            {children}
         </div>
      </motion.div>
   )
}
