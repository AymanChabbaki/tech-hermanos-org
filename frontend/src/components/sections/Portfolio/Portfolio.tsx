import styles from './Portfolio.module.css'
import SectionLabel from '@/components/ui/SectionLabel'

const projects = [
  {
    id: 1,
    title: "Gestion Pilotage",
    description: "Système de gestion et de pilotage d'entreprise complet avec React, Node.js et MongoDB pour une gestion complète des opérations.",
    image: "/projects/gestion_pilotage.png",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
    featured: true,
    liveUrl: "#",
    githubUrl: "https://github.com/AymanChabbaki/gestion_pilotage",
    year: "2025"
  },
  {
    id: 2,
    title: "Football Prediction",
    description: "Application de prédiction des scores de football avec IA utilisant Python, Flask et React pour des prédictions précises.",
    image: "/projects/football.png",
    tags: ["Python", "Flask", "React", "AI"],
    category: "AI",
    featured: true,
    liveUrl: "#",
    githubUrl: "https://github.com/AymanChabbaki/PredictionFootBalll",
    year: "2025"
  },
  {
    id: 3,
    title: "Car Price Prediction",
    description: "Estimation du prix des véhicules avec machine learning développé en Python, Flask et React pour des prédictions précises.",
    image: "/projects/car.png",
    tags: ["Python", "Flask", "React", "Machine Learning"],
    category: "AI",
    featured: true,
    liveUrl: "#",
    githubUrl: "https://github.com/AymanChabbaki/PFM",
    year: "2025"
  },
  {
    id: 4,
    title: "Gestion de Recrutement",
    description: "Plateforme complète de gestion des processus de recrutement développée avec Laravel, React et MySQL.",
    image: "/projects/rec.png",
    tags: ["Laravel", "React", "MySQL"],
    category: "Full Stack",
    featured: false,
    liveUrl: "#",
    githubUrl: "https://github.com/AymanChabbaki/Gestion_Recrutement",
    year: "2024"
  },
  {
    id: 5,
    title: "AI Détection Panneaux",
    description: "Système intelligent de détection des panneaux de signalisation utilisant l'intelligence artificielle et la vision par ordinateur.",
    image: "/projects/detection.png",
    tags: ["Python", "AI", "Computer Vision", "TensorFlow"],
    category: "AI",
    featured: true,
    liveUrl: "#",
    githubUrl: "https://github.com/AymanChabbaki/ai_detection_panneaux",
    year: "2025"
  },
  {
    id: 6,
    title: "Career Manager Agent",
    description: "Agent intelligent de gestion de carrière utilisant l'IA pour fournir des conseils personnalisés et guider les professionnels.",
    image: "/projects/career_agent.png",
    tags: ["Python", "AI", "Machine Learning", "NLP"],
    category: "AI",
    featured: true,
    liveUrl: "#",
    githubUrl: "https://github.com/AymanChabbaki/My_Career_Coach_agent",
    year: "2025"
  },
  {
    id: 7,
    title: "SkillBridge Platform",
    description: "Plateforme de freelancing similaire à Fiverr permettant aux freelancers de proposer leurs services et aux clients de trouver des talents.",
    image: "/projects/skillBridge.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    featured: true,
    liveUrl: "#",
    githubUrl: "https://github.com/AymanChabbaki/SkillBridge-Pro",
    year: "2024"
  },
  {
    id: 8,
    title: "IQAMATI Platform",
    description: "Plateforme complète de gestion immobilière pour syndics développée avec ReactJS et ExpressJS avec authentification avancée.",
    image: "/projects/iqamati.png",
    tags: ["React", "Express.js", "MongoDB", "Node.js"],
    category: "Full Stack",
    featured: true,
    liveUrl: "#",
    githubUrl: "https://github.com/AymanChabbaki/i9amati",
    year: "2025"
  },
  {
    id: 9,
    title: "Chat Atlas App",
    description: "Application de messagerie en temps réel développée avec Flutter, permettant une communication fluide via l'intégration Firebase.",
    image: "/projects/atlas.png",
    tags: ["Flutter", "Firebase", "Real-time", "Mobile"],
    category: "Mobile",
    featured: false,
    liveUrl: "#",
    githubUrl: "https://github.com/AymanChabbaki/atlaschat",
    year: "2024"
  },
  {
    id: 10,
    title: "IPTV Spanish Website",
    description: "Site web IPTV espagnol offrant une expérience de streaming fluide avec une interface utilisateur moderne et responsive.",
    image: "/projects/iptv-spanish.jpg",
    tags: ["React", "Node.js", "Streaming", "Spanish"],
    category: "Web",
    featured: false,
    liveUrl: "#",
    githubUrl: "https://github.com/AymanChabbaki/maxtv-frond",
    year: "2024"
  },
  {
    id: 11,
    title: "Team Most Like Series",
    description: "React app like Netflix for series, providing a streaming-like experience for TV shows.",
    image: "/projects/series.png",
    tags: ["React", "Netflix-like", "Series", "Streaming"],
    category: "Web",
    featured: true,
    liveUrl: "#",
    githubUrl: "https://github.com/AymanChabbaki/team-most-likes-series",
    year: "2024"
  }
];

export default function Portfolio() {
  return (
    <section className={styles.section} id="portfolio" data-nav-theme="light">
      <div className="container">
        <div className={styles.header}>
          <div>
            <SectionLabel variant="light">Our Work</SectionLabel>
            <h2 className={styles.heading}>Incredible projects we have worked on</h2>
          </div>
          <a href="#contact" className={styles.viewAll}>
            View all projects →
          </a>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={project.image} alt={project.title} />
              </div>

              <div className={styles.cardBody}>
                <span className={styles.cardCategory}>{project.category}</span>
                <h3 className={styles.cardTitle}>
                  {project.githubUrl !== '#' ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      {project.title} ↗
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.cardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.cardTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
