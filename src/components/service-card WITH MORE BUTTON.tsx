import { FC, useState, useRef, useEffect } from "react";
import { servicesData } from "@/data";

type ServiceCardProps = {
  name: string;
  durations: {
    duration: string;
    prices: { session: string; price: string }[][];
  }[];
};

const Card: FC<ServiceCardProps> = ({ name, durations }) => {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const MAX_HEIGHT = 300;

  useEffect(() => {
    const el = contentRef.current;
    if (el && el.scrollHeight > MAX_HEIGHT) {
      setIsOverflowing(true);
    }
  }, []);

  return (
    <div className="relative bg-white shadow-lg rounded-2xl p-5 flex flex-col justify-between">
      <div
        ref={contentRef}
        className={`space-y-4 ${
          expanded ? "max-h-full" : `max-h-[${MAX_HEIGHT}px]`
        } overflow-hidden`}
        style={!expanded ? { maxHeight: `${MAX_HEIGHT}px` } : {}}
      >
        <h2 className="text-xl font-semibold text-pink-700">{name}</h2>
        {durations.map((item, idx) => (
          <div key={item.duration + idx} className="border-t pt-3 space-y-3">
            <h3 className="font-medium text-gray-700">{item.duration}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              {item.prices.map((p, i) => (
                <div key={p.session + i}>
                  <span className="font-semibold">{p.session}:</span> {p.price}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Csak akkor jelenik meg, ha kilóg a tartalom */}
      {isOverflowing && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-medium text-pink-700 underline hover:text-pink-900 transition"
          >
            {expanded ? "Kevesebb" : "Több"}
          </button>
        </div>
      )}
    </div>
  );
};

export default function ServiceCards() {
  const masszazs = servicesData.find(s => s.id === "masszazs");

  const cards =
    masszazs?.priceTable?.body.map(group => ({
      name: group.category || masszazs?.title || "",
      durations: group.rows.map(row => ({
        duration: row.type,
        prices: row.prices.map((price, idx) => ({
          session:
            masszazs?.priceTable?.head[idx + 1]?.replace(" alkalom", " alkalom") || "",
          price,
        })),
      })),
    })) ?? [];

  return (
    <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2">
      {cards.map((card, idx) => (
        <Card
          key={card.name + idx}
          name={card.name}
          durations={card.durations}
        />
      ))}
    </div>
  );
}
