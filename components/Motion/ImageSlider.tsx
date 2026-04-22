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
      <div
         className="relative w-full overflow-hidden"
         style={{
            aspectRatio: '16/9',
         }}
      >
         <AnimatePresence>
            <MotionImg
               key={images[index]}
               src={images[index]}
               alt={alt}
               className="absolute inset-0 h-full w-full object-cover"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.6 }}
            />
         </AnimatePresence>
      </div>
   )
}
