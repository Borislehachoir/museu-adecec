import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ToggleGroupLangue from './ToggleGroupLangue';
import adececLogo from '../assets/adececlogo.webp';

/*
La navbar gère un état local "ouvert / fermé" pour le menu mobile.
useState est pertinent ici car l'ouverture du menu modifie l'affichage
du composant et doit donc déclencher un nouveau rendu React.
*/
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="site-logo-link" onClick={closeMenu} aria-label="Retour à l’accueil">
          <span className="site-logo-box">
            <img
              src={adececLogo}
              alt="logo de ADECEC"
              className="site-logo"
            />
            ADECEC
          </span>
        </NavLink>

        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Ouvrir le menu"
        >
          ☰
        </button>

        <div className={`nav-area ${isMenuOpen ? 'is-open' : ''}`}>
          <div className="nav-links">
            <NavLink to="/" onClick={closeMenu}>
              <span id="nav-home">Accueil</span>
            </NavLink>

            <NavLink to="/les-salles" onClick={closeMenu}>
              <span id="nav-rooms">Les salles</span>
            </NavLink>

            <NavLink to="/archeologie" onClick={closeMenu}>
              <span id="nav-archaeology">Archéologie</span>
            </NavLink>

            <NavLink to="/infos-pratiques" onClick={closeMenu}>
              <span id="nav-infos">Infos pratiques</span>
            </NavLink>

            <NavLink to="/a-propos" onClick={closeMenu}>
              <span id="nav-about">À propos</span>
            </NavLink>
          </div>

          <ToggleGroupLangue />
        </div>
      </nav>
    </header>
  );
}