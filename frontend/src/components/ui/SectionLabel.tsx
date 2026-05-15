import styles from './SectionLabel.module.css'

interface SectionLabelProps {
  children: string
  variant?: 'light' | 'dark'
}

export default function SectionLabel({ children, variant = 'light' }: SectionLabelProps) {
  return (
    <div className={`${styles.label} ${variant === 'dark' ? styles.onDark : ''}`}>
      <span className={styles.line} aria-hidden="true" />
      {children}
    </div>
  )
}
