/*
  Version temporaire du sélecteur de langue.
  Le brief prévoit un remplacement futur par le ToggleGroup d'animate-ui,
  mais on garde ici une version simple pour poser la structure du header.
*/
export default function ToggleGroupLangue() {
  return (
    <div className="language-switcher" aria-label="Sélecteur de langue">
      <button type="button" className="language-btn">FR</button>
      <button type="button" className="language-btn">CO</button>
      <button type="button" className="language-btn">EN</button>
    </div>
  );
}