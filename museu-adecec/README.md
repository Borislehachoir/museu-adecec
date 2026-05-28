# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Additional notes for Vercel, etc

## Start the project

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Vercel deployment (I already did it but I put it here if you wish to create your own repository)

1. Push the project to a Github repository [(here's mine btw)](https://github.com/Borislehachoir/museu-adecec)
2. Go to [Vercel](https://vercel.com/)
3. Import the repository
4. Vercel normally detects Vite automatically.
    > [!NOTE]
    > If it ain't working, check if you didn't put your repository in private on Github, or play around with the *root* setting on Vercel.
    > Regarding the aforementioned *root* setting: the default setting looks like "./" or something like that.
    > If your Vite/React application is in a subfolder (as is the case in this project), you must indicate the correct root directory.

5. Command for build: `npm run build`
6. Output dir: `dist/`

No additional configuration is required.