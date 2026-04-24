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
            We are FUROAN Technology, a forward-thinking software development company dedicated to turning your vision into reality. 
            Our team of passionate developers and designers works collaboratively to deliver innovative digital solutions that drive success.
          </p>
          <p>
            With expertise across web, mobile, AI, and emerging technologies, we empower businesses to thrive in the digital age. 
            Your success is our mission, and we're committed to excellence in every project we undertake.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
