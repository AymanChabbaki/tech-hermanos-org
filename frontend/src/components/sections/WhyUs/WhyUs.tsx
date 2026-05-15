import styles from './WhyUs.module.css'
import SectionLabel from '@/components/ui/SectionLabel'

/* ── Swap icons and copy here ── */
const features = [
  {
    id: 'expertise',
    icon: '▣',
    title: 'Expertise & Specialization',
    description:
      'Access a team with deep expertise across various disciplines, ensuring your campaigns are well-rounded and effective.',
  },
  {
    id: 'perspective',
    icon: '◈',
    title: 'Fresh Perspectives',
    description:
      "We bring an outsider's view to your brand. This fresh perspective helps you stay ahead of competitors and adapt to changing market trends.",
  },
  {
    id: 'scalability',
    icon: '◉',
    title: 'Scalability & Flexibility',
    description:
      "Whether you're a small startup or a large corporation, we can help you scale your services to meet your needs.",
  },
  {
    id: 'optimization',
    icon: '◆',
    title: 'Resource Optimization',
    description:
      'Instead of hiring an in-house team, you tap into our existing infrastructure, saving both time and money.',
  },
]

export default function WhyUs() {
  return (
    <section className={styles.section} id="why-us" data-nav-theme="dark">
      <div className="container">
        <div className={styles.inner}>
          {/* ── Left title column ── */}
          <div className={styles.titleCol}>
            <SectionLabel variant="dark">Why Us</SectionLabel>
            <h2 className={styles.heading}>
              Why our clients choose us as partners
            </h2>
          </div>

          {/* ── Right features grid ── */}
          <div className={styles.featuresGrid}>
            {features.map((f) => (
              <div key={f.id} className={styles.featureCard}>
                <div className={styles.iconWrap}>
                  <span className={styles.icon}>{f.icon}</span>
                </div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
