import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './MonCompte.css'

function MonCompte() {
  const { user, isAuthenticated, signOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut()
    navigate('/')
  }

  return (
    <>
      <Header />

      <main className="compte-page">
        {isAuthenticated && user ? (
          <section className="compte-content">

            <h1>Mon espace personnel</h1>

            <p className="compte-welcome">
              Bienvenue dans votre espace Moon Diamond,
              {' '}{user.firstname} ! 💎
            </p>

            <div className="compte-informations">
              <h2>Mes informations</h2>

              <p>
                <strong>Prénom :</strong> {user.firstname}
              </p>

              <p>
                <strong>Nom :</strong> {user.lastname}
              </p>

              <p>
                <strong>Adresse e-mail :</strong> {user.email}
              </p>
            </div>

            <button
              type="button"
              className="compte-logout"
              onClick={handleLogout}
            >
              Se déconnecter
            </button>

          </section>
        ) : (
          <section className="compte-content">
            <h1>Mon espace personnel</h1>

            <p>
              Vous devez être connecté pour accéder à votre compte.
            </p>

            <Link to="/connexion" className="compte-login">
              Se connecter
            </Link>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}

export default MonCompte