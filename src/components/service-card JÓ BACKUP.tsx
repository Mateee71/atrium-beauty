import { FC } from "react";
import { servicesData } from "@/data";

type ServiceCardProps = {
  name: string;
  durations: {
    duration: string;
    prices: { session: string; price: string }[];
  }[];
};

const Card: FC<ServiceCardProps> = ({ name, durations }) => (
  <div className="w-full bg-atrium-cream shadow-sm border border-gray-200 rounded-xl p-6 space-y-6">
    <h2 className="text-xl font-bold text-pink-700">{name}</h2>
    {durations.map((item, idx) => (
      <div key={item.duration + idx} className="space-y-2">
        <div className="text-lg font-semibold atrium-charcoal border-b pb-1">{item.duration}</div>
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 text-sm text-gray-600">
          {item.prices.map((p, i) => (
            <div key={p.session + i} className="flex text-center gap-1">
              <span className="font-normal text-gray-700">{p.session}:</span>
              <span  className="font-medium text-pink-700">{p.price}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default function ServiceCards({ serviceId }: { serviceId: string }) {
  const service = servicesData.find((s) => s.id === serviceId);

  if (!service?.priceTable || !service.priceTable.body.length) {
    return (
      <div className="w-full bg-atrium-cream shadow-sm border border-gray-200 rounded-xl p-6 space-y-6">
        Jelenleg nincsen elérhető szolgáltatás.
      </div>
    );
  }

  const cards =
    service.priceTable.body.map((group) => ({
      name: group.category || service.title || "",
      durations: group.rows.map((row) => ({
        duration: row.type,
        prices: row.prices.map((price, idx) => ({
          session:
            service.priceTable?.head?.[idx + 1]?.replace(" alkalom", " alkalom") || "",
          price,
        })),
      })),
    })) ?? [];

  return (
    <div className="max-full mx-auto flex flex-col gap-6">
      {cards.map((card, idx) => (
        <Card key={card.name + idx} name={card.name} durations={card.durations} />
      ))}
    </div>
  );
}
