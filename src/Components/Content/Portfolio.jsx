// Portfolio.jsx - 3D Book Flip Layout (Fixed Height & Responsive Modal)
import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight,
  ZoomIn,
  Download,
  Share2,
  Heart,
  BookOpen
} from 'lucide-react'

// Import your images here
import socialImg1 from '../../assets/portfolio/social-media.jpg'
import socialImg2 from '../../assets/portfolio/social-media.jpg'
import socialImg3 from '../../assets/portfolio/social-media.jpg'
import socialImg4 from '../../assets/portfolio/social-media.jpg'
import brandingImg1 from '../../assets/portfolio/brand-identity.png'
import brandingImg2 from '../../assets/portfolio/brand-identity.png'
import brandingImg3 from '../../assets/portfolio/brand-identity.png'
import digitalImg1 from '../../assets/portfolio/visual-content.jpg'
import digitalImg2 from '../../assets/portfolio/visual-content.jpg'
import digitalImg3 from '../../assets/portfolio/visual-content.jpg'
import photoImg1 from '../../assets/portfolio/video-content.png'
import photoImg2 from '../../assets/portfolio/video-content.png'
import photoImg3 from '../../assets/portfolio/video-content.png'
import printImg1 from '../../assets/portfolio/daily-posts.jpg'
import printImg2 from '../../assets/portfolio/daily-posts.jpg'

