// Brand.jsx - Horizontal Scroll Carousel for Brand Logos (Circle Shape)
import React, { useEffect, useState, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { X, Sparkles, Eye, ExternalLink } from 'lucide-react'

// Import your brand logos here
import brand1 from '../../assets/brands/brand1.jpg'
import brand2 from '../../assets/brands/brand2.jpg'
import brand3 from '../../assets/brands/brand3.jpg'
import brand4 from '../../assets/brands/brand4.jpg'
import brand5 from '../../assets/brands/brand5.jpg'
import brand6 from '../../assets/brands/brand6.jpg'
import brand7 from '../../assets/brands/brand7.jpg'
import brand8 from '../../assets/brands/brand8.jpg'

const brands = [
  {
    id: 1,
    name: "Nike",
    logo: brand1,
    description: "Global leader in athletic footwear and apparel",
    website: "https://nike.com",
    industry: "Sports & Fashion"
  },
  {
    id: 2,
    name: "Apple",
    logo: brand2,
    description: "Innovative technology company",
    website: "https://apple.com",
    industry: "Technology"
  },
  {
    id: 3,
    name: "Adidas",
    logo: brand3,
    description: "German multinational sportswear brand",
    website: "https://adidas.com",
    industry: "Sports & Fashion"
  },
  {
    id: 4,
    name: "Starbucks",
    logo: brand4,
    description: "Global coffeehouse chain",
    website: "https://starbucks.com",
    industry: "Food & Beverage"
  },
  {
    id: 5,
    name: "Coca-Cola",
    logo: brand5,
    description: "Beverage company and soft drink manufacturer",
    website: "https://coca-cola.com",
    industry: "Beverage"
  },
  {
    id: 6,
    name: "Samsung",
    logo: brand6,
    description: "Electronics and technology giant",
    website: "https://samsung.com",
    industry: "Technology"
  },
  {
    id: 7,
    name: "McDonald's",
    logo: brand7,
    description: "Global fast-food restaurant chain",
    website: "https://mcdonalds.com",
    industry: "Food & Beverage"
  },
  {
    id: 8,
    name: "Google",
    logo: brand8,
    description: "Technology company specializing in internet services",
    website: "https://google.com",
    industry: "Technology"
  },
]

function Brand() {
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const sliderRef = useRef(null)

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  // Create array with duplicates for seamless looping
  const sliderBrands = [...brands, ...brands]

  const openModal = (brand) => {
    setSelectedBrand(brand)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
    setIsAutoScrolling(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedBrand(null)
    document.body.style.overflow = 'unset'
    setIsAutoScrolling(true)
  }

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling)
  }

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -280, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 280, behavior: 'smooth' })
    }
  }

  return (
    <div id='Brand' className='bg-gradient-to-br from-white via-fuchsia-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 text-black dark:text-white py-20 overflow-hidden'>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="lg:px-40 px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/30 border border-fuchsia-200 dark:border-fuchsia-800 mb-6">
            <Sparkles size={18} className="text-fuchsia-500" />
            <span className="text-fuchsia-600 dark:text-fuchsia-400 text-sm font-semibold">Trusted By</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Brands We've <span className="text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text">Worked With</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Partnering with leading brands to create impactful digital experiences
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

        {/* Horizontal Scrolling Slider - Circle Brand Logos */}
        <div className="relative w-full overflow-hidden">
          {isAutoScrolling ? (
            <div
              className="flex gap-12 py-8"
              style={{
                animation: 'scroll 30s linear infinite',
                width: 'fit-content'
              }}
            >
              {sliderBrands.map((brand, index) => (
                <div
                  key={`${brand.id}-${index}`}
                  className="flex-shrink-0 w-40 cursor-pointer group"
                  onClick={() => openModal(brand)}
                >
                  <div className="relative">
                    {/* Outer Circle with Gradient Border */}
                    <div className="relative w-40 h-40 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 p-[3px] group-hover:scale-110 transition-all duration-500">
                      {/* Inner Circle - White Background */}
                      <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                        {/* Logo Image */}
                        <img 
                          src={brand.logo} 
                          alt={brand.name}
                          className="w-28 h-28 object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Brand Name Below Circle */}
                    <div className="text-center mt-4">
                      <h3 className="text-base font-bold mb-1">{brand.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{brand.industry}</p>
                    </div>

                    {/* Hover Overlay Effect */}
                    <div className="absolute inset-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-fuchsia-500/80 to-purple-500/80 flex items-center justify-center">
                        <Eye size={28} className="text-white" />
                      </div>
                    </div>

                    {/* Floating Animation on Hover */}
                    <div className="absolute -inset-2 rounded-full bg-fuchsia-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Manual scroll container
            <div 
              ref={sliderRef}
              className="flex gap-12 py-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="flex-shrink-0 w-40 snap-center cursor-pointer group"
                  onClick={() => openModal(brand)}
                >
                  <div className="relative">
                    {/* Outer Circle with Gradient Border */}
                    <div className="relative w-40 h-40 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 p-[3px] group-hover:scale-110 transition-all duration-500">
                      {/* Inner Circle - White Background */}
                      <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                        {/* Logo Image */}
                        <img 
                          src={brand.logo} 
                          alt={brand.name}
                          className="w-28 h-28 object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Brand Name Below Circle */}
                    <div className="text-center mt-4">
                      <h3 className="text-base font-bold mb-1">{brand.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{brand.industry}</p>
                    </div>

                    {/* Hover Overlay Effect */}
                    <div className="absolute inset-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-fuchsia-500/80 to-purple-500/80 flex items-center justify-center">
                        <Eye size={28} className="text-white" />
                      </div>
                    </div>

                    {/* Floating Animation on Hover */}
                    <div className="absolute -inset-2 rounded-full bg-fuchsia-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal for Full View */}
      {isModalOpen && selectedBrand && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
            >
              <X size={24} className="text-white" />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Logo Section - Circle Shape in Modal */}
              <div className="md:w-1/2 bg-gradient-to-br from-fuchsia-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 flex items-center justify-center p-8">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                    <img
                      src={selectedBrand.logo}
                      alt={selectedBrand.name}
                      className="w-52 h-52 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="md:w-1/2 p-8 overflow-y-auto">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-600 dark:text-fuchsia-400 text-xs rounded-full mb-3">
                    {selectedBrand.industry}
                  </span>
                  <h2 className="text-3xl font-bold mb-3">{selectedBrand.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedBrand.description}
                  </p>
                </div>

                {/* Website Link */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Visit Website:</h4>
                  <a
                    href={selectedBrand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    Visit {selectedBrand.name}
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Partnership Info */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We're proud to partner with innovative brands worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Brand