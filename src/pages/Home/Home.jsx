import { useEffect, useRef, useState } from 'react'
import createGlobe from 'cobe'
import AboutUs from './AboutUs'
import backgroundImage from '../../assets/1a3593f6-2f39-460f-942b-57553984fb19.png'

function Home() {
  const canvasRef = useRef(null)
  const servicesSectionRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [servicesInView, setServicesInView] = useState(false)

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

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsLoaded(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const node = servicesSectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setServicesInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="home" className={`page-section home-section${isLoaded ? ' is-loaded' : ''}`}>
      <div className="home-section__video-background">
        <img
          className="home-section__video"
          src={backgroundImage}
          alt="Background"
        />
      </div>
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
            <span className="home-section__intro-line">
              Your Vision, Our Tech. We collaborate with you to design and build superior software solutions that define the future.
            </span>
            <span className="home-section__intro-line">
              Let’s join forces to create impactful digital experiences
            </span>
            <span className="home-section__intro-line">
              where your ideas meet our innovative technology.
            </span>
          </p>
         
        </div>
          <div className="home-section__globe">
          <canvas ref={canvasRef} className="home-section__canvas" width="600" height="600" />
          <div className="marker-labels">
           
            
          
          </div>
        </div>
      </div>
    </section>
    <section
      id="our-services"
      ref={servicesSectionRef}
      className={`page-section our-services-section${servicesInView ? ' is-inview' : ''}`}
    >
      <div className="our-services-section__content">
        <h2 className="our-services-section__title">Our Services</h2>
        <div className="our-services-section__card-container">
          <div className="our-services-section__card-box" onClick={() => window.location.href = '#services/web-application-development'}>
            <div className="our-services-section__card-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7V12C2 16.5 4.23 20.68 7.62 23.15L12 24L16.38 23.15C19.77 20.68 22 16.5 22 12V7L12 2Z" fill="currentColor"/>
                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="our-services-section__card-title">Web Application Development</div>
            <div className="our-services-section__card-description">
              We build custom web applications tailored to your business needs, using modern technologies and best practices.
            </div>
          </div>
          <div className="our-services-section__card-box" onClick={() => window.location.href = '#services/mobile-app-development'}>
            <div className="our-services-section__card-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2Z" fill="currentColor"/>
                <rect x="8" y="5" width="8" height="10" rx="1" fill="white"/>
                <circle cx="12" cy="18" r="1" fill="white"/>
              </svg>
            </div>
            <div className="our-services-section__card-title">Mobile App Development</div>
            <div className="our-services-section__card-description">
              Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.
            </div>
          </div>
          <div className="our-services-section__card-box" onClick={() => window.location.href = '#services/e-commerce'}>
            <div className="our-services-section__card-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 7H18V5C18 3.9 17.1 3 16 3H8C6.9 3 6 3.9 6 5V7H5C3.9 7 3 7.9 3 9V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V9C21 7.9 20.1 7 19 7ZM8 5H16V7H8V5ZM19 20H5V9H19V20Z" fill="currentColor"/>
                <path d="M12 11C10.9 11 10 11.9 10 13C10 14.1 10.9 15 12 15C13.1 15 14 14.1 14 13C14 11.9 13.1 11 12 11Z" fill="white"/>
              </svg>
            </div>
            <div className="our-services-section__card-title">E-Commerce Solutions</div>
            <div className="our-services-section__card-description">
              Complete online shopping platforms with secure payment processing, inventory management, and customer analytics.
            </div>
          </div>
          <div className="our-services-section__card-box" onClick={() => window.location.href = '#services/inventory-management'}>
            <div className="our-services-section__card-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM20 20H4V4H20V20Z" fill="currentColor"/>
                <path d="M6 8H18V10H6V8ZM6 12H18V14H6V12ZM6 16H14V18H6V16Z" fill="white"/>
              </svg>
            </div>
            <div className="our-services-section__card-title">Inventory  Management</div>
            <div className="our-services-section__card-description">
              Real-time inventory tracking, automated reordering, and comprehensive stock management solutions.
            </div>
          </div>
          <div className="our-services-section__card-box" onClick={() => window.location.href = '#services/pos-system'}>
            <div className="our-services-section__card-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20V20H4V4Z" fill="currentColor"/>
                <path d="M8 8H16V10H8V8ZM8 12H16V14H8V12ZM8 16H12V18H8V16Z" fill="white"/>
                <circle cx="18" cy="18" r="2" fill="white"/>
              </svg>
            </div>
            <div className="our-services-section__card-title">POS System</div>
            <div className="our-services-section__card-description">
              Point of sale solutions with integrated payment processing, receipt printing, and sales analytics.
            </div>
          </div>
          <div className="our-services-section__card-box" onClick={() => window.location.href = '#services/ai-video'}>
            <div className="our-services-section__card-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                <polygon points="10,8 16,12 10,16" fill="white"/>
              </svg>
            </div>
            <div className="our-services-section__card-title">AI Video Production</div>
            <div className="our-services-section__card-description">
              AI-powered video creation with automated editing, voice synthesis, and intelligent content generation.
            </div>
          </div>
          <div className="our-services-section__card-box" onClick={() => window.location.href = '#services/seo-aeo'}>
            <div className="our-services-section__card-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5S5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14Z" fill="currentColor"/>
                <path d="M12 8H7V10H12V8Z" fill="white"/>
              </svg>
            </div>
            <div className="our-services-section__card-title">SEO & AEO</div>
            <div className="our-services-section__card-description">
              Search engine optimization and AI-enhanced optimization to improve your online visibility and rankings.
            </div>
          </div>
          <div className="our-services-section__card-box" onClick={() => window.location.href = '#services/social-media'}>
            <div className="our-services-section__card-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" fill="currentColor"/>
                <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z" fill="white"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
              </svg>
            </div>
            <div className="our-services-section__card-title">Social Media Marketing</div>
            <div className="our-services-section__card-description">
              Strategic social media campaigns, content creation, and community management across all platforms.
            </div>
          </div>
          <div className="our-services-section__card-box" onClick={() => window.location.href = '#services/chat-bot'}>
            <div className="our-services-section__card-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V18C2 19.1 2.9 20 4 20H8L12 24L16 20H20C21.1 20 22 19.1 22 18V4C22 2.9 21.1 2 20 2Z" fill="currentColor"/>
                <circle cx="8" cy="10" r="1.5" fill="white"/>
                <circle cx="12" cy="10" r="1.5" fill="white"/>
                <circle cx="16" cy="10" r="1.5" fill="white"/>
              </svg>
            </div>
            <div className="our-services-section__card-title">Chat Bot Development</div>
            <div className="our-services-section__card-description">
              AI-powered chatbots for customer service, lead generation, and automated conversations.
            </div>
          </div>
        </div>
        
      </div>
    </section>
    <AboutUs />
    <section id="our-project" className="page-section our-project-section">
      <div className="our-project-section__content">
        <h2 className="our-project-section__title">Our Project</h2>
        
        <div className="our-project-section__slider">
          <div className="our-project-section__track">
            <div className="our-project-section__card">
              <h3>Web Platform  Development</h3>
              <p>Custom web applications with modern UI, fast performance, and secure architectures.</p>
            </div>
            <div className="our-project-section__card">
              <h3>Mobile Experience</h3>
              <p>Native and cross-platform mobile apps built for seamless user engagement.</p>
            </div>
            <div className="our-project-section__card">
              <h3>AI & Business Systems</h3>
              <p>AI-enabled automation, inventory systems, POS, and smart analytics for growing businesses.</p>
            </div>
            <div className="our-project-section__card">
              <h3>E-commerce Systems</h3>
              <p>Full online storefronts with secure checkout, product catalogs, and inventory control.</p>
            </div>
            <div className="our-project-section__card">
              <h3>Social Media Automation</h3>
              <p>Campaign tools and content workflows that support brand growth and customer engagement.</p>
            </div>
            <div className="our-project-section__card">
              <h3>Web Platform Development</h3>
              <p>Custom web applications with modern UI, fast performance, and secure architectures.</p>
            </div>
            <div className="our-project-section__card">
              <h3>Mobile Experience</h3>
              <p>Native and cross-platform mobile apps built for seamless user engagement.</p>
            </div>
            <div className="our-project-section__card">
              <h3>AI & Business Systems</h3>
              <p>AI-enabled automation, inventory systems, POS, and smart analytics for growing businesses.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Home
