// Services.jsx - Angled Cards Grid Layout (Fixed Overflow)
import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { 
  Palette, 
  Camera, 
  TrendingUp, 
  Layout, 
  PenTool, 
  Video,
  ArrowRight,
  Sparkles,
  X,
  CheckCircle,
  Star
} from 'lucide-react'
import { FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa'

// Import your service images
import brandIdentity from '../../assets/services/brand-identity.png'
import socialMedia from '../../assets/services/social-media.jpg'
import dailyPosts from '../../assets/services/daily-posts.jpg'
import visualContent from '../../assets/services/visual-content.jpg'
import contentStrategy from '../../assets/services/content-strategy.jpg'
import videoContent from '../../assets/services/video-content.png'

function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000 })
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const openModal = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
    document.body.style.overflow = 'unset'
  }

  const services = [
    {
      id: 1,
      title: "Brand Identity Design",
      tagline: "Create a unique visual identity",
      image: brandIdentity,
      icon: <Palette className="w-12 h-12" />,
      fullDesc: `I create comprehensive brand identities that tell your story and connect with your target audience. From logo design to complete brand guidelines, I ensure every element reflects your brand's personality and values.`,
      features: [
        "Logo & Visual Identity Design",
        "Brand Guidelines & Style Guide",
        "Color Palette & Typography",
        "Business Card & Stationery Design"
      ],
      stats: { projects: "15+", clients: "12+", satisfaction: "98%" },
      gradient: "from-pink-500 to-rose-500",
      rotate: "-2deg",
      translateY: "0px"
    },
    {
      id: 2,
      title: "Social Media Content",
      tagline: "Scroll-stopping content",
      image: socialMedia,
      icon: <Camera className="w-12 h-12" />,
      fullDesc: `I create engaging social media content that drives engagement and builds communities. Specializing in Instagram stories, reels, and daily posts that tell authentic stories and create meaningful connections.`,
      features: [
        "Instagram Stories & Reels",
        "Social Media Posts Design",
        "Content Calendar Planning",
        "Engagement Strategy"
      ],
      stats: { posts: "200+", engagement: "8.5%", reach: "50K+" },
      gradient: "from-purple-500 to-indigo-500",
      rotate: "1.5deg",
      translateY: "-5px"
    },
    {
      id: 3,
      title: "Daily Branding Posts",
      tagline: "Consistent brand presence",
      image: dailyPosts,
      icon: <TrendingUp className="w-12 h-12" />,
      fullDesc: `I help brands maintain a consistent presence with daily content that resonates with audiences. Strategic content planning ensures your brand stays top-of-mind and builds lasting relationships.`,
      features: [
        "Daily Content Creation",
        "Brand Storytelling",
        "Content Strategy Planning",
        "Audience Engagement"
      ],
      stats: { content: "500+", rate: "90%", growth: "45%" },
      gradient: "from-blue-500 to-cyan-500",
      rotate: "-1deg",
      translateY: "3px"
    },
    {
      id: 4,
      title: "Visual Content Creation",
      tagline: "Eye-catching visuals",
      image: visualContent,
      icon: <PenTool className="w-12 h-12" />,
      fullDesc: `From custom illustrations to graphic design elements, I create visual content that captures attention and communicates your message effectively across all digital platforms.`,
      features: [
        "Custom Illustrations",
        "Graphic Design Elements",
        "Infographics Design",
        "Visual Storytelling"
      ],
      stats: { designs: "300+", clients: "15+", rating: "4.9/5" },
      gradient: "from-orange-500 to-red-500",
      rotate: "2deg",
      translateY: "-2px"
    },
    {
      id: 5,
      title: "Content Strategy",
      tagline: "Strategic planning",
      image: contentStrategy,
      icon: <Layout className="w-12 h-12" />,
      fullDesc: `I develop comprehensive content strategies aligned with your business goals. From audience analysis to content calendars, I ensure every piece of content serves a purpose.`,
      features: [
        "Content Calendar Planning",
        "Audience Analysis",
        "Performance Tracking",
        "Strategy Optimization"
      ],
      stats: { strategies: "25+", success: "95%", retention: "80%" },
      gradient: "from-green-500 to-emerald-500",
      rotate: "-1.5deg",
      translateY: "4px"
    },
    {
      id: 6,
      title: "Video Content Creation",
      tagline: "Engaging video content",
      image: videoContent,
      icon: <Video className="w-12 h-12" />,
      fullDesc: `I create short-form video content optimized for social media platforms. From concept to final edit, I help you tell your story through compelling visual narratives.`,
      features: [
        "Short-form Videos",
        "Reels & TikToks",
        "Video Editing",
        "Motion Graphics"
      ],
      stats: { videos: "50+", views: "100K+", engagement: "12%" },
      gradient: "from-violet-500 to-purple-500",
      rotate: "2.5deg",
      translateY: "-3px"
    }
  ]

  return (
    <div id='Services' className='bg-white dark:bg-slate-900 text-black dark:text-white py-20 overflow-x-hidden relative'>
      
      {/* Decorative Background Elements - Fixed overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        {/* Grid Pattern Overlay - Hidden on mobile for performance */}
        <div className="hidden md:block absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
        
        {/* Floating Icons - Hidden on mobile */}
        <div className="hidden md:block absolute top-20 left-10 animate-float">
          <Palette className="w-8 h-8 text-fuchsia-300/30" />
        </div>
        <div className="hidden md:block absolute bottom-20 right-10 animate-float animation-delay-2000">
          <Camera className="w-8 h-8 text-purple-300/30" />
        </div>
        <div className="hidden md:block absolute top-1/3 right-20 animate-float animation-delay-1000">
          <TrendingUp className="w-6 h-6 text-fuchsia-300/30" />
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 relative z-10">
        
        {/* Header with Creative Design */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/30 border border-fuchsia-200 dark:border-fuchsia-800 mb-6 relative">
            <Sparkles size={18} className="text-fuchsia-500 animate-pulse" />
            <span className="text-fuchsia-600 dark:text-fuchsia-400 text-sm font-semibold">Creative Services</span>
            <Sparkles size={18} className="text-fuchsia-500 animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 blur-md"></div>
          </div>
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              What I 
              <span className="text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text"> Offer</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full"></div>
            </h2>
          </div>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6 px-4">
            Creative solutions to help your brand stand out and connect with your audience
          </p>
        </div>

        {/* Angled Grid Layout - Fixed overflow on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group cursor-pointer"
              style={{
                transform: !isMobile ? `rotate(${service.rotate}) translateY(${service.translateY})` : 'none',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = `rotate(0deg) translateY(-10px) scale(1.02)`
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = `rotate(${service.rotate}) translateY(${service.translateY}) scale(1)`
                }
              }}
              onClick={() => openModal(service)}
            >
              {/* Main Card with Shadow and Depth */}
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-fuchsia-100 dark:border-fuchsia-800">
                
                {/* Diagonal Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full shadow-lg transform rotate-6 group-hover:rotate-0 transition-all duration-300">
                      <span className="text-[10px] sm:text-xs font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                        FEATURED
                      </span>
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                      {React.cloneElement(service.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-white" })}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-fuchsia-600 transition-colors duration-300 flex items-center gap-2">
                    {service.title}
                    <Star size={14} className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline" />
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {service.tagline}
                  </p>
                  
                  {/* Stats Row - Responsive */}
                  <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {Object.entries(service.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm sm:text-base font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                          {value}
                        </div>
                        <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn More Button */}
                  <div className="flex items-center justify-between pt-2 group-hover:pt-1 transition-all duration-300">
                    <span className="text-xs sm:text-sm font-semibold text-fuchsia-600 flex items-center gap-2">
                      Learn More
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/50 flex items-center justify-center group-hover:bg-fuchsia-500 transition-all duration-300">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-fuchsia-500 group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-12 sm:h-12 overflow-hidden pointer-events-none">
                  <div className="absolute bottom-[-15px] right-[-15px] w-6 h-6 sm:w-8 sm:h-8 bg-fuchsia-500/20 rotate-45 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Creative CTA Section */}
        <div data-aos="fade-up" className="mt-16 sm:mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/15 border border-white/20 mb-4 sm:mb-6">
                <Sparkles size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-semibold">Limited Offer</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
                Ready to Elevate Your Brand?
              </h3>
              <p className="text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4">
                Let's work together to create amazing content that tells your story and grows your audience
              </p>
              <button className="group bg-white text-fuchsia-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-sm sm:text-base">
                Get a Free Quote
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal - Fixed for mobile */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto" onClick={closeModal}>
          <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-100 my-4" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${selectedService.gradient} mix-blend-multiply opacity-60`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors z-10"
              >
                <X size={16} className="sm:w-5 sm:h-5 text-white" />
              </button>

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br ${selectedService.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl transform -rotate-6`}>
                    {React.cloneElement(selectedService.icon, { className: "w-5 h-5 sm:w-7 sm:h-7 text-white" })}
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-2xl font-bold">{selectedService.title}</h2>
                    <p className="text-white/80 text-xs sm:text-sm">{selectedService.tagline}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 md:p-8">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-fuchsia-600 mb-2 sm:mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 sm:h-6 bg-fuchsia-500 rounded-full"></div>
                  Overview
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-fuchsia-600 mb-2 sm:mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 sm:h-6 bg-fuchsia-500 rounded-full"></div>
                  What's Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 group">
                      <CheckCircle size={14} className="sm:w-4 sm:h-4 text-fuchsia-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`mb-4 sm:mb-6 p-3 sm:p-5 bg-gradient-to-br ${selectedService.gradient} bg-opacity-10 rounded-xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/5"></div>
                <h3 className="text-base sm:text-lg font-semibold text-fuchsia-600 mb-2 sm:mb-4 relative z-10">Quick Stats</h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative z-10">
                  {Object.entries(selectedService.stats).map(([key, value]) => (
                    <div key={key} className="transform hover:scale-105 transition-transform">
                      <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                        {value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-fuchsia-100 dark:border-fuchsia-800">
                <div className="flex gap-2 sm:gap-3 order-2 sm:order-1">
                  <a href="#" className="p-1.5 sm:p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all transform hover:scale-110">
                    <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                  <a href="#" className="p-1.5 sm:p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all transform hover:scale-110">
                    <FaBehance className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                  <a href="#" className="p-1.5 sm:p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all transform hover:scale-110">
                    <FaDribbble className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
                <button className={`bg-gradient-to-r ${selectedService.gradient} text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold hover:shadow-xl transition-all hover:scale-105 order-1 sm:order-2 w-full sm:w-auto`}>
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Services