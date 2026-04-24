import './App.css'
import Navibar from './components/Navibar/Navibar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'

import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="app">
      <Navibar />
      <main className="app__content">
        <Home />
        
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
