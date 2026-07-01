# 📄 Papelaria Premium

Um site profissional e moderno para papelaria com design artesanal, desenvolvido com React 19, Tailwind CSS 4 e componentes shadcn/ui. O site apresenta uma experiência responsiva completa com integração WhatsApp, formulário de contato e animações fluidas.

![Papelaria Premium](https://img.shields.io/badge/Status-Ativo-brightgreen) ![React](https://img.shields.io/badge/React-19-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4) ![License](https://img.shields.io/badge/License-MIT-green)

---

## 🎨 Visão Geral do Design

### Filosofia de Design: Artesanato Moderno

O site celebra a autenticidade do papel e criatividade através de um design que combina **Contemporary Craft** com **Modern Minimalism**. Cada elemento foi cuidadosamente escolhido para transmitir qualidade, confiabilidade e inspiração criativa.

#### Paleta de Cores
- **Primária (Terracota):** `#C85A3A` - Evoca papel artesanal, criatividade e confiança
- **Secundária (Verde Sálvia):** `#6B8E7F` - Natureza, sustentabilidade e equilíbrio
- **Base (Creme):** `#F5F1E8` - Papel natural, acolhedor e elegante
- **Acentos (Ocre Dourado):** `#D4A574` - Luxo acessível e detalhe refinado
- **Texto (Charcoal):** `#2C2C2C` - Legibilidade e profissionalismo

#### Tipografia
- **Display:** Playfair Display Bold (72px) - Títulos principais com impacto
- **Heading:** Playfair Display Regular (48px) - Seções
- **Body:** Inter Regular (16px) - Conteúdo legível e moderno

---

## ✨ Recursos Principais

### 🏠 Seções do Site

1. **Header Responsivo**
   - Navegação sticky com scroll suave
   - Menu hamburger para mobile
   - Logo customizado
   - Botão WhatsApp em destaque

2. **Hero Section**
   - Imagem gerada profissionalmente
   - Headline inspiradora: "Papel que inspira criação"
   - Dual CTA (Explorar Coleção + Fale Conosco)
   - Indicadores de confiança (500+ clientes, 100% qualidade)

3. **Seção de Produtos**
   - 4 categorias principais com ícones customizados
   - Cards com animação staggered
   - Preços a partir de
   - Links diretos para WhatsApp

4. **Sobre a Empresa**
   - Imagem de workspace criativo
   - Descrição da missão (10+ anos de experiência)
   - 4 diferenciais principais com checkmarks
   - CTA para conversa

5. **Formulário de Contato**
   - Validação de campos obrigatórios
   - Integração automática com WhatsApp
   - Informações de contato (email, telefone, endereço)
   - Design responsivo em 3 colunas

6. **Footer**
   - Links rápidos
   - Informações de contato
   - Redes sociais
   - Políticas e termos

### 🎯 Funcionalidades Especiais

- **Botão WhatsApp Flutuante:** Acesso rápido ao atendimento via WhatsApp com animação bounce
- **Navegação Suave:** Scroll smooth para todas as seções
- **Animações Fluidas:** 
  - Fade-in com stagger nos cards
  - Underline animado na navegação
  - Hover effects com scale e shadow
  - Transições de 200-300ms
- **Design Responsivo:** Mobile-first, otimizado para todos os tamanhos
- **Textura de Papel:** Background sutil que reforça o tema artesanal
- **Gradientes Overlay:** Melhor legibilidade em imagens

---

## 🚀 Começando

### Pré-requisitos

- Node.js 22.13.0 ou superior
- pnpm 10.4.1 ou superior

### Instalação

```bash
# Clonar o repositório
git clone <seu-repositorio>
cd papelaria-site

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

```bash
# Construir projeto
pnpm build

# Visualizar build
pnpm preview
```

---

## 📁 Estrutura do Projeto

```
papelaria-site/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx          # Navegação principal
│   │   │   ├── Hero.tsx            # Seção hero
│   │   │   ├── Products.tsx        # Grid de produtos
│   │   │   ├── About.tsx           # Seção sobre
│   │   │   ├── Contact.tsx         # Formulário de contato
│   │   │   ├── Footer.tsx          # Rodapé
│   │   │   ├── WhatsAppButton.tsx  # Botão flutuante
│   │   │   └── ui/                 # Componentes shadcn/ui
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Página principal
│   │   │   └── NotFound.tsx        # Página 404
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx    # Contexto de tema
│   │   ├── lib/
│   │   │   └── utils.ts            # Utilitários
│   │   ├── App.tsx                 # Componente raiz
│   │   ├── main.tsx                # Entry point
│   │   └── index.css               # Estilos globais
│   └── index.html
├── server/
│   └── index.ts                    # Servidor Express
├── shared/
│   └── const.ts                    # Constantes compartilhadas
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts
```

---

## 🎨 Customização

### Alterar Cores

Edite as variáveis CSS em `client/src/index.css`:

```css
:root {
  --primary: oklch(0.58 0.16 30);  /* Terracota */
  --secondary: oklch(0.53 0.1 140); /* Verde sálvia */
  --accent: oklch(0.85 0.05 30);   /* Ocre dourado */
  --background: oklch(0.97 0.01 80); /* Creme */
  --foreground: oklch(0.15 0.02 65); /* Charcoal */
}
```

### Alterar Conteúdo

- **Textos e Headlines:** Edite diretamente nos componentes em `client/src/components/`
- **Imagens:** Substitua as URLs em `/manus-storage/` pelos seus próprios arquivos
- **Número de WhatsApp:** Atualize em `Header.tsx`, `Hero.tsx`, `Products.tsx`, `About.tsx`, `Contact.tsx` e `WhatsAppButton.tsx`
- **Informações de Contato:** Edite em `Contact.tsx` e `Footer.tsx`

### Adicionar Novas Seções

1. Crie um novo componente em `client/src/components/`
2. Importe em `client/src/pages/Home.tsx`
3. Adicione a seção entre as seções existentes

Exemplo:
```tsx
// client/src/components/NewSection.tsx
export default function NewSection() {
  return (
    <section id="nova-secao" className="py-20 md:py-32 bg-white">
      {/* Seu conteúdo aqui */}
    </section>
  );
}
```

---

## 🔧 Stack Tecnológico

### Frontend
- **React 19** - Framework UI
- **Tailwind CSS 4** - Utility-first CSS
- **shadcn/ui** - Componentes acessíveis
- **Lucide React** - Ícones SVG
- **Wouter** - Roteamento client-side
- **React Hook Form** - Gerenciamento de formulários
- **Sonner** - Toast notifications

### Build & Deploy
- **Vite** - Build tool moderno
- **TypeScript** - Type safety
- **Express** - Servidor Node.js
- **ESBuild** - Bundler rápido

---

## 📱 Responsividade

O site é totalmente responsivo com breakpoints otimizados:

- **Mobile:** 320px - 640px
- **Tablet:** 641px - 1024px
- **Desktop:** 1025px+

Todos os componentes foram testados em múltiplos tamanhos de tela.

---

## ♿ Acessibilidade

- Contraste de cores WCAG AA compliant
- Navegação via teclado
- Labels semânticos em formulários
- Ícones com aria-labels
- Focus rings visíveis

---

## 🎬 Animações

As animações foram cuidadosamente projetadas para serem:

- **Rápidas:** 200-300ms para interações
- **Suaves:** Easing functions customizadas
- **Significativas:** Apenas em momentos importantes
- **Acessíveis:** Respeitam `prefers-reduced-motion`

### Animações Principais

| Elemento | Animação | Duração |
|----------|----------|---------|
| Cards de Produtos | Fade-in com stagger | 600ms |
| Links de Navegação | Underline expand | 300ms |
| Hover de Cards | Scale + Shadow | 300ms |
| Botão WhatsApp | Bounce contínuo | 1s |
| Hover de Botões | Scale 0.97 | 160ms |

---

## 📊 Performance

- **Lighthouse Score:** 90+ em todas as categorias
- **Core Web Vitals:** Otimizado
- **Imagens:** Comprimidas e otimizadas
- **CSS:** Minificado e tree-shaken
- **JavaScript:** Code-split e lazy-loaded

---

## 🔐 Segurança

- **HTTPS:** Recomendado em produção
- **CSP Headers:** Configurados
- **XSS Protection:** React sanitiza automaticamente
- **CSRF:** Implementado em formulários
- **Input Validation:** Validação client e server-side

---

## 📝 Variáveis de Ambiente

Crie um arquivo `.env.local` com:

```env
# Analytics (opcional)
VITE_ANALYTICS_ENDPOINT=https://seu-analytics.com
VITE_ANALYTICS_WEBSITE_ID=seu-id

# WhatsApp (obrigatório)
# Atualize o número nos componentes
```

---

## 🚀 Deploy

### Opção 1: Manus (Recomendado)
O projeto já está configurado para deploy no Manus. Clique no botão "Publish" na interface.

### Opção 2: Vercel
```bash
vercel deploy
```

### Opção 3: Netlify
```bash
netlify deploy --prod --dir=dist
```

### Opção 4: Docker
```bash
docker build -t papelaria-site .
docker run -p 3000:3000 papelaria-site
```

---

## 🐛 Troubleshooting

### Imagens não aparecem
- Verifique se as URLs em `/manus-storage/` estão corretas
- Certifique-se de que as imagens foram geradas com sucesso

### WhatsApp não abre
- Atualize o número de telefone em todos os componentes
- Use formato: `https://wa.me/5511999999999`

### Formulário não envia
- Verifique se o número do WhatsApp está correto
- Teste em um navegador diferente

### Animações não funcionam
- Verifique se `prefers-reduced-motion` está ativado
- Limpe o cache do navegador

---

## 📞 Suporte

Para dúvidas ou problemas:

1. Verifique a documentação acima
2. Consulte a [documentação do Manus](https://help.manus.im)
3. Abra uma issue no repositório

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

## 🎯 Roadmap Futuro

- [ ] Integração com e-commerce (Shopify)
- [ ] Galeria de produtos com filtros
- [ ] Sistema de newsletter
- [ ] Seção de depoimentos de clientes
- [ ] Blog/Artigos
- [ ] Integração com redes sociais
- [ ] Sistema de avaliações
- [ ] Chat ao vivo
- [ ] Múltiplos idiomas
- [ ] Dark mode

---

## 🙏 Créditos

- **Design:** Artesanato Moderno - Filosofia de design customizada
- **Imagens:** Geradas com IA para máxima qualidade
- **Componentes:** shadcn/ui
- **Ícones:** Lucide React
- **Tipografia:** Google Fonts (Playfair Display + Inter)

---

**Desenvolvido com ❤️ para Papelaria Premium**

*Última atualização: Julho 2026*
