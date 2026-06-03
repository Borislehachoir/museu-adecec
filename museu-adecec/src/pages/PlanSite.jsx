import { useEffect, useState } from 'react';
import { TreeSelect } from 'primereact/treeselect';

const siteMapTexts = {
  fr: {
    title: 'Plan du site',
    placeholder: 'Sélectionner un élément',
    nodes: [
      {
        key: 'home',
        label: 'Accueil',
        children: [
          {
            key: 'fr',
            label: 'Version française',
          },
        ],
      },
      {
        key: 'archeo',
        label: 'Archéologie',
      },
      {
        key: 'salles',
        label: 'Les salles',
        children: [
          {
            key: 'visite',
            label: 'Visite virtuelle',
          },
        ],
      },
      {
        key: 'propos',
        label: 'À propos',
      },
      {
        key: 'infos',
        label: 'Infos pratiques',
      },
    ],
  },

  en: {
    title: 'Site map',
    placeholder: 'Select item',
    nodes: [
      {
        key: 'home',
        label: 'Home',
        children: [
          {
            key: 'fr',
            label: 'French version',
          },
        ],
      },
      {
        key: 'archeo',
        label: 'Archaeology',
      },
      {
        key: 'salles',
        label: 'Rooms',
        children: [
          {
            key: 'visite',
            label: 'Virtual tour',
          },
        ],
      },
      {
        key: 'propos',
        label: 'About',
      },
      {
        key: 'infos',
        label: 'Practical information',
      },
    ],
  },

  co: {
    title: 'Pianu di u situ',
    placeholder: 'Sceglie un elementu',
    nodes: [
      {
        key: 'home',
        label: 'Accolta',
        children: [
          {
            key: 'fr',
            label: 'Versione francese',
          },
        ],
      },
      {
        key: 'archeo',
        label: 'Archeulugia',
      },
      {
        key: 'salles',
        label: 'E sale',
        children: [
          {
            key: 'visite',
            label: 'Visita virtuale',
          },
        ],
      },
      {
        key: 'propos',
        label: 'À propositu',
      },
      {
        key: 'infos',
        label: 'Infurmazione pratiche',
      },
    ],
  },
};

export default function PlanSite() {
  const [selectedNodeKey, setSelectedNodeKey] = useState(null);
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

  const t = siteMapTexts[lang];

  return (
    <section className="basic-page sitemap-page">
      <div className="sitemap-page__inner">
        <h1>{t.title}</h1>

        <TreeSelect
          value={selectedNodeKey}
          onChange={(e) => setSelectedNodeKey(e.value)}
          options={t.nodes}
          className="site-tree-select"
          placeholder={t.placeholder}
        />
      </div>
    </section>
  );
}
