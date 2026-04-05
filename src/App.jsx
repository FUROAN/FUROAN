import './App.css'
import Navibar from './components/Navibar/Navibar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import ListAbout from './pages/ListAbout.jsx'

function App() {
  return (
    <div className="app">
      <Navibar />
      <main className="app__content">
        <Home />
        <About />
        <ListAbout />
      </main>
      <Footer />
    </div>
  )
}

export default App
