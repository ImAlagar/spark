// Services.jsx - Icon Based Cards (No Images)
import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { 
  Palette, 
  Camera, 
  PenTool, 
  Globe,
  Smartphone,
  Search,
  Megaphone,
  Package,
  Presentation,
  Video,
  Coffee,
  Shirt,
  Sparkles,
  ArrowRight,
  X,
  CheckCircle,
  Star,
  Layout,
  TrendingUp
} from 'lucide-react'

function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000 })
    
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
      title: "Branding",
      tagline: "Create a lasting impression",
      icon: <Palette className="w-14 h-14" />,
      fullDesc: `We create powerful brand identities that leave a lasting impression. From logo design to complete brand guidelines, we help you build a brand that connects with your audience and stands out from the competition.`,
      features: [
        "Logo Design",
        "Brand Identity Development",
        "Brand Guidelines & Style Guide",
        "Color Palette & Typography"
      ],
      stats: { projects: "50+", clients: "40+", satisfaction: "99%" },
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20",
      rotate: "-2deg",
      translateY: "0px",
      iconBg: "bg-pink-100 dark:bg-pink-900/30"
    },
    {
      id: 2,
      title: "Digital",
      tagline: "Grow your online presence",
      icon: <Globe className="w-14 h-14" />,
      fullDesc: `We provide comprehensive digital solutions to help your business thrive online. From web development to SEO and digital marketing, we ensure your brand reaches the right audience.`,
      features: [
        "Web Design & Development",
        "Mobile App Development",
        "SEO Optimization",
        "Digital Marketing Strategy"
      ],
      stats: { websites: "30+", apps: "15+", growth: "150%" },
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20",
      rotate: "1.5deg",
      translateY: "-5px",
      iconBg: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      id: 3,
      title: "Designing",
      tagline: "Creative visual solutions",
      icon: <PenTool className="w-14 h-14" />,
      fullDesc: `Our creative design services bring your ideas to life. We create stunning visuals that capture attention and communicate your message effectively across all platforms.`,
      features: [
        "Logo Design",
        "Packaging Design",
        "Motion Graphics",
        "Presentations",
        "Social Media Posts"
      ],
      stats: { designs: "500+", clients: "60+", rating: "4.9/5" },
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
      rotate: "-1deg",
      translateY: "3px",
      iconBg: "bg-orange-100 dark:bg-orange-900/30"
    },
    {
      id: 4,
      title: "Photography",
      tagline: "Capture your brand story",
      icon: <Camera className="w-14 h-14" />,
      fullDesc: `Professional photography services that showcase your products, food, and fashion in the best light. High-quality images that tell your brand story and drive engagement.`,
      features: [
        "Product Photography",
        "Food Photography",
        "Fashion Photography",
        "Brand Photography"
      ],
      stats: { photos: "5000+", clients: "80+", satisfaction: "98%" },
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
      rotate: "2deg",
      translateY: "-2px",
      iconBg: "bg-green-100 dark:bg-green-900/30"
    }
  ]

  // Sub-service icons for modal
  const getSubIcon = (feature) => {
    if (feature.includes("Logo")) return <Palette size={14} />
    if (feature.includes("Web") || feature.includes("Mobile")) return <Globe size={14} />
    if (feature.includes("SEO") || feature.includes("Marketing")) return <TrendingUp size={14} />
    if (feature.includes("Packaging")) return <Package size={14} />
    if (feature.includes("Motion")) return <Video size={14} />
    if (feature.includes("Presentation")) return <Presentation size={14} />
    if (feature.includes("Social")) return <Megaphone size={14} />
    if (feature.includes("Product")) return <Camera size={14} />
    if (feature.includes("Food")) return <Coffee size={14} />
    if (feature.includes("Fashion")) return <Shirt size={14} />
    return <CheckCircle size={14} />
  }

  return (
    <div id='Services' className='bg-white dark:bg-slate-900 text-black dark:text-white py-20 overflow-x-hidden relative'>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
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
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/30 border border-fuchsia-200 dark:border-fuchsia-800 mb-6 relative">
            <Sparkles size={18} className="text-fuchsia-500 animate-pulse" />
            <span className="text-fuchsia-600 dark:text-fuchsia-400 text-sm font-semibold">Our Services</span>
            <Sparkles size={18} className="text-fuchsia-500 animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 blur-md"></div>
          </div>
          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              What 
              <span className="text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text"> We Offer</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full"></div>
            </h2>
          </div>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6 px-4">
            We offer end-to-end creative solutions, including printing, branding, and digital marketing to help your business grow.
          </p>
        </div>

        {/* Services Grid - Icon Based Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 relative">
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.bgGradient} dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-fuchsia-100 dark:border-fuchsia-800 h-full`}>
                
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-6 sm:p-8 text-center">
                  
                  {/* Icon Container with Animation */}
                  <div className="relative mb-6 flex justify-center">
                    <div className={`absolute inset-0 ${service.iconBg} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      {React.cloneElement(service.icon, { className: "w-12 h-12 text-white" })}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-fuchsia-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Tagline */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {service.tagline}
                  </p>
                  
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {Object.entries(service.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                          {value}
                        </div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs sm:text-sm font-semibold text-fuchsia-600 flex items-center gap-2">
                      View Details
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="w-7 h-7 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/50 flex items-center justify-center group-hover:bg-fuchsia-500 transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                  <div className={`absolute bottom-[-15px] right-[-15px] w-8 h-8 bg-gradient-to-r ${service.gradient} opacity-20 rotate-45 group-hover:scale-150 transition-transform duration-500`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div data-aos="fade-up" className="mt-16 sm:mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/15 border border-white/20 mb-4 sm:mb-6">
                <Sparkles size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-semibold">Let's Work Together</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
                Ready to Elevate Your Brand?
              </h3>
              <p className="text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4">
                We offer end-to-end creative solutions, including printing, branding, and digital marketing to help your business grow.
              </p>
              <button className="group bg-white text-fuchsia-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-sm sm:text-base">
                Get a Free Consultation
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto" onClick={closeModal}>
          <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-100 my-4" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header with Icon */}
            <div className={`relative bg-gradient-to-r ${selectedService.gradient} p-6 sm:p-8`}>
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors z-10"
              >
                <X size={16} className="sm:w-5 sm:h-5 text-white" />
              </button>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white/20 rounded-2xl mb-4 mx-auto">
                  {React.cloneElement(selectedService.icon, { className: "w-10 h-10 sm:w-12 sm:h-12 text-white" })}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">{selectedService.title}</h2>
                <p className="text-white/80 text-sm sm:text-base mt-1">{selectedService.tagline}</p>
              </div>
            </div>

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
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${selectedService.gradient} flex items-center justify-center p-1`}>
                        {getSubIcon(feature)}
                      </div>
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

              <div className="flex flex-col sm:flex-row justify-center pt-4 border-t border-fuchsia-100 dark:border-fuchsia-800">
                <button className={`bg-gradient-to-r ${selectedService.gradient} text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto`}>
                  Get a Quote for {selectedService.title}
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