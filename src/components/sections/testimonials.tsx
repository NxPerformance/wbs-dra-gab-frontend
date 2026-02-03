import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Mayssah",
    content:
      "Comecei meu acompanhamento com a Dra. Gabriela há pouco tempo e já sinto diferença em meu corpo, na minha energia e na minha relação com a comida. O objetivo dela é muito claro, ela nas consultas sempre motivada e confiante. É visível o que ela sente é que, pela primeira vez, alguém realmente olha pra mim de forma completa.",
    role: "Paciente",
    image: "/optimized/testimonial-1.webp",
  },
  {
    name: "Geovana Oliveira",
    content:
      "Estou fazendo um protocolo com a Dra. Gabriela e estou amando. Ela é uma excelente profissional, como tira todas as minhas dúvidas e me sinto bem segura em tudo. Meu corpo e meu metabolismo mudaram muito depois que iniciei meus cuidados aqui. Obrigada Dra. por ser esse médico tão excelente!",
    role: "Paciente",
    image: "/optimized/testimonial-2.webp",
  },
  {
    name: "Fernanda Saad",
    content:
      "Depois que me consultei com a Dra. Gabriela e comecei a seguir as recomendações e protocolos meu corpo e minha saúde mudaram completamente. Consegui perder gordura e ganhar massa muscular e mudei muito meus hábitos. Além de ser uma médica extremamente atenciosa é muito dedicada e comprometida com o que faz. Recomendo de olhos fechados! Sou fã!",
    role: "Paciente",
    image: "/optimized/testimonial-3.webp",
  },
];

export function Testimonials() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // ⛔ Evita render antes de saber se é mobile
  if (isMobile === null) return null;

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-6 md:mb-10 space-y-3">
          <h2 className="text-white/60 text-xl font-sans uppercase tracking-[0.3em]">
            Veja o depoimento
          </h2>
          <p className="text-4xl md:text-5xl font-sans font-medium text-white italic">
            de quem já comprovou
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={
                isMobile
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.95 }
              }
              whileInView={
                isMobile
                  ? { opacity: 1 }
                  : { opacity: 1, scale: 1 }
              }
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 border-white/5 relative group flex flex-col items-center text-center hover:border-accent/20 hover:bg-white/5 transition-all duration-500 h-full will-change-transform transform-gpu"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-accent/10 group-hover:text-accent/20 transition-colors" />

              <div className="relative w-24 h-24 mb-6 flex-shrink-0">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/30 transition-colors" />
                <div className="relative w-full h-full rounded-full border-2 border-accent/20 overflow-hidden shadow-2xl">
                  <img
                    src={t.image}
                    alt={t.name}
                    width={96}
                    height={96}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      i === 0
                        ? "object-[center_20%]"
                        : i === 1
                        ? "object-[25%_20%]"
                        : "object-[center_top]"
                    }`}
                  />
                </div>
              </div>

              <p className="text-white/60 italic font-light leading-relaxed relative z-10 flex-1 mb-8">
                "{t.content}"
              </p>

              <div className="pt-6 border-t border-white/5 w-full mt-auto">
                <p className="text-white font-medium">{t.name}</p>
                <p className="text-accent text-[10px] uppercase tracking-[0.2em] font-bold mt-1">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
