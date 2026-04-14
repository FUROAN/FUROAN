import './Navibar.css'

function Navibar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand">
          <div className="navbar__logo">
            <span className="navbar__dot navbar__dot--green" />
            <span className="navbar__dot navbar__dot--purple" />
            <span className="navbar__dot navbar__dot--red" />
          </div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-letter navbar__brand-letter--blue">F</span>
            U
            <span className="navbar__brand-letter navbar__brand-letter--white">O</span>
            <span className="navbar__brand-letter navbar__brand-letter--red">R</span>
            AN
          </div>
        </div>
        <nav className="navbar__nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#our-services">Our Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="navbar__cta" href="#contact">Let&apos;s Talk</a>
      </div>
    </header>
  )
}

export default Navibar
