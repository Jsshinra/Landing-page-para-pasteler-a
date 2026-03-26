import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const galleryImages = [
  "/images/gallery/IMG_1904.jpeg",
  "/images/gallery/IMG_4173.jpeg",
  "/images/gallery/IMG_6050.jpeg",
  "/images/gallery/IMG_9291.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-18 at 13.26.27.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-18 at 13.27.46.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-18 at 13.26.51.jpeg",
  "/images/gallery/WhatsApp Image 2026-03-18 at 13.27.45.jpeg",
];

export function GallerySection() {
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
    <section
      id="galeria"
      className="py-20 bg-gradient-to-b from-white to-[#FFF8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Nuestra Galería
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explorá algunos de nuestros trabajos más recientes y
            dejate inspirar
          </p>
        </div>

        {/* Grid fixed size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`group overflow-hidden rounded-3xl border border-[#F1E3D3] shadow-sm hover:shadow-xl transition-all duration-300 bg-white cursor-pointer ${
                index >= 3 ? "hidden sm:block" : ""
              }`}
            >
              <ImageWithFallback
                src={image}
                alt={`Pastel ${index + 1}`}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
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
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}

        {/* Botón */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/galeria")}
            className="px-8 py-4 rounded-full bg-primary text-white font-medium
            hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Ver galería completa
          </button>
        </div>

      </div>
    </section>
  );
}