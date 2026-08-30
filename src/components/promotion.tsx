import React from 'react'
import { useLocation } from "wouter";

export const Promotion = () => {
    const [location, setLocation] = useLocation();

     const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavClick = (sectionId: string) => {
        if (location !== "/") {
        setLocation(`/?scrollTo=${sectionId}`);
        } else {
        scrollToSection(sectionId);
        }
    };

  return (
    <div className="max-w-7xl mx-auto mt-8 rounded-[28px] bg-gradient-to-r from-[#c92f67] via-[#df4b81] to-[#f0a5be] px-6 py-7 text-white shadow-[0_15px_35px_rgba(201,47,103,0.22)] md:px-8">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h4 className="text-3xl font-serif font-semibold">Új vendégeknek 15% kedvezmény!</h4>
            <p className="mt-2 text-sm text-white/90">
              Foglalj időpontot még ma, és élvezd kedvezményünket első látogatáskor.
            </p>
          </div>

          {/* <button onClick={() => handleNavClick('services')} className="rounded-2xl bg-white px-6 py-3 font-semibold text-[#d93f7b] transition hover:bg-[#fff4f8]">
            Ajánlat igénybevétele
          </button> */}
        </div>
      </div>
  )
}
