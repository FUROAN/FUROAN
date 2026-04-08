function Home() {
  return (
    <section id="home" className="page-section home-section">
      <div className="home-section__hero">
        <div className="home-section__brand">
          <div className="home-section__logo">
            <span className="home-section__dot home-section__dot--green" />
            <span className="home-section__dot home-section__dot--purple" />
            <span className="home-section__dot home-section__dot--red" />
          </div>
          <h1 className="home-section__title">
            <span className="home-section__letter home-section__letter--blue">F</span>
            <span className="home-section__letter">U</span>
            <span className="home-section__letter home-section__letter--white">O</span>
            <span className="home-section__letter home-section__letter--red">R</span>
            <span className="home-section__letter">A</span>
            <span className="home-section__letter">N</span>
          </h1>
        </div>
        <p className="home-section__subtitle">ALL software solution</p>
        <p className="home-section__tagline">F U O R A N softer</p>
      </div>
    </section>
  )
}

export default Home
