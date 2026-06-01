import { useEffect, useRef } from 'react';
import kayou from '../assets/kayouadecec.png';
import storia from '../assets/storiaarcheo.jpg';
import creusets from '../assets/creusets.png';

/*
  IntersectionObserver est utilisé ici pour déclencher l'animation uniquement
  quand l'image entre dans le viewport, ce qui est plus propre et plus performant
  qu'un calcul manuel sur chaque événement de scroll.
*/
export default function Archeologie() {
  const heroImageRef = useRef(null);
  const missionImageRef = useRef(null);
  const histoireImageRef = useRef(null);

  // Animation pour l'image hero (slide down)
  useEffect(() => {
    const currentImage = heroImageRef.current;

    if (!currentImage) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        currentImage.classList.add('is-visible');
        observer.disconnect();
      }
    });

    observer.observe(currentImage);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Animation pour l'image missions (zoom lié au scroll)
  useEffect(() => {
    const currentImage = missionImageRef.current;

    if (!currentImage) {
      return undefined;
    }

    const handleScroll = () => {
      const rect = currentImage.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcul du pourcentage de visibilité (0 à 1)
      // Commence quand l'image entre en bas de l'écran, termine quand elle est au milieu
      const imageCenter = rect.top + rect.height / 2;
      const startZoom = windowHeight; // Commence à zoomer quand on la voit
      const endZoom = windowHeight / 2; // Fin du zoom au milieu de l'écran
      
      let progress = (startZoom - imageCenter) / (startZoom - endZoom);
      progress = Math.max(0, Math.min(1, progress)); // Clamp entre 0 et 1
      
      // Scale de 0.1 à 1
      const scale = 0.1 + progress * 0.9;
      currentImage.style.transform = `scale(${scale})`;
      currentImage.style.opacity = progress > 0 ? 1 : 0;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation pour l'image histoire (slide in left)
  useEffect(() => {
    const currentImage = histoireImageRef.current;

    if (!currentImage) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        currentImage.classList.add('slide-in-left');
        observer.disconnect();
      }
    });

    observer.observe(currentImage);

    return () => {
      observer.disconnect();
    };
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
          alt=" j'ai un petit creuset, pas vous ?"
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