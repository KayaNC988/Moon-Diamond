import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Boutique from './pages/Boutique'
import Creations from './pages/Creations'
import Actualites from './pages/Actualites'
import Apropos from './pages/Apropos'
import Contact from './pages/Contact'
import Connexion from './pages/Connexion'
import Inscription from './pages/Inscription'
import MonCompte from './pages/MonCompte'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boutique" element={<Boutique />} />
      <Route path="/creations" element={<Creations />} />
      <Route path="/actualites" element={<Actualites />} />
      <Route path="/a-propos" element={<Apropos />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/mon-compte" element={<MonCompte />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App