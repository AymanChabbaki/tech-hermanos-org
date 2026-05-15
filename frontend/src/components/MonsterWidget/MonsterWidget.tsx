import styles from './MonsterWidget.module.css'

export default function MonsterWidget() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <video
        className={styles.video}
        src="/videos/monster-nobg.webm"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  )
}
