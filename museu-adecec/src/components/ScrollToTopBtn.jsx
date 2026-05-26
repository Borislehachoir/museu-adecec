import { useEffect, useState } from 'react';

/*
  Ce bouton n'existe visuellement que si l'utilisateur a dépassé 300px de scroll.
  On écoute donc le scroll de la fenêtre, puis on nettoie l'écouteur au démontage
  pour éviter toute fuite mémoire.
*/
export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      className="scroll-top-btn"
      aria-label="Retour en haut de page"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  );
}