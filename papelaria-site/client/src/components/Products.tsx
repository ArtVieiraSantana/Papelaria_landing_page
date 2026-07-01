import { ShoppingCart, Pen, BookOpen, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const products = [
  {
    id: 1,
    name: 'Notebooks Artesanais',
    description: 'Cadernos premium com papel de alta qualidade, encadernação em couro genuíno e design exclusivo.',
    icon: BookOpen,
    price: 'A partir de R$ 89,90',
    color: 'bg-primary/10',
  },
  {
    id: 2,
    name: 'Pens de Precisão',
    description: 'Canetas tinteiro e esferográficas de marcas renomadas, perfeitas para escrita elegante.',
    icon: Pen,
    price: 'A partir de R$ 45,90',
    color: 'bg-secondary/10',
  },
  {
    id: 3,
    name: 'Papéis Especiais',
    description: 'Variedade de papéis texturizados, coloridos e artesanais para projetos criativos.',
    icon: Palette,
    price: 'A partir de R$ 25,90',
    color: 'bg-accent/10',
  },
  {
    id: 4,
    name: 'Kits Criatividade',
    description: 'Conjuntos completos com tudo que você precisa para começar seus projetos.',
    icon: ShoppingCart,
    price: 'A partir de R$ 129,90',
    color: 'bg-primary/10',
  },
];

export default function Products() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="produtos" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="flex justify-center">
            <div className="decorative-line"></div>
          </div>
          <h2 className="font-heading text-foreground">
            Nossos Produtos
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Coleção cuidadosamente selecionada de produtos premium para inspirar sua criatividade
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <motion.div 
                key={product.id}
                className="bg-card rounded-lg p-6 card-shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                variants={itemVariants}
              >
                {/* Icon */}
                <div className={`${product.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={32} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-foreground/60 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Price */}
                <p className="font-semibold text-primary mb-4">
                  {product.price}
                </p>

                {/* CTA */}
                <a 
                  href={`https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Saiba Mais →
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
