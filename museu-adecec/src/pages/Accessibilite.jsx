import { useEffect } from 'react';
import initLanguageSwitch from '../scripts/language-switch';

export default function Accessibilite() {
  useEffect(() => {
    initLanguageSwitch();
  }, []);

  return (
    <section className="basic-page access-page">
      <h1 className="access-title" id="access-title">Déclaration d'accessibilité</h1>

      <h2 className="access-section" id="access-identity-title">Identité du déclarant</h2>
      <p className="access-text" id="access-identity-text">
        Dans cette section, sera documenté l'identité et les coordonnées de l'éditeur du site.
      </p>

      <h2 className="access-section" id="access-results-title">Résultats des tests</h2>
      <p className="access-text" id="access-results-text-1">
        Très accessible.
      </p>
      <div className="access-text" id="access-results-text-2">
        Contraste vérifié avec WebAIM.
      </div>
      <p className="access-text">
        <a
          href="https://jigsaw.w3.org/css-validator/check/referer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" />
        </a>
      </p>

      <h2 className="access-section" id="access-compliance-title">État de conformité</h2>
      <div className="access-text" id="access-compliance-text" />

      <h2 className="access-section" id="access-nonaccessible-title">Contenus non accessibles</h2>
      <p className="access-text" id="access-nonaccessible-text">
        Dans cette section, seront listés les contenus non accessibles et les raisons techniques ou fonctionnelles associées.
      </p>

      <h3 className="access-subsection" id="access-exemption-title">Dérogation</h3>
      <p className="access-text" id="access-exemption-text">
        Dans cette section, seront documentées les dérogations accordées, leur motif et les actions prévues.
      </p>

      <h2 className="access-section" id="access-statement-title">
        Établissement de cette déclaration d'accessibilité
      </h2>
      <p className="access-text" id="access-statement-text" />

      <h3 className="access-subsection" id="access-tech-title">
        Technologies utilisées pour la réalisation du site web
      </h3>
      <div className="access-text" id="access-tech-text" />

      <h3 className="access-subsection" id="access-tools-title">
        Agents utilisateurs, technologies d'assistance et outils utilisés pour vérifier l'accessibilité
      </h3>
      <div className="access-text" id="access-tools-text" />

      <h3 className="access-subsection" id="access-pages-title">
        Pages du site ayant fait l'objet de la vérification de conformité
      </h3>
      <div className="access-text" id="access-pages-text" />

      <h2 className="access-section" id="access-feedback-title">Retour d'information et contact</h2>
      <div className="access-text" id="access-feedback-text" />

      <h2 className="access-section" id="access-remedy-title">Voies de recours</h2>
<p className="access-text" id="access-remedy-text-intro" />
<p className="access-text" id="access-remedy-list-intro" />
<ol className="access-text" id="access-remedy-list">
  <li id="access-remedy-item-1" />
  <li id="access-remedy-item-2" />
  <li id="access-remedy-item-3" />
</ol>
    </section>
  );
}