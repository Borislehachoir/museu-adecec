import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import image1 from '../assets/museu.png';
import image2 from '../assets/storiaarcheo.jpg';
import image3 from '../assets/kayouadecec.png';
import image4 from '../assets/cervione.png';
import museeExterieur from '../assets/museuexterieur.jpg';
import '../js/script-accueil.js';

/*
  La page d'accueil pose les points d'entrée principaux du site.
  Les cartes servent ici de navigation visuelle vers les sections clés.
*/
export default function Accueil() {
  const bigPicRef = useRef(null);
  const hewwoPictureRef = useRef(null);
  const hewwoTextRef = useRef(null);

  const cards = [];
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
          <p>
            Ceci est un texte. Bienvenue sur un texte, ici on musée le visite.
            Moi, dyslexique ? Je ne vois pas ce que vous voulez dire. Je parle très bien la France.
          </p>
        </div>
      </div>

      <div className="card-grid">
        {cards.map((card, index) => {
          const imgAttrib = images[index % images.length];

          return (
            <article
              className="info-card"
              key={card.title}
              style={{ backgroundImage: `url(${imgAttrib.url})` }}
            >
              <div className="info-card__overlay">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <Link to={card.to} className="btn">
                  Ouvrir
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}