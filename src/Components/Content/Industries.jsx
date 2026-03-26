// Industries.jsx - Enhanced Orbital Version
import React, { useEffect, useState, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Sparkles, Palette, Camera, TrendingUp, Star, Zap, Award } from 'lucide-react'

function Industries() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const [activeIndustry, setActiveIndustry] = useState(null)
  const [rotation, setRotation] = useState(0)
  const animationRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const industries = [
    { id: 1, name: "Fashion & Retail", icon: "👗", baseAngle: 0, gradient: "from-pink-500 to-rose-500", description: "Creating stunning visual identities for fashion brands" },
    { id: 2, name: "Food & Beverage", icon: "🍜", baseAngle: 36, gradient: "from-orange-500 to-amber-500", description: "Delicious branding that makes your restaurant stand out" },
    { id: 3, name: "Technology", icon: "💻", baseAngle: 72, gradient: "from-blue-500 to-cyan-500", description: "Modern and innovative branding for tech startups" },
    { id: 4, name: "Health & Wellness", icon: "💚", baseAngle: 108, gradient: "from-emerald-500 to-teal-500", description: "Authentic branding for health-conscious audiences" },
    { id: 5, name: "Beauty & Cosmetics", icon: "💄", baseAngle: 144, gradient: "from-rose-500 to-pink-500", description: "Elegant and luxurious branding for beauty brands" },
    { id: 6, name: "Corporate", icon: "💼", baseAngle: 180, gradient: "from-slate-500 to-gray-500", description: "Professional branding solutions for corporate clients" },
    { id: 7, name: "Education", icon: "🎓", baseAngle: 216, gradient: "from-indigo-500 to-purple-500", description: "Inspiring visual identities for educational institutions" },
    { id: 8, name: "Real Estate", icon: "🏠", baseAngle: 252, gradient: "from-amber-500 to-yellow-500", description: "Trustworthy branding for property businesses" },
    { id: 9, name: "Fitness", icon: "💪", baseAngle: 288, gradient: "from-red-500 to-orange-500", description: "Energetic branding for gyms and fitness studios" },
    { id: 10, name: "Luxury", icon: "💎", baseAngle: 324, gradient: "from-purple-500 to-fuchsia-500", description: "Premium branding for luxury products" }
  ]

  // Gentle rotation animation (slower speed)
  useEffect(() => {
    let lastTimestamp = 0
    const rotationSpeed = 0.008 // Much slower, more elegant rotation
    
    const animate = (timestamp) => {
      if (lastTimestamp === 0) {
        lastTimestamp = timestamp
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      
      const deltaTime = timestamp - lastTimestamp
      setRotation(prev => (prev + deltaTime * rotationSpeed) % 360)
      lastTimestamp = timestamp
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Responsive radius
  const getRadius = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 ? 300 : 200
    }
    return 300
  }

  const radius = getRadius()

  return (
    <div id='Industries' className='bg-gradient-to-br from-white via-fuchsia-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-20 overflow-hidden relative min-h-screen flex items-center'>
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs - Enhanced for light theme */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-fuchsia-200/40 to-purple-200/40 dark:from-fuchsia-400/20 dark:to-purple-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-purple-200/40 to-pink-200/40 dark:from-purple-400/20 dark:to-pink-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        
        {/* Floating particles - More visible in light mode */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            >
              <Star size={8 + Math.random() * 8} className="text-fuchsia-400/40 dark:text-fuchsia-400/20" />
            </div>
          ))}
        </div>
        
        {/* Elegant grid pattern - More visible in light mode */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(192,38,211,0.1)_100%),linear-gradient(0deg,transparent_95%,rgba(192,38,211,0.1)_100%)] dark:bg-[linear-gradient(90deg,transparent_95%,rgba(192,38,211,0.05)_100%),linear-gradient(0deg,transparent_95%,rgba(192,38,211,0.05)_100%)] bg-[size:40px_40px]"></div>
        
        {/* Floating icons with subtle animation - Enhanced for light theme */}
        <div className="absolute top-20 left-10 animate-float-slow">
          <Palette className="w-10 h-10 text-fuchsia-400/40 dark:text-fuchsia-400/20" />
        </div>
        <div className="absolute bottom-32 right-20 animate-float-slow animation-delay-3000">
          <Camera className="w-12 h-12 text-purple-400/40 dark:text-purple-400/20" />
        </div>
        <div className="absolute top-1/3 right-32 animate-float-slow animation-delay-1500">
          <TrendingUp className="w-8 h-8 text-fuchsia-400/40 dark:text-fuchsia-400/20" />
        </div>
        <div className="absolute bottom-1/4 left-20 animate-float-slow animation-delay-4000">
          <Zap className="w-8 h-8 text-amber-400/40 dark:text-amber-400/20" />
        </div>
        <div className="absolute top-2/3 left-40 animate-float-slow animation-delay-2500">
          <Award className="w-8 h-8 text-purple-400/40 dark:text-purple-400/20" />
        </div>
        
        {/* Radial gradient vignette - Lighter for light theme */}
        <div className="absolute inset-0 bg-radial-gradient-light dark:bg-radial-gradient from-transparent via-transparent to-white/30 dark:to-slate-900/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header with creative elements */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 backdrop-blur-sm border border-fuchsia-200/50 dark:border-fuchsia-800/50 mb-6">
            <Sparkles size={18} className="text-fuchsia-500 animate-pulse" />
            <span className="text-fuchsia-600 dark:text-fuchsia-400 text-sm font-semibold tracking-wider">INDUSTRIES WE SERVE</span>
            <Sparkles size={18} className="text-fuchsia-500 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-fuchsia-800 to-purple-900 dark:from-white dark:via-fuchsia-300 dark:to-purple-300 bg-clip-text text-transparent">
            Expertise Across Industries
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Specialized branding solutions tailored to your unique industry needs
          </p>
        </div>

        {/* Orbital Circle with creative elements */}
        <div className="relative flex justify-center items-center min-h-[550px] md:min-h-[650px]" data-aos="zoom-in" data-aos-delay="200">
          {/* Decorative rings with creative styling */}
          <div className="absolute w-[320px] h-[320px] md:w-[560px] md:h-[560px] rounded-full">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-fuchsia-300/50 dark:border-fuchsia-700/30 animate-spin-slow"></div>
            <div className="absolute inset-[15px] rounded-full border border-fuchsia-200/30 dark:border-fuchsia-800/20 animate-spin-slower"></div>
            <div className="absolute inset-[30px] rounded-full bg-gradient-to-r from-fuchsia-500/5 to-purple-500/5 blur-sm"></div>
            
            {/* Glowing dots on rings */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-fuchsia-400/50 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${i * 45}deg) translateX(${radius + 10}px)`,
                  transformOrigin: '0 0'
                }}
              ></div>
            ))}
          </div>
          
          {/* Center piece with creative design */}
          <div className="relative z-20 text-center group">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-[-10px] bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              {/* Main center element */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-fuchsia-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping-slow"></div>
                <Sparkles size={48} className="text-white relative z-10" />
              </div>
              
              {/* Rotating ring around center */}
              <div className="absolute inset-[-15px] rounded-full border border-fuchsia-400/30 animate-spin-reverse"></div>
            </div>
            
            {/* Active industry tooltip */}
            {activeIndustry && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-72 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-fuchsia-200 dark:border-fuchsia-800 animate-fade-up z-30">
                <div className={`w-12 h-12 bg-gradient-to-r ${activeIndustry.gradient} rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg`}>
                  <span className="text-2xl">{activeIndustry.icon}</span>
                </div>
                <h3 className="font-bold text-xl text-center mb-2">{activeIndustry.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{activeIndustry.description}</p>
              </div>
            )}
          </div>

          {/* Orbiting Items with enhanced styling */}
          {industries.map((industry, index) => {
            const currentAngle = (industry.baseAngle + rotation) % 360
            const x = Math.cos(currentAngle * Math.PI / 180) * radius
            const y = Math.sin(currentAngle * Math.PI / 180) * radius
            const isHovered = hoveredIndex === industry.id
            
            return (
              <div
                key={industry.id}
                className="absolute cursor-pointer transition-all duration-500 ease-out"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  left: '50%',
                  top: '50%',
                  transition: 'transform 0.5s cubic-bezier(0.34, 1.2, 0.64, 1)'
                }}
                onMouseEnter={() => {
                  setActiveIndustry(industry)
                  setHoveredIndex(industry.id)
                }}
                onMouseLeave={() => {
                  setActiveIndustry(null)
                  setHoveredIndex(null)
                }}
              >
                <div className={`relative group/item`}>
                  {/* Outer glow on hover */}
                  {isHovered && (
                    <div className={`absolute inset-[-8px] bg-gradient-to-r ${industry.gradient} rounded-full blur-md opacity-50 animate-pulse`}></div>
                  )}
                  
                  {/* Icon container */}
                  <div className={`w-14 h-14 md:w-18 md:h-18 bg-gradient-to-br ${industry.gradient} rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                    isHovered ? 'scale-110 shadow-xl' : 'scale-100'
                  }`}>
                    <span className="text-2xl md:text-3xl filter drop-shadow-sm">{industry.icon}</span>
                  </div>
                  
                  {/* Label with creative styling */}
                  <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
                      {industry.name}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Creative notice with animated border */}
        <div className="mt-24 text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-fuchsia-50 via-white to-purple-50 dark:from-fuchsia-900/20 dark:via-slate-800/50 dark:to-purple-900/20 rounded-full border border-fuchsia-200/50 dark:border-fuchsia-800/50 shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/10 to-purple-500/0 animate-shimmer"></div>
            <Sparkles size={18} className="text-fuchsia-500 animate-spin-slow" />
            <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
              No matter your industry, I'll help you create a brand that stands out
            </span>
            <Sparkles size={18} className="text-purple-500 animate-spin-slow" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Industries