const portfolioItems = [
  { id: 1, title: "Instagram Story Campaign", category: "Social Media", image: socialImg1, description: "Engaging Instagram story series for a lifestyle brand", client: "Fashion Nova", date: "2024" },
  { id: 2, title: "Social Media Post Design", category: "Social Media", image: socialImg2, description: "Scroll-stopping carousel posts for product launch", client: "Beauty Brand", date: "2024" },
  { id: 3, title: "Festival Campaign", category: "Social Media", image: socialImg3, description: "Diwali campaign with 45% engagement increase", client: "Lifestyle Store", date: "2023" },
  { id: 4, title: "Reel Content Creation", category: "Social Media", image: socialImg4, description: "Viral reel content for brand awareness", client: "Fitness Brand", date: "2024" },
  { id: 5, title: "Brand Identity Package", category: "Branding", image: brandingImg1, description: "Complete brand identity with logo and guidelines", client: "Startup Company", date: "2024" },
  { id: 6, title: "Logo Design Collection", category: "Branding", image: brandingImg2, description: "Minimalist logo designs for tech brands", client: "Multiple Clients", date: "2023" },
  { id: 7, title: "Brand Guidelines", category: "Branding", image: brandingImg3, description: "Comprehensive brand style guide", client: "Corporate Brand", date: "2024" },
  { id: 8, title: "Web Design Project", category: "Digital", image: digitalImg1, description: "Modern responsive website design", client: "E-commerce Store", date: "2024" },
  { id: 9, title: "SEO Campaign Graphics", category: "Digital", image: digitalImg2, description: "Visual assets for SEO campaign", client: "Digital Agency", date: "2023" },
  { id: 10, title: "Email Marketing Design", category: "Digital", image: digitalImg3, description: "High-converting email templates", client: "Retail Brand", date: "2024" },
  { id: 11, title: "Product Photography", category: "Photography", image: photoImg1, description: "Professional product shots for e-commerce", client: "Jewelry Brand", date: "2024" },
  { id: 12, title: "Food Photography", category: "Photography", image: photoImg2, description: "Mouth-watering food photography", client: "Restaurant Chain", date: "2023" },
  { id: 13, title: "Fashion Photography", category: "Photography", image: photoImg3, description: "Editorial fashion shoot", client: "Fashion Brand", date: "2024" },
  { id: 14, title: "Packaging Design", category: "Print", image: printImg1, description: "Eco-friendly product packaging", client: "Organic Brand", date: "2024" },
  { id: 15, title: "Brochure Design", category: "Print", image: printImg2, description: "Corporate brochure design", client: "Real Estate", date: "2023" }
]

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filter, setFilter] = useState("All")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [likedImages, setLikedImages] = useState([])
  const [flippedCard, setFlippedCard] = useState(null)

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const categories = ["All", "Social Media", "Branding", "Digital", "Photography", "Print"]

  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter)

  const openLightbox = (item, index) => {
    setSelectedImage(item)
    setCurrentIndex(index)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction) => {
    const newIndex = currentIndex + direction
    if (newIndex >= 0 && newIndex < filteredItems.length) {
      setCurrentIndex(newIndex)
      setSelectedImage(filteredItems[newIndex])
    }
  }

  const toggleLike = (id) => {
    if (likedImages.includes(id)) {
      setLikedImages(likedImages.filter(i => i !== id))
    } else {
      setLikedImages([...likedImages, id])
    }
  }

  const toggleFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id)
  }

  const downloadImage = () => {
    const link = document.createElement('a')
    link.href = selectedImage.image
    link.download = `${selectedImage.title}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div id='Portfolio' className='bg-white dark:bg-slate-900 text-black dark:text-white py-20 overflow-hidden'>
      
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="lg:px-40 px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/30 border border-fuchsia-200 dark:border-fuchsia-800 mb-6">
            <Sparkles size={18} className="text-fuchsia-500" />
            <span className="text-fuchsia-600 dark:text-fuchsia-400 text-sm font-semibold">Our Creative Work</span>
            <Sparkles size={18} className="text-fuchsia-500" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text">Portfolio</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our creative work across branding, digital marketing, design, and photography
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category)
                setFlippedCard(null)
              }}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                filter === category
                  ? 'bg-fuchsia-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 3D Book Flip Grid - Fixed Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              data-aos="flip-left"
              data-aos-delay={(index % 9) * 100}
              className="group perspective-1000"
            >
              <div 
                className={`relative w-full h-72 sm:h-80 transition-all duration-700 preserve-3d cursor-pointer ${
                  flippedCard === item.id ? 'rotate-y-180' : ''
                }`}
                onClick={() => toggleFlip(item.id)}
              >
                {/* Front Side - Image */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Front Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <div className="inline-block px-2 py-0.5 bg-fuchsia-500 rounded-full text-[10px] mb-2">
                          {item.category}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold mb-0.5">{item.title}</h3>
                        <p className="text-xs text-white/80">{item.client}</p>
                        <div className="flex items-center gap-1 mt-2 text-[10px]">
                          <BookOpen size={10} />
                          <span>Click to flip</span>
                        </div>
                      </div>
                    </div>

                    {/* Like Button on Front */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike(item.id)
                      }}
                      className="absolute top-2 right-2 p-1.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-all duration-300 z-10"
                    >
                      <Heart 
                        size={14} 
                        className={likedImages.includes(item.id) ? "text-red-500 fill-red-500" : "text-white"}
                      />
                    </button>
                  </div>
                </div>

                {/* Back Side - Details */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-fuchsia-600 to-purple-600 p-4 flex flex-col justify-between">
                    {/* Back Content */}
                    <div>
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                        <Sparkles className="text-white w-5 h-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-white/80 text-xs mb-3 line-clamp-3">{item.description}</p>
                      
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center gap-2 text-white/80 text-xs">
                          <span className="w-14">Client:</span>
                          <span className="font-semibold text-white text-xs">{item.client}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80 text-xs">
                          <span className="w-14">Year:</span>
                          <span className="font-semibold text-white text-xs">{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80 text-xs">
                          <span className="w-14">Category:</span>
                          <span className="font-semibold text-white text-xs">{item.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          const idx = filteredItems.findIndex(i => i.id === item.id)
                          openLightbox(item, idx)
                        }}
                        className="flex-1 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-white text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1"
                      >
                        <ZoomIn size={12} />
                        View Full
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleLike(item.id)
                        }}
                        className="px-2.5 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300"
                      >
                        <Heart 
                          size={12} 
                          className={likedImages.includes(item.id) ? "text-red-500 fill-red-500" : "text-white"}
                        />
                      </button>
                    </div>

                    {/* Flip Back Hint */}
                    <p className="text-center text-white/40 text-[9px] mt-2">
                      Tap to flip back
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No items found in this category</p>
          </div>
        )}

        {/* View More Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm">
            View More Projects
          </button>
        </div>
      </div>

      {/* Responsive Lightbox Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-3 right-3 md:top-4 md:right-4 z-20 p-1.5 md:p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
          >
            <X size={18} className="md:w-6 md:h-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage(-1)
              }}
              className="absolute left-2 md:left-4 z-20 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
            >
              <ChevronLeft size={18} className="md:w-6 md:h-6 text-white" />
            </button>
          )}
          
          {currentIndex < filteredItems.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage(1)
              }}
              className="absolute right-2 md:right-4 z-20 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
            >
              <ChevronRight size={18} className="md:w-6 md:h-6 text-white" />
            </button>
          )}

          {/* Modal Container - Responsive */}
          <div className="relative w-full max-w-[95%] md:max-w-4xl lg:max-w-5xl max-h-[90vh] md:max-h-[85vh] bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            
            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] md:max-h-[85vh]">
              {/* Image */}
              <div className="relative bg-gray-100 dark:bg-slate-800 flex items-center justify-center min-h-[200px]">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full max-h-[40vh] md:max-h-[50vh] object-contain"
                />
              </div>
              
              {/* Details */}
              <div className="p-4 md:p-6">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3 md:mb-4">
                  <div>
                    <div className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-600 dark:text-fuchsia-400 text-[10px] md:text-xs rounded-full mb-2">
                      {selectedImage.category}
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold mb-1">{selectedImage.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{selectedImage.description}</p>
                  </div>
                </div>

                {/* Info Grid - Responsive */}
                <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6 p-3 md:p-4 bg-gray-50 dark:bg-slate-800 rounded-lg md:rounded-xl">
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">Client</p>
                    <p className="text-xs md:text-sm font-semibold truncate">{selectedImage.client}</p>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">Year</p>
                    <p className="text-xs md:text-sm font-semibold">{selectedImage.date}</p>
                  </div>
                </div>

                {/* Action Buttons - Responsive */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={downloadImage}
                    className="flex-1 flex items-center justify-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-xs md:text-sm"
                  >
                    <Download size={14} className="md:w-4 md:h-4" />
                    Download Image
                  </button>
                  <div className="flex gap-2 sm:gap-3">
                    <button
                      onClick={() => toggleLike(selectedImage.id)}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/30 transition-all duration-300"
                    >
                      <Heart 
                        size={16} className="md:w-5 md:h-5" 
                      />
                    </button>
                    <button className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/30 transition-all duration-300">
                      <Share2 size={16} className="md:w-5 md:h-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
 
      `}</style>
    </div>
  )
}

export default Portfolio