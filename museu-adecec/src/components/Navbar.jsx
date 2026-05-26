import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ToggleGroupLangue from './ToggleGroupLangue';

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
      <nav className="navbar" aria-label="Navigation principale">
        <NavLink to="/" className="site-logo" onClick={closeMenu}>
          ADECEC Musée
        </NavLink>

        <button
          type="button"
          className="hamburger"
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prevValue) => !prevValue)}
        >
          ☰
        </button>

        <div className={`nav-area ${isMenuOpen ? 'is-open' : ''}`}>
          <div className="nav-links">
            <NavLink to="/" onClick={closeMenu}>Accueil</NavLink>
            <NavLink to="/archeologie" onClick={closeMenu}>Archéologie</NavLink>
            <NavLink to="/les-salles" onClick={closeMenu}>Les Salles</NavLink>
            <NavLink to="/a-propos" onClick={closeMenu}>À Propos</NavLink>
            <NavLink to="/infos-pratiques" onClick={closeMenu}>Infos pratiques</NavLink>
          </div>

          <ToggleGroupLangue />
        </div>
      </nav>
    </header>
  );
}