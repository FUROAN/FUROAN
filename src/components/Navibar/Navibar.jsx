import './Navibar.css'

function Navibar({ onOpenChat }) {
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
          <div className="navbar__dropdown">
            <a href="#our-services" className="navbar__dropdown-toggle">
              Our Services <span className="navbar__dropdown-chevron">▾</span>
            </a>
            <div className="navbar__dropdown-menu" role="menu" aria-label="Our service links">
              <a href="#our-services" className="navbar__dropdown-link" role="menuitem">
                <span className="navbar__dropdown-icon">💻</span>
                Web Design
              </a>
              <a href="#our-services" className="navbar__dropdown-link" role="menuitem">
                <span className="navbar__dropdown-icon">📱</span>
                Mobile App
              </a>
              <a href="#our-services" className="navbar__dropdown-link" role="menuitem">
                <span className="navbar__dropdown-icon">🛒</span>
                E-Commerce
              </a>
              <a href="#our-services" className="navbar__dropdown-link" role="menuitem">
                <span className="navbar__dropdown-icon">📦</span>
                Inventory Management
              </a>
              <a href="#our-services" className="navbar__dropdown-link" role="menuitem">
                <span className="navbar__dropdown-icon">💳</span>
                POS System
              </a>
              <a href="#our-services" className="navbar__dropdown-link" role="menuitem">
                <span className="navbar__dropdown-icon">🎥</span>
                AI Video
              </a>
              <a href="#our-services" className="navbar__dropdown-link" role="menuitem">
                <span className="navbar__dropdown-icon">🔍</span>
                SEO & AEO
              </a>
              <a href="#our-services" className="navbar__dropdown-link" role="menuitem">
                <span className="navbar__dropdown-icon">📣</span>
                Social Media Marketing & Video
              </a>
              <a href="#our-services" className="navbar__dropdown-link" role="menuitem">
                <span className="navbar__dropdown-icon">🤖</span>
                Chat Bot
              </a>
            </div>
          </div>
          <a href="#our-project">Our Project</a>
          <a href="#about-us">About Us</a>
        </nav>
        <button className="navbar__cta" type="button" onClick={onOpenChat}>
          Let&apos;s Talk
        </button>
      </div>
    </header>
  )
}

export default Navibar
