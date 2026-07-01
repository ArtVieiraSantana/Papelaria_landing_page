import { Check } from 'lucide-react';

export default function About() {
  const features = [
    'Produtos 100% autênticos e de qualidade premium',
    'Atendimento personalizado e consultoria gratuita',
    'Entrega rápida em todo o Brasil',
    'Garantia de satisfação ou seu dinheiro de volta',
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-background paper-texture">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <img 
              src="/manus-storage/creative-workspace_b3445c5e.png"
              alt="Espaço criativo com produtos de papelaria"
              className="w-full h-full object-cover"
            />
            <div className="gradient-overlay"></div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-4">
              <div className="decorative-line"></div>
              <h2 className="font-heading text-foreground">
                Sobre Papelaria Premium
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Há mais de 10 anos, somos apaixonados por papel e criatividade. Nossa missão é fornecer produtos de qualidade excepcional que inspirem criadores, artistas e profissionais a expressar suas ideias com elegância.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={20} className="text-primary" />
                  </div>
                  <p className="text-foreground/80">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a 
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Papelaria%20Premium"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Converse Conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
