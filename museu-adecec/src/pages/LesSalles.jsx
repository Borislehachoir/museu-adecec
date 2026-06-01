import cathedrale from '../assets/cathedrale.png';

/*
  La page Les Salles présente les différentes salles du musée.
  Elle inclut un breadcrumb de navigation et une grille de cartes.
*/
export default function LesSalles() {
  return (
    <section className="basic-page">
      <nav aria-label="breadcrumb" className="breadcrumb">
        Musée / <span>Les Salles</span>
      </nav>

      <h1>Les Salles</h1>

      <section className="salle-intro">
        <aside className="salle-intro__aside">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="salle-image-link">
            <img src={cathedrale} alt="Cathédrale" className="salle-image" />
          </a>
        </aside>

        <div className="salle-intro__content">
          <article className="info-card salle-card">
            <div className="info-card__overlay">
              <h3>Cathédrale</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="btn">
                Ouvrir
              </a>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}