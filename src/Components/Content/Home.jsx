import React from "react";
import { ArrowRight } from "lucide-react";
import left from "../../assets/public/lh.png";
import right from "../../assets/public/rh.png";

function Home() {
  return (
    <div className="min-h-screen flex lg:py-28 py-24 justify-center bg-slate-950 text-white relative overflow-hidden">

      {/* Cosmic Starfield Glow Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950"></div>
        
        {/* Central glowing nebula effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-400/10 rounded-full blur-[80px] animate-pulse delay-700"></div>

        {/* Star particles - vinveli effect */}
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const duration = Math.random() * 5 + 3;
          const delay = Math.random() * 5;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const opacity = Math.random() * 0.7 + 0.3;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                opacity: opacity,
                animation: `twinkle ${duration}s infinite ease-in-out ${delay}s`,
                boxShadow: `0 0 ${size * 2}px rgba(255,255,255,${opacity * 0.5})`
              }}
            />
          );
        })}

        {/* Shooting star effect */}
        <div className="absolute top-[10%] left-[-20%] w-[100px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent animate-shooting-star opacity-0"></div>
        <div className="absolute top-[30%] left-[-20%] w-[80px] h-[1.5px] bg-gradient-to-r from-transparent via-purple-300 to-transparent animate-shooting-star opacity-0 animation-delay-4000"></div>
        <div className="absolute top-[60%] left-[-20%] w-[120px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent animate-shooting-star opacity-0 animation-delay-8000"></div>
      </div>

      {/* LEFT HAND - floating in and out animation */}
      <img
        src={left}
        alt="left hand"
        className="absolute left-0 bottom-0 w-[180px] sm:w-[250px] md:w-[450px] lg:w-[450px] xl:w-[650px] opacity-80 pointer-events-none animate-float-in-out-left"
        style={{ transformOrigin: 'bottom left' }}
      />

      {/* RIGHT HAND - floating in and out animation */}
      <img
        src={right}
        alt="right hand"
        className="absolute right-0 bottom-0 w-[180px] sm:w-[250px] md:w-[450px] lg:w-[450px] xl:w-[650px] opacity-80 pointer-events-none animate-float-in-out-right"
        style={{ transformOrigin: 'bottom right' }}
      />

      {/* SOUND WAVE CENTER */}
      <div className="absolute md:bottom-[300px] lg:bottom-[250px] xl:bottom-[300px] bottom-48 flex gap-2 z-10 items-end">
        <div className="flex flex-col items-center gap-1">
          <span className="w-[6px] h-[30px] bg-purple-500 rounded-full animate-sound-wave-1 shadow-[0_0_8px_#a855f7]"></span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="w-[6px] h-[50px] bg-purple-400 rounded-full animate-sound-wave-2 shadow-[0_0_8px_#a855f7]"></span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="w-[6px] h-[20px] bg-purple-500 rounded-full animate-sound-wave-3 shadow-[0_0_8px_#a855f7]"></span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="w-[6px] h-[40px] bg-purple-400 rounded-full animate-sound-wave-4 shadow-[0_0_8px_#a855f7]"></span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="w-[6px] h-[25px] bg-purple-500 rounded-full animate-sound-wave-5 shadow-[0_0_8px_#a855f7]"></span>
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
      </div>

      {/* Content - continuously animated */}
      <div className="text-center max-w-2xl px-6 z-20 animate-content-loop">
        <p className="text-gray-400 tracking-[0.2em] text-sm mb-4 animate-text-float">
          Your Growth.
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 animate-title-pulse">
          Our Strategy.
        </h1>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 animate-text-glow">
          We turn your brand into a{" "}
          <span className="text-purple-500 font-semibold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            voice.
          </span>
        </p>

        <button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] group animate-button-breathe">
          Get Started
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
}

export default Home;