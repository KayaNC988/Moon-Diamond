import './App.css'
import { Heart, UserRound, ShoppingBag } from 'lucide-react'

function App() {
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

    </main>
    </>
  )
  }
export default App
