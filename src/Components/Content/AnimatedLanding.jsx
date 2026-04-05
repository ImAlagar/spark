import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AnimatedLanding = () => {
  // Refs for scroll triggers
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.2 });

  // Controls for staggered animations
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const centerControls = useAnimation();

  useEffect(() => {
    if (isHeaderInView) {
      // Left side: hand waving animation sequence
      leftControls.start("visible");
      // Right side: image pop & float
      rightControls.start("visible");
      // Center: fade up & text reveal
      centerControls.start("visible");
    }
  }, [isHeaderInView, leftControls, rightControls, centerControls]);

  // Variants for the left hand element (waving + slide in)
  const leftVariants = {
    hidden: { x: -100, opacity: 0, rotate: -15 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: [0, 15, -10, 15, -5, 0],
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.2,
        duration: 1.2,
        rotate: {
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 2,
          duration: 0.6,
          ease: "easeInOut"
        }
      }
    }
  };

  // Variants for right side image (slide from right + gentle bounce)
  const rightVariants = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        delay: 0.3,
        duration: 0.8
      }
    }
  };

  // Variants for center content (fade up, text reveal)
  const centerVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: 0.5,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Main container */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 relative min-h-screen flex flex-col justify-center">
        
        {/* Navigation Bar (optional, just to enhance) */}
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex justify-between items-center mb-16 md:mb-24"
        >
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            BrandVoice
          </div>
          <div className="hidden md:flex space-x-8 text-gray-600">
            <a href="#" className="hover:text-indigo-600 transition">Solutions</a>
            <a href="#" className="hover:text-indigo-600 transition">Work</a>
            <a href="#" className="hover:text-indigo-600 transition">Insights</a>
          </div>
          <button className="px-5 py-2 rounded-full bg-white shadow-md text-indigo-600 font-medium hover:shadow-lg transition">
            Contact
          </button>
        </motion.nav>

        {/* Three column layout: left (hand), center (content), right (image) */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* LEFT SIDE: Animated Hand / Graphic */}
          <motion.div
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            variants={leftVariants}
            initial="hidden"
            animate={leftControls}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Hand drawing using SVG for perfect animation */}
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
                <motion.g
                  animate={{ rotate: [0, 12, -8, 10, -5, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.8, ease: "easeInOut" }}
                  transform-origin="100px 140px"
                >
                  {/* Palm */}
                  <path d="M70 120 C70 90, 90 70, 120 70 C150 70, 170 90, 170 120 L170 150 C170 170, 150 180, 120 180 C90 180, 70 170, 70 150 Z" fill="#FFD1B3" stroke="#E0A878" strokeWidth="2"/>
                  {/* Thumb */}
                  <path d="M70 120 C55 115, 45 105, 50 90 C55 75, 70 75, 75 85 L80 105" fill="#FFD1B3" stroke="#E0A878" strokeWidth="2"/>
                  {/* Index finger */}
                  <path d="M100 70 L95 35 C93 25, 100 18, 110 20 C118 22, 118 32, 115 40 L110 70" fill="#FFD1B3" stroke="#E0A878" strokeWidth="2"/>
                  {/* Middle finger */}
                  <path d="M120 68 L122 28 C124 18, 132 16, 138 22 C142 28, 138 38, 135 48 L130 68" fill="#FFD1B3" stroke="#E0A878" strokeWidth="2"/>
                  {/* Ring finger */}
                  <path d="M140 72 L148 45 C152 35, 160 34, 164 40 C166 46, 160 55, 155 62 L148 72" fill="#FFD1B3" stroke="#E0A878" strokeWidth="2"/>
                  {/* Pinky */}
                  <path d="M158 85 L170 68 C176 60, 186 62, 186 70 C186 78, 176 84, 168 92 L160 100" fill="#FFD1B3" stroke="#E0A878" strokeWidth="2"/>
                  {/* Wrist */}
                  <path d="M70 140 C65 155, 60 170, 65 185 L115 185 C120 170, 115 155, 110 140" fill="#FFD1B3" stroke="#E0A878" strokeWidth="2"/>
                  {/* Nail details */}
                  <circle cx="108" cy="22" r="3" fill="#FCE4D6"/>
                  <circle cx="133" cy="24" r="3" fill="#FCE4D6"/>
                  <circle cx="158" cy="44" r="2.5" fill="#FCE4D6"/>
                </motion.g>
                {/* Floating particles around hand */}
                <motion.circle cx="30" cy="50" r="4" fill="#8B5CF6" opacity="0.6"
                  animate={{ y: [0, -15, 0], x: [0, 8, 0], opacity: [0.6, 0.2, 0.6] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />
                <motion.circle cx="170" cy="40" r="3" fill="#EC4899" opacity="0.5"
                  animate={{ y: [0, -10, 0], x: [0, -5, 0], opacity: [0.5, 0.1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: 0.5, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </motion.div>

          {/* CENTER: Main Content */}
          <motion.div
            className="text-center lg:text-left order-1 lg:order-2 space-y-6 z-10"
            variants={centerVariants}
            initial="hidden"
            animate={centerControls}
          >
            <motion.div variants={itemVariants} className="inline-block">
              <span className="px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold tracking-wide">
                ✨ Your Growth. Our Strategy.
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                We turn your
              </span>
              <br />
              <span className="relative inline-block">
                brand into a voice
                <motion.span 
                  className="absolute bottom-2 left-0 w-full h-3 bg-yellow-200 -z-10 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0">
              Amplify your brand story with data-driven creativity. Stand out, connect deeper, and scale faster.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                Get Started →
              </button>
              <button className="px-8 py-3 rounded-full border-2 border-indigo-300 text-indigo-700 font-semibold hover:bg-indigo-50 transition">
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Animated Image */}
          <motion.div
            className="flex justify-center lg:justify-end order-3"
            variants={rightVariants}
            initial="hidden"
            animate={rightControls}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Abstract brand illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-3xl rotate-6 shadow-xl"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="relative w-full h-full">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-100 rounded-full blur-2xl"></div>
                  
                  {/* Central icon / graphic */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <svg width="120" height="120" viewBox="0 0 100 100" className="mx-auto">
                      <motion.circle cx="50" cy="50" r="40" fill="none" stroke="#8B5CF6" strokeWidth="3"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        strokeDasharray="10 20"
                      />
                      <motion.path d="M30 50 L45 65 L70 35" stroke="#EC4899" strokeWidth="6" fill="none" strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                      />
                      <motion.circle cx="50" cy="50" r="10" fill="#8B5CF6"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      />
                    </svg>
                    <p className="mt-4 text-indigo-600 font-medium">Voice recognition</p>
                  </div>
                  
                  {/* Floating small shapes */}
                  <motion.div 
                    className="absolute top-5 left-5 w-8 h-8 bg-yellow-300 rounded-lg"
                    animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  />
                  <motion.div 
                    className="absolute bottom-8 right-6 w-6 h-6 bg-pink-300 rounded-full"
                    animate={{ y: [0, 6, 0], x: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                  />
                  <motion.div 
                    className="absolute top-16 right-12 w-4 h-4 bg-indigo-400 rounded-full"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-indigo-50 opacity-60"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLanding;