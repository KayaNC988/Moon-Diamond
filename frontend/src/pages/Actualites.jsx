import Header from '../components/Header'
import Footer from '../components/Footer'
import './Actualites.css'

function Actualites() {
    return (
        <>
        <Header />
        <main className="actualites-page">
           <section className='actualites-header'>
            <h1>Actualités</h1>
            <p>Retrouvez toutes les nouveautés de Moon Diamond:
                nouvelles collections, conseils, promotions etcoulisse de notre univers.
            </p>
           </section>

              <section className='actualites-content'>
                <h2>Nos actualités arrivent bientôt</h2>
                <p>
                    Cet espace accueillera prochainement toutes les informations et mises à jour concernant nos produits,
                     événements et offres spéciales. Restez connectés pour ne rien manquer!
                </p>
                </section>
                </main>

        <Footer />
        </>
    )
}

export default Actualites
                