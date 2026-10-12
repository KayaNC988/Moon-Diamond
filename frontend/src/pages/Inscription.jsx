import Header from '../components/Header'
import Footer from '../components/Footer'
import './Inscription.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { register } from '../services/authService'

function Inscription() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

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
        setSuccess('')
        
        if (formData.password !== formData.confirmPassword) {
            setError('Les mots de passe ne correspondent pas.')
            return
        }

        try {
            const userData = {
                firstname: formData.firstname,
                lastname: formData.lastname,    
            email: formData.email,
            password: formData.password
            }
             
            await register(userData)
            setSuccess('Inscription réussie ! Vous pouvez maintenant vous connecter.')
            
        } catch (err) {
            setError(err.message || 'Erreur lors de l\'inscription.')
        }
    }

  return (
    <>
      <Header />

      <main className="inscription-page">
        <section className="inscription-content">
          <h1>Créer mon compte</h1>

          <p>
            Rejoignez l'univers Moon Diamond et créez
            votre espace personnel.
          </p>

            {error &&( <p className="inscription-error" role="alert">{error}</p>)}
            {success &&( <p className="inscription-success" role="status">{success}</p>)}


          <form onSubmit={handleSubmit}>

            <div className="inscription-form-group">
              <label htmlFor="firstname">Prénom</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Votre prénom"
                autoComplete="given-name"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inscription-form-group">
              <label htmlFor="lastname">Nom</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Votre nom"
                autoComplete="family-name"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inscription-form-group">
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

            <div className="inscription-form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Votre mot de passe"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inscription-form-group">
              <label htmlFor="confirmPassword">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirmez votre mot de passe"
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="inscription-button">
              Créer mon compte
            </button>

          </form>
            <p className="inscription-login">
              Vous avez déjà un compte ?{' '} 
              <Link to="/connexion">Se connecter</Link>.
            </p>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Inscription