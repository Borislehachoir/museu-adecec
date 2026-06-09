import cathedrale from '../assets/capre-corsi.webp';
import apercu from '../assets/guide-corsu-apercu.pdf'

export default function LesSalles() {
  return (
    <section className="basic-page">
      <nav aria-label="breadcrumb" className="breadcrumb" id="breadc-rooms">
        Musée / <span>Les Salles</span>
      </nav>

      <h1 id="rooms">Les Salles</h1>

      <section className="salle-intro" id="rooms-intro">
        <article className="salle-card">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="salle-card__media"
            aria-label="Ouvrir la visite virtuelle"
          >
            <figure className="salle-figure">
              <img
                src={cathedrale}
                alt="Cathédrale"
                className="salle-image"
                id="cath-image"
                title="Visite virtuelle du musée ADECEC"
              />
              <figcaption id = "figcap-salles">Visite virtuelle</figcaption>
            </figure>
          </a>

          <div className="salle-card__content">
            <div className="info-card__overlay">
              <h2 id="rooms-title">Lorem ipsum default header</h2>
              <p id="rooms-desc">
                Lorem ipsum default text
              </p>
              <a
                href={apercu}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                id="rooms-btn"
              >
                Découvrir le guide (aperçu)
              </a>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}