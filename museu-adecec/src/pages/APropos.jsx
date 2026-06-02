import museu from '../assets/museu.png';
import museeExterieur from '../assets/museuexterieur.jpg';
import cathedrale from '../assets/cathedrale.png';

export default function APropos() {
  return (
    <section className="about-page">
      <div className="breadcrumb">Musée / À Propos</div>

      <div className="about-intro">
        <aside className="about-intro__aside">
          <img
            src={cathedrale}
            alt="Église"
            className="about-img about-img--cathedrale"
          />
        </aside>

        <div className="about-intro__content">
          <section className="text-media-section">
            <div>
              <h1>À Propos</h1>
              <h2>La fondation</h2>
              <p>
                Ce bloc accueillera un texte de présentation sur la fondation du musée,
                son ancrage local et son rôle culturel.
              </p>
            </div>

            <img
              src={museu}
              alt="Intérieur du musée"
              className="about-img about-img--museu"
            />
          </section>

          <hr />

          <section className="text-media-section">
            <div>
              <h2>Le musée aujourd’hui</h2>
              <p>
                Ce second bloc servira à présenter l’évolution du musée, ses missions
                et l’expérience proposée au public.
              </p>
            </div>

            <img
              src={museeExterieur}
              alt="Extérieur du musée"
              className="about-img about-img--musee-exterieur"
            />
          </section>
        </div>
      </div>
    </section>
  );
}