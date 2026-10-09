import Header from "../components/Header";
import Footer from "../components/Footer";
import './Apropos.css'

function Apropos() {
    return (
        <>
        <Header />
        <main className="apropos-page">
           <section className='apropos-header'>
            <h1>À propos de Moon Diamond</h1>
            <p>Découvrez l'histoire et la passion derrière notre marque de Diamond Painting.</p>
           </section>
        </main>
        <Footer />
        </>
    )
}

export default Apropos