# Teste Econverse – Front-End

Página desenvolvida em **React + TypeScript** com **Sass**, sem bibliotecas de UI. Reproduz o layout do Figma e inclui a **vitrine de produtos** (consumindo o JSON do teste) e o **modal** com as informações do produto clicado.

## Tecnologias

- React + TypeScript
- Vite
- Sass (SCSS)

## Como rodar

Pré-requisito: Node.js (versão LTS).

```bash
npm install        # instala as dependências
npm run dev        # servidor de desenvolvimento (http://localhost:5173)
npm run build      # checagem de tipos + build de produção (pasta dist/)
npm run preview    # serve o build localmente
```

O projeto não tem testes automatizados.

## Funcionalidades

- Vitrine com 4 produtos visíveis e setas para navegar pelos demais.
- Clique em um produto abre o modal com foto, nome, preço e descrição. Fecha pelo X, clicando fora ou com `Esc`.
- Seletor de quantidade funcional no modal.
- Loading e mensagem de erro na busca dos produtos.

## Estrutura de pastas

```
public/                 arquivos servidos como estão (imagens, ícones, favicon)
src/
├── components/         partes visuais da página
├── hooks/              lógica de estado reutilizável
├── services/           comunicação com a API
├── types/              tipos do TypeScript
├── utils/              funções auxiliares
├── styles/             estilos globais
├── App.tsx             monta a página
└── main.tsx            ponto de entrada
```

### Por que cada pasta existe

| Pasta | O que guarda | Por que separar |
|---|---|---|
| `public/` | Imagens, ícones de categoria, logo e favicon. | Os componentes apontam para essas imagens por caminho (`/images/...`). Assim os arquivos pesados ficam fora do código e podem ser trocados sem mexer nos componentes. |
| `components/` | Uma pasta por parte da página (`Header`, `HeroBanner`, `CategoryList`, `ProductShowcase`, `ProductCard`, `Modal`, `PromoBanners`, `BrandList`, `Newsletter`, `Footer`, `Icons`), cada uma com seu `.tsx` e seu `.scss`. | Cada parte do layout é independente e reutilizável (a vitrine, por exemplo, aparece três vezes). Estrutura e estilo ficam lado a lado, o que facilita achar e alterar. |
| `hooks/` | `useProducts`: guarda os produtos, o estado de carregamento e o erro. | Tira a lógica de estado dos componentes, que ficam só com a parte visual. |
| `services/` | `productService`: faz o `fetch` do JSON. | Concentra o acesso à API em um único lugar. Se a URL mudar, só esse arquivo é alterado. |
| `types/` | Interfaces `Product` e `ProductsResponse`. | Descreve o formato dos dados uma vez só, e todo o projeto usa o mesmo tipo. |
| `utils/` | `formatPrice`: formata moeda (R$) e calcula parcelas. | Funções simples, sem React, que podem ser usadas em qualquer componente. |
| `styles/` | `_variables.scss` (cores, fontes, medidas do Figma), `_mixins.scss` (trechos reaproveitáveis, como o botão amarelo), `_reset.scss` e `main.scss`. | Tudo que é global fica em um lugar. Para mudar uma cor do projeto inteiro, basta editar uma variável. |

### Como as partes se conectam

```
main.tsx → App.tsx ─┬→ useProducts → productService → JSON
                    ├→ Header, HeroBanner, CategoryList
                    ├→ ProductShowcase (×3) → ProductCard
                    ├→ PromoBanners (×2), BrandList
                    ├→ Newsletter, Footer
                    └→ Modal (aparece quando há um produto selecionado)
```

O `App.tsx` busca os produtos **uma única vez** e repassa para as três vitrines. Também guarda qual produto foi selecionado, então existe um único modal, aberto por qualquer card.

## Decisões

- **Sass com BEM:** cada componente tem classes próprias (`product-card__price`), o que evita conflito de estilos entre componentes.
- **HTML semântico e SEO:** uso de `header`, `nav`, `main`, `section`, `article` e `footer`, um único `h1`, `alt` nas imagens, `lang="pt-BR"`, `title`, `meta description` e Open Graph.
- **Acessibilidade:** o modal usa `role="dialog"` e `aria-modal`, recebe foco ao abrir e fecha com `Esc`. Botões têm `aria-label` quando só têm ícone.
- **Dados do JSON:** o JSON traz apenas nome, descrição, foto e preço. O preço antigo (riscado) e o parcelamento exibidos no layout são derivados do preço em `utils/formatPrice.ts`.
- **Desktop:** o layout foi feito para 1440px, como no Figma, que não tem versão mobile.
