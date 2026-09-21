import './App.css'

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
  
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Nos toiles</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Contact</a></li>
       
      </nav>
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
