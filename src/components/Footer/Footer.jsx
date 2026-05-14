import './Footer.css'
import BlobCursor from './BlobCursor'

function Footer() {
  return (
    <footer className="animated-footer">
      <BlobCursor
        blobType="circle"
        fillColor="#5227FF"
        trailCount={3}
        sizes={[60, 125, 75]}
        innerSizes={[20, 35, 25]}
        innerColor="rgba(255,255,255,0.8)"
        opacities={[0.6, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={1}
      />
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__brand-top">
            <div className="footer__brand-header">
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
            </div>
          </div>
          <p className="footer__brand-subtitle">Creating impactful digital experiences through innovative technology.</p>

          <div className="footer__brand-social">
            <a href="#" aria-label="Facebook" className="footer__social-link">
              <svg className="footer__social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.99 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="footer__social-link">
              <svg className="footer__social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 1.5h-8.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm-4.25 3.5A5.25 5.25 0 1 1 7.75 12 5.256 5.256 0 0 1 12 7Zm0 1.5a3.75 3.75 0 1 0 3.75 3.75A3.755 3.755 0 0 0 12 9Zm5.5-.75a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1Z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="footer__social-link">
              <svg className="footer__social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6c-.77.34-1.6.56-2.46.66a4.22 4.22 0 0 0 1.85-2.33 8.3 8.3 0 0 1-2.66 1.02 4.16 4.16 0 0 0-7.08 3.79A11.82 11.82 0 0 1 3.15 4.4a4.14 4.14 0 0 0 1.29 5.55 4.15 4.15 0 0 1-1.88-.52v.05a4.16 4.16 0 0 0 3.34 4.08 4.2 4.2 0 0 1-1.87.07 4.16 4.16 0 0 0 3.88 2.89A8.34 8.34 0 0 1 2 18.58 11.75 11.75 0 0 0 8.29 20c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.34 8.34 0 0 0 22.46 6Z" />
              </svg>
            </a>
            <a href="https://wa.me/9471355566" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="footer__social-link footer__social-link--whatsapp">
              <svg className="footer__social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.198.297-.768.967-.942 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.148-.672-1.611-.921-2.207-.242-.579-.487-.5-.672-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.075-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.627.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.004 2.002C6.478 2.002 2 6.48 2 12.006c0 2.117.66 4.082 1.8 5.706L2 22l4.4-1.155a9.96 9.96 0 0 0 5.6 1.556h.004C17.526 22.4 22 17.922 22 12.006 22 6.48 17.526 2.002 12.004 2.002zm0 18.145h-.002a8.235 8.235 0 0 1-4.238-1.153l-.304-.18-2.611.686.696-2.548-.197-.32A8.212 8.212 0 0 1 3.77 12.008c0-4.538 3.692-8.23 8.234-8.23 4.54 0 8.232 3.692 8.232 8.23 0 4.538-3.69 8.233-8.226 8.233z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="footer__social-link">
              <svg className="footer__social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5A2.48 2.48 0 1 1 7.46 5.98 2.48 2.48 0 0 1 4.98 3.5Zm.02 4.25H2V21.5h3V7.75Zm7.75 0h-2.98V21.5h2.98v-7.25c0-3.88 4.75-4.19 4.75 0V21.5h3v-7.75c0-7.26-7.5-6.99-9.73-3.42V7.75Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer__content">
          <div className="footer__links">
            <div className="footer__column">
              <p className="footer__column-title">Our Services</p>
              <a href="#web-application">Web Application Development</a>
              <a href="#mobile-app">Mobile App Development</a>
              <a href="#ecommerce">E-Commerce Solutions</a>
              <a href="#inventory">Inventory Management</a>
              <a href="#pos">POS System</a>
              <a href="#ai-video">AI Video Production</a>
              <a href="#seo">SEO & AEO</a>
              <a href="#social-media">Social Media Marketing</a>
              <a href="#chatbot">Chat Bot Development</a>
            </div>
            <div className="footer__column">
              <p className="footer__column-title">Quick Links</p>
              <a href="#faq">FAQ</a>
              <a href="#sitemap">Sitemap</a>
              <a href="#careers">Careers</a>
              <a href="#terms">Terms of Use</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#cookies">Cookies Policy</a>
            </div>
            <div className="footer__column">
              <p className="footer__column-title">Contact</p>
              <a href="tel:+9471355566">+94 71 3 55 55 66</a>
              <a href="https://wa.me/9471355566" target="_blank" rel="noreferrer" className="footer__whatsapp-link">
              <svg className="footer__whatsapp-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.198.297-.768.967-.942 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.148-.672-1.611-.921-2.207-.242-.579-.487-.5-.672-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.075-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.627.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.004 2.002C6.478 2.002 2 6.48 2 12.006c0 2.117.66 4.082 1.8 5.706L2 22l4.4-1.155a9.96 9.96 0 0 0 5.6 1.556h.004C17.526 22.4 22 17.922 22 12.006 22 6.48 17.526 2.002 12.004 2.002zm0 18.145h-.002a8.235 8.235 0 0 1-4.238-1.153l-.304-.18-2.611.686.696-2.548-.197-.32A8.212 8.212 0 0 1 3.77 12.008c0-4.538 3.692-8.23 8.234-8.23 4.54 0 8.232 3.692 8.232 8.23 0 4.538-3.69 8.233-8.226 8.233z" />
              </svg>
              WhatsApp
            </a>
              <a href="mailto:connect@furoan.com">connect@furoan.com</a>
              <a href="#more">More Options</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__watermark">FUROAN</div>
      <div className="footer__watermark-subtext">Technology</div>

      <p className="footer__copyright"> © 2026 FUROAN. All rights reserved.</p>
    </footer>
  )
}

export default Footer
