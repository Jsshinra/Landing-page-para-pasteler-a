import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    text: "¡El pastel de cumpleaños de mi hija fue increíble! No solo se veía hermoso, sino que también estaba delicioso. Todos los invitados preguntaron de dónde era.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    text: "Pedí un pastel personalizado para mi aniversario y superó todas mis expectativas. La atención al detalle y el sabor son excepcionales.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    text: "Siempre compro mis pasteles aquí. La calidad es consistente, los precios justos y el servicio por WhatsApp es súper conveniente. ¡Totalmente recomendado!",
    rating: 5,
  },
  {
    name: "Luis Fernández",
    text: "El mejor red velvet que he probado en mi vida. La textura, el cream cheese, todo perfecto. Ya son mi pastelería de confianza.",
    rating: 5,
  },
  {
    name: "Sofía López",
    text: "Me encantó poder personalizar completamente el diseño del pastel para la boda de mi hermana. El resultado fue una obra de arte comestible.",
    rating: 5,
  },
  {
    name: "Diego Pérez",
    text: "Excelente relación calidad-precio. El proceso de pedido por WhatsApp es muy fácil y la entrega siempre es puntual. ¡100% recomendados!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-[#FFF8F0] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Lo que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative ${
                index >= 2 ? "hidden md:block" : ""
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#FFD6E8] to-[#FFC5D9] rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-[#8B6F47]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <p className="text-foreground">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
