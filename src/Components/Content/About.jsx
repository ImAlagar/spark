import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { 
  ArrowRight, 
  Sparkles, 
  Target, 
  Eye
} from 'lucide-react'
import aboutImg from '../../assets/abo.png' // Add your vector image here

function About() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div id='About' className='bg-gradient-to-br from-white via-fuchsia-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 text-black dark:text-white py-20 overflow-hidden'>
      <div className="lg:px-40 px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-fuchsia-500 uppercase tracking-wider text-sm font-semibold mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            About AdBase Creatives
            <Sparkles className="w-4 h-4" />
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Your Brand, <span className="text-fuchsia-500">Powered by</span> Smart Marketing
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Hero Section with Image and Tagline */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image */}
          <div className="relative" data-aos="fade-right">
              <img 
                src={aboutImg} 
                alt="AdBase Creatives" 
                className="relative w-full max-w-md mx-auto rounded-2xl hover:scale-105 transition-transform duration-500"
              />

          </div>

          {/* Right - Main Description */}
          <div className="space-y-4" data-aos="fade-left">
            <h3 className="text-3xl font-bold leading-tight">
              We Help Brands Grow Through{' '}
              <span className="text-fuchsia-500">Strategy-Driven Content</span> & Digital Marketing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              We blend creativity with performance to deliver content that engages, converts, 
              and scales your business. Your brand, powered by smart marketing.
            </p>
          </div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div 
            className="group relative bg-gradient-to-br from-fuchsia-50 to-purple-50 dark:from-fuchsia-900/10 dark:to-purple-900/10 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/0 to-purple-500/0 rounded-2xl group-hover:from-fuchsia-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-fuchsia-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our <span className="text-fuchsia-500">Vision</span></h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To become a trusted growth partner for brands by delivering creative and performance-driven 
                marketing solutions that create real impact.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div 
            className="group relative bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/10 dark:to-fuchsia-900/10 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-fuchsia-500/0 rounded-2xl group-hover:from-purple-500/5 group-hover:to-fuchsia-500/5 transition-all duration-500"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our <span className="text-purple-500">Mission</span></h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To help businesses grow through strategic content, powerful storytelling, and result-oriented 
                digital marketing that drives engagement, visibility, and conversions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center" data-aos="fade-up">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300 hover:scale-105"
          >
            Let's Grow Your Brand <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default About