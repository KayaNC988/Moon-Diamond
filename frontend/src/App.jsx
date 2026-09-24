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
              <h3>Nom de la toile</h3>
              <p className='product-size'>40 x 50 cm</p>
              <p className='product-price'>49,90 €</p>

              <button className='product-button'>Voir la toile</button>
            </div>
          </article>

           <article className='product-card'>
            <div className='product-image-placeholder'>
              <span>Photo à venir</span>
            </div>

            <div className='product-info'>
              <h3>Nom de la toile</h3>
              <p className='product-size'>50 x 70 cm</p>
              <p className='product-price'>59,90 €</p>

              <button className='product-button'>Voir la toile</button>
            </div>
          </article>

           <article className='product-card'>
            <div className='product-image-placeholder'>
              <span>Photo à venir</span>
            </div>

            <div className='product-info'>
              <h3>Nom de la toile</h3>
              <p className='product-size'>60 x 80 cm</p>
              <p className='product-price'>69,90 €</p>

              <button className='product-button'>Voir la toile</button>
            </div>
          </article>
     
      </div>
      </section>

    </main>
    </>
  )
  }
export default App
