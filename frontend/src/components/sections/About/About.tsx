import styles from './About.module.css'
import SectionLabel from '@/components/ui/SectionLabel'
import TeamSlider from './TeamSlider'

export default function About() {
  return (
    <section className={styles.section} id="about" data-nav-theme="light">
      <div className="container">
        {/* ── Header row: title + description ── */}
        <div className={styles.header}>
          <div>
            <SectionLabel variant="light">About Us</SectionLabel>
            <h2 className={styles.heading}>
              Get to know us
              <br />a little more
            </h2>
          </div>
          <div className={styles.headerText}>
            <p>
              Our approach combines strategic thinking with innovative tactics to drive
              tangible results and achieve our clients' goals.
            </p>
            <p>
              We are dedicated to delivering exceptional value and helping businesses
              thrive in the ever-evolving digital marketplace.
            </p>
          </div>
        </div>

        {/* ── Showcase: team slider + highlight card ── */}
        <div className={styles.showcase}>
          <div className={styles.imageWrap}>
            <TeamSlider />
          </div>

          <div className={styles.highlightCard}>
            <span className={styles.highlightEyebrow}>#1</span>
            <h3 className={styles.highlightTitle}>Team!</h3>
            <p className={styles.highlightText}>
              We've helped hundreds of partners, from startups to medium-sized
              businesses achieve their goals. And stellar feedback is our reward.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
