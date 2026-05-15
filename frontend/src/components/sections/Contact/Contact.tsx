import { useState } from 'react'
import styles from './Contact.module.css'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'
import { ContactFormData } from '@/types'

type Status = 'idle' | 'loading' | 'success' | 'error'

const emptyForm: ContactFormData = { name: '', email: '', company: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(emptyForm)
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm(emptyForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.section} id="contact" data-nav-theme="light">
      <div className="container">
        <div className={styles.inner}>
          {/* ── Left text column ── */}
          <div className={styles.textCol}>
            <SectionLabel variant="light">Get In Touch</SectionLabel>
            <h2 className={styles.heading}>Ready to grow your business?</h2>
            <p className={styles.sub}>
              Book a free discovery call and let's explore how we can drive
              results for you.
            </p>
            <div className={styles.details}>
              <a href="mailto:hello@techhermanos.com" className={styles.detailLink}>
                hello@techhermanos.com
              </a>
            </div>
          </div>

          {/* ── Right form ── */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>

            {/* Row 1: Name + Email */}
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Name *</label>
                <input
                  className={styles.input}
                  id="name" name="name" type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email *</label>
                <input
                  className={styles.input}
                  id="email" name="email" type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Row 2: Company + Phone (both optional) */}
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="company">
                  Company <span className={styles.optional}>(optional)</span>
                </label>
                <input
                  className={styles.input}
                  id="company" name="company" type="text"
                  placeholder="Your company name"
                  value={form.company ?? ''}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="phone">
                  Phone <span className={styles.optional}>(optional)</span>
                </label>
                <input
                  className={styles.input}
                  id="phone" name="phone" type="tel"
                  placeholder="+1 234 567 8900"
                  value={form.phone ?? ''}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Message */}
            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">Message *</label>
              <textarea
                className={styles.textarea}
                id="message" name="message"
                rows={5}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {status === 'success' && (
              <div className={styles.successMsg}>
                Message sent! Check your inbox — a confirmation email is on its way.
              </div>
            )}
            {status === 'error' && (
              <div className={styles.errorMsg}>
                Something went wrong. Please try again.
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message ↗'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
