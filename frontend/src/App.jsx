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
import Favoris from './pages/Favoris'
import Panier from './pages/Panier'
import Admin from "./pages/admin/Admin"
import AdminRoute from "./components/AdminRoute"
import AdminProduits from "./pages/admin/AdminProduits"


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
      <Route path="/favoris" element={<Favoris />} />
      <Route path="/panier" element={<Panier />} />
      <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
      <Route path="/admin/produits" element={<AdminRoute><AdminProduits /></AdminRoute>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App