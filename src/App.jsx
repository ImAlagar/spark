import React from 'react'
import Navbar from './Components/Header/Navbar'
import Home from './Components/Content/Home'
import About from './Components/Content/About'
import Contact from './Components/Content/Contact'
import Footer from './Components/Footer/Footer'
import { useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Services from './Components/Content/Services'
import Testimonials from './Components/Content/Testimonials'  // Add this
import Industries from './Components/Content/Industries'      // Add this
import Brand from './Components/Content/Brand'
import Portfolio from './Components/Content/Portfolio'

function App() {
  const [loading, setLoading] = useState(false)

  //for loading screen
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {loading ?
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#d946ef"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>

        :
        <>
          <Navbar />
          <Home />
          <About />
          <Services />
          <Brand />
          <Portfolio />
          {/* <ClientWorks /> */}
          <Testimonials />     {/* Add Testimonials here */}
          <Industries />       {/* Add Industries here */}
          <Contact />
          <Footer />
          <Analytics />
          <SpeedInsights />
        </>}
    </>
  )
}

export default App