/*
  Version temporaire du sélecteur de langue.
  Le brief prévoit un remplacement futur par le ToggleGroup d'animate-ui,
  mais on garde ici une version simple pour poser la structure du header.
*/
export default function ToggleGroupLangue() {
  return (
    <div className="language-switcher" aria-label="Sélecteur de langue">
      <label> PLACEHOLDER</label>
      <select>
        <option className="language-btn" value="fr">
          🇫🇷
        </option>

        <option className="language-btn" value="co">
          🇨o
        </option>


        <option className="language-btn" value="en">
          🇬🇧
        </option>
      </select>
    </div>
  );
}