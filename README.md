# 🥦 Food Rescue – Landing Page

**Food Rescue** é uma landing page moderna e responsiva desenvolvida com **Next.js**, **TypeScript**, **TailwindCSS** e **Framer Motion**, que consome a API REST do projeto [Food Rescue](https://github.com/hadiel7/Food-Rescue). O objetivo é promover ações de combate ao desperdício de alimentos, conectando doadores, instituições e voluntários.

![Food Rescue Banner](https://via.placeholder.com/1200x400.png?text=Food+Rescue+Landing+Page) <!-- Substitua pela imagem do seu projeto -->

---

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Axios](https://axios-http.com/)

---

## 🔗 Funcionalidades

- ✅ Consumo de API com 3 rotas principais:
  - `/institutions`: Lista instituições parceiras.
  - `/donations`: Mostra doações registradas.
  - `/volunteers`: Exibe voluntários cadastrados.
- ✅ Design responsivo, moderno e acessível.
- ✅ Navegação com scroll suave entre seções.
- ✅ Animações suaves com Framer Motion.
- ✅ Código limpo, tipado e componentizado.

---

## 📸 Layout das Seções

- **Hero Section:** Chamada visual para ação, com foco em propósito.
- **Instituições:** Blocos informativos com nome e descrição das ONGs/parceiros.
- **Doações:** Cards com itens doados, quantidade e doador.
- **Voluntários:** Lista de voluntários disponíveis com nome e contato.
- **Footer:** Créditos e direitos.

---

## 🧑‍💻 Como rodar localmente

### 1. Clone o projeto da API

```bash
git clone https://github.com/hadiel7/Food-Rescue.git
cd Food-Rescue
npm install
npm run dev

## A API estará rodando por padrão em:

http://localhost:3000

## Clone o projeto da Landing Page

git clone https://github.com/seu-usuario/food-rescue-landing.git
cd food-rescue-landing
npm install
npm run dev

## Acesse a aplicação:

http://localhost:3001


## 📁 Estrutura de Pastas (Landing Page)

food-rescue-landing/
├── components/        # Componentes React reutilizáveis
├── pages/             # Página principal (index.tsx)
├── styles/            # Tailwind + fontes
├── utils/             # API helpers (axios)
├── public/            # Imagens e ícones
├── tailwind.config.ts
└── tsconfig.json

#🧑‍🎓 Desenvolvido por
Hadiel de Paula Barbosa
GitHub

## 💡 Contexto
Este projeto foi desenvolvido como parte do Mini Projeto do Módulo 4 (M4), com o objetivo de aplicar na prática conceitos de APIs REST, consumo de dados com React e boas práticas de UI/UX em uma página única.

## 🔁 Backend (API)
Pode ser hospedado em:

Render

Railway

Heroku

Lembre-se de expor as rotas /institutions, /donations, /volunteers para uso público.