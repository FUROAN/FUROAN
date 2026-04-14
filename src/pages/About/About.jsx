import { useMemo, useState } from 'react'
import './About.css'

const serviceTabs = [
  {
    key: 'web',
    label: 'Web',
    title: 'Web Package',
    updated: 'Apr 5, 2026',
    description:
      'Portfolio 1-page website with up to 10 sections and an animation video (AI-generated or professional content).',
    details: [
      'Tech stack: MERN Stack',
      'Database: MongoDB',
      'Price: 25,000 LKR + domain charges',
      'Domain can be customized upon request (.com, .lk, etc.)',
    ],
    addons: [
      'Online chatbot: If you are online, customers can directly chat with you',
      'Offline chatbot: Same interface, identifies customer requests using AI and responds with your pre-trained data',
      'Chatbot add-on price: 15,000 LKR',
      'Payment gateways: Accept direct online payments through web payment portals',
    ],
  },
  {
    key: 'ecommerce',
    label: 'E-Commerce',
    title: 'e-Commerce Web Package',
    updated: 'Apr 5, 2026',
    description:
      'Company portfolio, catalog, booking flow, and scalable online sales experience with checkout support.',
    details: [
      'Company portfolio + company catalog',
      'Booking system + cart + admin panel',
      'Simple inventory system (or merge with your existing inventory system)',
      'Checkout and online payment integration',
      'Free logo + 1 promotional video (AI or professional content creator)',
      'Tech stack: MERN or React + Spring Boot + PostgreSQL (customizable by requirements)',
      'Price: 200,000 LKR',
    ],
    addons: [
      'Online chatbot: If you are online, customers can directly chat with you',
      'Offline chatbot: Same interface, identifies customer requests using AI and responds with your pre-trained data',
      'Chatbot add-on price: 100,000 LKR',
      'Additional maintenance available upon request, based on scope and requirement size',
      'Maintenance starts from: 5,000 LKR',
    ],
  },
  {
    key: 'inventory',
    label: 'Inventory',
    title: 'Inventory Management',
    updated: 'April',
    description: 'Manage your business inventory with a dedicated software solution.',
    details: ['Price: 300,000 LKR (software only)', 'Monthly maintenance: 25,000 LKR'],
    addons: [],
  },
  {
    key: 'pos',
    label: 'POS',
    title: 'Point of Sale (POS) Systems',
    updated: 'April',
    description:
      'POS solutions for the retail sector, from a single touch-screen terminal to multi-site operations with many tills.',
    details: [
      'TILLMAX supports supermarkets, boutiques, independent stores, and busy bookshops',
      'Software with lifetime license',
      'Shelf edge labels',
      'Stock management',
      'Special reports',
      'Chip and PIN integration',
      'Suspend and resume sales',
      'Barcode and item prediction',
      'Over 40,000 pre-loaded products',
      'CCTV connectivity',
      'Accounting system',
      'Foreign character sets',
    ],
    addons: [],
  },
  {
    key: 'aivideo',
    label: 'AI Video',
    title: 'AI Video',
    updated: 'Apr 5, 2026',
    description: 'Short promotional AI videos for social or campaign use.',
    details: ['1 minute video: 3,000 LKR'],
    addons: [],
  },
  {
    key: 'seo-aeo',
    label: 'SEO & AEO',
    title: 'SEO and AEO',
    updated: 'April',
    description: 'Optimization services to strengthen search and answer-engine visibility.',
    details: ['Price: 250,0 LKR'],
    addons: [],
  },
]

function About() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].key)

  const selectedService = useMemo(
    () => serviceTabs.find((tab) => tab.key === activeTab) ?? serviceTabs[0],
    [activeTab],
  )

  return (
    <section id="about" className="page-section about-section">
      <div className="about-section__header">
        <h2>About FUROAN</h2>
        <p>
          FUROAN delivers web, software, and AI-powered business solutions tailored to your goals.
        </p>
      </div>

      <div className="about-tabs" role="tablist" aria-label="Service categories">
        {serviceTabs.map((tab) => {
          const isActive = tab.key === selectedService.key

          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`about-tab ${isActive ? 'about-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <article className="about-card" role="tabpanel" aria-live="polite">
        <div className="about-card__top">
          <h3>{selectedService.title}</h3>
        </div>

        <p className="about-card__description">{selectedService.description}</p>

        <h4>Package Details</h4>
        <ul>
          {selectedService.details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {selectedService.addons.length > 0 && (
          <>
            <h4>Additional Options</h4>
            <ul>
              {selectedService.addons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </article>
    </section>
  )
}

export default About
