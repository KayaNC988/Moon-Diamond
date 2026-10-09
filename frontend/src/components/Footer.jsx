  import {Link } from 'react-router-dom'
  import './Footer.css'

  function Footer() {
    return (

  <footer className="footer">
  <div className="footer-content">

    <div className="footer-brand">
      <img
        src="/images/logo_Moon-Diamond.png"
        alt="Logo Moon Diamond"
        className="footer-logo"
      />
      <p>L'univers du Diamond Painting, créé avec passion.</p>
    </div>

    <div className="footer-links">
      <h3>Navigation</h3>
      <Link to="/">Accueil</Link>
      <Link to="/boutique">Boutique</Link>
      <Link to="/creations">Nos créations</Link>
      <Link to="/actualites">Actualités</Link>
      <Link to="/a-propos">À propos</Link>
      <Link to="/contact">Contact</Link>
    </div>

    <div className="footer-links">
      <h3>Informations</h3>
      <a href="#">Mentions légales</a>
      <a href="#">Politique de confidentialité</a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Moon Diamond — Tous droits réservés.</p>
  </div>
</footer>

    )
  }
  

  export default Footer