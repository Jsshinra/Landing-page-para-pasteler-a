import { useState } from "react";
import {
  Cake,
  Layers,
  IceCream,
  Heart,
  Send,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router";

interface QuoteFormData {
  size: string;
  flavor: string;
  filling: string;
  crunchy: string;
  frosting: string;
  occasion: string;
  decorations: string;
  message: string;
}

export function QuotePage() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<QuoteFormData>({
    size: "",
    flavor: "",
    filling: "",
    crunchy: "",
    frosting: "",
    occasion: "",
    decorations: "",
    message: "",
  });

  const sizes = [
    {
      value: "individual",
      label: "Individual",
      description: "10 cm · 1 porción",
      image: "/images/tamanio/Individual.jpeg",
    },
    {
      value: "chico",
      label: "Chico",
      description: "14 cm · 5 a 6 porciones",
      image: "/images/tamanio/5 rebanadas.jpeg",
    },
    {
      value: "mediano",
      label: "Mediano",
      description: "16 cm · 12 a 15 porciones",
      image: "/images/tamanio/10 rebanadas.jpeg",
      position: "center 75%",
    },
    {
      value: "grande",
      label: "Grande",
      description: "20 cm · 20 a 25 porciones",
      image: "/images/tamanio/20 rebanadas.jpeg",
      position: "60% 85%",
    },
  ];

  const flavors = [
    { value: "Chocolate", description: "Intenso y húmedo" },
    { value: "Vainilla", description: "Suave y clásico" },
    { value: "Red velvet", description: "Elegante y delicado" },
    { value: "Zanahoria", description: "Especiado y casero" },
    { value: "Oreo", description: "Con trozos de galleta" },
  ];

  const fillings = [
    { value: "Betún de queso crema" },
    { value: "Betún de crema de avellanas" },
    { value: "Betún de chocolate" },
    { value: "Ganache de chocolate amargo" },
    { value: "Dulce de leche" },
    { value: "Jalea de fresas" },
    { value: "Crema Bariloche" },
  ];

  const crunchyToppings = [
    { value: "Nueces" },
    { value: "Galletas oreo" },
    { value: "Chocolate Kit kat" },
    { value: "Chocolate Ferrero" },
    { value: "Queso de bola" },
    { value: "Ninguno" },
  ];

  const frostings = [
    {
      value: "Buttercream",
      image: "/images/quote/frostings/buttercream.jpg",
    },
    {
      value: "Merengue Suizo",
      image: "/images/quote/frostings/merengue-suizo.jpg",
    },
    {
      value: "Ganache de Chocolate",
      image: "/images/quote/frostings/ganache.jpg",
    },
    {
      value: "Cream Cheese",
      image: "/images/quote/frostings/cream-cheese.jpg",
    },
    {
      value: "Fondant",
      image: "/images/quote/frostings/fondant.jpg",
    },
    {
      value: "Merengue Italiano",
      image: "/images/quote/frostings/merengue-italiano.jpg",
    },
    {
      value: "Cobertura Espejo",
      image: "/images/quote/frostings/cobertura-espejo.jpg",
    },
  ];

  const occasions = [
    "Cumpleaños",
    "Boda",
    "Aniversario",
    "Baby Shower",
    "Graduación",
    "Corporativo",
    "Otro",
  ];

  const totalSteps = 5;

  const handleInputChange = (
    field: keyof QuoteFormData,
    value: string,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goNext = () => {
    if (step < totalSteps) setStep((prev) => prev + 1);
  };

  const goBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const isStepValid = () => {
    if (step === 1) return !!formData.size;
    if (step === 2)
      return !!formData.flavor && !!formData.filling;
    if (step === 3) return !!formData.frosting;
    return true;
  };

  const selectedSize = sizes.find(
    (s) => s.value === formData.size,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Solo permitir el envío si estamos en el último paso (confirmación)
    if (step < totalSteps) {
      goNext();
      return;
    }

    let message = "*Solicitud de Cotización*\n\n";

    if (formData.size && selectedSize) {
      message += `*Tamaño:* ${selectedSize.label} - ${selectedSize.description}\n`;
    }

    if (formData.flavor) {
      message += `*Sabor:* ${formData.flavor}\n`;
    }

    if (formData.filling) {
      message += `*Relleno:* ${formData.filling}\n`;
    }

    if (formData.crunchy && formData.crunchy !== "Ninguno") {
      message += `*Toque crujiente:* ${formData.crunchy}\n`;
    }

    if (formData.frosting) {
      message += `*Recubrimiento:* ${formData.frosting}\n`;
    }

    if (formData.occasion) {
      message += `*Ocasión:* ${formData.occasion}\n`;
    }

    if (formData.decorations) {
      message += `*Decoraciones:* ${formData.decorations}\n`;
    }

    if (formData.message) {
      message += `*Mensaje:* ${formData.message}\n`;
    }

    const whatsappNumber = "529997221736";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] to-[#FFE8EE] py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[#8B6F47] hover:text-[#6B5437] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </button>

        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-[#FFD6E8] rounded-full mb-4">
            <Cake className="w-8 h-8 text-[#8B6F47]" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Creá tu pastel ideal
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elegí cada detalle paso a paso y enviá tu pedido por
            WhatsApp
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-[#8B6F47] mb-2">
            <span>
              Paso {step} de {totalSteps}
            </span>
            <span>
              {Math.round((step / totalSteps) * 100)}%
            </span>
          </div>

          <div className="w-full h-2 bg-white/70 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#8B6F47] transition-all duration-300 rounded-full"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl p-6 md:p-10"
        >
          {step === 1 && (
            <div>
              <div className="mb-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-[#8B6F47]" />
                  <h2 className="text-2xl">Elegí el tamaño</h2>
                </div>
                <p className="text-muted-foreground">
                  Seleccioná el tamaño que mejor se adapte a tu
                  ocasión
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {sizes.map((size) => (
                  <button
                    key={size.value}
                    type="button"
                    onClick={() =>
                      handleInputChange("size", size.value)
                    }
                    className={`rounded-2xl overflow-hidden border-2 text-left transition-all ${formData.size === size.value
                      ? "border-[#8B6F47] shadow-lg scale-[1.01]"
                      : "border-gray-200 hover:border-[#8B6F47]/40 hover:shadow-md"
                      }`}
                  >
                    <img
                      src={size.image}
                      alt={size.label}
                      className="w-full h-80 object-cover"
                      style={{ objectPosition: size.position || "center" }}
                    />
                    <div className="p-5">
                      <h3 className="text-lg font-semibold mb-1">
                        {size.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {size.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="mb-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Cake className="w-5 h-5 text-[#8B6F47]" />
                  <h2 className="text-2xl">
                    Elegí sabor y relleno
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  Combiná el bizcocho con el relleno que más te
                  guste
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-lg mb-4">
                  Sabor del bizcocho *
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {flavors.map((flavor) => (
                    <button
                      key={flavor.value}
                      type="button"
                      onClick={() =>
                        handleInputChange(
                          "flavor",
                          flavor.value,
                        )
                      }
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${formData.flavor === flavor.value
                        ? "border-[#8B6F47] bg-[#FFD6E8]/25 shadow-md"
                        : "border-gray-200 hover:border-[#8B6F47]/40 hover:bg-[#FFF5F7]"
                        }`}
                    >
                      <div className="font-medium mb-1">
                        {flavor.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {flavor.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-lg mb-4">Relleno *</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {fillings.map((filling) => (
                    <button
                      key={filling.value}
                      type="button"
                      onClick={() =>
                        handleInputChange(
                          "filling",
                          filling.value,
                        )
                      }
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${formData.filling === filling.value
                        ? "border-[#8B6F47] bg-[#FFD6E8]/25 shadow-md"
                        : "border-gray-200 hover:border-[#8B6F47]/40 hover:bg-[#FFF5F7]"
                        }`}
                    >
                      <div className="font-medium">
                        {filling.value}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg mb-4">Toque crujiente *</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {crunchyToppings.map((topping) => (
                    <button
                      key={topping.value}
                      type="button"
                      onClick={() =>
                        handleInputChange(
                          "crunchy",
                          topping.value,
                        )
                      }
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${formData.crunchy === topping.value
                        ? "border-[#8B6F47] bg-[#FFD6E8]/25 shadow-md"
                        : "border-gray-200 hover:border-[#8B6F47]/40 hover:bg-[#FFF5F7]"
                        }`}
                    >
                      <div className="font-medium">
                        {topping.value}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="mb-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Heart className="w-5 h-5 text-[#8B6F47]" />
                  <h2 className="text-2xl">
                    Recubrimiento del pastel
                  </h2>
                </div>

                <p className="text-muted-foreground">
                  Todos nuestros pasteles están cubiertos con
                  buttercream artesanal
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() =>
                    handleInputChange("frosting", "Buttercream")
                  }
                  className={`rounded-2xl overflow-hidden border-2 transition-all max-w-sm w-full ${formData.frosting === "Buttercream"
                    ? "border-[#8B6F47] shadow-lg scale-[1.02]"
                    : "border-gray-200 hover:border-[#8B6F47]/40"
                    }`}
                >
                  <div className="w-full h-48 bg-gradient-to-br from-[#FFF5F7] to-[#FFD6E8] flex items-center justify-center">
                    <Cake className="w-12 h-12 text-[#8B6F47]" />
                  </div>

                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold mb-1">
                      Buttercream
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Suave, cremoso y perfecto para
                      decoraciones delicadas
                    </p>
                  </div>
                </button>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6 max-w-md mx-auto">
                Utilizamos buttercream porque permite lograr
                acabados más elegantes, colores vibrantes y
                decoraciones más detalladas.
              </p>
            </div>
          )}

          {step === 4 && (
            <div>
              <div className="mb-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-[#8B6F47]" />
                  <h2 className="text-2xl">
                    Contanos los detalles
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  Sumá información para que el pedido llegue más
                  completo
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-lg mb-3 block">
                    Ocasión
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) =>
                      handleInputChange(
                        "occasion",
                        e.target.value,
                      )
                    }
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#8B6F47] focus:outline-none transition-colors"
                  >
                    <option value="">
                      Seleccioná una ocasión
                    </option>
                    {occasions.map((occasion) => (
                      <option key={occasion} value={occasion}>
                        {occasion}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-lg mb-3 block">
                    Decoraciones especiales
                  </label>
                  <input
                    type="text"
                    value={formData.decorations}
                    onChange={(e) =>
                      handleInputChange(
                        "decorations",
                        e.target.value,
                      )
                    }
                    placeholder="Ej: flores, topper, figuras, colores, temática..."
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#8B6F47] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-lg mb-3 block">
                    Mensaje o detalles adicionales
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange(
                        "message",
                        e.target.value,
                      )
                    }
                    placeholder="Contanos cualquier detalle extra sobre tu pastel ideal..."
                    rows={5}
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#8B6F47] focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <div className="mb-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Send className="w-5 h-5 text-[#8B6F47]" />
                  <h2 className="text-2xl">
                    Resumen de tu pedido
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  Revisá los datos antes de enviarlos por
                  WhatsApp
                </p>
              </div>

              <div className="bg-[#FFF8F0] rounded-2xl p-6 space-y-4 border border-[#F1E3D3]">
                <div>
                  <span className="font-semibold">Tamaño:</span>{" "}
                  {selectedSize?.label || "-"}
                </div>
                <div>
                  <span className="font-semibold">
                    Porciones:
                  </span>{" "}
                  {selectedSize?.description || "-"}
                </div>
                <div>
                  <span className="font-semibold">Sabor:</span>{" "}
                  {formData.flavor || "-"}
                </div>
                <div>
                  <span className="font-semibold">
                    Relleno:
                  </span>{" "}
                  {formData.filling || "-"}
                </div>
                <div>
                  <span className="font-semibold">
                    Toque crujiente:
                  </span>{" "}
                  {formData.crunchy || "-"}
                </div>
                <div>
                  <span className="font-semibold">
                    Recubrimiento:
                  </span>{" "}
                  {formData.frosting || "-"}
                </div>
                <div>
                  <span className="font-semibold">
                    Ocasión:
                  </span>{" "}
                  {formData.occasion || "-"}
                </div>
                <div>
                  <span className="font-semibold">
                    Decoraciones:
                  </span>{" "}
                  {formData.decorations || "-"}
                </div>
                <div>
                  <span className="font-semibold">
                    Detalles:
                  </span>{" "}
                  {formData.message || "-"}
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 1}
              className={`px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all ${step === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white border border-gray-300 text-[#8B6F47] hover:border-[#8B6F47]"
                }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </button>

            {step < totalSteps ? (
              <button
                type="submit"
                disabled={!isStepValid()}
                className={`px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all ${isStepValid()
                  ? "bg-[#8B6F47] text-white hover:bg-[#6B5437]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                Siguiente
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-[#25D366] text-white hover:brightness-95 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Enviar por WhatsApp
              </button>
            )}
          </div>

          {step < totalSteps && !isStepValid() && (
            <p className="text-center text-sm text-muted-foreground mt-4">
              Completá este paso para continuar
            </p>
          )}
        </form>
      </div>
    </div>
  );
}