import { useState } from 'react';
import motifOrange from '../assets/motiforange.png';
import groupeImg from '../assets/museuexterieur.jpg';

function AccordionItem({ title, content, isOpen, onToggle }) {
  return (
    <div className={`infos-accordion ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="infos-accordion__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className="infos-accordion__icon">{isOpen ? '▾' : '▸'}</span>
      </button>

      {isOpen && (
        <div className="infos-accordion__content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default function InfosPratiques() {
  const [openTarif, setOpenTarif] = useState(0);
  const [openFaq, setOpenFaq] = useState(2);

  const tarifs = [
    {
      title: 'Tarif 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Tarif 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const faq = [
    {
      title: 'Question 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Question 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Question 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

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
            <span>Musée / </span>
            <strong>Informations pratiques</strong>
          </div>

          <div className="infos-grid">
            <article className="infos-card infos-card--dark">
              <h2>Horaires</h2>

              <div className="infos-text-block">
                <h3>Période 1</h3>
                <p>
                  Ceci est un texte pour des horaires spécifiques avec un textecourt
                  et un textecourt et un textecourt et un textecourt.
                </p>
              </div>

              <div className="infos-text-block">
                <h3>Période 2</h3>
                <p>
                  Ceci est un texte pour des horaires spécifiques avec un textecourt
                  et un textecourt et un textecourt et un textecourt.
                </p>
              </div>
            </article>

            <article className="infos-card infos-card--soft">
              <h2>Groupes et scolaires</h2>
              <p className="infos-card__intro">
                Ceci est un texte ceci est un textececi est un textceci est un textececi
                est un textececi est un textececi est un textececi.
              </p>

              <div className="infos-card__image-wrap">
                <img src={groupeImg} alt="Accueil de groupes au musée" />
              </div>
            </article>

            <article className="infos-card infos-card--soft">
              <h2>Tarifs</h2>

              <div className="infos-accordion-list">
                {tarifs.map((item, index) => (
                  <AccordionItem
                    key={item.title}
                    title={item.title}
                    content={item.content}
                    isOpen={openTarif === index}
                    onToggle={() =>
                      setOpenTarif(openTarif === index ? null : index)
                    }
                  />
                ))}
              </div>
            </article>

            <article className="infos-card infos-card--dark">
              <h2>FAQ</h2>

              <div className="infos-accordion-list">
                {faq.map((item, index) => (
                  <AccordionItem
                    key={item.title}
                    title={item.title}
                    content={item.content}
                    isOpen={openFaq === index}
                    onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                  />
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}