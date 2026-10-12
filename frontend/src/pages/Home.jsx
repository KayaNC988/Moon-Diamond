import './Home.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { useAuth } from '../context/useAuth'
import { useState, useEffect } from 'react'




function Home() {

  const { isAuthenticated, user } = useAuth()
  const [showWelcome, setShowWelcome] = useState(isAuthenticated)

useEffect(() => {
  if (!isAuthenticated) return

  const timer = setTimeout(() => {
    setShowWelcome(false)
  }, 10000)

  return () => clearTimeout(timer)
}, [isAuthenticated])

  return (
    <>
    <Header />

    {isAuthenticated && user && showWelcome && (
      <div className="welcome-message" role="status">
        Bienvenue sur MoonDiamond, {user.firstname} ! 
        Vous êtes maintenant connecté.</div>
    )}


  
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
<Footer />
    
   
    </>
  )
  }
export default Home
