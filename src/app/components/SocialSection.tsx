import { Instagram, Facebook, MapPin, Phone } from "lucide-react";

export function SocialSection() {
  return (
    <section id="redes" className="py-20 bg-white relative overflow-hidden">
      {/* Imagen de fondo decorativa */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 select-none">
        <img 
          src="/Logos/Citrus logo web_Verde.png" 
          alt="" 
          className="w-full max-w-4xl object-contain transform scale-150"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Seguinos en Redes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unite a nuestra comunidad y descubrí promociones exclusivas, nuevos sabores y más
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/citrus_reposteria/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            aria-label="Seguir en Instagram"
          >
            <div className="flex flex-col items-center text-white">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                <Instagram className="w-10 h-10" />
              </div>
              <h3 className="text-2xl mb-2">@citrus_reposteria</h3>
              <p className="text-white/90 text-center mb-4">
                Seguinos para ver nuestras creaciones diarias, promociones especiales y concursos
              </p>
              <div className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-full">
                <span>Seguir en Instagram</span>
              </div>
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/citrusreposteria/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-blue-600 to-blue-400 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            aria-label="Seguir en Facebook"
          >
            <div className="flex flex-col items-center text-white">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                <Facebook className="w-10 h-10" />
              </div>
              <h3 className="text-2xl mb-2">Citrus Pasteleria</h3>
              <p className="text-white/90 text-center mb-4">
                Dale like a nuestra página y enterate de todas las novedades y eventos especiales
              </p>
              <div className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-full">
                <span>Seguir en Facebook</span>
              </div>
            </div>
          </a>
        </div>

        {/* Info adicional */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#FFD6E8] to-[#FFC5D9] rounded-2xl">
            <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-[#8B6F47]" />
            </div>
            <div>
              <p className="text-sm text-[#8B6F47]/70">Teléfono</p>
              <p className="text-[#3D2817]">+52 999 722 1736</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#FFD6E8] to-[#FFC5D9] rounded-2xl">
            <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-[#8B6F47]" />
            </div>
            <div>
              <p className="text-sm text-[#8B6F47]/70">Ubicación</p>
              <p className="text-[#3D2817]">Mérida, Yucatán, México</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}