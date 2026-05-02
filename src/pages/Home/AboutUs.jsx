import { useRef, useEffect, useState } from 'react'

function AboutUs() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about-us"
      ref={sectionRef}
      className={`page-section about-us-section${inView ? ' is-inview' : ''}`}
    >
      <div className="about-us-section__image-container">
        <div className="about-us-section__images-row">
          <img
            className="about-us-section__image about-us-section__image--left"
            src="/src/assets/0ff68ac8-cc06-4ae1-bce5-7eb971fae470 (1).png"
            alt="About Us"
          />
          <img
            className="about-us-section__image about-us-section__image--right"
            src="/src/assets/image.png"
            alt="About Us"
          />
        </div>
      </div>
      <div className="about-us-section__content">
        <h2 className="about-us-section__title">About Us</h2>
        <div className="about-us-section__description">
          <p>
            Welcome to FUORAN, a dynamic software solutions provider dedicated to bridging the gap between complex technology and impactful business results. We specialize in high-performance Web and Mobile Application Development, ensuring your digital tools are powerful, scalable, and intuitive.
          </p>
          <p>
            By integrating advanced technologies like AI Video Production, Chatbots, and AI-enhanced SEO, we help your brand achieve superior visibility and efficiency in a competitive market.
          </p>
          <p>
            At FUORAN, we go beyond standard development to offer comprehensive business solutions, including E-commerce, Inventory Management, and POS Systems. Combined with our strategic Social Media Marketing, we empower businesses to grow and adapt in a fast-paced digital landscape.
          </p>
          <p>
            FUORAN is your dedicated partner for best-in-class, tailored IT solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
