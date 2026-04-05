import './Navibar.css'

function Navibar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">FUROAN</div>
      <nav className="navbar__nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#list-about">List</a>
      </nav>
    </header>
  )
}

export default Navibar
