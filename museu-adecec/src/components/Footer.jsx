import adececLogo from '../assets/adececlogo.jpg';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="footer-branding">
          <div className="footer-logo-wrap">
            <img
              src={adececLogo}
              alt="ADECEC Musée"
              className="footer-logo"
            />
          </div>

          <div className="footer-branding__text">
            <p className="footer-brand" id="footer-brand">ADECEC Musée</p>
            <p id="footer-address">8 rue Philippe Pescetti, 20221 Cervione</p>
            <p id="footer-hours">Lundi au samedi, 9h–12h, 14h–18h</p>
            <p id="footer-phone">Tél. 04 95 38 12 83</p>
          </div>
        </div>

        <div className="site-footer__socials">
          <a href="https://www.instagram.com/adecec_voce_nustrale/" aria-label="Instagram">Instagram</a>
          <a href="https://www.facebook.com/vocenustrale.adecec/?locale=fr_FR" aria-label="Facebook">Facebook</a>
          <a href="https://x.com/adecec" aria-label="X">X</a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__links">
          <a href="infos-pratiques" id="footer-contact">Nous contacter</a>
          <a href="plan-site" id="footer-plan">Plan du site</a>
          <a href="accessibilite" id="footer-access">Accessibilité</a>
          <a href="https://adecec.net/adecec/cuntattu.php#legal" id="footer-legal">Mentions légales</a>
          <a href="placeholder" id="footer-credits">Crédits</a>
        </div>

        {/* <button
          type="button"
          id="dark-mode-toggle"
          aria-label="Changer de thème"
        >
          ◐
        </button> */}
      </div>
    </footer>
  );
}