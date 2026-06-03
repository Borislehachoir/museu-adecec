import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer';
import ScrollToTopBtn from '../components/ScrollToTopBtn';
import { injectTexts } from '../scripts/language-switch';

/*
  Le layout rassemble tous les éléments partagés entre les pages.
  Cela garantit une structure cohérente et évite la répétition
  dans chaque fichier de page.
*/
export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const savedLang = localStorage.getItem('museum-lang') || 'fr';
    injectTexts(savedLang);
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <main className="page-shell">
        <Outlet />
      </main>

      <PreFooter />
      <Footer />
      <ScrollToTopBtn />
    </>
  );
}