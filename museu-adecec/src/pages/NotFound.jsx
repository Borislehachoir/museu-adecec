import { Link } from 'react-router-dom';

/*
  Une page 404 simple évite d'afficher un écran vide si une route est incorrecte.
*/
export default function NotFound() {
  return (
    <section className="basic-page">
      <h1>Page introuvable</h1>
      <Link to="/" className="btn">
        Retour à l’accueil
      </Link>
    </section>
  );
}