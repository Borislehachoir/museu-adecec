import cathedrale from '../assets/cathedrale.png';

/*
  La page Les Salles présente les différentes salles du musée.
  Elle inclut un breadcrumb de navigation et une grille de cartes.
*/
export default function LesSalles() {
  return (
    <section className="basic-page">
      <nav aria-label="breadcrumb" className="breadcrumb" id="breadc-rooms">
        Musée / <span>Les Salles</span>
      </nav>

      <h1 id="rooms">Les Salles</h1>

      <section className="salle-intro" id="rooms-intro">
        <aside className="salle-intro__aside">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="salle-image-link"
          >
            <img
              src={cathedrale}
              alt="Cathédrale"
              className="salle-image"
              id="cath-image"
            />
          </a>
        </aside>

        <div className="salle-intro__content">
          <article className="info-card salle-card">
            <div className="info-card__overlay">
              <h3 id="rooms-title">Cathédrale</h3>
              <p id="rooms-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                id="rooms-btn"
              >
                Ouvrir
              </a>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}