import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { X, Sparkles, Eye, ExternalLink } from 'lucide-react'
import { FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa'

// Import your social media post images
// You can organize them by category
const clientWorks = [
  {
    id: 1,
    title: "Brand Identity Package",
    category: "Branding",
    image: "/path/to/your/image1.jpg",
    description: "Complete brand identity design including logo, color palette, and brand guidelines for a lifestyle brand.",
    socialLink: "https://instagram.com/p/your-post",
    platform: "Instagram",
    tags: ["Logo Design", "Brand Guidelines", "Color Palette"]
  },
  {
    id: 2,
    title: "Social Media Campaign",
    category: "Social Media",
    image: "/path/to/your/image2.jpg",
    description: "Engaging Instagram story series that increased engagement by 45%.",
    socialLink: "https://instagram.com/p/your-post",
    platform: "Instagram",
    tags: ["Instagram Stories", "Engagement", "Campaign"]
  },
  {
    id: 3,
    title: "Daily Branding Post",
    category: "Content Creation",
    image: "/path/to/your/image3.jpg",
    description: "Consistent daily content that built brand loyalty and community engagement.",
    socialLink: "https://instagram.com/p/your-post",
    platform: "Instagram",
    tags: ["Daily Posts", "Brand Story", "Community"]
  },
  // Add more works here...
]

function ClientWorks() {
  const [selectedWork, setSelectedWork] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState("All")
  const [visibleCount, setVisibleCount] = useState(12)

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const categories = ["All", "Branding", "Social Media", "Content Creation", "Visual Design"]

  const filteredWorks = filter === "All" 
    ? clientWorks 
    : clientWorks.filter(work => work.category === filter)

  const displayedWorks = filteredWorks.slice(0, visibleCount)

  const openModal = (work) => {
    setSelectedWork(work)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedWork(null)
    document.body.style.overflow = 'unset'
  }

  const loadMore = () => {
    setVisibleCount(prev => prev + 12)
  }

  return (
    <div id='ClientWorks' className='bg-white dark:bg-slate-900 text-black dark:text-white py-20 overflow-hidden'>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="lg:px-56 px-10 relative z-10">
        
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
                setVisibleCount(12)
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

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedWorks.map((work, index) => (
            <div
              key={work.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative cursor-pointer"
              onClick={() => openModal(work)}
            >
              {/* Image Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-slate-800 aspect-square">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-xs text-fuchsia-300 mb-1">{work.category}</p>
                    <h3 className="font-bold text-lg mb-2">{work.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <Eye size={14} />
                      <span>View Details</span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-fuchsia-500 text-white text-xs rounded-full">
                  {work.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredWorks.length > visibleCount && (
          <div className="text-center mt-12" data-aos="fade-up">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Load More Works
            </button>
          </div>
        )}

        {/* Empty State */}
        {displayedWorks.length === 0 && (
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
                      <Instagram size={18} />
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