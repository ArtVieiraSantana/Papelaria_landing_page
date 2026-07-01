import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const features = [
    'Produtos 100% autênticos e de qualidade premium',
    'Atendimento personalizado e consultoria gratuita',
    'Entrega rápida em todo o Brasil',
    'Garantia de satisfação ou seu dinheiro de volta',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="sobre" className="py-20 md:py-32 bg-background paper-texture">
      <div className="container">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Image */}
          <motion.div 
            className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-xl order-2 md:order-1"
            variants={imageVariants}
          >
            <img 
              src="/images/creative-workspace.svg"
              alt="Espaço criativo com produtos de papelaria"
              className="w-full h-full object-cover"
            />
            <div className="gradient-overlay"></div>
          </motion.div>

          {/* Content */}
          <motion.div className="space-y-6 order-1 md:order-2" variants={containerVariants}>
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="decorative-line"></div>
              <h2 className="font-heading text-foreground">
                Sobre Papelaria Premium
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Há mais de 10 anos, somos apaixonados por papel e criatividade. Nossa missão é fornecer produtos de qualidade excepcional que inspirem criadores, artistas e profissionais a expressar suas ideias com elegância.
              </p>
            </motion.div>

            {/* Features List */}
            <div className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 mt-1">
                    <Check size={20} className="text-primary" />
                  </div>
                  <p className="text-foreground/80">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div className="pt-6" variants={itemVariants}>
              <a 
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Papelaria%20Premium"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Converse Conosco
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
