import { useRef, useEffect, useState } from 'react'
import './Contact.css'

function Contact() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`page-section contact-section${inView ? ' is-inview' : ''}`}
    >
      <div className="contact-section__content">
        <h2 className="contact-section__title">Contact Us</h2>
        
        <div className="contact-section__main">
          <div className="contact-section__info">
            <h3 className="contact-section__subtitle">Get In Touch</h3>
            <p className="contact-section__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accusam eros, sit amet occaecati nunc.
            </p>

            <div className="contact-section__info-box contact-section__info-box--address">
              <div className="contact-section__info-icon contact-section__info-icon--address">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h4 className="contact-section__info-title">Address</h4>
                <p className="contact-section__info-text">FUORAN Technology, Matara, Sri Lanka</p>
              </div>
            </div>

            <div className="contact-section__info-box contact-section__info-box--phone">
              <div className="contact-section__info-icon contact-section__info-icon--phone">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h4 className="contact-section__info-title">Phone Number</h4>
                <p className="contact-section__info-text">+123-456-7890</p>
              </div>
            </div>

            <div className="contact-section__info-box contact-section__info-box--email">
              <div className="contact-section__info-icon contact-section__info-icon--email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h4 className="contact-section__info-title">E-Mail</h4>
                <p className="contact-section__info-text">hello@furoan.com</p>
              </div>
            </div>

            <div className="contact-section__social">
              <p className="contact-section__social-label">Follow Us:</p>
              <div className="contact-section__social-icons">
                <a href="#" className="contact-section__social-icon contact-section__social-icon--facebook" title="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="contact-section__social-icon contact-section__social-icon--twitter" title="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s-1.1 2.2-4.3 4.2A9.939 9.939 0 0123 3z"/>
                  </svg>
                </a>
                <a href="#" className="contact-section__social-icon contact-section__social-icon--linkedin" title="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                <a href="#" className="contact-section__social-icon contact-section__social-icon--instagram" title="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.344.012 7.078.07 2.735.272.273 2.69.07 7.078-.012 8.344 0 8.756 0 12s.012 3.657.07 4.922c.203 4.373 2.65 6.8 7.038 7.003 1.266.058 1.678.07 4.922.07 3.243 0 3.656-.012 4.922-.07 4.373-.203 6.8-2.65 7.003-7.038.058-1.265.07-1.678.07-4.922s-.012-3.657-.07-4.922c-.203-4.373-2.65-6.8-7.038-7.003C15.656.012 15.243 0 12 0z"/>
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                    <circle cx="18.406" cy="5.594" r="1.44"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-section__form-container">
            <div className="contact-section__form-box">
              <h3 className="contact-section__form-title">Send a Message</h3>
              <form onSubmit={handleSubmit} className="contact-section__form">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-section__form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail address"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-section__form-input"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-section__form-textarea"
                  required
                ></textarea>
                <p className="contact-section__form-disclaimer">
                  By submitting you agree to the processing of your personal data to fulfill your request.
                </p>
                <button type="submit" className="contact-section__form-submit">Submit</button>
              </form>
            </div>
          </div>
        </div>

        <div className="contact-section__map">
          <div className="contact-section__map-header">
            <div>
              <p className="contact-section__map-label">Our Location</p>
              <h3 className="contact-section__map-title">FUORAN Technology</h3>
            </div>
            <div className="contact-section__map-badge">Matara, Sri Lanka</div>
          </div>

          <div className="contact-section__map-frame">
            <iframe
              title="FUORAN Technology, Matara, Sri Lanka"
              src="https://www.google.com/maps?q=Matara%2C%20Sri%20Lanka&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
