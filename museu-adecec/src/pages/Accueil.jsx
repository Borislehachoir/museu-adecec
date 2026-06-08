import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import image1 from '../assets/museu-piani.webp';
import image2 from '../assets/storiaarcheo.webp';
import image3 from '../assets/museu-pano.webp';
import image4 from '../assets/cervione.webp';
import museeExterieur from '../assets/museuexterieur.webp';
import initLanguageSwitch from '../scripts/language-switch';

export default function Accueil() {
  const bigPicRef = useRef(null);
  const hewwoPictureRef = useRef(null);
  const hewwoTextRef = useRef(null);

  useEffect(() => {
    initLanguageSwitch();

    const bigPic = bigPicRef.current;
    const hewwoText = hewwoTextRef.current;
    const hewwoPicture = hewwoPictureRef.current;

    if (!bigPic || !hewwoText || !hewwoPicture) return;

    hewwoPicture.style.minHeight = '100vh';
    hewwoText.classList.add('hewwo-text-animated');

    const handleScroll = () => {
      const rect = bigPic.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let scrollProgress = 0;
      if (rect.top < 0) {
        scrollProgress = Math.abs(rect.top) / (bigPic.offsetHeight - windowHeight / 2);
      }

      const clampedProgress = Math.min(1, Math.max(0, scrollProgress));

      const minHeight = 100 - clampedProgress * 30;
      hewwoPicture.style.minHeight = `${minHeight}vh`;

      if (clampedProgress < 1) {
        const animationDuration = 15 - clampedProgress * 5;
        hewwoText.style.animation = `floating ${animationDuration}s ease-in-out infinite`;
      } else {
        hewwoText.classList.remove('hewwo-text-animated');
      }

      const fontSizeIncrease = 5 * (1 - clampedProgress);
      hewwoText.style.fontSize = `clamp(2rem, calc(5vw + ${fontSizeIncrease}px), calc(4rem + ${fontSizeIncrease}px))`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cards = [
    { id: 1, to: '/les-salles' },
    { id: 2, to: '/archeologie' },
    { id: 3, to: '/infos-pratiques' },
    { id: 4, to: '/a-propos' },
  ];

  const images = [image1, image2, image3, image4];

  return (
    <main className="home-page">
      <section className="big-pic" ref={bigPicRef}>
        <div className="hewwo-picture" ref={hewwoPictureRef}>
          <img src={museeExterieur} alt="Extérieur du musée" className="hero-img" />
          <h1 className="hewwo-text" id="home-title" ref={hewwoTextRef}>
            Bienvenue sur le site du musée Anton Dumenicu Monti.
          </h1>
        </div>

        <div className="hewwo-p">
          <p id="home-intro">
            En 1970, au beau milieu du Riacquistu, un groupe d'intellectuels corses se rejoignent pour créer une association à Cervione, en plein coeur de la Costa Verde. <br />
            Très tôt, une de leurs missions principales s'avère être la fondation et l'entretien d'un musée ethnographique qui documenterait la culture, le quotidien et les métiers de nos anciens entre la fin du XIXe siècle et la première moitié du XXe siècle. <br />
            En 1975, le musée s'installe dans l'ancien séminaire du couvent d'Aléria, bâti par Monseigneur Alexandre Sauli au XVIe siècle, et en 2012 il est baptisé de son nom actuel, du nom du président fondateur.<br />
            Depuis plus de cinquante ans, nous n'avons jamais cessé de collecter, préserver, partager et exposer des objets qui firent parti du quotidien de nos pères, grand-pères et arrière-grand-pères.
            <br />
            Et ça serait un honneur que vous poursuiviez dès à présent, cette découverte de notre mémoire collective en explorant les autres pages du musée en ligne.</p>
        </div>
      </section>

      <section className="card-grid-section">
        <div className="card-grid">
          {cards.map((card, index) => (
            <article
              key={card.id}
              className="info-card"
              style={{ backgroundImage: `url(${images[index]})` }}
            >
              <div className="info-card__overlay">
                <h2 id={`card-${card.id}-title`}>
                  {card.id === 1 && 'Découvrir les étages'}
                  {card.id === 2 && 'Découvrir la partie archéologique'}
                  {card.id === 3 && 'Préparez votre visite !'}
                  {card.id === 4 && 'Découvrir le lieu'}
                </h2>

                <p id={`card-${card.id}-text`}>
                  {card.id === 1 && "Une première entrée pour parcourir les espaces du musée, notamment par le biais d'une visite virtuelle."}
                  {card.id === 2 && "Explorer les collections et contenus liés à l'archéologie."}
                  {card.id === 3 && 'Horaires, accès et informations utiles avant de venir.'}
                  {card.id === 4 && 'En apprendre plus sur le musée, son histoire et ses missions.'}
                </p>

                <Link to={card.to} className="btn">
                  <span className="open-label">Ouvrir</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}