'use client'

import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MotionImg } from '.'

export function ImageSlider({ images, alt }: { images: string[]; alt: string }) {
   const [index, setIndex] = useState(0)

   useEffect(() => {
      if (images.length <= 1) return

      const timer = setInterval(() => {
         setIndex((prev) => (prev + 1) % images.length)
      }, 3000) // 3초마다 교체

      return () => clearInterval(timer)
   }, [images])

   return (
      <div
         className="relative w-full overflow-hidden"
         style={{
            aspectRatio: '16/9',
         }}
      >
         <AnimatePresence mode="wait">
            <MotionImg
               key={images[index]} // 키가 바뀌어야 애니메이션이 발생함
               src={images[index]}
               alt={alt}
               className="h-full w-full object-cover"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.4 }}
            />
         </AnimatePresence>
      </div>
   )
}
