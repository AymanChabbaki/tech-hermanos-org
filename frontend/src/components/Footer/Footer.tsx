import styles from './Footer.module.css'

const footerLinks = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer} data-nav-theme="dark">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#home" className={styles.logo}>
              <img src="/images/logo-text-white.png" alt="Tech Hermanos" className={styles.logoImg} />
            </a>
            <p className={styles.tagline}>We drive growth to your business.</p>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Tech Hermanos. All rights reserved.
          </p>
          <a href="mailto:hello@techhermanos.com" className={styles.email}>
            hello@techhermanos.com
          </a>
        </div>
      </div>
    </footer>
  )
}
