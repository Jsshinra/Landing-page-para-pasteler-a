import { Cake, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Si estamos en otra página, primero navegamos al home
    if (location.pathname !== "/") {
      navigate("/");
      // Esperamos un momento para que la página cargue
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-md shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/Logos/Citrus logo web_Verde.png" 
                alt="Logo Citrus Pasteleria" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl">Citrus Pasteleria</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => {
                navigate("/galeria");
                setIsMenuOpen(false);
              }}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("redes")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Redes Sociales
            </button>
            <button
              onClick={() => {
                navigate("/sobre-nosotros");
                setIsMenuOpen(false);
              }}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Sobre nosotros
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("galeria")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("redes")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Redes Sociales
            </button>
            <button
              onClick={() => {
                navigate("/sobre-nosotros");
                setIsMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Sobre nosotros
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-left py-2 bg-primary hover:bg-primary/90 text-white px-4 rounded-full transition-colors"
            >
              Contacto
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}