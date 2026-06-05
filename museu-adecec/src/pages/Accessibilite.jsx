/*
  Cette page est volontairement minimale.
  Le brief demande un placeholder simple à développer ensuite.
*/
export default function Accessibilite() {
  return (
    <section className="basic-page access-page">
      <h1 className="access-title" id="access-t">Déclaration d'accessibilité</h1>

      <h2 className="access-section" id="access-s">Identité du déclarant</h2>
      <p className="access-text" id="access-s-text">Dans cette section, sera documenté l'identité et les coordonnées de l'éditeur du site.</p>

      <h2 className="access-section" id="access-r">Résultats des tests</h2>
      <p className="access-text" id="access-r-text"> <b>Très accessible</b> (score au dessus de 90 sur chaque catégorie <a href="https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fmuseu-adecec.vercel.app%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&locale=fr&utm_source=lh-chrome-ext">Lighthouse</a>) <br /></p>
      <p className="access-text" id="access-r-text"> <b>Contraste vérifié</b> avec <a href="https://webaim.org/resources/contrastchecker/">WebAIM Color Contrast Checker</a> : 9.89:1 pour l'arrière-plan des cartes  (#263E6A) et du site (#F8F7F3),<br />
      8.03:1 pour la couleur de survol des boutons (#fedc97) et l'arrière-plan des cartes (#263E6A), 9.18:1 pour cette même couleur de survol et l'arrière-plan du header/footer (#133951), 13.87:1 pour la couleur du texte des boutons (#1C2B24) et le fond des dits boutons (#FFF7E7), et enfin 7.16:1 pour le fond du bouton de retour en haut (#FFBB33) et l'arrière-plan du footer (#133951) </p>
      

      <h2 className="access-section" id="access-c">État de conformité</h2>
      <p className="access-text" id="access-c-text">Aucun audit complet du site en se basant sur les critères du <a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/">RGAA 4.1.2</a> n'a été réalisé pour l'instant mais il est en cours de préparation et de rédaction, et cette section sera mise à jour le cas échéant.</p>

      <h2 className="access-section" id="access-n">Contenus non accessibles</h2>
      <p className="access-text" id="access-n-text">Dans cette section, seront listés les contenus non accessibles et les raisons techniques ou fonctionnelles associées.</p>

      <h3 className="access-subsection" id="access-d">Dérogation</h3>
      <p className="access-text" id="access-d-text">Dans cette section, seront documentées les dérogations accordées, leur motif et les actions prévues.</p>

      <h2 className="access-section" id="access-e">Établissement de cette déclaration d'accessibilité</h2>
      <p className="access-text" id="access-e-text"> <em>Cette déclaration a été réalisée le 05/06/2026 par l'étudiant-stagiaire Boris ROCCHIETTI le compte de Association pour le Développement des Etudes Archéologiques, Historiques, linguistiques et Naturalistes du Centre-Est de la Corse, association fondée en 1970 à Cervioni. </em></p>

      <h3 className="access-subsection" id="access-t">Technologies utilisées pour la réalisation du site web</h3>
      <p className="access-text" id="access-t-text">HTML, CSS, Javascript(JS) (React, Vite et librairie JS (PrimeReact)). Menu déroulant de changement de langue inspirée par un <a href="https://hohkfuyuhi.github.io/JS-language-changer/">modèle original</a>de Max Ho</p>

      <h3 className="access-subsection" id="access-a">Agents utilisateurs, technologies d'assistance et outils utilisés pour vérifier l'accessibilité</h3>
      <p className="access-text" id="access-a-text">Ont été utilisés Lighthouse, WebAIM Color Contrast Checker, W3C Markup Validation Service, </p>

      <h3 className="access-subsection" id="access-p">Pages du site ayant fait l'objet de la vérification de conformité</h3>
      <p className="access-text" id="access-p-text">Dans cette section, seront listées les pages ou parcours du site qui ont été audités.</p>

      <h2 className="access-section" id="access-r-info">Retour d'information et contact</h2>
      <p className="access-text" id="access-r-info-text">Dans cette section, seront indiquées les modalités de contact pour signaler un problème d'accessibilité et demander une alternative.</p>

      <h2 className="access-section" id="access-v">Voies de recours</h2>
      <p className="access-text" id="access-v-text">Dans cette section, seront expliquées les procédures et contacts à utiliser en cas de recours liés à l'accessibilité.</p>
    </section>
  );
}