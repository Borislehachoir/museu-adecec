import { useEffect, useRef } from 'react';

/*
  IntersectionObserver est utilisé ici pour déclencher l'animation uniquement
  quand l'image entre dans le viewport, ce qui est plus propre et plus performant
  qu'un calcul manuel sur chaque événement de scroll.
*/
export default function Archeologie() {
  const imageRef = useRef(null);

  useEffect(() => {
    const currentImage = imageRef.current;

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

  return (
    <section className="arch-page">
      <section className="arch-hero">
        <div className="arch-hero__shapes">
          <div className="arch-rect-main" />
          <div className="arch-rect-dark" />
        </div>

        <div className="arch-hero__media">
          <img
            ref={imageRef}
            src="src/assets/kayouadecec.png"
            alt="Visuel de la section archéologie du musée"
            className="arch-img"
          />
        </div>
      </section>

      <section className="arch-section">
        <div>
          <h1>Archéologie</h1>
          <h2>Missions</h2>
          <p>
            Cette section présentera les missions de conservation, de transmission
            et de valorisation liées au parcours archéologique.
          </p>
        </div>
        <img src="src/assets/storiaarcheo.jpg" alt="Illustration des missions archéologiques" />
      </section>

      <section className="arch-section arch-section--reverse">
        <img src="src/assets/creusets.png" alt="Illustration historique" />
        <div>
          <h2>Histoire</h2>
          <p>
            Cette partie accueillera un texte sur l’histoire des collections,
            du territoire et des objets présentés.
          </p>
        </div>
      </section>
    </section>
  );
}