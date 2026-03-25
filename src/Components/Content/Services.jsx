import React, { useState, useRef, useEffect } from 'react'
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
  Users,
  Clock,
  Award
} from 'lucide-react'
import { FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa'

// Import your service images (download from Freepik)
import brandIdentity from '../../assets/services/brand-identity.png'
import socialMedia from '../../assets/services/social-media.jpg'
import dailyPosts from '../../assets/services/daily-posts.jpg'
import visualContent from '../../assets/services/visual-content.jpg'
import contentStrategy from '../../assets/services/content-strategy.jpg'
import videoContent from '../../assets/services/video-content.png'

function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const sliderRef = useRef(null)

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
      stats: { projects: "15+", clients: "12+", satisfaction: "98%" }
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
      stats: { posts: "200+", engagement: "8.5%", reach: "50K+" }
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
      stats: { content: "500+", rate: "90%", growth: "45%" }
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
      stats: { designs: "300+", clients: "15+", rating: "4.9/5" }
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
      stats: { strategies: "25+", success: "95%", retention: "80%" }
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
      stats: { videos: "50+", views: "100K+", engagement: "12%" }
    }
  ]

  // Create array with duplicates for seamless looping
  const sliderServices = [...services, ...services]

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling)
  }

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -380, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 380, behavior: 'smooth' })
    }
  }

  const openModal = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
    setIsAutoScrolling(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
    document.body.style.overflow = 'unset'
    setIsAutoScrolling(true)
  }

  return (
    <div id='Services' className='bg-white dark:bg-slate-900 text-black dark:text-white py-20 overflow-hidden'>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
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

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/30 border border-fuchsia-200 dark:border-fuchsia-800 mb-6">
            <Sparkles size={18} className="text-fuchsia-500" />
            <span className="text-fuchsia-600 dark:text-fuchsia-400 text-sm font-semibold">Creative Services</span>
             <Sparkles size={18} className="text-fuchsia-500" />
          </div>
          
<h2 className="text-4xl md:text-5xl font-bold mb-4">
  What I <span className="text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text">Offer</span>
</h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Creative solutions to help your brand stand out and connect with your audience
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mb-8 gap-4">
          <button
            onClick={scrollLeft}
            className="p-3 rounded-full bg-white dark:bg-slate-800 border border-fuchsia-200 dark:border-fuchsia-800 text-gray-600 dark:text-gray-300 hover:text-fuchsia-600 hover:border-fuchsia-500 transition-all duration-300 shadow-lg"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={toggleAutoScroll}
            className="p-3 rounded-full bg-white dark:bg-slate-800 border border-fuchsia-200 dark:border-fuchsia-800 text-gray-600 dark:text-gray-300 hover:text-fuchsia-600 hover:border-fuchsia-500 transition-all duration-300 shadow-lg"
            aria-label={isAutoScrolling ? "Pause auto-scroll" : "Play auto-scroll"}
          >
            {isAutoScrolling ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
          
          <button
            onClick={scrollRight}
            className="p-3 rounded-full bg-white dark:bg-slate-800 border border-fuchsia-200 dark:border-fuchsia-800 text-gray-600 dark:text-gray-300 hover:text-fuchsia-600 hover:border-fuchsia-500 transition-all duration-300 shadow-lg"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Horizontal Scrolling Slider */}
        <div className="relative w-full overflow-hidden">
          {isAutoScrolling ? (
            <div
              className="flex gap-6 py-4"
              style={{
                animation: 'scroll 40s linear infinite',
                width: 'fit-content'
              }}
            >
              {sliderServices.map((service, index) => (
                <div
                  key={`${service.id}-${index}`}
                  className="flex-shrink-0 w-80 cursor-pointer group"
                  onClick={() => openModal(service)}
                >
                  <div className="relative h-96 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-fuchsia-100 dark:border-fuchsia-800">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end text-white p-6">
                      {/* Icon */}
                      <div className="mb-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          {React.cloneElement(service.icon, { className: "w-6 h-6 text-white" })}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      
                      {/* Tagline */}
                      <p className="text-white/80 text-sm mb-4">
                        {service.tagline}
                      </p>

                      {/* Stats */}
                      <div className="flex justify-between text-xs mb-4">
                        <div className="text-center">
                          <div className="font-bold text-white">
                            {Object.values(service.stats)[0]}
                          </div>
                          <div className="text-white/70 text-[10px]">
                            {Object.keys(service.stats)[0]}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-white">
                            {Object.values(service.stats)[1]}
                          </div>
                          <div className="text-white/70 text-[10px]">
                            {Object.keys(service.stats)[1]}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-white">
                            {Object.values(service.stats)[2]}
                          </div>
                          <div className="text-white/70 text-[10px]">
                            {Object.keys(service.stats)[2]}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/30">
                        <span className="text-sm font-semibold">Discover More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Accent Border */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-fuchsia-500 to-purple-500" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Manual scroll container
            <div 
              ref={sliderRef}
              className="flex gap-6 py-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="flex-shrink-0 w-80 snap-center cursor-pointer group"
                  onClick={() => openModal(service)}
                >
                  <div className="relative h-96 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-fuchsia-100 dark:border-fuchsia-800">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end text-white p-6">
                      {/* Icon */}
                      <div className="mb-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          {React.cloneElement(service.icon, { className: "w-6 h-6 text-white" })}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      
                      {/* Tagline */}
                      <p className="text-white/80 text-sm mb-4">
                        {service.tagline}
                      </p>

                      {/* Stats */}
                      <div className="flex justify-between text-xs mb-4">
                        <div className="text-center">
                          <div className="font-bold text-white">
                            {Object.values(service.stats)[0]}
                          </div>
                          <div className="text-white/70 text-[10px]">
                            {Object.keys(service.stats)[0]}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-white">
                            {Object.values(service.stats)[1]}
                          </div>
                          <div className="text-white/70 text-[10px]">
                            {Object.keys(service.stats)[1]}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-white">
                            {Object.values(service.stats)[2]}
                          </div>
                          <div className="text-white/70 text-[10px]">
                            {Object.keys(service.stats)[2]}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/30">
                        <span className="text-sm font-semibold">Discover More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Accent Border */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-fuchsia-500 to-purple-500" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div data-aos="fade-up" className="mt-16 text-center">
          <div className="bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Elevate Your Brand?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's work together to create amazing content that tells your story and grows your audience
            </p>
            <button className="bg-white text-fuchsia-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header with Image */}
            <div className="relative h-48">
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                className="w-full h-full object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-3xl" />
              
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X size={20} className="text-white" />
              </button>

              <div className="absolute bottom-4 left-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    {React.cloneElement(selectedService.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedService.title}</h2>
                    <p className="text-white/80">{selectedService.tagline}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-fuchsia-600 mb-2">Overview</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-fuchsia-600 mb-3">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 p-4 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-xl">
                <h3 className="text-lg font-semibold text-fuchsia-600 mb-3">Quick Stats</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(selectedService.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-2xl font-bold text-fuchsia-600">{value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-fuchsia-100 dark:border-fuchsia-800">
                <div className="flex gap-3">
                  <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all">
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all">
                    <FaBehance className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all">
                    <FaDribbble className="w-4 h-4" />
                  </a>
                </div>
                <button className="bg-fuchsia-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-fuchsia-600 transition-all">
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