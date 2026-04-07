import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__dot footer__dot--green" />
            <span className="footer__dot footer__dot--blue" />
            <span className="footer__dot footer__dot--red" />
          </div>
          <p className="footer__brand-text">
            <span className="footer__brand-letter footer__brand-letter--blue">F</span>
            U
            <span className="footer__brand-letter footer__brand-letter--white">O</span>
            <span className="footer__brand-letter footer__brand-letter--red">R</span>
            AN
          </p>
          <p className="footer__brand-subtitle">Designing bold, colorful web experiences.</p>
        </div>

        <div className="footer__content">
          <div className="footer__links">
            <div className="footer__column">
              <p className="footer__column-title">Company</p>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#careers">Careers</a>
              <a href="#leadership">Our Leadership Team</a>
            </div>

            <div className="footer__column">
              <p className="footer__column-title">Updates</p>
              <a href="#case-studies">Case studies</a>
              <a href="#news">News</a>
              <a href="#blog">Blog</a>
              <a href="#publications">Publications</a>
              <a href="#webinars">Webinars</a>
              <a href="#events">Events</a>
            </div>

            <div className="footer__column">
              <p className="footer__column-title">Connect</p>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>

          <div className="footer__column footer__column--compliance">
            <p className="footer__column-title">Compliance</p>
            <a href="#transparency">The Transparency Act</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
