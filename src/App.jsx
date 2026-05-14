import { useState } from 'react'
import './App.css'
import Navibar from './components/Navibar/Navibar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact.jsx'
import WhatsappFloat from './components/WhatsappFloat/WhatsappFloat.jsx'

function App() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="app">
      <Navibar onOpenChat={() => setChatOpen(true)} />
      <main className="app__content">
        <Home />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat open={chatOpen} setOpen={setChatOpen} />
    </div>
  )
}

export default App
