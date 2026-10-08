import Header from "../components/Header";
import Footer from "../components/Footer";
import './Creations.css'

function Creations() {
  return (
    <>
      <Header />

      <main className="creations-page">
        <section className="creations-header">
          <h1>Nos créations</h1>
          <p>Découvrez prochainement nos créations de Diamond Painting uniques et inspirantes.
            Une galerie pour partager notre passion et vous inspirer.
          </p>
          </section>

          <section className="creations-gallery">
            <h2>Notre galerie se prépare ...</h2>
            <p>
                De belles réalisations en Diamond Painting 
                viendront bientôt illuminer cet espace.
            </p>
          </section>
      </main>
      <Footer />
      </>
  );
}

export default Creations;