import { FC, useMemo, useState, useRef } from "react";
import { Info, PhoneCall } from "lucide-react";
import { Icon } from "@iconify/react";
import { servicesData, services } from "@/data";

type ServiceCardsProps = {
  serviceId: string;
  specialist?: {
    tel?: string;
  };
};

const ServiceCards: FC<ServiceCardsProps> = ({ serviceId, specialist }) => {
  const service = servicesData.find((s) => s.id === serviceId);
  const serviceCat  = services.find((s) => s.id === serviceId);
  const serviceIcon = serviceCat?.icon ?? "mdi:sparkles";

  const categories = service?.priceTable?.body ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const targetRef = useRef<HTMLDivElement | null>(null);

  const activeCategory = categories[activeIndex];

  const globalHeaders = useMemo(() => {
    return service?.priceTable?.head?.slice(1) ?? [];
  }, [service]);

  if (!service?.priceTable || !categories.length) {
    return (
      <div className="w-full rounded-[28px] border border-[#eadfe3] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
        <p className="text-base text-gray-600">Jelenleg nincsen elérhető szolgáltatás.</p>
        <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3 rounded-2xl border border-[#f3d7df] bg-[#fff1f5] px-4 py-4">
                  <div className="mt-0.5 text-[#e33474]">
                    <Info className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#e33474]">Fontos információ</p>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Az árak a szolgáltatás típusától, időtartamától, az igénybe vett kezelésektől, valamint a felhasznált anyagok és termékek mennyiségétől függően változhatnak.
                    </p>
                  </div>
                </div>

                <a className="mx-auto flex w-full max-w-[360px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ef3d7f] to-[#ff4f8f] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(239,61,127,0.28)] transition hover:scale-[1.02]"
                   href={`tel:${specialist?.tel?.replace(/\s+/g, "")}`}>
                  <PhoneCall className="h-5 w-5" />
                  Időpont egyeztetés
                </a>
              </div>
      </div>
    );
  }

  const maxPrices = Math.max(...activeCategory.rows.map((r) => r.prices.length));
  const headers = globalHeaders.slice(0, maxPrices);

  const handleClick = () => {
    targetRef.current?.scrollIntoView({behavior: "smooth", block: "start"
    });
  };

  return (
    <section className="mt-8 lg:mt-12">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="rounded-[28px] border border-[#eadfe3] bg-[#fbf4f6] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] h-fit">
          <h3 className="px-3 pb-4 text-3xl font-serif font-semibold text-[#2f2628]">
            Szolgáltatások
          </h3>

          <div className="space-y-2">
            {categories.map((category, idx) => {
              const isActive = idx === activeIndex;

              return (
                <button
                  key={category.category + idx}
                  onClick={() => {
                    setActiveIndex(idx);
                    setOpenIndex(idx);
                    handleClick();
                  }}
                  className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                    isActive
                      ? "border-[#f04b8a] bg-[#fde8f0] text-[#e33474] shadow-sm"
                      : "border-transparent bg-white text-[#2f2628] hover:border-[#f3c7d7] hover:bg-[#fff8fa]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        isActive ? "bg-white text-[#e33474]" : "bg-[#f9edf1] text-[#e33474]"
                      }`}
                    >
                      <Icon icon={serviceIcon} className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold leading-snug">{category.category}</span>
                  </div>

                  <span className="text-lg leading-none">›</span>
                </button>
              );
            })}
          </div>
        </aside>

        <div ref={targetRef} className="rounded-[28px] border border-[#eadfe3] bg-white p-5 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] scroll-mt-24">
          <div
            className="flex w-full items-start justify-between gap-4 rounded-2xl bg-white text-left"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#fde8f0] text-[#e33474] shadow-sm">
                <Icon icon={serviceIcon} className="h-8 w-8" />
              </div>

              <div>
                <h4 className="text-3xl font-serif font-semibold text-[#2f2628]">
                  {activeCategory.category}
                </h4>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  {activeCategory.description ?? "Professzionális szolgáltatás prémium termékekkel, személyre szabott tanácsadással."} 
                </p>
              </div>
            </div>
          </div>

          <div
            className={`grid overflow-hidden transition-all duration-300 ${
              openIndex === activeIndex ? "mt-6 grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="hidden rounded-[24px] border border-[#eee3e7] bg-[#fffafb] p-5 lg:block">
                <div
                  className="grid gap-0 overflow-hidden rounded-[20px] border border-[#eadfe3] bg-white"
                  style={{
                    gridTemplateColumns: `1.25fr repeat(${Math.max(maxPrices, 1)}, minmax(0, 1fr))`,
                  }}
                >
                  <div className="border-b border-[#f2e8ec] bg-[#fdf4f7] px-6 py-5 font-semibold text-[#2f2628]">
                    Szolgáltatás
                  </div>

                  {headers.map((header) => (
                    <div
                      key={header}
                      className="border-b border-l border-[#f2e8ec] bg-[#fdf4f7] px-6 py-5 text-center font-semibold text-[#7d5b65]"
                    >
                      {header}
                    </div>
                  ))}

                  {activeCategory.rows.map((row, rowIdx) => {
                    const emptyCells = Array.from({
                      length: maxPrices - row.prices.length,
                    });

                    return (
                      <>
                        <div
                          key={`${row.type}-label`}
                          className={`py-5 font-semibold text-[#2f2628] ${
                            row.indent ? "pl-12 pr-6" : "px-6"
                          } ${
                            rowIdx !== activeCategory.rows.length - 1 ? "border-b border-[#f7edf0]" : ""
                          }`}
                        >
                          {row.type}
                        </div>

                        {row.prices.map((price, i) => (
                          <div
                            key={`${row.type}-${i}`}
                            className={`border-l px-6 py-5 text-center text-[#403537] ${
                              rowIdx !== activeCategory.rows.length - 1 ? "border-b border-[#f7edf0]" : ""
                            } border-[#f2e8ec]`}
                          >
                            {price}
                          </div>
                        ))}

                        {emptyCells.map((_, i) => (
                          <div
                            key={`${row.type}-empty-${i}`}
                            className={`border-l px-6 py-5 ${
                              rowIdx !== activeCategory.rows.length - 1 ? "border-b border-[#f7edf0]" : ""
                            } border-[#f2e8ec]`}
                          />
                        ))}
                      </>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4 lg:hidden">
                {activeCategory.rows.map((row) => (
                  <div
                    key={row.type}
                    className="rounded-2xl border border-[#eadfe3] bg-[#fffafb] p-4"
                  >
                    <div className="mb-3 text-base font-semibold text-[#2f2628]">{row.type}</div>

                    <div className="space-y-2">
                      {row.prices.map((price, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-xl border border-[#f2e8ec] bg-white px-4 py-3"
                        >
                          <span className="text-sm font-medium text-gray-500">
                            {headers[i] ?? "Ár"}
                          </span>
                          <span className="font-semibold text-[#2f2628]">{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3 rounded-2xl border border-[#f3d7df] bg-[#fff1f5] px-4 py-4">
                  <div className="mt-0.5 text-[#e33474]">
                    <Info className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#e33474]">Fontos információ</p>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Az árak a szolgáltatás típusától, időtartamától, az igénybe vett kezelésektől, valamint a felhasznált anyagok és termékek mennyiségétől függően változhatnak.
                    </p>
                  </div>
                </div>

                <a className="mx-auto flex w-full max-w-[360px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ef3d7f] to-[#ff4f8f] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(239,61,127,0.28)] transition hover:scale-[1.02]"
                   href={`tel:${specialist?.tel?.replace(/\s+/g, "")}`}>
                  <PhoneCall className="h-5 w-5" />
                  Időpont egyeztetés
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;