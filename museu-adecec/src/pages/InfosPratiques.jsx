import { useEffect, useState } from 'react';
import initLanguageSwitch, { injectTexts } from '../scripts/language-switch';
import motifOrange from '../assets/motiforange.webp';
import groupeImg from '../assets/museu-zitelli.webp';

export default function InfosPratiques() {
  const [openTarif, setOpenTarif] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    initLanguageSwitch();

    const currentLang = localStorage.getItem('museum-lang') || 'fr';

    const frame = requestAnimationFrame(() => {
      injectTexts(currentLang);
    });

    const select = document.getElementById('language-select');
    if (!select) {
      return () => cancelAnimationFrame(frame);
    }

    const handleChange = () => {
      const nextLang =
        localStorage.getItem('museum-lang') || select.value || 'fr';

      requestAnimationFrame(() => {
        injectTexts(nextLang);
      });
    };

    select.addEventListener('change', handleChange);

    return () => {
      cancelAnimationFrame(frame);
      select.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <section className="infos-page">
      <div className="infos-page__inner">
        <aside className="infos-motif" aria-hidden="true">
          <div
            className="infos-motif__pattern"
            style={{ backgroundImage: `url(${motifOrange})` }}
          />
        </aside>

        <div className="infos-content">
          <div className="infos-breadcrumb">
            <span id="infos-breadcrumb-parent">Musée</span> /{' '}
            <strong id="infos-breadcrumb-current">Informations pratiques</strong>
          </div>

          <div className="infos-grid">
            <article className="infos-card infos-card--dark">
              <h2 id="infos-horaires-title">Horaires</h2>

              <div className="infos-text-block">
                <h3 id="infos-period1-title">Période 1</h3>
                <p id="infos-period1-text">
                  Ceci est un texte pour des horaires spécifiques avec un texte
                  court et un texte court et un texte court et un texte court.
                </p>
              </div>

              <div className="infos-text-block">
                <h3 id="infos-period2-title">Période 2</h3>
                <p id="infos-period2-text">
                  Ceci est un texte pour des horaires spécifiques avec un texte
                  court et un texte court et un texte court et un texte court.
                </p>
              </div>
            </article>

            <article className="infos-card infos-card--soft">
              <h2 id="infos-groups-title">Groupes et scolaires</h2>

              <p className="infos-card__intro" id="infos-groups-intro">
                Ceci est un texte ceci est un texte ceci est un texte ceci est
                un texte ceci est un texte ceci est un texte ceci est un texte.
              </p>

              <div className="infos-card__image-wrap">
                <img src={groupeImg} alt="Accueil de groupes au musée" />
              </div>
            </article>

            <article className="infos-card infos-card--soft">
              <h2 id="infos-tarifs-title">Tarifs</h2>

              <div className="infos-accordion-list">
                <div
                  className={`infos-accordion ${openTarif === 0 ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="infos-accordion__trigger"
                    onClick={() => setOpenTarif(openTarif === 0 ? null : 0)}
                    aria-expanded={openTarif === 0}
                    aria-controls="infos-tarif-panel-1"
                  >
                    <span id="infos-tarif-1-title">Visite libre</span>
                    <span className="infos-accordion__icon">
                      {openTarif === 0 ? '−' : '+'}
                    </span>
                  </button>

                  <div
                    id="infos-tarif-panel-1"
                    className="infos-accordion__content"
                    hidden={openTarif !== 0}
                  >
                    <p id="infos-tarif-1-content">
                      Cochon d'inde.
                    </p>
                  </div>
                </div>

                <div
                  className={`infos-accordion ${openTarif === 1 ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="infos-accordion__trigger"
                    onClick={() => setOpenTarif(openTarif === 1 ? null : 1)}
                    aria-expanded={openTarif === 1}
                    aria-controls="infos-tarif-panel-2"
                  >
                    <span id="infos-tarif-2-title">
                      Visite guidée (1h30), minimum 10 personnes
                    </span>
                    <span className="infos-accordion__icon">
                      {openTarif === 1 ? '−' : '+'}
                    </span>
                  </button>

                  <div
                    id="infos-tarif-panel-2"
                    className="infos-accordion__content"
                    hidden={openTarif !== 1}
                  >
                    <p id="infos-tarif-2-content">
                     Hérisson.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="infos-card infos-card--dark">
              <h2 id="infos-faq-title">FAQ</h2>

              <div className="infos-accordion-list">
                <div
                  className={`infos-accordion ${openFaq === 0 ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="infos-accordion__trigger"
                    onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                    aria-expanded={openFaq === 0}
                    aria-controls="infos-faq-panel-1"
                  >
                    <span id="infos-faq-1-title">Question 1</span>
                    <span className="infos-accordion__icon">
                      {openFaq === 0 ? '−' : '+'}
                    </span>
                  </button>

                  <div
                    id="infos-faq-panel-1"
                    className="infos-accordion__content"
                    hidden={openFaq !== 0}
                  >
                    <p id="infos-faq-1-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>

                <div
                  className={`infos-accordion ${openFaq === 1 ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="infos-accordion__trigger"
                    onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                    aria-expanded={openFaq === 1}
                    aria-controls="infos-faq-panel-2"
                  >
                    <span id="infos-faq-2-title">Question 2</span>
                    <span className="infos-accordion__icon">
                      {openFaq === 1 ? '−' : '+'}
                    </span>
                  </button>

                  <div
                    id="infos-faq-panel-2"
                    className="infos-accordion__content"
                    hidden={openFaq !== 1}
                  >
                    <p id="infos-faq-2-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>

                <div
                  className={`infos-accordion ${openFaq === 2 ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="infos-accordion__trigger"
                    onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                    aria-expanded={openFaq === 2}
                    aria-controls="infos-faq-panel-3"
                  >
                    <span id="infos-faq-3-title">Question 3</span>
                    <span className="infos-accordion__icon">
                      {openFaq === 2 ? '−' : '+'}
                    </span>
                  </button>

                  <div
                    id="infos-faq-panel-3"
                    className="infos-accordion__content"
                    hidden={openFaq !== 2}
                  >
                    <p id="infos-faq-3-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}