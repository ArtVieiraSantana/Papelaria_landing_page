import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative overflow-hidden bg-background paper-texture">
      <div className="container py-20 md:py-32">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Text Content - Left Side */}
          <motion.div className="space-y-6 md:space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <div className="decorative-line"></div>
              <h1 className="font-display text-foreground">
                Papel que inspira criação
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Produtos premium para criadores que valorizam qualidade. Notebooks artesanais, pens de precisão e papéis especiais que transformam suas ideias em realidade.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={itemVariants}>
              <button 
                onClick={() => scrollToSection('produtos')}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Explorar Coleção
                <ArrowRight size={20} />
              </button>
              <a 
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-medium border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                Fale Conosco
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div className="flex gap-8 pt-8 text-sm text-foreground/60" variants={itemVariants}>
              <div>
                <p className="font-semibold text-foreground">500+</p>
                <p>Clientes Satisfeitos</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">100%</p>
                <p>Qualidade Garantida</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Entrega</p>
                <p>Rápida</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image - Right Side */}
          <motion.div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-xl" variants={imageVariants}>
            <img 
              src="/images/hero-papelaria.svg"
              alt="Produtos de Papelaria Premium"
              className="w-full h-full object-cover"
            />
            <div className="gradient-overlay"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent opacity-50"></div>
    </section>
  );
}
