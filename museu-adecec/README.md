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

# Guide for editing the texts (if there's not back office, or it hasn't been completed yet) : 

1. First things first, you open the `language-switch.js` file in the **scripts** folder. You will see a const declaration (look out for the <span style="color:red"> const </span> in the very beginning). 
You will see this thing has many small sections marked by one-line gaps. These separations exist to help you navigate through the file. 

2. In order, you will find the french version, the english one and we end up on the corsican translation. In each section, you will find : 
- **nav** : the navbar items;
- from **home** to **open** : the homepage;
- **footer** : all the texts available in the footer ;
- **pf** : everything that's related to the pre-footer ;
- **arch** : archeology content ;
- **rooms** : texts and stuff related to the Rooms and guided visit page. 
- **nf** : Page for Error 404 - Not Found ;
- **about** : stuff that's displayed on the About the Museum page. 
- **infos** : the informations you can find on Informations Pratiques ;
- **access** : stuff related to the accessibily declaration ;
> [!NOTE]
> The declaration has to be updated at least once every three years.
- ee : the easter egg page (you might not check it often but consider it a legacy of sorts, i just wanted to try stuff out haha)
    - eeTerm is about the Terminal
    - Desc means description

3. To edit text, choose one of the lines (let's say we choose *navHome: 'Accueil',*). Edit your text (it is recommanded to use a text editor like Word), copy and paste it between the /'/ signs. 
> [!IMPORTANT]
> Let's say you have to add this sentence : '*Rawr. J'aime les Paris-Brest*'. But you are already using this /'/ symbol to open and close the sentences. If you just wrote '*Rawr. J'aime les Paris-Brest*', it would cut the sentence into two smaller instances : *Rawr. J'* and *aime les Paris-Brest*. To avoid this issue, before this symbol, you need to add a reverse slash. 
> **How to add it** ? Either press Option +  Maj + / on Mac, or Alt + 92 in any other OS. 

4. Save the file. 

5. Commit the edits, and push it on Github (ask Battì for help for this step)
> [!NOTE]
> For Battì : to commit and push the edits, you need to sign your Github account in on VS Code (it's not hard but since i'm bad at explaining this kind of stuff, i'm leaving it to Google to properly explain you how to do so). Then go on the Source Control icon (Ctrl + Shift + G on Windows, ⌃⇧G on Mac). It will show you an input for a Message, and under it is a Commit button with a select. Write a message first, and then open this select and choose 'Commit & Push'. Wait a moment. It's finished ! Nice job ! 

6. Open the website on Vercel, and you've made it ! Nice job ! 