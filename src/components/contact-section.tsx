import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { ADDRESS, facebookLink, iframeMAP, instagramLink, MAP, TEL } from "../config";

interface ContactSectionProps {
 
}

export default function ContactSection({  }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold atrium-charcoal mb-4">Kapcsolat</h2>
          <div className="w-24 h-1 bg-atrium-rose mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold atrium-charcoal mb-6">Elérhetőségeink</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-atrium-rose/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 atrium-rose" />
                  </div>
                  <div>
                    <p className="font-semibold atrium-charcoal">Címünk</p>
                    <p className="text-gray-600">
                      <a
                        href={MAP}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {ADDRESS}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-atrium-rose/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 atrium-rose" />
                  </div>
                  <div>
                    <p className="font-semibold atrium-charcoal">Telefon</p>
                    <p className="text-gray-600">
                      <a href={`tel:${TEL.replace(/\s+/g, "")}`}
                         className="hover:underline"
                      >{TEL}</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-atrium-rose/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 atrium-rose" />
                  </div>
                  <div>
                    <p className="font-semibold atrium-charcoal">Nyitvatartás</p>
                    <p className="text-gray-600">Hétfő - Péntek: 8:00-20:00</p>
                    <p className="text-gray-600">Szombat - Vasárnap: Zárva</p>
                  </div>
                </div>
              </div>
            </div>

           {/* <div className="bg-atrium-cream p-6 rounded-2xl">
              <h4 className="text-lg font-semibold atrium-charcoal mb-4">Gyors időpont foglalás</h4>
              <p className="text-gray-600 mb-4">Hívjon minket a fenti telefonszámon, vagy használja az online foglalási rendszerünket.</p>
              <button 
                className="w-full bg-atrium-rose text-white py-3 rounded-full hover:opacity-90 transition-all duration-300"
              >
                Online időpont foglalás
              </button>
            </div> */}
            
            <div className="bg-atrium-cream p-6 rounded-2xl flex flex-col items-center">
              <h4 className="text-lg font-semibold atrium-charcoal mb-4">Kövessen minket!</h4>
              <p className="text-gray-600 mb-4 text-center">
                Tekintse meg szalonunkat a közösségi oldalakon is:
              </p>
              <div className="flex gap-6 justify-center">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-atrium-rose hover:text-atrium-charcoal transition-colors"
                >
                  <Instagram className="w-8 h-8" />
                </a>
                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-atrium-rose hover:text-atrium-charcoal transition-colors"
                >
                  <Facebook className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-96 bg-atrium-rose/5 rounded-3xl"></div>
            <iframe
              title="Szalon térkép"
              src={iframeMAP}
              width="100%"
              height="384"
              style={{ border: 0, borderRadius: "1.5rem", position: "relative" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl shadow-xl w-full h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
