import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { 
  MdMail, 
  MdPhone, 
  MdLocationOn, 
  MdAccessTime, 
  MdSend,
  MdCheckCircle,
} from 'react-icons/md'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { Sparkles, Quote } from 'lucide-react'

function Contact() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: false
  })
  
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const contactInfo = [
    {
      icon: <MdMail className="w-6 h-6" />,
      title: "Email",
      value: "hi@adbasecreatives.com",
      link: "mailto:hi@adbasecreatives.com"
    },
    {
      icon: <MdPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9150118554",
      link: "tel:+919150118554"
    },
    {
      icon: <MdLocationOn className="w-6 h-6" />,
      title: "Location",
      value: "Chennai, India",
      link: "https://maps.google.com/?q=Chennai"
    },
    {
      icon: <MdAccessTime className="w-6 h-6" />,
      title: "Working Hours",
      value: "Mon-Fri: 9AM - 6PM",
      link: null
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ ...formStatus, loading: true })
    
    const form = e.target
    const formData = new FormData(form)
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setFormStatus({ submitted: true, loading: false, error: false })
        form.reset()
        setTimeout(() => {
          setFormStatus({ submitted: false, loading: false, error: false })
        }, 5000)
      } else {
        setFormStatus({ submitted: false, loading: false, error: true })
      }
    } catch (error) {
      setFormStatus({ submitted: false, loading: false, error: true })
    }
  }

  return (
    <div id='Contact' className='bg-white dark:bg-slate-900 text-black dark:text-white py-20 overflow-hidden'>
      
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
            <span className="text-fuchsia-600 dark:text-fuchsia-400 text-sm font-semibold">Get In Touch</span>
            <Sparkles size={18} className="text-fuchsia-500" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text">Together</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together!
          </p>
        </div>

        {/* NEW: Quote Section before contact form */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="relative bg-gradient-to-br from-fuchsia-50 to-purple-50 dark:from-fuchsia-950/30 dark:to-purple-950/30 rounded-2xl p-8 md:p-10 border border-fuchsia-200 dark:border-fuchsia-800">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>
            
            {/* Content */}
            <div className="text-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white leading-relaxed">
                "Good content is everywhere. But content that performs is rare."
              </p>
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-fuchsia-300 to-transparent"></div>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200">
                We don't just create — we create with purpose, backed by strategy.
              </p>
              <p className="text-md text-gray-600 dark:text-gray-300 mt-3">
                Because your brand deserves more than just posts.
              </p>
              <div className="mt-6">
                <span className="inline-block px-6 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white rounded-full text-sm font-semibold">
                  That's AdBase Creatives.
                </span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-fuchsia-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Side - Contact Form */}
          <div data-aos="fade-right">
            <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-fuchsia-200 dark:border-fuchsia-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MdMail className="w-6 h-6 text-fuchsia-500" />
                Send a Message
              </h3>
              
              <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="access_key" value="b917bcec-a209-4009-96fa-a81dc5b29e76" />
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    className="w-full rounded-xl p-3 border-2 border-fuchsia-200 dark:border-fuchsia-800 focus:border-fuchsia-500 focus:outline-none transition-colors bg-white dark:bg-slate-900 text-gray-900 dark:text-white" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    className="w-full rounded-xl p-3 border-2 border-fuchsia-200 dark:border-fuchsia-800 focus:border-fuchsia-500 focus:outline-none transition-colors bg-white dark:bg-slate-900 text-gray-900 dark:text-white" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
                  <textarea 
                    name="message" 
                    className="w-full rounded-xl p-3 border-2 border-fuchsia-200 dark:border-fuchsia-800 focus:border-fuchsia-500 focus:outline-none transition-colors bg-white dark:bg-slate-900 text-gray-900 dark:text-white" 
                    placeholder="Tell me about your project..." 
                    rows="5" 
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className="w-full py-3 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formStatus.loading ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <MdSend className="w-4 h-4" />
                    </>
                  )}
                </button>
                
                {/* Success/Error Messages */}
                {formStatus.submitted && (
                  <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg">
                    <MdCheckCircle className="w-5 h-5" />
                    <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                
                {formStatus.error && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
                    <span className="text-sm">Something went wrong. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Right Side - Contact Info & Map */}
          <div data-aos="fade-left" className="space-y-6">
            
            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800/50 backdrop-blur-sm 
                            rounded-xl p-4 sm:p-5 
                            border border-fuchsia-200 dark:border-fuchsia-800 
                            hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    
                    {/* Icon */}
                    <div className="p-2 sm:p-3 
                                    bg-fuchsia-100 dark:bg-fuchsia-900/50 
                                    rounded-lg 
                                    group-hover:scale-110 transition-transform">
                      <div className="text-fuchsia-500 text-lg">
                        {info.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        {info.title}
                      </p>

                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm sm:text-base font-semibold 
                                    hover:text-fuchsia-500 transition-colors 
                                    break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base font-semibold break-words">
                          {info.value}
                        </p>
                      )}
                    </div>

                  </div>
                </div>
              ))}
            </div>
            
            {/* Google Map */}
            <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-fuchsia-200 dark:border-fuchsia-800">
              <div className="relative h-64 w-full">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.5123456789!2d80.2338!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e4a5e5c5c5c5c5c!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1647894567890!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-fuchsia-200 dark:border-fuchsia-800">
              <h4 className="text-lg font-semibold mb-4 text-center">Connect With Us</h4>
              <div className="flex justify-center gap-4">
                <a href="#" className="p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all duration-300 group">
                  <FaInstagram className="w-5 h-5 text-fuchsia-600 group-hover:text-white" />
                </a>
                <a href="#" className="p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all duration-300 group">
                  <FaTwitter className="w-5 h-5 text-fuchsia-600 group-hover:text-white" />
                </a>
                <a href="#" className="p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all duration-300 group">
                  <FaLinkedin className="w-5 h-5 text-fuchsia-600 group-hover:text-white" />
                </a>
                <a href="#" className="p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all duration-300 group">
                  <FaGithub className="w-5 h-5 text-fuchsia-600 group-hover:text-white" />
                </a>
              </div>
            </div>
            
            {/* Availability Badge */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for freelance work</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact