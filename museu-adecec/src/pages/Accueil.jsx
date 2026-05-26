import { Link } from 'react-router-dom';
import image1 from '../assets/museuexterieur.jpg';
import image2 from '../assets/museu.png';
import image3 from '../assets/kayouadecec.png';
import image4 from '../assets/creusets.png';

/*
  La page d'accueil pose les points d'entrée principaux du site.
  Les cartes servent ici de navigation visuelle vers les sections clés.
*/
export default function Accueil() {

  const images = [
    { id: 1, url: image1, alt: 'Façade du musée ADECEC' },
    { id: 2, url: image2, alt: 'Vue intérieure du musée' },
    { id: 3, url: image3, alt: 'Visuel ADECEC' },
    { id: 4, url: image4, alt: 'Extérieur du musée' },
  ];
  const cards = [
    {
      title: 'Découvrir les étages',
      text: 'Une première entrée pour parcourir les espaces du musée.',
      to: '/les-salles',
    },
    {
      title: 'Découvrir la partie archéologique',
      text: 'Explorer les collections et contenus liés à l’archéologie.',
      to: '/archeologie',
    },
    {
      title: 'Préparez votre visite !',
      text: 'Horaires, accès et informations utiles avant de venir.',
      to: '/infos-pratiques',
    },
    {
      title: 'Découvrir les salles',
      text: 'Accéder à une vue d’ensemble des différents espaces du musée.',
      to: '/les-salles',
    },
  ];

  return (
    <section className="card-grid-section" aria-labelledby="home-cards-title">
      <h2 id="home-cards-title">Explorer le musée</h2>

      <div className="card-grid">
        {cards.map((card, index) => {
          const imgAttrib = images[index % images.length];

          return (
            <article className="info-card" key={card.title}>
              <img
                src={imgAttrib.url}
                alt={imgAttrib.alt}
                className="info-card__image"
              />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <Link to={card.to} className="btn">
                Ouvrir
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}