import styles from './TeamSlider.module.css'

const teamImages = [
  { src: '/team/ayman_chabbaki1.jpeg', alt: 'Ayman Chabbaki' },
  { src: '/team/yahya_najm1.jpeg', alt: 'Yahya Najm' },
  { src: '/team/badr_jamaaoui.jpg', alt: 'Badr eddine Jamaaoui' },
  { src: '/team/ayman_chabbaki2.jpeg', alt: 'Ayman Chabbaki' },
  { src: '/team/yahya_najm2.jpeg', alt: 'Yahya Najm' },
]

export default function TeamSlider() {
  // Duplicate for seamless loop
  const displayImages = [...teamImages, ...teamImages]

  return (
    <div className={styles.slider}>
      <div className={styles.track}>
        {displayImages.map((img, i) => (
          <div key={i} className={styles.slide}>
            <img src={img.src} alt={img.alt} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  )
}
