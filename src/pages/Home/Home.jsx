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
         
          <h1>
            <span className="home-section__headline-main">
              Your <span className="home-section__headline-accent">Success</span>, Your <span className="home-section__headline-accent">Future</span>,
            </span>
            <span className="home-section__headline-subline">
              Powered by <span className="home-section__brand-word"><span className="home-section__brand-letter--f">F</span>UO<span className="home-section__brand-letter--r">R</span><span className="home-section__brand-letter--an">AN</span></span> Technology.
            </span>
          </h1>
          <p className="home-section__intro-box">
            Your Vision, Our Tech. We collaborate with you to design and build superior software solutions that define the future.
            <br />
            Let’s join forces to create impactful digital experiences
            <br />
            where your ideas meet our innovative technology.
          </p>
         
        </div>
          <div className="home-section__globe">
          <canvas ref={canvasRef} className="home-section__canvas" width="600" height="600" />
          <div className="marker-labels">
           
            
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
