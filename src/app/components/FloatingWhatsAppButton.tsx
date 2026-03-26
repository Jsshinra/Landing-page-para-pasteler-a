import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const phoneNumber = "529997221736";
    const message = "Hola! Quiero hacer un pedido \u{1F382}";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative bg-white text-[#3D2817] px-5 py-3 rounded-2xl shadow-2xl text-sm font-medium border border-[#FFD6E8]/40 overflow-visible"
          >
            <span className="relative z-10">¡Para pedidos más grandes, contáctanos directamente!</span>
            <div className="absolute -bottom-1.5 right-6 w-4 h-4 bg-white border-r border-b border-[#FFD6E8]/40 rotate-45 z-0"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={handleClick}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center 
          transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-9 h-9" />
      </button>
    </div>
  );
}
