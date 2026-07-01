# Conceitos de Design - Papelaria Premium

## Três Abordagens Iniciais

### 1. **Minimalismo Escandinavo**
Aesthetic clean e airy com foco em tipografia sofisticada e espaço em branco. Paleta neutra com acentos em tons naturais (terracota, verde sálvia). Transmite profissionalismo e elegância.
**Probabilidade: 0.08**

### 2. **Artesanato Moderno**
Design que celebra a natureza do papel e da criatividade. Texturas sutis, ilustrações handmade, paleta quente (ocres, laranjas, marrons). Sente-se acolhedor e autêntico.
**Probabilidade: 0.07**

### 3. **Luxo Contemporâneo**
Design premium com gradientes sofisticados, tipografia bold, elementos geométricos refinados. Paleta escura (navy, preto) com acentos dourados. Transmite sofisticação e exclusividade.
**Probabilidade: 0.06**

---

## Design Escolhido: **Artesanato Moderno**

### Design Movement
Intersecção entre **Contemporary Craft** e **Modern Minimalism** — celebra a autenticidade do papel enquanto mantém clareza visual e funcionalidade.

### Core Principles
1. **Autenticidade Material**: Texturas sutis que remetem ao papel, tinta e criatividade manual
2. **Hierarquia Clara**: Tipografia estratégica guia o olhar sem ruído visual
3. **Espaço Respirável**: Whitespace generoso cria elegância e foco
4. **Detalhe Intencional**: Elementos decorativos servem propósito, não apenas ornamentação

### Color Philosophy
- **Primária**: Terracota quente (#C85A3A) — evoca papel artesanal, criatividade, confiança
- **Secundária**: Verde sálvia (#6B8E7F) — natureza, sustentabilidade, equilíbrio
- **Neutra Base**: Creme (#F5F1E8) — papel natural, acolhedor
- **Acentos**: Ocre dourado (#D4A574) — luxo acessível, detalhe refinado
- **Texto**: Charcoal escuro (#2C2C2C) — legibilidade, profissionalismo

**Intenção Emocional**: Sensação de qualidade artesanal, confiabilidade, criatividade inspiradora

### Layout Paradigm
- **Hero assimétrico**: Imagem de produtos em ângulo diagonal, texto em posição oposta
- **Seções alternadas**: Blocos de conteúdo alternam entre left-aligned e right-aligned
- **Grid flexível**: Não centrado, usa negative space estrategicamente
- **Diagonal dividers**: SVG waves em ângulos para conectar seções com movimento

### Signature Elements
1. **Textura de papel**: Padrão sutil de grain/noise no fundo
2. **Linhas decorativas**: Traços finos em terracota conectando elementos
3. **Ícones customizados**: Estilo hand-drawn, traços orgânicos
4. **Cartões com sombra suave**: Depth sem ser pesado

### Interaction Philosophy
- **Hover effects**: Elementos levantam com sombra suave, cores esquentam
- **Transições fluidas**: 300ms ease-out para mudanças de estado
- **Micro-interactions**: Botões respondem com scale(0.97) ao clique
- **Scroll reveals**: Elementos entram suavemente ao scroll (fade + slide)

### Animation
- **Entrance**: Fade + slide-up 400ms ease-out com stagger de 80ms entre itens
- **Hover**: Scale(1.05) + sombra aumentada em 200ms ease-out
- **Buttons**: Scale(0.97) ao :active, transição 120ms
- **Scroll**: Parallax suave em hero (0.5x velocity)
- **Respeita prefers-reduced-motion**: Desativa animações não-essenciais

### Typography System
- **Display**: Playfair Display Bold (72px) — títulos principais, impacto
- **Heading**: Playfair Display Regular (48px) — seções
- **Subheading**: Inter Medium (20px) — subsections
- **Body**: Inter Regular (16px) — conteúdo principal
- **Caption**: Inter Regular (14px) — detalhes, rodapé

**Hierarquia**: Display > Heading > Subheading > Body, com color e weight variando

### Brand Essence
**Positioning**: Papelaria que celebra a criatividade através de produtos premium e design autêntico — para criadores que valorizam qualidade.

**Personality**: Criativa, Confiável, Acolhedora

### Brand Voice
- **Headlines**: Inspiradoras, diretas, celebram criatividade
  - "Papel que inspira criação"
  - "Sua criatividade merece qualidade"
- **CTAs**: Ação clara, sem genéricos
  - "Explorar coleção" em vez de "Get started"
  - "Fale conosco" em vez de "Contact us"
- **Microcopy**: Pessoal, não corporativo
  - "Adoramos ajudar" em vez de "We're here to help"

### Wordmark & Logo
Logo conceito: **Marca geométrica abstrata** — combinação de linhas que formam um "P" estilizado, inspirado em traços de caneta. Sem texto, apenas símbolo. Cores: Terracota principal com verde sálvia como detalhe.

### Signature Brand Color
**Terracota (#C85A3A)** — quente, criativo, autêntico. Aparece em botões, links, acentos e elementos-chave.

---

## Implementação
Este design será implementado através de:
- Tipografia Playfair Display + Inter via Google Fonts
- Paleta OKLCH em CSS variables
- Componentes shadcn/ui customizados com cores do tema
- SVG dividers com wave patterns
- Animações Framer Motion para scroll reveals
- Imagens geradas customizadas para hero e seções-chave
