import { Cake, Instagram, Facebook, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#3D2817] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/Logos/Citrus logo web_Verde.png" 
                  alt="Icono Citrus Pasteleria" 
                  className="w-full h-full object-contain"
                />
              </div>
              <img 
                src="/Logos/Citrus logo web_txt verde.png" 
                alt="Citrus Pasteleria" 
                className="h-8 object-contain"
              />
            </div>
            <p className="text-white/70 leading-relaxed">
              Pasteles artesanales hechos con amor para endulzar tus momentos especiales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-white transition-colors">
                  Galería
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('redes')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-white transition-colors">
                  Redes Sociales
                </button>
              </li>
              {/* <li>
                <button onClick={() => document.getElementById('testimonios')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-white transition-colors">
                  Testimonios
                </button>
              </li> */}
              <li>
                <button onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-white transition-colors">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Seguinos</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/citrus_reposteria/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Seguinos en Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/citrusreposteria/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Seguinos en Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/70 text-sm">
          <p className="flex items-center justify-center gap-1">
            Hecho con <Heart className="w-4 h-4 fill-current text-[#FFC5D9]" /> © 2026 Citrus Pasteleria
          </p>
        </div>
      </div>
    </footer>
  );
}