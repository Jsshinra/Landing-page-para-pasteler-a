import { HelpCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

export function FAQPreviewSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#FFF5F7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD6E8]/40 text-[#8B6F47] text-sm mb-5">
          <HelpCircle className="w-4 h-4" />
          <span>¿Tenés dudas?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl mb-4">
          Respondimos las preguntas más comunes
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Encontrá información sobre pedidos, tiempos de
          anticipación, entregas, personalización y más.
        </p>

        <button
          onClick={() => navigate("/preguntas-frecuentes")}
          className="inline-flex items-center gap-3 bg-white text-[#8B6F47] px-8 py-4 rounded-full border border-[#E8D7C5] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Ver preguntas frecuentes
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}