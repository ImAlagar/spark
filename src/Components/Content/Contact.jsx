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
import { Sparkles } from 'lucide-react'


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
      value: "hello@sparkcreatives.com",
      link: "mailto:hello@sparkcreatives.com"
    },
    {
      icon: <MdPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MdLocationOn className="w-6 h-6" />,
      title: "Location",
      value: "New York, USA",
      link: "https://maps.google.com/?q=New+York"
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

      <div className="lg:px-56 px-10 relative z-10">
        
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
            Have a project in mind? I'd love to hear about it. Let's create something amazing together!
          </p>
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
                <input type="hidden" name="access_key" value="a3acc553-464c-4fc0-ab60-2ba7b134788f" />
                
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
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-fuchsia-200 dark:border-fuchsia-800 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-fuchsia-100 dark:bg-fuchsia-900/50 rounded-lg group-hover:scale-110 transition-transform">
                      <div className="text-fuchsia-500">{info.icon}</div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{info.title}</p>
                      {info.link ? (
                        <a href={info.link} className="text-sm font-semibold hover:text-fuchsia-500 transition-colors break-words">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold break-words">{info.value}</p>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316c6b6b6b%3A0x6b5b5b5b5b5b5b5b!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1647894567890!5m2!1sen!2sus"
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
              <h4 className="text-lg font-semibold mb-4 text-center">Connect With Me</h4>
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