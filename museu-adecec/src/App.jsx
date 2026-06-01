import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Archeologie from './pages/Archeologie';
import LesSalles from './pages/LesSalles';
import InfosPratiques from './pages/InfosPratiques';
import Accessibilite from './pages/Accessibilite';
import NotFound from './pages/NotFound';
import PlanSite from './pages/PlanSite';
import EasterEgg from './pages/EasterEgg';

/*
  Ce composant centralise les routes.
  Le Layout, lui, englobe toutes les pages afin d'éviter de répéter la navbar, le pre-footer, le footer et le bouton de retour en haut.
*/
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/archeologie" element={<Archeologie />} />
        <Route path="/les-salles" element={<LesSalles />} />
        <Route path="/infos-pratiques" element={<InfosPratiques />} />
        <Route path="/accessibilite" element={<Accessibilite />} />
        <Route path="/plan-site" element={<PlanSite />} />
        <Route path="/easter-egg" element={<EasterEgg />} />
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}