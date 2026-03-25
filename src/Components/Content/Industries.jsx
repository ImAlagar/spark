// Industries.jsx
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { 
  ShoppingBag, 
  Utensils, 
  Laptop, 
  Heart, 
  Sparkles,
  Briefcase,
  GraduationCap,
  Home,
  Dumbbell,
  Gem
} from 'lucide-react'

function Industries() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const industries = [
    {
      id: 1,
      name: "Fashion & Retail",
      icon: <ShoppingBag className="w-8 h-8" />,
      description: "Creating stunning visual identities for fashion brands and retail stores",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      title: "Food & Beverage",
      name: "Food & Beverage",
      icon: <Utensils className="w-8 h-8" />,
      description: "Delicious branding that makes your restaurant or cafe stand out",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      name: "Technology",
      icon: <Laptop className="w-8 h-8" />,
      description: "Modern and innovative branding for tech startups and companies",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      name: "Health & Wellness",
      icon: <Heart className="w-8 h-8" />,
      description: "Authentic branding that connects with health-conscious audiences",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      name: "Beauty & Cosmetics",
      icon: <Sparkles className="w-8 h-8" />,
      description: "Elegant and luxurious branding for beauty brands",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 6,
      name: "Corporate",
      icon: <Briefcase className="w-8 h-8" />,
      description: "Professional branding solutions for corporate clients",
      gradient: "from-slate-500 to-gray-500"
    },
    {
      id: 7,
      name: "Education",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Inspiring visual identities for educational institutions",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      id: 8,
      name: "Real Estate",
      icon: <Home className="w-8 h-8" />,
      description: "Trustworthy branding for property and real estate businesses",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      id: 9,
      name: "Fitness",
      icon: <Dumbbell className="w-8 h-8" />,
      description: "Energetic branding for gyms and fitness studios",
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: 10,
      name: "Luxury",
      icon: <Gem className="w-8 h-8" />,
      description: "Premium branding for luxury products and services",
      gradient: "from-violet-500 to-purple-500"
    }
  ]

  return (
    <div id='Industries' className='bg-white dark:bg-slate-900 text-black dark:text-white py-20 overflow-hidden relative'>
      
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/30 border border-fuchsia-200 dark:border-fuchsia-800 mb-6">
            <Sparkles size={18} className="text-fuchsia-500" />
            <span className="text-fuchsia-600 dark:text-fuchsia-400 text-sm font-semibold">Industries We Serve</span>
            <Sparkles size={18} className="text-fuchsia-500" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Expertise Across <span className="text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text">Industries</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've helped businesses from various sectors build their brand identity and grow their audience
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-fuchsia-100 dark:border-fuchsia-800 transform hover:-translate-y-2">
                
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-fuchsia-100 to-purple-100 dark:from-fuchsia-900/50 dark:to-purple-900/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="text-fuchsia-600 dark:text-fuchsia-400">
                      {industry.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 group-hover:text-fuchsia-600 transition-colors">
                    {industry.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {industry.description}
                  </p>
                </div>
                
                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                  <div className="absolute bottom-[-15px] right-[-15px] w-8 h-8 bg-fuchsia-500/10 rotate-45 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Work Notice */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-50 to-purple-50 dark:from-fuchsia-900/30 dark:to-purple-900/30 rounded-full border border-fuchsia-200 dark:border-fuchsia-800">
            <Sparkles size={16} className="text-fuchsia-500" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              No matter your industry, I'll help you create a brand that stands out
            </span>
            <Sparkles size={16} className="text-fuchsia-500" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Industries