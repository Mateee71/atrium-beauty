"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, SquareArrowUpRight, Hash } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";

type Item = { src: string; postLink: string, title: string; caption: string, hashtags: string[] };

interface Props {
  isOpen: boolean;
  onClose: () => void;
  items: Item[];
  startIndex?: number;
}

type SliderDotsProps = {
  items: Item[];
  currentSlide: number;
  instanceRef: any;
};

const SliderDots = ({ items, currentSlide, instanceRef }: SliderDotsProps) => {
  const maxVisible = 7;
  const half = Math.floor(maxVisible / 2);

  let start = currentSlide - half;
  let end = currentSlide + half + 1;
  if (start < 0) { start = 0; end = Math.min(maxVisible, items.length); }
  if (end > items.length) { end = items.length; start = Math.max(0, end - maxVisible); }

  const visibleItems = items.slice(start, end);
  const maxDotSize = 12;

  return (
    <div className="absolute bottom-10 flex justify-center items-center gap-2 overflow-hidden w-full z-50" onClick={e => e.stopPropagation()}>
      {visibleItems.map((_, idx) => {
        const actualIdx = start + idx;
        const distance = actualIdx - currentSlide;
        const scale = 1 - Math.min(Math.abs(distance) * 0.2, 0.6);
        const color = distance === 0 ? "#FFFFFF" : "#d1d5db";
        const opacity = distance === 0 ? 1 : 0.6;

        return (
          <motion.button
            key={actualIdx}
            onClick={() => instanceRef.current?.moveToIdx(actualIdx)}
            className="rounded-full"
            style={{ width: maxDotSize, height: maxDotSize }}
            animate={{ scale, backgroundColor: color, opacity }}
            whileHover={{ scale: 1, backgroundColor: "#FFFFFF", opacity: 1 }}
            transition={{ type: "tween" }}
          />
        );
      })}
    </div>
  );
};

const InstagramLightbox: React.FC<Props> = ({ isOpen, onClose, items, startIndex = 0 }) => {
  const [currentSlide, setCurrentSlide] = useState(startIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isOpen && isMobile && cardRefs.current[startIndex]) {
      cardRefs.current[startIndex].scrollIntoView({ behavior: "instant", block: "center" });
    }
  }, [isOpen, isMobile, startIndex]);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: startIndex,
    loop: false,
    mode: "snap",
    slides: { perView: 1, spacing: 0 },
    slideChanged(slider) { setCurrentSlide(slider.track.details.abs); },
    dragStarted: () => setIsDragging(true),
    dragEnded: () => setIsDragging(false),
  });

  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current?.moveToIdx(startIndex, true, { duration: 0 });
    }
  }, [startIndex, instanceRef, isOpen]);

  if (!isOpen) return null;

  return (
    <div>
      {!isMobile && (
      <button
        onClick={onClose}
        className="fixed top-5 right-5 text-white/70 hover:text-white transition-all duration-200 z-[100]"
      >
        <X size={28} />
      </button>
     )}
     {isMobile && (
        <button
          onClick={onClose}
          className="fixed top-2 right-2 p-2 text-black/70 bg-white/70 rounded-full shadow-md z-[100]"
        >
          <X size={20} />
        </button>
      )}


    <div
      className={`fixed inset-0 bg-[#2d261fd9]/50 backdrop-blur-sm z-50 overflow-auto ${
        isMobile ? "items-start justify-start" : "flex justify-center items-center"
      } flex`}
      onClick={onClose}
    >
      {!isMobile && (
        <div ref={sliderRef} className="keen-slider w-full h-[80%]" onClick={e => e.stopPropagation()}>
          {items.map((item, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center">
              <div className={`bg-white ml-16 mr-16 w-full max-w-5xl flex flex-col md:flex-row overflow-hidden shadow-lg ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}>
                <div className="flex-1 flex justify-center items-center bg-black">
                  <img src={item.src} alt={item.title} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="w-full md:w-[40%] flex flex-col">
                  <div className="flex p-8 border-b border-gray-100 items-center gap-2">
                    <div className="flex justify-center items-center rounded-full p-[2px] bg-[radial-gradient(circle_farthest-corner_at_32%_106%,#ffe17d_0,#ffcd69_10%,#fa9137_28%,#eb4141_42%,transparent_82%),linear-gradient(135deg,#c33cbe_12%,#c33cbe_58%)]">
                      <div className="flex justify-center items-center rounded-full bg-white w-10 h-10">
                        <Hash className="text-black" height={16} />
                      </div>
                    </div>
                    <h2 className="font-semibold text-md">{item.title}</h2>
                  </div>
                  <div className="p-8 flex flex-col">
                    <p className="text-sm text-gray-700 mb-4">
                      {item.caption.split("\n").map((line, idx) => (
                        <span key={idx}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                    <div className="flex flew-row flex-wrap text-xs text-gray-500 gap-x-2">
                      {item.hashtags?.map((tag, idx) => (
                      <span key={idx}>{tag}</span>
                    ))}
                    </div>
                  </div>
                  <div className="flex h-20 border-t-[1px] border-gray-100 mt-auto">
                    <a href={item.postLink} 
                       target="_blank"
                       className="w-full h-full flex items-center justify-between text-sm text-black font-semibold cursor-pointer no-underline transition hover:bg-gray-100 duration-200 p-8">
                      Ugrás a poszthoz
                      <SquareArrowUpRight className="h-[21px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 p-2 rounded-full hover:text-white transition-all duration-200 z-50"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 p-2 rounded-full hover:text-white transition-all duration-200 z-50"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}

      {isMobile && (
        <div className="flex flex-col gap-4 w-full max-w-3xl items-center overflow-auto no-scrollbar p-4" onClick={e => e.stopPropagation()}>
          {items.map((item, idx) => (
            <div
              key={idx}
              ref={el => cardRefs.current[idx] = el}
              className="bg-white flex flex-col overflow-hidden shadow-lg cursor-auto max-w-[400px] rounded-sm"
            >
              <div className="flex-1 flex justify-center items-center bg-black min-h-[250px]">
                <img src={item.src} alt={item.title} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="w-full flex flex-col">
                <div className="flex p-6 border-b border-gray-100 items-center gap-2">
                  <div className="flex justify-center items-center rounded-full p-[2px] bg-[radial-gradient(circle_farthest-corner_at_32%_106%,#ffe17d_0,#ffcd69_10%,#fa9137_28%,#eb4141_42%,transparent_82%),linear-gradient(135deg,#c33cbe_12%,#c33cbe_58%)]">
                    <div className="flex justify-center items-center rounded-full bg-white w-8 h-8">
                      <Hash className="text-black" height={14} />
                    </div>
                  </div>
                  <h2 className="font-semibold text-sm">{item.title}</h2>
                </div>
                <div className="p-6 flex flex-col">
                  <p className="text-sm text-gray-700 mb-4">
                    {item.caption.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <div className="flex flew-row flex-wrap text-xs text-gray-500 gap-x-2">
                   {item.hashtags?.map((tag, idx) => (
                      <span key={idx}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex h-16 border-t-[1px] border-gray-100 mt-auto">
                  <a
                    href={item.postLink}
                    target="_blank"
                    className="w-full h-full flex items-center text-sm justify-between font-semibold text-black cursor-pointer no-underline transition hover:bg-gray-100 duration-200 p-4"
                  >
                    Ugrás a poszthoz
                    <SquareArrowUpRight className="h-[20px]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!isMobile && (
        <SliderDots items={items} currentSlide={currentSlide} instanceRef={instanceRef} />
      )}
    </div>
   
    </div>
  );
};

export default InstagramLightbox;
