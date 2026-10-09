import { useState } from "react"
import { Heart, UserRound, ShoppingBag, } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Header.css'

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
          <Link to="/creations">Nos créations</Link>
          <Link to="/actualites">Actualités</Link>
          <Link to="/a-propos">A propos</Link>
          <Link to="/contact">Contact</Link>
       
      </nav>

      <div className='header-actions'>

        <button className='icon-button'aria-label="Mes favoris">
          <Heart size={21} />
        </button>
       
        <Link 
        to="/connexion"
        className="icon-button"
        aria-label="Se connecter à mon compte"
        >
        <UserRound size={21} />
        </Link>
       
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
          <Link to="/creations" onClick={() => setMenuOpen(false)}>Nos créations</Link>
          <Link to="/actualites" onClick={() => setMenuOpen(false)}>Actualités</Link>
          <Link to="/a-propos" onClick={() => setMenuOpen(false)}>À propos</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
       
      </nav>
)}
    </header>
        </>
    )
}

export default Header