import { useEffect, useRef } from 'react';
import kayou from '../assets/kayouadecec.png';
import storia from '../assets/storiaarcheo.jpg';
import creusets from '../assets/creusets.png';

export default function Archeologie() {
  const heroImageRef = useRef(null);
  const missionImageRef = useRef(null);
  const histoireImageRef = useRef(null);

  // Animation slide in
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

  // Animation missions ça scroll qd on zoom
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

  // Animation histoire — slide in left
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
      <div className="arch-hero">
        <div className="arch-hero__content">
          <h1 id="arch-title">Archéologie</h1>
          <p id="arch-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <img
          ref={heroImageRef}
          src={kayou}
          alt="Kayoux de Filitosa :333"
          id="arch-hero-img"
          className="arch-img"
        />
      </div>

      <div className="arch-section arch-section--missions">
        <div className="arch-section__content">
          <h2 id="arch-miss">Missions</h2>
          <p id="arch-miss-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <img
          ref={missionImageRef}
          src={storia}
          alt="gwo trou san fon"
          className="arch-img"
          id="arch-miss-img"
        />
      </div>

      <div className="arch-section arch-section--histoire">
        <img
          ref={histoireImageRef}
          src={creusets}
          alt="j'ai un petit creus...et pas vous ?"
          className="arch-img"
          id="arch-hist-img"
        />
        <div className="arch-section__content">
          <h2 id="arch-hist">Histoire</h2>
          <p id="arch-hist-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </section>
  );
}