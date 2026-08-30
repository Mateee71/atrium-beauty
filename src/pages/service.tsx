import React, { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { servicesData, specialists } from "@/data";
import { IMAGE_NOT_AVAILABLE } from "@/config";
import ServiceCards from "@/components/service-card";
import ToTopButton from "@/components/to-top-button";
import { ArrowLeft, Award, Star } from "lucide-react";

export default function Service() {
  const [match, params] = useRoute("/service/:id");
  const [, navigate] = useLocation();

  const [showFullDescription, setShowFullDescription] = useState(false);

  const service = servicesData.find((s) => s.id === params?.id);

  const specialistMap: Record<string, string> = {
    kozmetika: "szilvia",
    fodraszat: "reka",
    masszazs: "vera",
    mukormos: "ibolya",
  };

  const specialist = specialists.find((s) => s.id === specialistMap[service?.id || ""]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [params?.id]);

  if (!service) return <div>Szolgáltatás nem található.</div>;

  const galleryImages = [service.roomImage, service.roomImage2].filter(Boolean);

  const maxDL = 260;
  const description = specialist?.description || "Több éves szakmai tapasztalattal, személyre szabott figyelemmel várlak, hogy együtt találjuk meg a hozzád legjobban illő megjelenést.";
  const isDescriptionLong = description.length > maxDL;
  const displayedDescription = isDescriptionLong && !showFullDescription
    ? description.slice(0, maxDL) + "..."
    : description;

  return (
    <>
      <Navigation />

      <main className="mt-20 bg-[#fcfafb]">
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
          <div className="relative mx-auto mb-12 max-w-6xl">
            <button
              onClick={() => {
                sessionStorage.setItem("scrollToSection", "services");
                navigate("/");
              }}
              className="inline-flex items-center gap-2 font-semibold text-[#e33474] transition hover:opacity-80 pb-6"
              >
              <ArrowLeft className="h-4 w-4" />
              Vissza
				    </button>
			<div className="flex items-center justify-between">
				<h1 className="text-5xl font-serif font-bold text-[#2f2628] text-center flex-1">
				{service.pageTitle}
				</h1>
			</div>
			<div className="mt-4 text-center">
				<div className="mx-auto h-1 w-24 rounded-full bg-[#ef3d7f]" />
			</div>
			</div>
          <div className="mx-auto max-w-6xl rounded-[36px] border border-[#eadfe3] bg-[#fbf4f6] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.06)] md:p-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
              <div className="flex flex-col items-center">
                <img
                  src={service.image || IMAGE_NOT_AVAILABLE}
                  alt={service.alt}
                  className="h-56 w-56 rounded-full border-4 border-white object-cover shadow-[0_12px_35px_rgba(0,0,0,0.14)]"
                />

                <div className="mt-4 rounded-full bg-[#f8dbe6] px-5 py-2 text-sm font-semibold text-[#e33474] shadow-sm text-center">
                  {service.title}
                </div>
              </div>

              <div>
                <h2 className="text-5xl font-serif font-semibold text-[#2f2628]">
                  {service.name}
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600">
                  {displayedDescription}
                  {isDescriptionLong && (
                    <button
                      onClick={() => setShowFullDescription(!showFullDescription)}
                      className="ml-2 text-[#e33474] hover:underline"
                    >
                      {showFullDescription ? "Kevesebb" : "Több"}
                    </button>
                  )}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-4 rounded-2xl border border-[#f0d9e1] bg-white px-5 py-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fde8f0] text-[#e33474]">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#2f2628]">{specialist?.exp || "N/A"}</div>
                      <div className="text-sm text-gray-500">Szakmai tapasztalat</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-[#f0d9e1] bg-white px-5 py-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fde8f0] text-[#e33474]">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#2f2628]">{specialist?.satisfiedGuests || "N/A"}+</div>
                      <div className="text-sm text-gray-500">Elégedett vendég</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-6xl">
            {galleryImages.length > 0 && (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-[28px] border border-[#eadfe3] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  >
                    <img
                      src={img || IMAGE_NOT_AVAILABLE}
                      alt={`${service.pageTitle} galéria ${i + 1}`}
                      className="h-[260px] w-full object-cover md:h-[340px]"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mx-auto mt-12 max-w-6xl">
            <ServiceCards serviceId={service.id}  specialist={specialist} />
          </div>

          {/* {galleryImages.length > 0 && (
            <div className="mx-auto mt-16 max-w-6xl">
              <div className="mb-8 text-center">
                <h3 className="text-4xl font-serif font-semibold text-[#2f2628]">Munkáim</h3>
                <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#ef3d7f]" />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((item, idx) => (
                  <div
                    key={item}
                    className="overflow-hidden rounded-[24px] border border-[#eadfe3] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.05)]"
                  >
                    <img
                      src={galleryImages[idx % galleryImages.length] || IMAGE_NOT_AVAILABLE}
                      alt={`Munka ${idx + 1}`}
                      className="h-[260px] w-full object-cover"
                    />
                    <div className="bg-[#f8dbe6] px-4 py-3 text-center font-semibold text-[#2f2628]">
                      {idx === 0 && "Balayage"}
                      {idx === 1 && "Tőfestés"}
                      {idx === 2 && "Alkalmi frizura"}
                      {idx === 3 && "Fésűs melír"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )} */}

          <ToTopButton />
        </section>
      </main>
      <Footer />
    </>
  );
}