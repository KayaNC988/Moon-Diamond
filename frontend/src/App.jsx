import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Boutique from './pages/Boutique'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boutique" element={<Boutique />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App