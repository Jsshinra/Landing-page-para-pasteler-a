import { Cake, MessageCircle, Truck } from "lucide-react";

const steps = [
  {
    icon: Cake,
    title: "Personaliza tu pastel",
    description:
      "Elegí sabores, colores y estilo. Creamos un diseño único para vos.",
  },
  {
    icon: MessageCircle,
    title: "Escribinos por WhatsApp",
    description:
      "Te asesoramos personalmente y definimos todos los detalles.",
  },
  {
    icon: Truck,
    title: "Coordinamos Entrega",
    description:
      "Acordamos fecha, hora y lugar para que solo tengas que disfrutar.",
  },
];

export function HowToOrderSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            ¿Cómo Hacer tu Pedido?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pedí tu pastel sin complicaciones Te acompañamos en
            todo el proceso, desde la idea hasta la entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl z-10">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="bg-gradient-to-br from-[#FFD6E8] to-[#FFC5D9] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-12 h-12 text-[#8B6F47]" />
              </div>

              {/* Content */}
              <h3 className="text-xl mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#FFD6E8] to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}