import { useState, useEffect } from 'react'
import styles from './Stats.module.css'
import SectionLabel from '@/components/ui/SectionLabel'

const services = [
  'Web Design',
  'Social Media',
  'Marketing',
  'Paid Ads',
  'Branding',
  'Content Creation',
  'SEO',
  'Development',
]

const stats = [
  { value: '1.2M+', label: 'Users reached across platforms we built' },
  { value: '$3M+', label: 'In revenue generated for our clients' },
  { value: '50+', label: 'Projects delivered with stellar results' },
]

const testimonials = [
  {
    quote: 'Tech Hermanos completely transformed our store. Sales jumped 40% in the first 3 months after launch. The design speaks directly to our customers.',
    client: 'Sarah M.',
    role: 'CEO, Streetwear Studio',
    project: 'Streetwear Fashion Store',
    image: '/images/fashion/fashion-store.jpg',
  },
  {
    quote: 'Our customers constantly compliment the website. Online reservations went up the week it launched — the team really understood our brand.',
    client: 'Hieu N.',
    role: 'Owner, HieuBowl Kitchen',
    project: 'HieuBowl Vietnamese Kitchen',
    image: '/images/food/hieubowl.jpg',
  },
  {
    quote: 'The dashboard is incredibly intuitive. Our operations team adopted it within hours — zero training needed. Best investment we made this year.',
    client: 'Marcus T.',
    role: 'Product Manager, eProduct',
    project: 'eProduct Order Dashboard',
    image: '/images/saas/order-dashboard.jpg',
  },
  {
    quote: 'We needed a gaming marketplace fast. They delivered a polished, fully-functional platform ahead of schedule. Exceptional quality.',
    client: 'Arman M.',
    role: 'Founder, Shoppp Gaming',
    project: 'Gaming Gear Marketplace',
    image: '/images/marketplace/gaming-marketplace.jpg',
  },
  {
    quote: "Our organic store needed a complete overhaul. Tech Hermanos nailed the fresh healthy aesthetic we were going for — and the sales followed.",
    client: 'Laila K.',
    role: 'Director, Orgamic Foods',
    project: 'Organic Food Store',
    image: '/images/food/organic-store.jpg',
  },
  {
    quote: 'The hoodie brand site they built is stunning. Clean, modern, and our conversion rate has never been higher. Highly recommend.',
    client: 'Sahil D.',
    role: 'Creative Director, Hoodie Co.',
    project: 'Hoodie Brand Store',
    image: '/images/fashion/hoodie-store.jpg',
  },
]

const INTERVAL = 4500

export default function Stats() {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length)
        setFading(false)
      }, 350)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[active]
  // three avatar images: current + next two
  const avatarImages = [0, 1, 2].map(
    (offset) => testimonials[(active + offset) % testimonials.length].image
  )

  return (
    <section className={styles.section} id="stats" data-nav-theme="light">
      <div className="container">
        <SectionLabel variant="light">Our Impact</SectionLabel>
        <div className={styles.grid}>
          {/* ── Services ── */}
          <div className={styles.servicesCard}>
            <p className={styles.servicesLabel}>Services</p>
            <div className={styles.tags}>
              {services.map((s) => (
                <span key={s} className={styles.tag}>{s}</span>
              ))}
            </div>
          </div>

          {/* ── Stats ── */}
          <div className={styles.statsColumn}>
            {stats.map((stat, i) => (
              <div
                key={stat.value}
                className={`${styles.statCard} ${i === 0 ? styles.statCardDark : ''}`}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* ── Testimonial ── */}
          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>"</div>

            <div className={`${styles.testimonialBody} ${fading ? styles.fadeOut : styles.fadeIn}`}>
              {/* project mini-card — left side */}
              <div className={styles.projectTag}>
                <img
                  className={styles.projectThumb}
                  src={t.image}
                  alt={t.project}
                />
                <p className={styles.projectName}>{t.project}</p>
              </div>

              {/* quote + reviewer — right side */}
              <div className={styles.testimonialContent}>
                <p className={styles.quote}>{t.quote}</p>

                <div className={styles.reviewerRow}>
                  <div className={styles.avatars}>
                    {avatarImages.map((src, i) => (
                      <img
                        key={i}
                        className={styles.avatar}
                        src={src}
                        alt="client"
                      />
                    ))}
                  </div>
                  <div className={styles.reviewerInfo}>
                    <span className={styles.clientName}>{t.client}</span>
                    <span className={styles.clientRole}>{t.role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* dot indicators */}
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                  onClick={() => { setFading(true); setTimeout(() => { setActive(i); setFading(false) }, 350) }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
