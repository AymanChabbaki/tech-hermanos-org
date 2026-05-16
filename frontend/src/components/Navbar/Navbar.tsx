import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  // sectionBg = the background of the section currently behind the navbar
  const [sectionBg, setSectionBg] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const update = () => {
      // Get current header dimensions to calculate center accurately
      const headerEl = document.querySelector(`.${styles.header}`)
      if (!headerEl) return

      const headerRect = headerEl.getBoundingClientRect()
      const navCenterY = headerRect.top + (headerRect.height / 2)
      
      const sections = document.querySelectorAll<HTMLElement>('[data-nav-theme]')

      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        // If the center of the navbar is within the section bounds
        if (rect.top <= navCenterY && rect.bottom >= navCenterY) {
          setSectionBg(section.dataset.navTheme as 'light' | 'dark')
          return
        }
      }
    }

    window.addEventListener('scroll', update, { passive: true })
    update() // run once on mount to set initial state
    return () => window.removeEventListener('scroll', update)
  }, [])

  // Navbar always shows the OPPOSITE of the section behind it
  const isDark = sectionBg === 'light'

  return (
    <header className={`${styles.header} ${isDark ? styles.dark : ''}`}>
      <div className={styles.nav}>
        <a href="#home" className={styles.logo}>
          <img
            src={isDark ? '/images/logo-text-white.png' : '/images/logo-text.png'}
            alt="Tech Hermanos"
            className={styles.logoImg}
          />
        </a>

        <span className={styles.sep} aria-hidden="true" />

        <nav className={styles.desktopLinks} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="#contact" variant="primary" size="sm" className={styles.desktopCta}>
          Book a call
        </Button>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.drawerLinks}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.drawerLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#contact"
            variant="primary"
            size="md"
            fullWidth
            onClick={() => setMenuOpen(false)}
          >
            Book a call ↗
          </Button>
        </nav>
      </div>
    </header>
  )
}
