// Testimonials.jsx
import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Creative Director",
      company: "Bloom Creative Studio",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "Working with this creative team has been absolutely amazing! They transformed our brand identity completely. The attention to detail and creative vision exceeded our expectations. Our engagement rates have increased by 200% since the rebrand.",
      rating: 5,
      date: "March 2024"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "TechFlow Solutions",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      content: "The social media content created for our brand has been outstanding. They understand our audience perfectly and consistently deliver high-quality, engaging content. Our follower count has grown by 150% in just 3 months!",
      rating: 5,
      date: "February 2024"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder & CEO",
      company: "EcoLiving Brands",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      content: "Absolutely phenomenal work! The brand identity they created perfectly captures our eco-friendly mission. Their creative process was collaborative and they truly listened to our vision. Highly recommended!",
      rating: 5,
      date: "January 2024"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Creative Lead",
      company: "Pixel Perfect Studio",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      content: "The visual content and daily branding posts have been game-changers for our social media presence. Their consistency and creativity have helped us build a loyal community. Best investment we've made!",
      rating: 5,
      date: "December 2023"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Brand Manager",
      company: "Luxury Living Co",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      content: "Exceptional service from start to finish. The team's creative direction and execution were flawless. They understood our luxury brand positioning and delivered content that truly resonates with our high-end audience.",
      rating: 5,
      date: "November 2023"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div id='Testimonials' className='bg-gradient-to-b from-white to-fuchsia-50 dark:from-slate-900 dark:to-slate-800 text-black dark:text-white py-20 overflow-hidden relative'>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-40 w-80 h-80 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/30 border border-fuchsia-200 dark:border-fuchsia-800 mb-6 relative">
            <Sparkles size={18} className="text-fuchsia-500 animate-pulse" />
            <span className="text-fuchsia-600 dark:text-fuchsia-400 text-sm font-semibold">Client Love</span>
            <Sparkles size={18} className="text-fuchsia-500 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text">Clients Say</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from amazing clients who trusted me with their creative vision
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-5xl mx-auto relative">
          {/* Main Testimonial Card */}
          <div className="relative" data-aos="fade-up">
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-fuchsia-100 dark:border-fuchsia-800">
              
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <Quote size={24} className="text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="mt-4">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-fuchsia-500"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{testimonials[currentIndex].date}</p>
                    </div>
                  </div>
                  
                  {/* Navigation Buttons */}
                  <div className="flex gap-2">
                    <button 
                      onClick={prevSlide}
                      className="p-2 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/50 hover:bg-fuchsia-500 hover:text-white transition-all duration-300"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="p-2 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/50 hover:bg-fuchsia-500 hover:text-white transition-all duration-300"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 h-2 bg-fuchsia-500 rounded-full'
                    : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-fuchsish-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16" data-aos="fade-up">
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-fuchsia-100 dark:border-fuchsia-800">
            <div className="text-3xl font-bold text-fuchsia-600">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-fuchsia-100 dark:border-fuchsia-800">
            <div className="text-3xl font-bold text-fuchsia-600">200+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-fuchsia-100 dark:border-fuchsia-800">
            <div className="text-3xl font-bold text-fuchsia-600">98%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-fuchsia-100 dark:border-fuchsia-800">
            <div className="text-3xl font-bold text-fuchsia-600">4.9/5</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Testimonials