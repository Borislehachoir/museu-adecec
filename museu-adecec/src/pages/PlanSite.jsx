/*
  Cette page est volontairement minimale.
  Elle sert de point d'ancrage de route avant intégration du vrai contenu.
*/
import { useState } from 'react';
import { TreeSelect } from 'primereact/treeselect';
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function PlanSite() {
  const [selectedNodeKey, setSelectedNodeKey] = useState(null);

  const nodes = [
    {
      key: 'home',
      label: 'Accueil',
      children: [
        {
          key: 'fr',
          label: 'Version française'
        }
      ]
    },
    {
      key: 'archeo',
      label: 'Archéologie',
    },
    {
      key: 'salles',
      label: 'Les Salles',
      children: [
        {
          key: 'visite',
          label: 'Visite virtuelle'
        }
      ]
    },
    {
      key: 'propos',
      label: 'À propos'
    },
    {
      key: 'infos',
      label: 'Infos Pratiques',
    },
  ];

  return (
    <section className="basic-page">
      <div>
        <h1> Plan du site </h1>
        <TreeSelect
          value={selectedNodeKey}
          onChange={(e) => setSelectedNodeKey(e.value)}
          options={nodes}
          className="md:w-20rem w-full"
          placeholder="Select Item"
        />
      </div>

    </section>
  );
}