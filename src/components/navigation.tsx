import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import { LOGO_BLACK, SITE_NAME } from "../config";

interface NavigationProps {
  
}

export default function Navigation({ }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
  if (location !== "/") {
    sessionStorage.setItem("scrollToSection", sectionId);
    setLocation("/");
  } else {
    scrollToSection(sectionId);
  }

  setIsMobileMenuOpen(false);
};

  const [main, sub] = SITE_NAME.split(" ");
  const mainUpper = main?.toUpperCase() ?? "";
  const subUpper = sub?.toUpperCase() ?? "";


  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              if (location !== "/") {
                setLocation("/");
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3">
              <img src={LOGO_BLACK} alt="" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-semibold atrium-charcoal atrium-logo">{mainUpper}</h1>
              <p className="text-sm text-gray-600 font-light -mt-1">{subUpper}</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')}
              className="atrium-charcoal hover:text-atrium-rose transition-colors duration-300"
            >
              Főoldal
            </button>
            <button 
              onClick={() => handleNavClick('team')}
              className="atrium-charcoal hover:text-atrium-rose transition-colors duration-300"
            >
              Csapatunk
            </button>
            <button 
              onClick={() => handleNavClick('testimonials')}
              className="atrium-charcoal hover:text-atrium-rose transition-colors duration-300"
            >
              Vélemények
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="atrium-charcoal hover:text-atrium-rose transition-colors duration-300"
            >
              Kapcsolat
            </button>
           {/*  <button 
              className="bg-atrium-rose text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300"
            >
              Időpont foglalás
            </button> */}
            <button 
              onClick={() => handleNavClick('services')}
              className="bg-atrium-rose text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300"
            >
              Szolgáltatások
            </button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="atrium-charcoal text-xl" />
            ) : (
              <Menu className="atrium-charcoal text-xl" />
            )}
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden bg-transparent border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavClick('home')}
                className="text-left atrium-charcoal hover:text-atrium-rose transition-colors duration-300 px-4"
              >
                Főoldal
              </button>
              <button 
                onClick={() => handleNavClick('services')}
                className="text-left atrium-charcoal hover:text-atrium-rose transition-colors duration-300 px-4"
              >
                Szolgáltatások
              </button>
              <button 
                onClick={() => handleNavClick('team')}
                className="text-left atrium-charcoal hover:text-atrium-rose transition-colors duration-300 px-4"
              >
                Csapatunk
              </button>
              <button 
                onClick={() => handleNavClick('testimonials')}
                className="text-left atrium-charcoal hover:text-atrium-rose transition-colors duration-300 px-4"
              >
                Vélemények
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-left atrium-charcoal hover:text-atrium-rose transition-colors duration-300 px-4"
              >
                Kapcsolat
              </button>
             {/*  <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                className="mx-4 bg-atrium-rose text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300"
              >
                Időpont foglalás
              </button> */}
              <button 
                onClick={() => {
                  handleNavClick('services')
                  setIsMobileMenuOpen(false);
                }}
                className="mx-4 bg-atrium-rose text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300"
              >
                Szolgáltatások
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
