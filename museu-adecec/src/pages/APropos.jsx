/*
  La page À Propos présente le contexte du musée dans une mise en page éditoriale.
  Le breadcrumb aide l'utilisateur à se repérer dans l'arborescence.
*/
import museu from '../assets/museu.png';
import museeExterieur from '../assets/museuexterieur.jpg';
import cathedrale from '../assets/cathedrale.png';

export default function APropos() {
  return (
    <section className="about-page">
      <nav aria-label="breadcrumb" className="breadcrumb">
        Musée / <span>À Propos</span>
      </nav>

      <section className="about-intro">
        <aside className="about-intro__aside">
          <img src={cathedrale} alt="Vue extérieure du musée ADECEC" />
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
            <img src={museu} alt="Image secondaire liée à la fondation" />
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
            <img src={museeExterieur} alt="Image secondaire liée au musée" />
          </section>
        </div>
      </section>
    </section>
  );
}