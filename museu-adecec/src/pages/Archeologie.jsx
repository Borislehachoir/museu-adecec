import { useEffect, useRef } from 'react';
import kayou from '../assets/kayouadecec.png';
import storia from '../assets/storiaarcheo.jpg';
import creusets from '../assets/creusets.png';
// ❌ import '../js/script-archeo.js'; — supprimé

export default function Archeologie() {
  const heroImageRef = useRef(null);
  const missionImageRef = useRef(null);
  const histoireImageRef = useRef(null);

  // ✅ Animation hero — slide in (IntersectionObserver)
  useEffect(() => {
    const currentImage = heroImageRef.current;
    if (!currentImage) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        currentImage.classList.add('is-visible');
        observer.disconnect();
      }
    });

    observer.observe(currentImage);
    return () => observer.disconnect();
  }, []);

  // ✅ Animation missions — zoom au scroll
  useEffect(() => {
    const currentImage = missionImageRef.current;
    if (!currentImage) return;

    const handleScroll = () => {
      const rect = currentImage.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const imageCenter = rect.top + rect.height / 2;
      const startZoom = windowHeight;
      const endZoom = windowHeight / 2;

      let progress = (startZoom - imageCenter) / (startZoom - endZoom);
      progress = Math.max(0, Math.min(1, progress));

      const scale = 0.1 + progress * 0.9;
      currentImage.style.transform = `scale(${scale})`;
      currentImage.style.opacity = progress > 0 ? 1 : 0;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Animation histoire — slide in left (IntersectionObserver)
  useEffect(() => {
    const currentImage = histoireImageRef.current;
    if (!currentImage) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        currentImage.classList.add('slide-in-left');
        observer.disconnect();
      }
    });

    observer.observe(currentImage);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="arch-page">
      {/* Hero Section */}
      <div className="arch-hero">
        <div className="arch-hero__content">
          <h1>Archéologie</h1>
          <p>Lorem ipsum dolor sit amet...</p>
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
          <p>Lorem ipsum dolor sit amet...</p>
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
          alt="j'ai un petit creus...et pas vous ?"
          className="arch-img"
        />
        <div className="arch-section__content">
          <h2>Histoire</h2>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
    </section>
  );
}