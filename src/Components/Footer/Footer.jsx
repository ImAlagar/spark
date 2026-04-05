import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram, FaHeart, FaArrowUp } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'

function Footer() {
    const currentYear = new Date().getFullYear()

    const social = [
        {
            link: 'https://www.linkedin.com/company/adbase-creatives',
            icon: <FaLinkedinIn />,
            label: 'LinkedIn'
        },
        {
            link: 'https://github.com/adbase-creatives',
            icon: <AiFillGithub />,
            label: 'GitHub'
        },
        {
            link: 'https://twitter.com/adbase_creatives',
            icon: <FaXTwitter />,
            label: 'Twitter'
        },
        {
            link: 'https://www.instagram.com/adbase_creatives',
            icon: <FaInstagram />,
            label: 'Instagram'
        }
    ]

    const quickLinks = [
        { name: 'Home', href: '#Home' },
        { name: 'About', href: '#About' },
        { name: 'Services', href: '#Services' },
        { name: 'Brand', href: '#Brand' },
        { name: 'Portfolio', href: '#Portfolio' },
        { name: 'Contact', href: '#Contact' }
    ]

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className='bg-gradient-to-br from-white via-fuchsia-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-black dark:text-white border-t border-fuchsia-200 dark:border-fuchsia-800 relative overflow-hidden'>
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            </div>

            <div className="lg:px-40 px-6 py-12 relative z-10">
                
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    
                    {/* Brand Section - Updated to AdBase Creatives */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                            AdBase Creatives
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            We offer end-to-end creative solutions, including printing, branding, and digital marketing to help your business grow.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                            <FaHeart className="text-fuchsia-500 animate-pulse" />
                            <span>Your brand, powered by smart marketing</span>
                        </div>
                    </div>

                    {/* Quick Links - Updated with all sections */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-fuchsia-600 dark:text-fuchsia-400 relative inline-block">
                            Quick Links
                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full"></div>
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href}
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-all duration-300 hover:translate-x-1 inline-block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services We Offer */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-fuchsia-600 dark:text-fuchsia-400 relative inline-block">
                            Our Services
                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full"></div>
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#Services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-fuchsia-600 transition-all duration-300 hover:translate-x-1 inline-block">
                                    Branding
                                </a>
                            </li>
                            <li>
                                <a href="#Services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-fuchsia-600 transition-all duration-300 hover:translate-x-1 inline-block">
                                    Digital Marketing
                                </a>
                            </li>
                            <li>
                                <a href="#Services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-fuchsia-600 transition-all duration-300 hover:translate-x-1 inline-block">
                                    Designing
                                </a>
                            </li>
                            <li>
                                <a href="#Services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-fuchsia-600 transition-all duration-300 hover:translate-x-1 inline-block">
                                    Photography
                                </a>
                            </li>
                            <li>
                                <a href="#Services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-fuchsia-600 transition-all duration-300 hover:translate-x-1 inline-block">
                                    Printing Solutions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info - Updated */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-fuchsia-600 dark:text-fuchsia-400 relative inline-block">
                            Contact Info
                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full"></div>
                        </h3>
                        <div className="space-y-3">
                            <a 
                                href="mailto:hello@adbasecreatives.com" 
                                className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-fuchsia-600 transition-all duration-300 group"
                            >
                                <div className="p-2 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-lg group-hover:scale-110 transition-transform">
                                    <MdEmail className="w-4 h-4 text-fuchsia-500" />
                                </div>
                                <span>hi@adbasecreatives.com</span>
                            </a>
                            <a 
                                href="tel:+919876543210"
                                className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-fuchsia-600 transition-all duration-300 group"
                            >
                                <div className="p-2 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-lg group-hover:scale-110 transition-transform">
                                    <MdPhone className="w-4 h-4 text-fuchsia-500" />
                                </div>
                                <span>+91 9150118554</span>
                            </a>
                        </div>
                        
                        {/* Social Links */}
                        <div className="pt-4">
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Follow Us</h4>
                            <div className="flex flex-wrap gap-3">
                                {social.map((social, index) => (
                                    <a 
                                        key={index} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        href={social.link} 
                                        className="group relative"
                                        aria-label={social.label}
                                    >
                                        <div className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 shadow-md">
                                            <div className="text-fuchsia-600 group-hover:text-white transition-colors">
                                                {social.icon}
                                            </div>
                                        </div>
                                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                            {social.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-fuchsia-200 dark:border-fuchsia-800 my-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        © {currentYear} AdBase Creatives. All rights reserved.
                    </div>
                    
                    <div className="flex items-center gap-6 flex-wrap justify-center">
                        <a href="#" className="text-xs text-gray-500 dark:text-gray-400 hover:text-fuchsia-600 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-xs text-gray-500 dark:text-gray-400 hover:text-fuchsia-600 transition-colors">
                            Terms of Service
                        </a>
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            <FaArrowUp className="w-3 h-3" />
                            Back to Top
                        </button>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer