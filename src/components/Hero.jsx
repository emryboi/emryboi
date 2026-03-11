import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ScramblingText from './ScramblingText'

const Hero = () => {
  const [showScrollDown, setShowScrollDown] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollDown(window.scrollY <= 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center bg-dark text-light overflow-hidden">
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl font-light tracking-widest uppercase mb-4"
        >
          EmryBoi
        </motion.div>
        
        <div className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-2 md:mb-4"
          >
            I Build Creative
          </motion.h1>
          <ScramblingText />
        </div>
      </div>

      {showScrollDown && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center mb-2">
            <ChevronDown size={32} className="text-gray-500" />
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default Hero 