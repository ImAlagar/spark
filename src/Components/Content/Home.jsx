import React, { useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import img from '../../assets/right.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const social = [
    { link: '#', icon: <FaLinkedinIn /> },
    { link: '#', icon: <AiFillGithub /> },
    { link: '#', icon: <FaXTwitter /> },
    { link: '#', icon: <FaInstagram /> }
  ]

  return (
    <>
      {/* 🔥 LEFT FLOATING SOCIAL */}
      <div className="hidden lg:flex flex-col gap-4 fixed left-6 top-1/2 -translate-y-1/2 z-50">
        {social.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="text-fuchsia-600 hover:text-white bg-white dark:bg-slate-800 hover:bg-fuchsia-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* 🔥 MAIN SECTION */}
      <div id='Home' className='bg-white text-black dark:bg-slate-900 dark:text-white lg:px-40 px-10 py-32 flex lg:flex-row flex-col-reverse items-center justify-between gap-10'>

        {/* LEFT CONTENT */}
        <div className='lg:w-1/2 flex flex-col lg:items-start items-center text-center lg:text-left'>

          {/* Tagline */}
          <p data-aos='fade-down' className='text-fuchsia-500 uppercase tracking-widest mb-3'>
            Spark Creatives
          </p>

          {/* 🔥 Animated Heading */}
          <TypeAnimation
            sequence={[
              'We Build High-Converting Websites',
              2000,
              'We Create Powerful Brand Identity',
              2000,
              'We Grow Your Business Online',
              2000,
            ]}
            wrapper="h1"
            speed={80}
            repeat={Infinity}
            className="text-[42px] lg:text-[56px] font-bold leading-tight"
          />

          {/* Subtext */}
          <p data-aos='fade-left' className='mt-6 text-gray-600 dark:text-gray-300 max-w-lg'>
            At Spark Creatives, we craft modern websites, branding, and digital strategies 
            that help businesses stand out and scale faster in the digital world.
          </p>

          {/* CTA Buttons */}
          <div data-aos='fade-up' className='mt-8 flex gap-4'>
            <button className='bg-fuchsia-600 text-white px-6 py-3 rounded-lg hover:bg-fuchsia-700 transition duration-300'>
              Get a Quote
            </button>

            <button className='border border-fuchsia-600 text-fuchsia-600 px-6 py-3 rounded-lg hover:bg-fuchsia-600 hover:text-white transition duration-300'>
              View Client Works
            </button>
          </div>

          {/* 🔥 Stats */}
          <div data-aos='fade-up' className='flex gap-10 mt-10'>
            <div className='text-center lg:text-left'>
              <h2 className='text-3xl font-bold text-fuchsia-500'>10+</h2>
              <p className='text-sm'>Projects Completed</p>
            </div>
            <div className='text-center lg:text-left'>
              <h2 className='text-3xl font-bold text-fuchsia-500'>5+</h2>
              <p className='text-sm'>Happy Clients</p>
            </div>
            <div className='text-center lg:text-left'>
              <h2 className='text-3xl font-bold text-fuchsia-500'>1+</h2>
              <p className='text-sm'>Years Experience</p>
            </div>
          </div>

        </div>

    {/* RIGHT IMAGE */}
    <div className='lg:w-1/2 flex justify-center relative z-0'>

      {/* 🔥 Glow Background */}
      <div className="absolute z-0 w-[600px] h-[400px] bg-fuchsia-500 opacity-20 blur-3xl rounded-full"></div>

      {/* 🔥 Image */}
      <img
        data-aos='zoom-in'
        src={img}
        alt="profile"
        className='relative z-10 rounded-2xl border-2 border-fuchsia-500 p-1 shadow-2xl hover:scale-105 transition duration-500'
        width={520}
      />

    </div>

      </div>
    </>
  )
}

export default Home