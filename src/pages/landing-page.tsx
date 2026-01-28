import { Hero } from "@/components/sections/hero";
import { Bio } from "@/components/sections/bio";
import { VitalMethod } from "@/components/sections/vital-method";
import { PerformanceSection } from "@/components/sections/performance";
import { BioimpedanceSection } from "@/components/sections/bioimpedance";
import { Testimonials } from "@/components/sections/testimonials";
import { CaseStudies } from "@/components/sections/case-studies";
import { Location } from "@/components/sections/location";
import { FAQ } from "@/components/sections/faq";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
const logo = "/optimized/logogziamarela.webp"; 
import { Menu } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";


export default function LandingPage() {
  const navLinks = [
    { href: "#metodo-vital", label: "VITAL" },
    { href: "#performance", label: "Performance" },
    { href: "#bioimpedancia", label: "Tecnologia" },
    { href: "#localizacao", label: "Localização" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent selection:text-accent-foreground text-foreground antialiased overflow-x-hidden">
      {/* Navigation - Ajustado para max-w-7xl para alinhar com o conteúdo */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4">
        <div className="glass-card h-16 w-full px-4 sm:px-8 flex items-center justify-between border-white/10 rounded-full bg-[#2c123b]/40 backdrop-blur-lg border border-white/10 shadow-2xl">
          
          {/* GRUPO DA LOGO */}
          <div className="flex items-center gap-3">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center group cursor-pointer transition-transform active:scale-95"
            >
              <ShineBorder
                className="absolute inset-0 w-full h-full rounded-full" 
                borderWidth={2}
                duration={10}
                shineColor={["#2c123b", "#ffd166"]}
              >
                <div className="w-full h-full rounded-full bg-transparent" />
              </ShineBorder>

              <img 
                src={logo} 
                alt="Logo Dra. Gabriela Zinhani" 
                className="relative z-30 w-7 h-7 sm:w-9 sm:h-9 object-contain brightness-110" 
              />
            </div>

            <span className="text-white font-medium uppercase tracking-widest text-[10px] sm:text-xs leading-none">
              Dra. Gabriela Zinhani Issy
            </span>
          </div>
          
          {/* LINKS DESKTOP COM LINHA ANIMADA */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="group relative text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ffd166] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* MOBILE MENU */}
          <div className="flex md:hidden items-center gap-2 sm:gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/5 rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-white/10 w-[300px] sm:max-w-sm p-8">
                <SheetHeader>
                   <SheetTitle className="text-left text-accent font-sans uppercase tracking-[0.2em] text-xs mb-8 border-b border-white/10 pb-4">Navegação</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <a href={link.href} className="text-xl font-sans font-light text-white hover:text-accent transition-all duration-300 flex items-center justify-between group">
                        {link.label}
                        <span className="h-px w-0 bg-accent group-hover:w-4 transition-all duration-300" />
                      </a>
                    </SheetClose>
                  ))}
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/5">
                   <p className="text-white/40 text-[10px] uppercase tracking-widest mb-4">Contato</p>
                   <a href="https://wa.me/5562998549508" className="text-white font-sans text-lg block hover:text-accent transition-colors">(62) 99854-9508</a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <VitalMethod />
        <PerformanceSection />
        <BioimpedanceSection />
        <CaseStudies />
        <Testimonials />
        <Location />
        <Bio />
        <FAQ />
      </main>

      <footer className="bg-background py-20 border-t border-white/5 relative overflow-hidden">
        {/* Glow de fundo sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-white font-sans text-2xl md:text-3xl font-medium tracking-tight mb-4">Pronto para o próximo nível?</h2>
            <p className="text-white/30 max-w-sm mx-auto mb-10 font-light italic leading-relaxed">
               "Dê o primeiro passo para uma vida com mais saúde, equilíbrio e leveza. Estou pronta para te ajudar a construir essa jornada com você."
            </p>
            <a
              href="https://wa.me/5562998549508?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20agendar%20uma%20consulta!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="xl" 
                className="relative overflow-hidden rounded-full 
                bg-gradient-to-r from-[#b8860b] via-[#ffd166] to-[#b8860b] bg-[length:200%_auto]
                text-[#2c123b] font-sans font-bold tracking-widest
                h-auto py-5 px-12 
                border border-[#ffd166]/50 
                shadow-[0_0_20px_rgba(255,209,102,0.4)] 
                hover:shadow-[0_0_50px_rgba(255,209,102,0.7)] hover:scale-[1.05] 
                transition-all duration-500 group"
              >
                {/* Efeito Shine Dinâmico */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:animate-shine skew-x-12" />
                
                <div className="flex items-center justify-center gap-3 relative z-10">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.536 0 1.52 1.115 2.988 1.264 3.186.149.198 2.19 3.361 5.27 4.693 2.197.912 3.057.767 3.604.708.618-.066 1.76-.718 2.008-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.381a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.815 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="tracking-widest text-sm font-bold uppercase">Agendar Consulta Agora</span>
                </div>
              </Button>
            </a>
            
            <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-sans uppercase tracking-[0.2em] text-white/20">
               <div className="flex flex-col gap-2 md:text-left text-center">
                 <p>&copy; {new Date().getFullYear()} Gabriela Zinhani Issy — Clínica Vitalissy</p>
                 <p className="hidden md:block hover:text-white/40 transition-colors cursor-default">Desenvolvido por Nx Performance</p>
               </div>
               
               <p className="md:hidden hover:text-white/40 transition-colors cursor-default">Desenvolvido por Nx Performance</p>

               <div className="flex gap-8">
                  <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                  <a href="#" className="hover:text-white transition-colors">Termos</a>
               </div>
            </div>
        </div>
      </footer>
    </div>
  );
}