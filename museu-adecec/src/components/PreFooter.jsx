/*
  Le pre-footer rassemble les informations pratiques immédiatement utiles
  avant le footer final : carte, horaires et rappel de visite.
*/
export default function PreFooter() {
  return (
    <section className="pre-footer">
      <div className="pre-footer__grid">
        <div className="ligne" />

        <div className="pre-footer__content">
          <div className="pre-footer__column">
            <h3 id="pf-title">Préparer votre visite</h3>
            <div className="map-wrapper">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=9.489655494689941%2C42.33062521699003%2C9.492166042327883%2C42.332084599761224&amp;layer=mapnik&amp;marker=42.331354912608255%2C9.490910768508911"
                width="100%"
                height="260"
                style={{ border: '10px solid transparent' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du musée ADECEC à Cervione, sur OpenStreetMap"
              />
            </div>

            <p id="pf-hours">Lundi au samedi, 9h–12h et 14h–18h.</p>
          </div>

          <div className="ligne-2" />

          <div className="pre-footer__column">
            <h3 id="pf-info">Informations pratiques</h3>
            <p id="pf-text">Ajoute ici ensuite les tarifs, l'accessibilité et les conditions de visite.</p>
          </div>
        </div>
      </div>
    </section>
  );
}