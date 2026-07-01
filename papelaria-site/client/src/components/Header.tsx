import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border paper-texture">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/manus-storage/brand-logo_c7c882a1.png" 
              alt="Papelaria Premium" 
              className="h-10 w-10"
            />
            <span className="font-serif text-xl font-bold text-primary hidden sm:inline">
              Papelaria Premium
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('produtos')}
              className="text-foreground hover:text-primary transition-all duration-200 relative group"
            >
              Produtos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-all duration-200 relative group"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-all duration-200 relative group"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <button 
              onClick={() => scrollToSection('produtos')}
              className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              Contato
            </button>
            <a 
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-3 text-primary font-medium hover:bg-muted transition-colors"
            >
              WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
