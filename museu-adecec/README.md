# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Note supplémentaire pour Vercel, etc 

# ADECEC Musée

Squelette de départ du site du musée ADECEC de Cervione.

## Lancer le projet

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Déploiement Vercel

1. Pousser le projet sur GitHub
2. Aller sur Vercel
3. Importer le repository
4. Vercel détecte Vite automatiquement
5. Build command : `npm run build`
6. Output dir : `dist/`

Aucune configuration supplémentaire n'est requise.