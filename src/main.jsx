import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import App from './pages/App.jsx'
import Operaciones from './pages/Operaciones.jsx'
import AcercaDe from './pages/AcercaDe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Operaciones />} />
          <Route path="acerca-de" element={<AcercaDe />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
