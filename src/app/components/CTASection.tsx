import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router";

export function CTASection() {
  // ✅ Hook SIEMPRE arriba
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const phoneNumber = "529997221736"; // cambiar luego
    const message = "Hola! Quiero hacer un pedido \u{1F382}";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleQuoteClick = () => {
    navigate("/cotizar");
  };

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-[#FFD6E8] via-[#FFC5D9] to-[#D4A373]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
          ¿Listo para Endulzar tu Día?
        </h2>

        <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
          Hacé tu pedido ahora mismo y creá tu pastel
          personalizado. ¡Estamos para ayudarte!
        </p>

        {/* Botón Personalizar */}
        <button
          onClick={handleQuoteClick}
          className="bg-white text-[#8B6F47] px-8 py-4 rounded-full
  flex items-center gap-3 mx-auto
  transition-all duration-300
  hover:scale-105 hover:shadow-xl
  font-semibold text-lg"
        >
          <Sparkles className="w-6 h-6" />
          Personalizar mi pastel
        </button>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-8 mt-12">
          <div className="flex flex-col items-center gap-2 text-white">
            <Phone className="w-6 h-6" />
            <span className="text-sm">+52 999 722 1736</span>
          </div>

          <div className="flex flex-col items-center gap-2 text-white">
            <Mail className="w-6 h-6" />
            <span className="text-sm">
              citrusaltareposteria@gmail.com
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 text-white">
            <MapPin className="w-6 h-6" />
            <span className="text-sm">
              Mérida, Yucatán, México
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}