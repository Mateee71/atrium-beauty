import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import { SITE_NAME, SLOGAN } from "../config";

interface HeroSectionProps {
  
}

const hlsVideoUrl = "/videos/hero/index.m3u8";

export default function HeroSection({ }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsVideoUrl;
    } else if (Hls.isSupported()) {
      const hls = new Hls({
        startLevel: -1,
      });

      hls.loadSource(hlsVideoUrl);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    }
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTeam = () => {
    const element = document.getElementById('team');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const [main, sub] = SITE_NAME.split(" ");
  const mainUpper = main?.toUpperCase() ?? "";
  const subUpper = sub?.toUpperCase() ?? "";
  

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      {/* <img src={backgroundVideoPlaceholder} alt="backgroundVideoImage" className="absolute inset-0 w-full h-full object-cover z-0" /> */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/hero/poster.jpg"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
      
      <div className="absolute inset-0 bg-gradient-to-br from-atrium-charcoal/50 to-atrium-charcoal/50 z-20"/>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <div className="-space-y-2">
                <h1 className="text-5xl lg:text-6xl font-serif font-bold atrium-cream leading-tight atrium-logo">
                  {mainUpper}
                </h1>
                <h1 className="text-5xl lg:text-6xl font-light atrium-rose leading-tight">
                  {subUpper}
                </h1>
              </div>
              <p className="text-xl lg:text-2xl font-serif italic atrium-cream">
                "{SLOGAN}"
              </p>
            </div>
            <p className="text-lg atrium-cream leading-relaxed max-w-lg">
              Professzionális szépségápolás családias légkörben, modern technológiával, személyre szabott figyelemmel és minőségi szolgáltatásokkal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
             {/*  <button 
                className="bg-atrium-rose text-white px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-lg"
              >
                Időpont foglalás
              </button> */}
               <button 
                onClick={scrollToServices}
                className="bg-atrium-rose text-white px-8 py-4 rounded-full hover:opacity-90 transition-all duration-200 hover:shadow-lg"
              >
                Szolgáltatások
              </button>
              <button 
                onClick={scrollToTeam}
                className="border-2 border-atrium-cream bg-black atrium-cream bg-transparent px-8 py-4 rounded-full hover:bg-atrium-cream hover:text-gray-800 transition-all duration-200"
              >
                Csapatunk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
