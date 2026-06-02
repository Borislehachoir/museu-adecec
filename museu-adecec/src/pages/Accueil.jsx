import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import image1 from '../assets/museu.png';
import image2 from '../assets/storiaarcheo.jpg';
import image3 from '../assets/kayouadecec.png';
import image4 from '../assets/cervione.png';
import museeExterieur from '../assets/museuexterieur.jpg';

export default function Accueil() {
  const bigPicRef = useRef(null);
  const hewwoPictureRef = useRef(null);
  const hewwoTextRef = useRef(null);

  useEffect(() => {
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
    {
      title: 'Découvrir les étages',
      text: "Une première entrée pour parcourir les espaces du musée, notamment par le biais d'une visite virtuelle.",
      to: '/les-salles',
    },
    {
      title: 'Découvrir la partie archéologique',
      text: 'Explorer les collections et contenus liés à l\'archéologie.',
      to: '/archeologie',
    },
    {
      title: 'Préparez votre visite !',
      text: 'Horaires, accès et informations utiles avant de venir.',
      to: '/infos-pratiques',
    },
    {
      title: 'Découvrir le lieu',
      text: 'En apprendre plus sur le musée, son histoire et ses missions.',
      to: '/a-propos',
    },
  ];
  const images = [image1, image2, image3, image4];

  return (
    <section className="card-grid-section" aria-labelledby="home-cards-title">
      <div className='big-pic' ref={bigPicRef}>
        <div className='hewwo-picture' ref={hewwoPictureRef}>
          <img src={museeExterieur} alt="Façade du musée ADECEC" />
          <h1 className='hewwo-text' ref={hewwoTextRef}>
            Bienvenue sur le site du <span style={{ color: '#fedc97' }}>musée</span>
          </h1>
        </div>
        <div className='hewwo-p'>
          <p>Ceci est un texte. Bienvenue sur un texte, ici on musée le visite.</p>
        </div>
      </div>

      <div className="card-grid">
        {cards.map((card, index) => (
          <article
            className="info-card"
            key={card.title}
            style={{ backgroundImage: `url(${images[index % images.length]})` }}
          >
            <div className="info-card__overlay">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <Link to={card.to} className="btn">Ouvrir</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}