import museu from '../assets/old-cathedral.webp';
import museeExterieur from '../assets/museuexterieur.webp';
import cathedrale from '../assets/cathedrale.webp';

export default function APropos() {
  return (
    <section className="about-page">
      <div className="breadcrumb" id="breadc-about">Musée / À Propos</div>

      <div className="about-intro">
        <aside className="about-intro__aside">
          <img
            src={cathedrale}
            alt="Église"
            id="about-church-img"
            className="about-img about-img--cathedrale"
          />
        </aside>

        <div className="about-intro__content">
          <section className="text-media-section">
            <div>
              <h1 id="about-title">À Propos</h1>
              <h2 id="about-foundation">La fondation</h2>
              <p id="about-foundation-text">
                Ce bloc accueillera un texte de présentation sur la fondation du musée,
                son ancrage local et son rôle culturel.
              </p>
            </div>

            <img
              src={museu}
              alt="Intérieur du musée"
              id="about-museum-inside-img"
              className="about-img about-img--museu"
            />
          </section>

          <hr />

          <section className="text-media-section">
            <div>
              <h2 id="about-museum">Le musée aujourd’hui</h2>
              <p id="about-museum-text">
                Ce second bloc servira à présenter l’évolution du musée, ses missions
                et l’expérience proposée au public.
              </p>
            </div>

            <img
              src={museeExterieur}
              alt="Extérieur du musée"
              id="about-museum-outside-img"
              className="about-img about-img--musee-exterieur"
            />
          </section>
        </div>
      </div>
    </section>
  );
}