import { Sparkles, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router";

export function CustomCakesSection() {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate("/cotizar");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/images/gallery/IMG_9283.jpeg"
                alt="Pasteles personalizados"
                className="w-full h-[450px] object-cover object-bottom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-[#FFD6E8] text-[#8B6F47] px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm">Hecho con Amor</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
              Pasteles Personalizados para tus Momentos Especiales
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Cada celebración es única y tu pastel también debería serlo. Trabajamos contigo 
              para crear el pastel de tus sueños, personalizado según tus gustos, colores favoritos 
              y el tema de tu evento.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-muted-foreground">Diseños exclusivos adaptados a tu evento</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-muted-foreground">Sabores y decoraciones a tu elección</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-muted-foreground">Ingredientes frescos y de primera calidad</span>
              </li>
            </ul>

          
          </div>
        </div>
      </div>
    </section>
  );
}