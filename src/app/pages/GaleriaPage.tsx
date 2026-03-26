import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { X } from "lucide-react";

const galleryImages = [
  "/images/gallery/IMG_1904.jpeg",
  "/images/gallery/IMG_1905.jpeg",
  "/images/gallery/IMG_3997.jpeg",
  "/images/gallery/IMG_4173.jpeg",
  "/images/gallery/IMG_6050.jpeg",
  "/images/gallery/IMG_8393.jpeg",
  "/images/gallery/IMG_9276.jpeg",
  "/images/gallery/IMG_9277.jpeg",
  "/images/gallery/IMG_9278.jpeg",
  "/images/gallery/IMG_9279.jpeg",
  "/images/gallery/IMG_9281.jpeg",
  "/images/gallery/IMG_9283.jpeg",
  "/images/gallery/IMG_9284.jpeg",
  "/images/gallery/IMG_9285.jpeg",
  "/images/gallery/IMG_9287.jpeg",
  "/images/gallery/IMG_9291.jpeg",
  "/images/gallery/IMG_9292.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-18 at 13.26.27.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-18 at 13.26.28.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-18 at 13.26.51.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-18 at 13.27.45.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-18 at 13.27.46.jpeg",
  "/images/gallery/a.jpeg",
  "/images/gallery/dasfasdfasd.jpeg",
  "/images/gallery/dsad.jpeg",
  "/images/gallery/dsadfff.jpeg",
  "/images/gallery/dsaffdsfsdfsd.jpeg",
  "/images/gallery/fasdsadas.jpeg",
  "/images/gallery/indiv.jpeg",
  "/images/gallery/luffy.jpeg",
  "/images/gallery/sadasfasfdafa.jpeg",
];

export function GaleriaPage() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Cerrar con la tecla Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FFF8F0]">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#FFD6E8] via-[#FFC5D9] to-[#FFF1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[#8B6F47] hover:text-[#6B5437] transition-colors mb-10"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </button>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 text-[#8B6F47] text-sm mb-5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Nuestra galería</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#5B4630] mb-6">
              Inspirate con algunos de nuestros diseños
            </h1>

            <p className="text-lg text-[#6B5437] leading-relaxed">
              Cada pastel está pensado para acompañar un momento
              especial. Explorá algunos de nuestros trabajos y
              encontrá inspiración para el tuyo.
            </p>
          </div>
        </div>
      </section>

      {/* Grilla simple */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group overflow-hidden rounded-3xl border border-[#F1E3D3] shadow-sm hover:shadow-xl transition-all duration-300 bg-white cursor-pointer"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Pastel ${index + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="relative max-w-5xl w-full max-h-full flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Pastel ampliado" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}

      {/* CTA final */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl border border-[#F1E3D3] shadow-sm p-8 sm:p-10">
            <h2 className="text-3xl sm:text-4xl mb-4">
              ¿Querés crear un diseño único?
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Contanos tu idea, elegí los detalles de tu pastel
              y te ayudamos a darle forma para tu ocasión.
            </p>

            <button
              onClick={() => navigate("/cotizar")}
              className="inline-flex items-center gap-3 bg-white text-[#8B6F47] px-8 py-4 rounded-full border border-[#E8D7C5] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              Personalizar mi pastel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}