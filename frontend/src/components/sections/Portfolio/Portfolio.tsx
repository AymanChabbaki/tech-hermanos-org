import styles from './Portfolio.module.css'
import SectionLabel from '@/components/ui/SectionLabel'

const projects = [
  // ── Fashion / Clothing ──────────────────────────────────
  {
    id: 'f1',
    category: 'Fashion',
    title: 'Streetwear Fashion Store',
    description:
      'Full e-commerce storefront for a streetwear brand featuring collection browsing, seasonal sales, and a bold editorial hero — built to convert browsers into buyers.',
    tags: ['E-Commerce', 'UI/UX', 'Web Design'],
    imageUrl: '/images/fashion/fashion-store.jpg',
  },
  {
    id: 'f2',
    category: 'Fashion',
    title: 'Hoodie Brand Landing Page',
    description:
      'Minimal, high-impact landing page for a premium hoodie label — showcasing product photography, social links, and a swipe-to-discover shopping experience.',
    tags: ['Landing Page', 'Fashion', 'Web Design'],
    imageUrl: '/images/fashion/hoodie-store.jpg',
  },

  // ── SaaS / Dashboard ───────────────────────────────────
  {
    id: 's1',
    category: 'SaaS',
    title: 'eProduct Order Dashboard',
    description:
      'Clean admin panel for an e-commerce SaaS — real-time order tracking, dispatch status, and filterable tables that give operations teams full visibility at a glance.',
    tags: ['SaaS', 'Dashboard', 'UI/UX'],
    imageUrl: '/images/saas/order-dashboard.jpg',
  },
  {
    id: 's2',
    category: 'SaaS',
    title: 'TIXTA Task Manager',
    description:
      'Productivity SaaS landing page for a task management platform serving 9M+ users — bold hero, live stats, and clear CTAs designed to drive free-trial signups.',
    tags: ['SaaS', 'Landing Page', 'Conversion'],
    imageUrl: '/images/saas/task-manager.jpg',
  },
  {
    id: 's3',
    category: 'SaaS',
    title: 'File Manager Platform',
    description:
      'Feature-rich cloud file manager UI with folder organisation, team collaboration, recent files, and tiered storage plans — designed for clarity under complex workflows.',
    tags: ['SaaS', 'Dashboard', 'Product Design'],
    imageUrl: '/images/saas/file-manager.jpg',
  },

  // ── Marketplace / Tech ─────────────────────────────────
  {
    id: 'm1',
    category: 'Marketplace',
    title: 'Gaming Gear Marketplace',
    description:
      'Multi-vendor marketplace for Fantech gaming peripherals — advanced category filters, star ratings, price range sliders, and a fast search experience for gear enthusiasts.',
    tags: ['Marketplace', 'E-Commerce', 'Web Dev'],
    imageUrl: '/images/marketplace/gaming-marketplace.jpg',
  },

  // ── Food & Restaurant ──────────────────────────────────
  {
    id: 'fd1',
    category: 'Food & Restaurant',
    title: 'HieuBowl Vietnamese Kitchen',
    description:
      'Vibrant restaurant website for a Vietnamese kitchen — full-page menu, calorie counting tool, customer reviews, and a warm visual identity that makes you hungry on sight.',
    tags: ['Restaurant', 'Web Design', 'UI/UX'],
    imageUrl: '/images/food/hieubowl.jpg',
  },
  {
    id: 'fd2',
    category: 'Food & Restaurant',
    title: 'Organic Food Store',
    description:
      'Clean, nature-inspired e-commerce site for an organic grocery brand — product catalogue, category cards, and a fresh green palette that communicates health and trust.',
    tags: ['E-Commerce', 'Food', 'Web Design'],
    imageUrl: '/images/food/organic-store.jpg',
  },
  {
    id: 'fd3',
    category: 'Food & Restaurant',
    title: 'Vegan Restaurant Website',
    description:
      'Full multi-section website for a vegan eatery — hero with booking CTA, menu categories, nutritional values, and a "Why Choose Us" section that builds brand credibility.',
    tags: ['Restaurant', 'Landing Page', 'Branding'],
    imageUrl: '/images/food/vegan-restaurant.jpg',
  },
]

export default function Portfolio() {
  return (
    <section className={styles.section} id="portfolio" data-nav-theme="light">
      <div className="container">
        <div className={styles.header}>
          <div>
            <SectionLabel variant="light">Our Work</SectionLabel>
            <h2 className={styles.heading}>Incredible projects we have worked on</h2>
          </div>
          <a href="#contact" className={styles.viewAll}>
            View all projects →
          </a>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={project.imageUrl} alt={project.title} />
              </div>

              <div className={styles.cardBody}>
                <span className={styles.cardCategory}>{project.category}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.cardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.cardTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
