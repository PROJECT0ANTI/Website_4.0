import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Capabilities from './pages/Capabilities.jsx'
import Story from './pages/Story.jsx'
import Makers from './pages/Makers.jsx'
import Careers from './pages/Careers.jsx'
import Collaborate from './pages/Collaborate.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="grain min-h-screen bg-[#0A0A0A] text-[#EDEDED]">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/story" element={<Story />} />
        <Route path="/makers" element={<Makers />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/collaborate" element={<Collaborate />} />
      </Routes>
      <Footer />
    </div>
  )
}
