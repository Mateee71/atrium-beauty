import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/data";
import backgroundAccentImage from "@/assets/images/atrium_beauty_logo_flower_17353232632353.png"
import devTop from "@/assets/images/home-dev-top.BgWcz0RR.svg"

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const [expanded, setExpanded] = useState(false);
  const [previewLength, setPreviewLength] = useState(160);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setPreviewLength(180);
      } else {
        setPreviewLength(160);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLong = testimonial.content.length > previewLength;
  const preview = isLong ? testimonial.content.slice(0, previewLength) + "..." : testimonial.content;

  return (
    <div
      className="min-w-[220px] sm:min-w-[260px] md:min-w-[300px] max-w-[300px] flex-shrink-0 bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between"
      style={{
        minHeight: expanded ? undefined : "320px",
        height: expanded ? "auto" : "320px",
      }}
    >
      <div>
        <div className="flex items-center mb-4 justify-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Number(testimonial.rating ?? 5)
                  ? "atrium-rose fill-current"
                  : "text-gray-300"
              }`}
              fill={i < Number(testimonial.rating ?? 5) ? "currentColor" : "none"}
            />
          ))}
        </div>
        <p className="text-gray-700 mb-4 italic text-center leading-relaxed">
          {expanded ? `"${testimonial.content}"` : `"${preview}"`}
        </p>
        {isLong && (
          <div className="flex justify-center">
            <button
              className="atrium-rose font-medium px-4 py-1 rounded-full text-xs hover:opacity-90 duration-300"
              onClick={() => setExpanded((e) => !e)}
            >
              {expanded ? "Kevesebb" : "Több"}
            </button>
          </div>
        )}
      </div>
      <div className="text-center font-semibold atrium-charcoal border-t pt-3">
        {testimonial.author}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  if (!testimonials || testimonials.length === 0) {
    return <div className="py-20 text-center text-gray-600">Nincs vélemény.</div>;
  }

  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-14 overflow-hidden relative scroll-mt-24">
      <div className="absolute left-0 bottom-[90%] w-full">
				<img src={devTop} alt="devTop" className="h-[66px] w-full"/>
			</div>
			<div className="absolute left-0 bottom-0 w-full transform scale-y-[-1]">
				<img src={devTop} alt="devTop" className="h-[66px] w-full"/>
			</div>
			<div className="bg-atrium-cream">
      <img
				src={backgroundAccentImage}
				alt=""
				className="absolute left-[50px] top-[100px] w-[200px] h-auto opacity-10 grayscale pointer-events-none select-none rotate-12 z-0"
			/>
			<img
				src={backgroundAccentImage}
				alt=""
				className="absolute right-[80px] top-[150px] w-[150px] h-auto opacity-10 grayscale pointer-events-none select-none rotate-45 z-0"
			/>
			<img
				src={backgroundAccentImage}
				alt=""
				className="absolute left-[300px] bottom-[50px] w-[250px] h-auto opacity-10 grayscale pointer-events-none select-none rotate-25 z-0"
			/>
			<img
				src={backgroundAccentImage}
				alt=""
				className="absolute right-[200px] bottom-[100px] w-[180px] h-auto opacity-10 grayscale pointer-events-none select-none -rotate-15 z-0"
			/>
			<img
				src={backgroundAccentImage}
				alt=""
				className="absolute left-[300px] top-[300px] w-[120px] h-auto opacity-10 grayscale pointer-events-none select-none rotate-8 z-0"
			/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold atrium-charcoal mb-4 pt-2">Vélemények</h2>
          <div className="w-24 h-1 bg-atrium-rose mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6">Mit mondanak rólunk vendégeink</p>
        </div>

        <div className="relative w-full">
          <div
            className="slider-track flex w-max animate-scroll gap-4 items-start hover:[animation-play-state:paused]"
          >
            {loopedTestimonials.map((testimonial, idx) => (
              <TestimonialCard key={testimonial.id + "-" + idx} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
