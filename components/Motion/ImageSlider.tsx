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
      }, 3000)
      return () => clearInterval(timer)
   }, [images])

   return (
      // aspect-video로 고정된 영역을 확보하여 레이아웃 시프트 방지
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
         <AnimatePresence initial={false}>
            <MotionImg
               key={images[index]}
               src={images[index]}
               alt={alt}
               className="absolute inset-0 h-full w-full object-cover" // absolute로 겹치기
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
         </AnimatePresence>
      </div>
   )
}
