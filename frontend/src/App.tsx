import { useEffect } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/sections/Hero/Hero'
import Stats from '@/components/sections/Stats/Stats'
import WhyUs from '@/components/sections/WhyUs/WhyUs'
import About from '@/components/sections/About/About'
import Portfolio from '@/components/sections/Portfolio/Portfolio'
import Contact from '@/components/sections/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import ChatButton from '@/components/ChatButton/ChatButton'

export default function App() {
  // Smooth scroll — prevent hash appearing in URL
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a')
      const href = anchor?.getAttribute('href')
      if (!href?.startsWith('#')) return
      e.preventDefault()
      const el = document.getElementById(href.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    document.addEventListener('click', handler, true)
    return () => document.removeEventListener('click', handler, true)
  }, [])

  // Update URL to clean path as sections scroll into view
  useEffect(() => {
    const sectionPath: Record<string, string> = {
      home:       '/',
      about:      '/about',
      stats:      '/our-impact',
      'why-us':   '/why-us',
      portfolio:  '/portfolio',
      contact:    '/contact',
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const path = sectionPath[entry.target.id] ?? `/${entry.target.id}`
            history.replaceState(null, '', path)
          }
        })
      },
      // triggers when a section crosses the vertical center of the viewport
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    document.querySelectorAll<HTMLElement>('[data-nav-theme]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── Fixed video — stays behind every section while scrolling ── */}
      <video
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          pointerEvents: 'none',
          willChange: 'transform',
        }}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/hero-bg.webm" type="video/webm" />
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <WhyUs />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ChatButton />
    </>
  )
}
