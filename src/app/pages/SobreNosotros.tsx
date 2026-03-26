import { useNavigate } from "react-router";
import { ArrowLeft, Heart, Sparkles, Cake } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FFF8F0]">
      <section className="py-16 border-b border-[#F3E5D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[#8B6F47] hover:text-[#6B5437] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </button>

          <div className="max-w-3xl">
            <span className="inline-block text-[#8B6F47] bg-[#FFD6E8]/40 px-4 py-2 rounded-full text-sm mb-4">
              Sobre nosotros
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Creamos pasteles pensados para momentos inolvidables
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              En Citrus Pasteleria creemos que cada celebración merece algo único.
              Por eso trabajamos con dedicación, detalle y mucho amor en cada
              pedido, creando pasteles personalizados que acompañan momentos
              especiales.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl mb-6">Nuestra historia</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Todo comenzó con la idea de transformar celebraciones en recuerdos
              aún más especiales. Con el tiempo, cada pastel se convirtió en una
              forma de expresar creatividad, dedicación y cariño en cada detalle.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hoy seguimos trabajando con la misma esencia: crear diseños
              personalizados, cuidar la calidad de cada ingrediente y brindar una
              atención cercana para que cada cliente se sienta acompañado en todo
              el proceso.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl bg-white p-8">
            <ImageWithFallback
              src="/Logos/Citrus logo web_Citrusita personje.png"
              alt="Citrusita"
              className="w-full h-[450px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFF5F7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">Qué nos representa</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada pedido está pensado para reflejar dedicación, calidez y
              personalización.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <Heart className="w-10 h-10 text-[#8B6F47] mb-4" />
              <h3 className="text-xl mb-3">Hecho con amor</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada pastel se realiza con dedicación artesanal y atención a los
                pequeños detalles.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <Sparkles className="w-10 h-10 text-[#8B6F47] mb-4" />
              <h3 className="text-xl mb-3">Diseños únicos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creamos propuestas personalizadas para que cada ocasión tenga su
                propia identidad.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <Cake className="w-10 h-10 text-[#8B6F47] mb-4" />
              <h3 className="text-xl mb-3">Calidad artesanal</h3>
              <p className="text-muted-foreground leading-relaxed">
                Elegimos ingredientes y terminaciones que estén a la altura de un
                momento especial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">
            ¿Querés crear tu pastel ideal?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Contanos tu idea y te ayudamos a convertirla en un pastel único para
            tu ocasión.
          </p>

          <button
            onClick={() => navigate("/cotizar")}
            className="bg-white text-[#8B6F47] px-8 py-4 rounded-full border border-[#E8D7C5] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Personalizar mi pastel
          </button>
        </div>
      </section>
    </div>
  );
}