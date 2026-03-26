// Services.jsx - Angled Cards Grid Layout
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

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

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

  return (
    <div id='Services' className='bg-white dark:bg-slate-900 text-black dark:text-white py-20 overflow-hidden relative'>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <Palette className="w-8 h-8 text-fuchsia-300/30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float animation-delay-2000">
          <Camera className="w-8 h-8 text-purple-300/30" />
        </div>
        <div className="absolute top-1/3 right-20 animate-float animation-delay-1000">
          <TrendingUp className="w-6 h-6 text-fuchsia-300/30" />
        </div>
      </div>

      <div className="lg:px-40 px-10 relative z-10">
        
        {/* Header with Creative Design */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/30 border border-fuchsia-200 dark:border-fuchsia-800 mb-6 relative">
            <Sparkles size={18} className="text-fuchsia-500 animate-pulse" />
            <span className="text-fuchsia-600 dark:text-fuchsia-400 text-sm font-semibold">Creative Services</span>
            <Sparkles size={18} className="text-fuchsia-500 animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 blur-md"></div>
          </div>
          
          <div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                      What I 
                      <span className="text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text"> Offer</span>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full"></div>
                    </h2>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6">
            Creative solutions to help your brand stand out and connect with your audience
          </p>
        </div>

        {/* Angled Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group cursor-pointer"
              style={{
                transform: `rotate(${service.rotate}) translateY(${service.translateY})`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `rotate(0deg) translateY(-10px) scale(1.02)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${service.rotate}) translateY(${service.translateY}) scale(1)`
              }}
              onClick={() => openModal(service)}
            >
              {/* Main Card with Shadow and Depth */}
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-fuchsia-100 dark:border-fuchsia-800">
                
                {/* Diagonal Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge with Rotation */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg transform rotate-6 group-hover:rotate-0 transition-all duration-300">
                      <span className="text-xs font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                        FEATURED
                      </span>
                    </div>
                  </div>
                  
                  {/* Icon with Rotation */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                      {React.cloneElement(service.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-fuchsia-600 transition-colors duration-300 flex items-center gap-2">
                    {service.title}
                    <Star size={14} className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {service.tagline}
                  </p>
                  
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {Object.entries(service.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-base font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                          {value}
                        </div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn More Button */}
                  <div className="flex items-center justify-between pt-2 group-hover:pt-1 transition-all duration-300">
                    <span className="text-sm font-semibold text-fuchsia-600 flex items-center gap-2">
                      Learn More
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="w-7 h-7 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/50 flex items-center justify-center group-hover:bg-fuchsia-500 transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                  <div className="absolute bottom-[-15px] right-[-15px] w-8 h-8 bg-fuchsia-500/20 rotate-45 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Creative CTA Section */}
        <div data-aos="fade-up" className="mt-20 relative">

          {/* Soft background glow (reduced) */}
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-3xl blur-xl opacity-20"></div>

          <div className="relative bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-xl">

            {/* subtle light shapes */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 text-center">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 mb-6">
                <Sparkles size={16} />
                <span className="text-sm font-semibold">Limited Offer</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                Ready to Elevate Your Brand?
              </h3>

              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Let's work together to create amazing content that tells your story and grows your audience
              </p>

              <button className="group bg-white text-fuchsia-600 px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                Get a Free Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-100" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="relative h-56 overflow-hidden">
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${selectedService.gradient} mix-blend-multiply opacity-60`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors z-10"
              >
                <X size={20} className="text-white" />
              </button>

              <div className="absolute bottom-6 left-6 text-white z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-14 h-14 bg-gradient-to-br ${selectedService.gradient} rounded-2xl flex items-center justify-center shadow-xl transform -rotate-6`}>
                    {React.cloneElement(selectedService.icon, { className: "w-7 h-7 text-white" })}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedService.title}</h2>
                    <p className="text-white/80">{selectedService.tagline}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-fuchsia-600 mb-3 flex items-center gap-2">
                  <div className="w-1 h-6 bg-fuchsia-500 rounded-full"></div>
                  Overview
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-fuchsia-600 mb-3 flex items-center gap-2">
                  <div className="w-1 h-6 bg-fuchsia-500 rounded-full"></div>
                  What's Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 group">
                      <CheckCircle size={16} className="text-fuchsia-500 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`mb-6 p-5 bg-gradient-to-br ${selectedService.gradient} bg-opacity-10 rounded-xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/5"></div>
                <h3 className="text-lg font-semibold text-fuchsia-600 mb-4 relative z-10">Quick Stats</h3>
                <div className="grid grid-cols-3 gap-4 text-center relative z-10">
                  {Object.entries(selectedService.stats).map(([key, value]) => (
                    <div key={key} className="transform hover:scale-105 transition-transform">
                      <div className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-fuchsia-100 dark:border-fuchsia-800">
                <div className="flex gap-3">
                  <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all transform hover:scale-110">
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all transform hover:scale-110">
                    <FaBehance className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all transform hover:scale-110">
                    <FaDribbble className="w-4 h-4" />
                  </a>
                </div>
                <button className={`bg-gradient-to-r ${selectedService.gradient} text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-xl transition-all hover:scale-105`}>
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