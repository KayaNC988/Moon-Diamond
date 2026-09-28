import { useState } from 'react'
import './App.css'
import { Heart, UserRound, ShoppingBag } from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    <header className='header'>
      <div className='header-logo'>
<img
      src="/images/logo_Moon-Diamond.png"
      alt="Logo Moon Diamond"
      className="brand-logo"
    />
      </div>

      <nav className='navbar'>
  
          <a href="#">Accueil</a>
          <a href="#">Boutique</a>
          <a href="#">Nos créations</a>
          <a href="#">A propos</a>
          <a href="#">Contact</a>
       
      </nav>

      <div className='header-actions'>

        <button className='icon-button'aria-label="Mes favoris">
          <Heart size={21} />
        </button>
        <button className='icon-button' aria-label="Mon compte">
          <UserRound size={21} />
        </button>
         <button className='icon-button cart-button' aria-label='Mon panier'>
          <ShoppingBag size={21} />
          <span className='cart-count'>0</span>
         </button>
         
      </div>
      <button
  className="menu-toggle"
  aria-label="Ouvrir le menu"
  onClick={() => setMenuOpen(!menuOpen)}>
  ☰
</button>
{menuOpen && (
   <nav className='mobile-menu'>
  
          <a href="#">Accueil</a>
          <a href="#">Boutique</a>
          <a href="#">Nos créations</a>
          <a href="#">A propos</a>
          <a href="#">Contact</a>
       
      </nav>
)}
    </header>
    <main>
      <section className='hero'>
        <div className='hero-content'>
          <h1>Entrez dans l'univers du Diamond Painting</h1>

          <p>Des créations étincelantes pour donner vie à chaque diamant.</p>

          <a href="#" className='hero-button'>Découvrir nos toiles</a>
        </div>

        <div className='hero-image'>
          <img src="/images/hero-diamond-painting.jpg" 
          alt="Création de diamond painting" />
        </div>
      </section>

      <section className='products-section'>
        <h2>Découvrez nos toiles</h2>

        <p>Chaque toile a son histoire, chaque diamant lui donne vie.</p>

        <div className='products-grid'>
          <article className='product-card'>
            <div className='product-image-placeholder'>
              <span>Photo à venir</span>
            </div>

            <div className='product-info'>
              <h3>Prochainement</h3>
              <p className='product-size'>Nouvelle collection en préparation</p>
             

              <button className='product-button' disabled>Bientôt disponible</button>
            </div>
          </article>

           <article className='product-card'>
            <div className='product-image-placeholder'>
              <span>Photo à venir</span>
            </div>

            <div className='product-info'>
              <h3>Prochainement</h3>
              <p className='product-size'>Nouvelle collection en préparation</p>
             

              <button className='product-button' disabled>Bientôt disponible</button>
            </div>
          </article>

           <article className='product-card'>
            <div className='product-image-placeholder'>
              <span>Photo à venir</span>
            </div>

            <div className='product-info'>
              <h3>Prochainement</h3>
              <p className='product-size'>Nouvelle collection en préparation</p>
              

              <button className='product-button' disabled>Bientôt disponible</button>
            </div>
          </article>
     
      </div>
      </section>

    </main>
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
      <a href="#">Accueil</a>
      <a href="#">Boutique</a>
      <a href="#">Nos créations</a>
      <a href="#">À propos</a>
      <a href="#">Contact</a>
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
    
   
    </>
  )
  }
export default App
