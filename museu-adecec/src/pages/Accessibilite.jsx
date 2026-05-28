/*
  Cette page est volontairement minimale.
  Le brief demande un placeholder simple à développer ensuite.
*/
export default function LesSalles() {
  return (
    <section className="basic-page access-page">
      <h1 className="access-title">Déclaration d'accessibilité</h1>

      <h2 className="access-section">Identité du déclarant</h2>
      <p className="access-text">Dans cette section, sera documenté l'identité et les coordonnées de l'éditeur du site.</p>

      <h2 className="access-section">Résultats des tests</h2>
      <p className="access-text">Dans cette section, seront documentés les résultats chiffrés et le détail de l'audit d'accessibilité.</p>

      <h2 className="access-section">État de conformité</h2>
      <p className="access-text">Dans cette section, sera documenté le niveau de conformité du site au RGAA et les motifs de conformité partielle le cas échéant.</p>

      <h2 className="access-section">Contenus non accessibles</h2>
      <p className="access-text">Dans cette section, seront listés les contenus non accessibles et les raisons techniques ou fonctionnelles associées.</p>

      <h3 className="access-subsection">Dérogation</h3>
      <p className="access-text">Dans cette section, seront documentées les dérogations accordées, leur motif et les actions prévues.</p>

      <h2 className="access-section">Établissement de cette déclaration d'accessibilité</h2>
      <p className="access-text">Dans cette section, sera documentée la date d'établissement de la déclaration et le contexte de sa rédaction.</p>

      <h3 className="access-subsection">Technologies utilisées pour la réalisation du site web</h3>
      <p className="access-text">Dans cette section, seront listées les technologies et outils techniques employés pour construire le site.</p>

      <h3 className="access-subsection">Agents utilisateurs, technologies d'assistance et outils utilisés pour vérifier l'accessibilité</h3>
      <p className="access-text">Dans cette section, seront documentés les navigateurs, lecteurs d'écran et outils d'évaluation utilisés pour les tests.</p>

      <h3 className="access-subsection">Pages du site ayant fait l'objet de la vérification de conformité</h3>
      <p className="access-text">Dans cette section, seront listées les pages ou parcours du site qui ont été audités.</p>

      <h2 className="access-section">Retour d'information et contact</h2>
      <p className="access-text">Dans cette section, seront indiquées les modalités de contact pour signaler un problème d'accessibilité et demander une alternative.</p>

      <h2 className="access-section">Voies de recours</h2>
      <p className="access-text">Dans cette section, seront expliquées les procédures et contacts à utiliser en cas de recours liés à l'accessibilité.</p>
    </section>
  );
}