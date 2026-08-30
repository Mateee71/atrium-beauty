import { Phone } from "lucide-react";
import { specialists } from "../data";
import { IMAGE_NOT_AVAILABLE } from "@/config";

interface TeamSectionProps {}

export default function TeamSection({ }: TeamSectionProps) {
  return (
    <section id="team" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold atrium-charcoal mb-4">Szakember csapatunk</h2>
          <div className="w-24 h-1 bg-atrium-rose mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Tapasztalt szakembereink évtizedes tapasztalattal és folyamatos továbbképzéssel garantálják a legmagasabb színvonalú szolgáltatást.
          </p>
        </div>
        
        <div className="space-y-16">
          {specialists.map((specialist, index) => (
            <div key={specialist.id} id={specialist.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'order-2' : 'order-2 lg:order-1'}`}>
                <div className="space-y-6">
                  <div>
                    <span className={`${specialist.color} font-semibold uppercase tracking-wider`}>{specialist.title}</span>
                    <h3 className="text-3xl font-serif font-bold atrium-charcoal mt-2">{specialist.name}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {specialist.description}
                  </p>
                  <p className="text-gray-600">
                    {specialist.details}
                  </p>
                  <div className="flex items-center space-x-4 pt-4">
                    <div className="flex items-center">
                      <Phone className={`w-5 h-5 ${specialist.color} mr-2`} />
                      <a
                        href={`tel:${specialist.tel.replace(/\s+/g, "")}`}
                        className="atrium-charcoal font-semibold hover:underline focus:underline"
                      >
                        {specialist.tel}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'order-1' : 'order-1 lg:order-2'}`}>
                <div className="relative">
                  <div className={`absolute ${index % 2 === 1 ? '-top-4 -left-4' : '-top-4 -right-4'} w-full h-full bg-${specialist.color.replace('atrium-', '')}/10 rounded-3xl`}></div>
                  <img 
                    src={specialist.image || IMAGE_NOT_AVAILABLE}
                    alt={specialist.alt}
                    className="relative rounded-3xl shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
