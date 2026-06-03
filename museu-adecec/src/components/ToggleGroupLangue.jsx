import { useEffect, useRef, useState } from 'react';
import { injectTexts } from '../scripts/language-switch';

import flagFr from '../assets/flag-fr.webp';
import flagCo from '../assets/flag-co.png';
import flagEn from '../assets/flag-en.png';

const LANGUAGES = [
  { code: 'fr', label: 'Français', flag: flagFr, alt: 'Drapeau français' },
  { code: 'co', label: 'Corsu', flag: flagCo, alt: 'Drapeau corse' },
  { code: 'en', label: 'English', flag: flagEn, alt: 'Drapeau britannique' },
];

export default function ToggleGroupLangue() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem('museum-lang') || 'fr'
  );

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const savedLang = localStorage.getItem('museum-lang') || 'fr';
    setSelectedLang(savedLang);
  }, []);

  const handleSelectLanguage = (lang) => {
    localStorage.setItem('museum-lang', lang);
    setSelectedLang(lang);
    injectTexts(lang);
    setIsOpen(false);
  };

  const currentLanguage =
    LANGUAGES.find((language) => language.code === selectedLang) || LANGUAGES[0];

  return (
    <div
      className="language-switcher"
      ref={wrapperRef}
    >
      <button
        type="button"
        className="language-toggle"
        aria-label="Changer de langue"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.alt}
          className="language-flag language-flag--current"
        />
        <span className="language-toggle__chevron" aria-hidden="true">
          ▾
        </span>
      </button>

      {isOpen && (
        <div className="language-menu" role="menu" aria-label="Choix de la langue">
          {LANGUAGES.map((language) => (
            <button
              key={language.code}
              type="button"
              className={`language-menu__item ${
                selectedLang === language.code ? 'is-active' : ''
              }`}
              role="menuitem"
              onClick={() => handleSelectLanguage(language.code)}
            >
              <img
                src={language.flag}
                alt={language.alt}
                className="language-flag"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}