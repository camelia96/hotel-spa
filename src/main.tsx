import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Hotels from './pages/Hotels.tsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import HotelDetails from './pages/HotelDetails.tsx'
import '@fontsource-variable/cormorant'
import '@fontsource-variable/inter-tight'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {/* Path to Hotels list */}
      <Route path="/hotels" element={<Hotels />} />
      {/* Path to specific Hotel */}
      <Route path="/hotels/:id" element={<HotelDetails />} />

      {/* Redirect from any other URL to Hotels list */}
      <Route path="/*" element={<Navigate to="/hotels" />} />
    </Routes>
  </BrowserRouter>
)
