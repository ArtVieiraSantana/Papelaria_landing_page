import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/manus-storage/brand-logo_c7c882a1.png" 
                alt="Papelaria Premium" 
                className="h-8 w-8"
              />
              <span className="font-serif text-lg font-bold">Papelaria Premium</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Produtos premium para criadores que valorizam qualidade e autenticidade.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#produtos" className="text-background/70 hover:text-background transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-background/70 hover:text-background transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/70 hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contato@papelariapremium.com" className="text-background/70 hover:text-background transition-colors">
                  contato@papelariapremium.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
                  (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>&copy; {currentYear} Papelaria Premium. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
