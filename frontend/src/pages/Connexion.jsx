import Header from '../components/Header'
import Footer from '../components/Footer'
import './Connexion.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../services/authService'
import { useAuth } from '../context/useAuth'

function Connexion() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await login(formData)
      signIn(response.user, response.token)
      // Redirection vers la page d'accueil après une connexion réussie
      navigate('/')
    
    } catch (err) {
      setError(err.message || 'Erreur lors de la connexion.')
    }
  }
   
  const navigate = useNavigate()
  const { signIn } = useAuth()
  return (
    <>
      <Header />

      <main className="connexion-page">
        <section className="connexion-content">
          <h1>Connexion</h1>
          <p>
            Connectez-vous à votre compte Moon Diamond.
          </p>

          {error && <p className="connexion-error" role="alert">{error}</p>}

          <form onSubmit={handleSubmit}>

            <div className="connexion-form-group">
              <label htmlFor="email">Adresse e-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre adresse e-mail"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="connexion-button">
              Se connecter
            </button>

          </form>
          <p className="connexion-register">
            Vous n'avez pas de compte ?{' '} 
            <Link to="/inscription">Créer un compte</Link>.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Connexion