import { useState } from "react"
import { Heart, UserRound, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return(
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
  
          <Link to="/">Accueil</Link>
          <Link to="/boutique">Boutique</Link>
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

          <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
          <Link to="/boutique" onClick={() => setMenuOpen(false)}>Boutique</Link>
          <a href="#">Nos créations</a>
          <a href="#">A propos</a>
          <a href="#">Contact</a>
       
      </nav>
)}
    </header>
        </>
    )
}

export default Header