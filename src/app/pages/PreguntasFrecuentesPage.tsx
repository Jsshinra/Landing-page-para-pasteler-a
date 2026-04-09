import { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  HelpCircle,
  Clock3,
  Cake,
  CreditCard,
  Truck,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router";

const faqs = [
  {
    icon: Clock3,
    question: "¿Con cuánta anticipación debo hacer mi pedido?",
    answer:
      "✨Recomendamos realizar tu pedido con al menos 3 a 5 días de anticipación. Una semana para diseños con obleas, cake toppers y 1 mes antes en pasteles de 100 porciones o mas ",
  },
  {
    icon: Cake,
    question: "¿Los pasteles son personalizados?",
    answer:
      "✨Sí. Cada pastel se realiza de forma personalizada según el tamaño, sabor, relleno, estilo y detalles que elijas. La idea es que cada pedido sea único para tu ocasión.",
  },
  {
    icon: CreditCard,
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "✨Aceptamos transferencia y efectivo. Toda la información se brinda antes de cerrar la reserva.",
  },
  {
    icon: Truck,
    question: "¿Realizan entregas?",
    answer:
      "✨Sí. Se realizan entregas con aplicaciones como didi o uber. La disponibilidad y el costo de envío se confirman al momento de tomar el pedido.",
  },
  {
    icon: Sparkles,
    question: "¿Puedo elegir sabores, rellenos y decoración?",
    answer:
      "✨Sí. Podés personalizar los detalles principales del pastel y enviarnos tu idea para que podamos orientarte y ayudarte a crear una propuesta acorde a lo que buscás.",
  },
  {
    icon: HelpCircle,
    question:
      "¿Puedo consultar una idea personalizada antes de confirmar?",
    answer:
      "✨Sí, claro. Podés escribirnos con tu idea, referencia o inspiración, y te ayudamos a definir una propuesta acorde a tu ocasión.",
  },
];

export function PreguntasFrecuentesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const navigate = useNavigate();
  const handleWhatsAppClick = () => {
    const phoneNumber = "529997221736"; // cambiá por el número real
    const message =
      "Hola! Tengo una consulta sobre los pasteles 🎂";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FFF8F0] relative overflow-hidden">
      {/* Background Logo Decorations */}
      <div className="absolute bottom-1/4 left-[8%] opacity-[0.3] pointer-events-none select-none z-0">
        <img 
          src="/Logos/Citrus logo web_cafe.png" 
          alt="" 
          className="w-[450px] h-auto"
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-1/4 right-[8%] opacity-[0.3] pointer-events-none select-none z-0 hidden md:block">
        <img 
          src="/Logos/Citrus logo web_cafe.png" 
          alt="" 
          className="w-[450px] h-auto"
          loading="lazy"
        />
      </div>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#FFD6E8] via-[#FFC5D9] to-[#FFF1E6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[#8B6F47] hover:text-[#6B5437] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </button>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 text-[#8B6F47] text-sm mb-5 backdrop-blur-sm">
              <HelpCircle className="w-4 h-4" />
              <span>Preguntas frecuentes</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-[#5B4630]">
              Todo lo que necesitás saber antes de hacer tu
              pedido
            </h1>

            <p className="text-lg text-[#6B5437] leading-relaxed">
              Reunimos las dudas más comunes para que pedir tu
              pastel sea un proceso simple, claro y sin
              complicaciones.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? "bg-white border-[#E8D7C5] shadow-lg"
                    : "bg-white/80 border-[#F1E3D3] hover:border-[#E8D7C5] hover:shadow-md"
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-4 p-6 sm:p-7 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${isOpen
                          ? "bg-[#FFD6E8] text-[#8B6F47]"
                          : "bg-[#FFF5F7] text-[#8B6F47]"
                          }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <h2 className="text-base sm:text-lg leading-snug">
                          {faq.question}
                        </h2>
                      </div>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-[#8B6F47] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pl-[5.25rem] text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA final */}
          <div className="mt-16">
            <div className="bg-white rounded-3xl border border-[#F1E3D3] shadow-sm p-8 sm:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl mb-3">
                ¿No encontraste tu respuesta?
              </h2>

              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Contanos tu idea y te ayudamos a definir el
                pastel ideal para tu ocasión.
              </p>

              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-3 bg-white text-[#8B6F47] px-8 py-4 rounded-full border border-[#E8D7C5] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                Hacer una consulta por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}