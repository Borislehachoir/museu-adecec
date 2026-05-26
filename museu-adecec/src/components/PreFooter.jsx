/*
  Le pre-footer rassemble les informations pratiques immédiatement utiles
  avant le footer final : carte, horaires et rappel de visite.
*/
export default function PreFooter() {
  return (
    <section className="pre-footer" aria-labelledby="pre-footer-title">
      <div className="pre-footer__grid">
        <div className="pre-footer__column">
          <h2 id="pre-footer-title">Préparer votre visite</h2>

          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.1557262392939!2d9.490844277628387!3d42.331649508021854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d74323023b6a83%3A0xf8b953f76c42151c!2sAdecec%20-%20Radio%20Voce%20Nustrale%20-%20Mus%C3%A9e%20Ethnographique!5e1!3m2!1sfr!2sfr!4v1779807875253!5m2!1sfr!2sfr"
              width="100%"
              height="260"
              style={{ border: '10px solid transparent' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du musée ADECEC sur Google Maps"
            />
          </div>

          <p>Lundi au samedi, 9h–12h et 14h–18h.</p>
        </div>

        <div className="pre-footer__column">
          <h2>Informations pratiques</h2>
          <p>Adresse : 8 rue Philippe Pescetti, 20221 Cervione.</p>
          <p>Téléphone : 04 95 38 12 83.</p>
          <p>Ajoute ici ensuite les tarifs, l’accessibilité et les conditions de visite.</p>
        </div>
      </div>
    </section>
  );
}