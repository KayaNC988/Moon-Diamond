import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import './Boutique.css'

function Boutique() {
    const [category, setCategory] = useState('all')
    return (
        <>
<Header />

        <main className='boutique-page'>
            <section className='boutique-header'>  
            <h1>Notre boutique</h1>
            <p>Découvrez notre univers du Diamond Painting : toiles, kits et accessoires pour donner vie à toutes vos créations.</p>
             </section>

 <section className="boutique-categories">
  <button
    className={category === 'all' ? 'active' : ''}
    onClick={() => setCategory('all')}
  >
    Tous les produits
  </button>

  <button
    className={category === 'toiles' ? 'active' : ''}
    onClick={() => setCategory('toiles')}
  >
    Toiles
  </button>

  <button
    className={category === 'kits' ? 'active' : ''}
    onClick={() => setCategory('kits')}
  >
    Kits
  </button>

  <button
    className={category === 'accessoires' ? 'active' : ''}
    onClick={() => setCategory('accessoires')}
  >
    Accessoires
  </button>
</section>

<section className="boutique-content">
  {category === 'all' && (
    <>
      <h2>Tous nos produits</h2>
      <p>Notre collection Moon Diamond est actuellement en préparation.</p>
    </>
  )}

  {category === 'toiles' && (
    <>
      <h2>Nos toiles</h2>
      <p>Découvrez prochainement notre sélection de toiles Diamond Painting.</p>
    </>
  )}

  {category === 'kits' && (
    <>
      <h2>Nos kits</h2>
      <p>Nos kits complets de Diamond Painting seront bientôt disponibles.</p>
    </>
  )}

  {category === 'accessoires' && (
    <>
      <h2>Nos accessoires</h2>
      <p>
        Retrouvez prochainement notre sélection d'accessoires pour le Diamond Painting.
      </p>
    </>
  )}
</section>
        </main>

<Footer />
        </>
    )
}

export default Boutique