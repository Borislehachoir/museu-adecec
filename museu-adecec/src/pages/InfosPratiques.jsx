
import { useEffect, useState } from 'react';
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

const infosTexts = {
  fr: {
    breadcrumbParent: 'Musée / ',
    breadcrumbCurrent: 'Informations pratiques',
    horairesTitle: 'Horaires',
    period1Title: 'Période 1',
    period1Text:
      'Ceci est un texte pour des horaires spécifiques avec un textecourt et un textecourt et un textecourt et un textecourt.',
    period2Title: 'Période 2',
    period2Text:
      'Ceci est un texte pour des horaires spécifiques avec un textecourt et un textecourt et un textecourt et un textecourt.',

    groupsTitle: 'Groupes et scolaires',
    groupsIntro:
      'Ceci est un texte ceci est un textececi est un textceci est un textececi est un textececi est un textececi est un textececi.',

    tarifsTitle: 'Tarifs',
    faqTitle: 'FAQ',

    tarifs: [
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
    ],

    faq: [
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
    ],
  },

  en: {
    breadcrumbParent: 'Museum / ',
    breadcrumbCurrent: 'Practical information',
    horairesTitle: 'Opening hours',
    period1Title: 'Period 1',
    period1Text:
      'This is a text for specific opening hours with a short text and a short text and a short text and a short text.',
    period2Title: 'Period 2',
    period2Text:
      'This is a text for specific opening hours with a short text and a short text and a short text and a short text.',

    groupsTitle: 'Groups and schools',
    groupsIntro:
      'This is a text this is a textthis is a textthis is a textthis is a textthis is a textthis is a textthis.',

    tarifsTitle: 'Prices',
    faqTitle: 'FAQ',

    tarifs: [
      {
        title: 'Price 1',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Price 2',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],

    faq: [
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
    ],
  },

  co: {
    breadcrumbParent: 'Museu / ',
    breadcrumbCurrent: 'Infurmazione pratiche',
    horairesTitle: 'Urarii',
    period1Title: 'Periodu 1',
    period1Text:
      'Quessu hè un testu per urarii specifichi cù un testu cortu è un testu cortu è un testu cortu è un testu cortu.',
    period2Title: 'Periodu 2',
    period2Text:
      'Quessu hè un testu per urarii specifichi cù un testu cortu è un testu cortu è un testu cortu è un testu cortu.',

    groupsTitle: 'Gruppi è scole',
    groupsIntro:
      'Quessu hè un testu quessu hè un testuquessu hè un testuquessu hè un testuquessu hè un testuquessu hè un testuquessu hè un testuquì.',

    tarifsTitle: 'Tariffe',
    faqTitle: 'FAQ',

    tarifs: [
      {
        title: 'Tariffa 1',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Tariffa 2',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],

    faq: [
      {
        title: 'Dumanda 1',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Dumanda 2',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Dumanda 3',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
};

export default function InfosPratiques() {
  const [openTarif, setOpenTarif] = useState(0);
  const [openFaq, setOpenFaq] = useState(2);
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    const select = document.getElementById('language-select');
    if (!select) return;

    const updateLang = () => {
      setLang(select.value || 'fr');
    };

    updateLang();
    select.addEventListener('change', updateLang);

    return () => {
      select.removeEventListener('change', updateLang);
    };
  }, []);

  const t = infosTexts[lang];

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
            <span>{t.breadcrumbParent}</span>
            <strong>{t.breadcrumbCurrent}</strong>
          </div>

          <div className="infos-grid">
            <article className="infos-card infos-card--dark">
              <h2>{t.horairesTitle}</h2>

              <div className="infos-text-block">
                <h3>{t.period1Title}</h3>
                <p>{t.period1Text}</p>
              </div>

              <div className="infos-text-block">
                <h3>{t.period2Title}</h3>
                <p>{t.period2Text}</p>
              </div>
            </article>

            <article className="infos-card infos-card--soft">
              <h2>{t.groupsTitle}</h2>
              <p className="infos-card__intro">{t.groupsIntro}</p>

              <div className="infos-card__image-wrap">
                <img src={groupeImg} alt="Accueil de groupes au musée" />
              </div>
            </article>

            <article className="infos-card infos-card--soft">
              <h2>{t.tarifsTitle}</h2>

              <div className="infos-accordion-list">
                {t.tarifs.map((item, index) => (
                  <AccordionItem
                    key={item.title}
                    title={item.title}
                    content={item.content}
                    isOpen={openTarif === index}
                    onToggle={() => setOpenTarif(openTarif === index ? null : index)}
                  />
                ))}
              </div>
            </article>

            <article className="infos-card infos-card--dark">
              <h2>{t.faqTitle}</h2>

              <div className="infos-accordion-list">
                {t.faq.map((item, index) => (
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