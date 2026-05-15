import styles from './Hero.module.css'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className={styles.hero} id="home" data-nav-theme="dark">
      <div className={styles.overlay} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>
          {/* ── Left: content ── */}
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.dot} />
              Digital Solutions Agency
            </div>

            <h1 className={styles.heading}>
              We drive growth to
              <br />
              your business{' '}
              <span className={styles.arrow}>↗</span>
            </h1>

            <p className={styles.subtitle}>
              Unlock your brand's potential with our proven expertise.
              From strategy to execution, we deliver results.
            </p>

            <div className={styles.actions}>
              <Button href="#contact" variant="primary" size="lg">
                Book a call ↗
              </Button>
              <Button href="#why-us" variant="outline" size="lg">
                Learn more
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
