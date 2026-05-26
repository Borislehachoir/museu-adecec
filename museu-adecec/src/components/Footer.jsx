/*
  Le footer regroupe les informations institutionnelles et les liens secondaires.
  Le bouton dark mode reste volontairement un placeholder tant que la logique
  de changement de thème n'a pas encore été définie. Il est en commentaires pour l'instant, mais si vous souhaitez
  faire un dark mode il est déjà là.
*/
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <p className="footer-brand">ADECEC Musée</p>
          <p>8 rue Philippe Pescetti, 20221 Cervione</p>
          <p>Lundi au samedi, 9h–12h, 14h–18h</p>
          <p>Tél. 04 95 38 12 83</p>
        </div>

        <div className="site-footer__socials">
          <a href="https://www.instagram.com/adecec_voce_nustrale/" aria-label="Instagram">Instagram</a>
          <a href="https://www.facebook.com/vocenustrale.adecec/?locale=fr_FR" aria-label="Facebook">Facebook</a>
          <a href="https://x.com/adecec" aria-label="X">X</a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__links">
          <a href="infos-pratiques">Nous contacter</a>
          <a href="plan-site">Plan du site</a>
          <a href="accessibilite">Accessibilité</a>
          <a href="https://adecec.net/adecec/cuntattu.php#legal"> Mentions légales</a>
          <a href="placeholder">Crédits</a>
        </div>

        {/* <button
          type="button"
          id="dark-mode-toggle"
          aria-label="Changer de thème"
        >
          ◐
        </button>} */}
      </div>
    </footer>
  );
}