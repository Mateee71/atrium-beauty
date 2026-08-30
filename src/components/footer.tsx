import { Instagram, Facebook } from "lucide-react";
import { ADDRESS, LOGO, SITE_NAME, SLOGAN, TEL, instagramLink, facebookLink } from "../config";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-atrium-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3">
                <img src={LOGO} alt="" />
              </div>
              <span className="text-xl font-serif font-semibold atrium-logo">{SITE_NAME.toUpperCase()}</span>
            </div>
            <p className="text-gray-300 italic">"{SLOGAN}"</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Gyors linkek</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-left"
              >
                Szolgáltatások
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-left"
              >
                Csapatunk
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-left"
              >
                Vélemények
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-left"
              >
                Kapcsolat
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Elérhetőség</h4>
            <div className="space-y-2 text-gray-300 mb-4">
              <p>{ADDRESS}</p>
              <p>
                <a href={`tel:${TEL.replace(/\s+/g, "")}`}
                  className="hover:underline"
                >{TEL}</a>
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-atrium-rose hover:text-white transition-colors"
              >
                <Instagram className="w-7 h-7" />
              </a>
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-atrium-rose hover:text-white transition-colors"
              >
                <Facebook className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 {SITE_NAME}. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
}
