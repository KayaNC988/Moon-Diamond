import Header from '../components/Header'
import Footer from '../components/Footer'
import './Connexion.css'

function Connexion() {
  return (
    <>
      <Header />

      <main className="connexion-page">
        <section className="connexion-content">
          <h1>Connexion</h1>
          <p>
            Connectez-vous à votre compte Moon Diamond.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>

            <div className="connexion-form-group">
              <label htmlFor="email">Adresse e-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre adresse e-mail"
                autoComplete="email"
                required
              />
            </div>

            <div className="connexion-form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Votre mot de passe"
                autoComplete="current-password"
                required
              />
            </div>

            <button type="submit" className="connexion-button">
              Se connecter
            </button>

          </form>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Connexion