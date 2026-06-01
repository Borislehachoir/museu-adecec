import { useEffect, useRef } from 'react';
import kayou from '../assets/kayouadecec.png';
import storia from '../assets/storiaarcheo.jpg';
import creusets from '../assets/creusets.png';
import '../js/script-archeo.js';

/*
  IntersectionObserver est utilisé ici pour déclencher l'animation uniquement
  quand l'image entre dans le viewport, ce qui est plus propre et plus performant
  qu'un calcul manuel sur chaque événement de scroll.
*/
export default function Archeologie() {
  const heroImageRef = useRef(null);
  const missionImageRef = useRef(null);
  const histoireImageRef = useRef(null);

  useEffect(() => {
    // script-archeo.js est importé depuis src/js et exécuté au montage
  }, []);

  return (
    <section className="arch-page">
      {/* Hero Section - Archéologie */}
      <div className="arch-hero">
        <div className="arch-hero__content">
          <h1>Archéologie</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempore incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img
          ref={heroImageRef}
          src={kayou}
          alt="Kayoux de Filitosa :333"
          className="arch-img"
        />
      </div>

      {/* Missions Section */}
      <div className="arch-section arch-section--missions">
        <div className="arch-section__content">
          <h2>Missions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempore incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img
          ref={missionImageRef}
          src={storia}
          alt="gwo trou san fon"
          className="arch-img"
        />
      </div>

      {/* Histoire Section */}
      <div className="arch-section arch-section--histoire">
        <img
          ref={histoireImageRef}
          src={creusets}
          alt=" j'ai un petit creus...et pas vous ?"
          className="arch-img"
        />
        <div className="arch-section__content">
          <h2>Histoire</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempore incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
}