// ClientWorks.jsx - Now with Horizontal Scroll
import React, { useEffect, useState, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { X, Sparkles, Eye, ExternalLink, ArrowRight } from 'lucide-react'
import { FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa'

import brandIdentity from '../../assets/services/brand-identity.png'
import socialMedia from '../../assets/services/social-media.jpg'
import dailyPosts from '../../assets/services/daily-posts.jpg'
import visualContent from '../../assets/services/visual-content.jpg'
import contentStrategy from '../../assets/services/content-strategy.jpg'
import videoContent from '../../assets/services/video-content.png'
// Import your social media post images
const clientWorks = [
  {
    id: 1,
    title: "Brand Identity Package",
    category: "Branding",
    image: brandIdentity,
    description: "Complete brand identity design including logo, color palette, and brand guidelines for a lifestyle brand.",
    socialLink: "https://instagram.com/p/your-post",
    platform: "Instagram",
    tags: ["Logo Design", "Brand Guidelines", "Color Palette"]
  },
  {
    id: 2,
    title: "Social Media Campaign",
    category: "Social Media",
    image:socialMedia,
    description: "Engaging Instagram story series that increased engagement by 45%.",
    socialLink: "https://instagram.com/p/your-post",
    platform: "Instagram",
    tags: ["Instagram Stories", "Engagement", "Campaign"]
  },
  {
    id: 3,
    title: "Daily Branding Post",
    category: "Content Creation",
    image: dailyPosts,
    description: "Consistent daily content that built brand loyalty and community engagement.",
    socialLink: "https://instagram.com/p/your-post",
    platform: "Instagram",
    tags: ["Daily Posts", "Brand Story", "Community"]
  },
  {
    id: 4,
    title: "Visual Identity System",
    category: "Branding",
    image: visualContent,
    description: "Complete visual identity system with custom illustrations and design elements.",
    socialLink: "https://instagram.com/p/your-post",
    platform: "Instagram",
    tags: ["Visual Identity", "Illustrations", "Design System"]
  },
  {
    id: 5,
    title: "Instagram Story Series",
    category: "Social Media",
    image: contentStrategy,
    description: "Engaging story series that boosted brand awareness and interaction.",
    socialLink: "https://instagram.com/p/your-post",
    platform: "Instagram",
    tags: ["Instagram Stories", "Interactive", "Engagement"]
  },
  {
    id: 6,
    title: "Content Calendar Design",
    category: "Content Creation",
    image: videoContent,
    description: "Strategic content calendar with consistent brand messaging.",
    socialLink: "https://instagram.com/p/your-post",
    platform: "Instagram",
    tags: ["Content Planning", "Strategy", "Consistency"]
  },
  // Add more works here...
]

function ClientWorks() {
  const [selectedWork, setSelectedWork] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState("All")
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const sliderRef = useRef(null)

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const categories = ["All", "Branding", "Social Media", "Content Creation", "Visual Design"]

  const filteredWorks = filter === "All" 
    ? clientWorks 
    : clientWorks.filter(work => work.category === filter)

  // Create array with duplicates for seamless looping
  const sliderWorks = [...filteredWorks, ...filteredWorks]

  const openModal = (work) => {
    setSelectedWork(work)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
    setIsAutoScrolling(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedWork(null)
    document.body.style.overflow = 'unset'
    setIsAutoScrolling(true)
  }

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

  return (
    <div id='ClientWorks' className='bg-white dark:bg-slate-900 text-black dark:text-white py-20 overflow-hidden'>
      
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
            <span className="text-fuchsia-600 dark:text-fuchsia-400 text-sm font-semibold">Portfolio Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text">Works</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my creative portfolio of branding and social media content
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category)
                setIsAutoScrolling(true)
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? 'bg-fuchsia-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/30'
              }`}
            >
              {category}
            </button>
          ))}
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
              {sliderWorks.map((work, index) => (
                <div
                  key={`${work.id}-${index}`}
                  className="flex-shrink-0 w-80 cursor-pointer group"
                  onClick={() => openModal(work)}
                >
                  <div className="relative h-96 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-fuchsia-100 dark:border-fuchsia-800">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={work.image} 
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end text-white p-6">
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 px-3 py-1 bg-fuchsia-500 text-white text-xs rounded-full">
                        {work.category}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                      
                      {/* Description */}
                      <p className="text-white/80 text-sm mb-4 line-clamp-2">
                        {work.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {work.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/30">
                        <span className="text-sm font-semibold">View Details</span>
                        <Eye size={16} className="group-hover:translate-x-1 transition-transform" />
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
              {filteredWorks.map((work, index) => (
                <div
                  key={work.id}
                  className="flex-shrink-0 w-80 snap-center cursor-pointer group"
                  onClick={() => openModal(work)}
                >
                  <div className="relative h-96 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-fuchsia-100 dark:border-fuchsia-800">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={work.image} 
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end text-white p-6">
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 px-3 py-1 bg-fuchsia-500 text-white text-xs rounded-full">
                        {work.category}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                      
                      {/* Description */}
                      <p className="text-white/80 text-sm mb-4 line-clamp-2">
                        {work.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {work.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/30">
                        <span className="text-sm font-semibold">View Details</span>
                        <Eye size={16} className="group-hover:translate-x-1 transition-transform" />
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

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No works found in this category</p>
          </div>
        )}
      </div>

      {/* Modal for Full View */}
      {isModalOpen && selectedWork && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
            >
              <X size={24} className="text-white" />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Image Section */}
              <div className="md:w-3/5 bg-gray-100 dark:bg-slate-800">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-full object-contain max-h-[70vh] md:max-h-[85vh]"
                />
              </div>

              {/* Details Section */}
              <div className="md:w-2/5 p-6 overflow-y-auto">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-600 dark:text-fuchsia-400 text-xs rounded-full mb-3">
                    {selectedWork.category}
                  </span>
                  <h2 className="text-2xl font-bold mb-2">{selectedWork.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedWork.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Services Provided:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedWork.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View on Social Media */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">View on Social Media:</h4>
                  <a
                    href={selectedWork.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    <FaInstagram size={18} />
                    View on {selectedWork.platform}
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Share & More */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Share this work:</p>
                  <div className="flex gap-3">
                    <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all">
                      <FaInstagram size={18} />
                    </a>
                    <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all">
                      <FaBehance size={18} />
                    </a>
                    <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all">
                      <FaDribbble size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default ClientWorks