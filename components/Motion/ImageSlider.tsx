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
      }, 5000) // 3초마다 교체

      return () => clearInterval(timer)
   }, [images])

   return (
      <div className="relative h-full w-full overflow-hidden">
         {/* aspect-ratio는 부모인 Link에서 이미 잡았으므로 여기서는 h-full w-full만 있으면 됩니다 */}
         <AnimatePresence mode="wait">
            <MotionImg
               key={images[index]}
               src={images[index]}
               alt={alt}
               className="absolute inset-0 h-full w-full object-contain"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.6 }}
            />
         </AnimatePresence>
      </div>
   )
}
