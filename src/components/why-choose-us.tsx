import { Heart, Award, Tag, Gem, Clock, Home } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Hivatásunk",
    description: "Szerelmünk a szakmánk iránt változatlan."
  },
  {
    icon: Award,
    title: "Professzionalizmus",
    description: "Több éves tapasztalattal rendelkezünk és folyamatosan fejlődünk a mai napig."
  },
  {
    icon: Tag,
    title: "Megfizethető Árak",
    description: "Áraink mindenki számára elérhetőek."
  },
  {
    icon: Gem,
    title: "Minőség",
    description: "Minőségi/Természetes termékeket használunk a vendég elégedettsége érdekében."
  },
  {
    icon: Clock,
    title: "Rugalmasság",
    description: "Időbeosztásunkkal próbálunk a vendég igényeihez alkalmazkodni."
  },
  {
    icon: Home,
    title: "Hangulat",
    description: "Családias légkör nálunk elengedhetetlen."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold atrium-charcoal mb-4">Miért válasszon minket?</h2>
          <div className="w-24 h-1 bg-atrium-rose mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 bg-atrium-cream rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-atrium-rose/10 rounded-full flex items-center justify-center mb-6 group-hover:text-white transition-all duration-300">
                <feature.icon className="w-8 h-8 atrium-rose" />
              </div>
              <h3 className="text-xl font-semibold mb-4 atrium-charcoal">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
