import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer';
import ScrollToTopBtn from '../components/ScrollToTopBtn';

/*
  Le layout rassemble tous les éléments partagés entre les pages.
  Cela garantit une structure cohérente et évite la répétition
  dans chaque fichier de page.
*/
export default function Layout() {
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