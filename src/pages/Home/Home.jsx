import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

function Home() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0.2, 0.4, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.78, -122.44], size: 0.03, id: 'sf' },
        { location: [40.71, -74.01], size: 0.03, id: 'iad' },
        { location: [59.65, 10.77], size: 0.03, id: 'arn' },
        { location: [-23.43, -46.47], size: 0.03, id: 'gru' },
      ],
      arcs: [
        { from: [37.78, -122.44], to: [40.71, -74.01] },
        { from: [40.71, -74.01], to: [59.65, 10.77] },
        { from: [59.65, 10.77], to: [-23.43, -46.47] },
        { from: [-23.43, -46.47], to: [37.78, -122.44] },
      ],
      arcColor: [0.2, 0.45, 1],
      arcWidth: 0.6,
      arcHeight: 0.35,
    })

    let phi = 0
    let frame = 0

    function animate() {
      phi += 0.005
      globe.update({ phi })
      frame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(frame)
      globe.destroy()
    }
  }, [])

  return (
    <section id="home" className="page-section home-section">
      <div className="home-section__hero">
        <div className="home-section__content home-section__copy">
          <p className="home-section__eyebrow">FUROAN — full screen home section</p>
          <h1>Crafting modern web experiences for ambitious businesses.</h1>
          <p>
            We build stunning React websites, polished UI/UX systems, and memorable digital portfolios
            that help your brand stand out and convert visitors into customers.
          </p>
          <div className="home-section__actions">
            <a className="button" href="#about">Explore Our Work</a>
            <a className="button button--secondary" href="#contact">Contact Us</a>
            <a className="button" href="#our-services">View Services</a>
          </div>
        </div>
          <div className="home-section__globe">
          <canvas ref={canvasRef} className="home-section__canvas" width="600" height="600" />
          <div className="marker-labels">
            <div className="marker-label" style={{ positionAnchor: '--cobe-sf', opacity: 'var(--cobe-visible-sf, 0)' }}>
              SFO
            </div>
            <div className="marker-label" style={{ positionAnchor: '--cobe-iad', opacity: 'var(--cobe-visible-iad, 0)' }}>
              IAD
            </div>
            <div className="marker-label" style={{ positionAnchor: '--cobe-arn', opacity: 'var(--cobe-visible-arn, 0)' }}>
              ARN
            </div>
            <div className="marker-label" style={{ positionAnchor: '--cobe-gru', opacity: 'var(--cobe-visible-gru, 0)' }}>
              GRU
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
