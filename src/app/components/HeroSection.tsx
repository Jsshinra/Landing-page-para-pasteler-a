import { MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router";
import { Sparkles, Heart } from "lucide-react";

export function HeroSection() {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate("/cotizar");
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/gallery/FotoHero.png"
          alt="Hermoso pastel decorado"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Pasteles Artesanales que Endulzan tus Momentos
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            Diseñá el pastel perfecto para tu ocasión.
            Personalizá cada detalle y recibí tu cotización al
            instante por WhatsApp
          </p>
          <button
            onClick={handleQuoteClick}
            className="bg-gradient-to-r from-[#8B6F47] to-[#6B5437] hover:from-[#6B5437] hover:to-[#5B4327] text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
          >
            <Sparkles className="w-6 h-6" />
            Cotizar mi pastel
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}