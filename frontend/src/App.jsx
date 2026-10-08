import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Boutique from './pages/Boutique'
import Creations from './pages/Creations'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boutique" element={<Boutique />} />
      <Route path="/creations" element={<Creations />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App