import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { 
  ArrowRight, 
  Sparkles, 
  Palette, 
  Camera, 
  TrendingUp,
  Award,
  Users,
  Clock
} from 'lucide-react'
import { FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa'
import aboutImg from '../../assets/about-vector.png' // Add your vector image here

function About() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const achievements = [
    { icon: <Award className="w-5 h-5" />, value: "15+", label: "Projects" },
    { icon: <Users className="w-5 h-5" />, value: "10+", label: "Happy Clients" },
    { icon: <Clock className="w-5 h-5" />, value: "2+", label: "Years Experience" }
  ]

  return (
    <div id='About' className='bg-white dark:bg-slate-900 text-black dark:text-white lg:py-10 py-4 overflow-hidden'>
      <div className="lg:px-40 px-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-fuchsia-500 uppercase tracking-wider text-sm font-semibold mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Creative Storyteller
            <Sparkles className="w-4 h-4" />
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-fuchsia-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-fuchsia-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content - Left Right Layout */}
        <div className="flex lg:flex-row flex-col gap-12 items-center justify-between">
          
          {/* Left Side - Vector Image */}
          <div className="lg:w-5/12 flex justify-center" data-aos="fade-right">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-fuchsia-500/20 rounded-full blur-2xl"></div>
              {/* Image */}
              <img 
                src={aboutImg} 
                alt="About Me" 
                className="relative w-full max-w-md rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-7/12 space-y-6" data-aos="fade-left">
            
            {/* Introduction */}
            <div>
              <h3 className="text-2xl font-bold mb-3">
                I'm a <span className="text-fuchsia-500">Creative Designer</span> & Content Creator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in creating compelling brand identities and engaging social media content 
                that helps businesses stand out in the digital world. With a passion for visual storytelling, 
                I transform ideas into captivating designs that resonate with audiences.
              </p>
            </div>

            {/* What I Do - Small Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
              <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="flex justify-center mb-2">
                  <div className="p-2 bg-fuchsia-100 dark:bg-fuchsia-900/50 rounded-lg group-hover:scale-110 transition-transform">
                    <Palette className="w-5 h-5 text-fuchsia-600" />
                  </div>
                </div>
                <h4 className="font-semibold text-sm">Brand Identity</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Visual storytelling</p>
              </div>

              <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="flex justify-center mb-2">
                  <div className="p-2 bg-fuchsia-100 dark:bg-fuchsia-900/50 rounded-lg group-hover:scale-110 transition-transform">
                    <Camera className="w-5 h-5 text-fuchsia-600" />
                  </div>
                </div>
                <h4 className="font-semibold text-sm">Social Media</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Engaging content</p>
              </div>

              <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="flex justify-center mb-2">
                  <div className="p-2 bg-fuchsia-100 dark:bg-fuchsia-900/50 rounded-lg group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5 text-fuchsia-600" />
                  </div>
                </div>
                <h4 className="font-semibold text-sm">Content Strategy</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Growth focused</p>
              </div>
            </div>


            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 pt-4">
              <a href="#" className="px-4 py-2 bg-fuchsia-500 text-white rounded-full text-sm font-semibold hover:bg-fuchsia-600 transition-all duration-300 flex items-center gap-2">
                View Work <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About