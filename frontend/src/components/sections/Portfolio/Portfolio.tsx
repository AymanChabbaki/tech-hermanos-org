import { useState } from 'react'
import styles from './Portfolio.module.css'
import SectionLabel from '@/components/ui/SectionLabel'

const PROJECTS = [
  {
    name: "AI & DEV Community",
    imageKey: "ai_dev_community.png",
    descriptionKey: "projectAiDevCommunity",
    gradient: ["#4facfe", "#00f2fe"],
    url: "https://aidevcommunity.vercel.app",
    tech: ["react", "nodejs", "mongodb", "express"],
  },
  {
    name: "Safaria",
    imageKey: "safaria.png",
    descriptionKey: "projectTravelMoroccoApp",
    gradient: ["#fdcbf1", "#e6dee9"],
    url: "https://safaria212.vercel.app/",
    tech: ["react", "nodejs"],
  },
  {
    name: "AI Détection Panneaux",
    imageKey: "detection.png",
    descriptionKey: "projectTrafficSigns",
    gradient: ["#f093fb", "#f5576c"],
    url: "https://www.linkedin.com/posts/ayman-chabbaki_technicalsheet-trafficsignai-yolov8-activity-7354168491375050752-zu4K",
    tech: ["python", "tensorflow", "yolo", "opencv"],
  },
  {
    name: "Football Prediction",
    imageKey: "football.png",
    descriptionKey: "projectFootballPrediction",
    gradient: ["#a8edea", "#fed6e3"],
    url: "https://scorematch.chabbaki.tech/",
    tech: ["python", "flask", "react", "machine-learning"],
  },
  {
    name: "Car Price Prediction",
    imageKey: "car.png",
    descriptionKey: "projectCarPrice",
    gradient: ["#ff9a9e", "#fecfef"],
    url: "https://carprice.chabbaki.tech/",
    tech: ["python", "flask", "react", "machine-learning"],
  },
  {
    name: "SkillBridge Platform",
    imageKey: "skillBridge.png",
    descriptionKey: "projectSkillbridge",
    gradient: ["#fa709a", "#fee140"],
    url: "https://github.com/AymanChabbaki/SkillBridge-Pro",
    tech: ["react", "nodejs", "mongodb", "express"],
  },
  {
    name: "Gestion Pilotage",
    imageKey: "gestion_pilotage.png",
    descriptionKey: "projectGestionPilotage",
    gradient: ["#30cfd0", "#330867"],
    url: "https://github.com/AymanChabbaki/gestion_pilotage",
    tech: ["react", "nodejs", "mongodb"],
  },
  {
    name: "CCIS Vision",
    imageKey: "ccis_vision.png",
    descriptionKey: "projectGestionDataExcel",
    gradient: ["#fdcbf1", "#e6dee9"],
    url: "https://ccis-vision.vercel.app/",
    tech: ["react", "nodejs"],
  },
  {
    name: "IQAMATI Platform",
    imageKey: "iqamati.png",
    descriptionKey: "projectIqamati",
    gradient: ["#667eea", "#764ba2"],
    url: "https://github.com/AymanChabbaki/i9amati",
    tech: ["react", "express", "mongodb", "nodejs"],
  },
  {
    name: "Ancestry Prediction",
    imageKey: "ancetry.png",
    descriptionKey: "projectAncestryPrediction",
    gradient: ["#fdcbf1", "#e6dee9"],
    url: "https://www.linkedin.com/posts/ayman-chabbaki_machinelearning-deeplearning-computervision-activity-7408960062699761664-FI7C",
    tech: ["tensorflow", "flask"],
  },
  {
    name: "Gestion Recrutement",
    imageKey: "rec.png",
    descriptionKey: "projectRecruitment",
    gradient: ["#ffecd2", "#fcb69f"],
    url: "https://github.com/AymanChabbaki/Gestion_Recrutement",
    tech: ["laravel", "react", "mysql"],
  },
  {
    name: "Team Most Like Series",
    imageKey: "series.png",
    descriptionKey: "projectTeamSeries",
    gradient: ["#e0c3fc", "#8ec5fc"],
    url: "https://www.linkedin.com/posts/ayman-chabbaki_hackathon-4uflix-teamwork-activity-7354918435027386368-RgDG",
    tech: ["react", "streaming"],
  },
  {
    name: "MyElectronicShop",
    imageKey: "electronic.png",
    descriptionKey: "projectMyElectronicShop",
    gradient: ["#fdcbf1", "#e6dee9"],
    url: "https://www.linkedin.com/posts/ayman-chabbaki_freelance-vbnet-winforms-activity-7378834124142288896-iNo3",
    tech: ["vbnet", "sqlserver"],
  },
  {
    name: "Crypto",
    imageKey: "crypto.png",
    descriptionKey: "projectCryptoApp",
    gradient: ["#fdcbf1", "#e6dee9"],
    url: "#",
    tech: ["react"],
  },
  {
    name: "Career Manager Agent",
    imageKey: "career_agent.png",
    descriptionKey: "projectCareerAgent",
    gradient: ["#43e97b", "#38f9d7"],
    url: "https://www.linkedin.com/posts/ayman-chabbaki_ai-llm-edtech-activity-7373816431525699584-WhoQ",
    tech: ["python", "machine-learning", "nlp", "flask"],
  },
  {
    name: "Blind Weather prediction",
    imageKey: "blind.png",
    descriptionKey: "projectBlindWeatherPrediction",
    gradient: ["#fdcbf1", "#e6dee9"],
    url: "https://www.linkedin.com/posts/ayman-chabbaki_artificialintelligence-accessibility-deeplearning-activity-7394449420110569473-visZ",
    tech: ["keras", "machine-learning", "flask"],
  },
];

const translations: any = {
  fr: {
    projectsTitle: "Mes Projets",
    projectsSubtitle: "Quelques projets que j'ai réalisés avec passion, expertise et créativité.",
    projectIqamati: "Plateforme de gestion immobilière pour syndics",
    projectTrafficSigns: "Détection des panneaux avec Computer Vision",
    projectAiDevCommunity: "Plateforme communautaire avec gestion d'événements",
    projectCareerAgent: "Agent IA de gestion de carrière",
    projectSkillbridge: "Plateforme de freelancing type Fiverr",
    projectGestionPilotage: "Système de gestion d'entreprise complet",
    projectFootballPrediction: "Prédiction des scores avec IA",
    projectCarPrice: "Estimation du prix des véhicules",
    projectRecruitment: "Plateforme de gestion des recrutements",
    projectTeamSeries: "Netflix-like app for series",
    projectChatAtlas: "Messagerie en temps réel",
    projectGestionDataExcel: "Gestion et visualisation de données Excel",
    projectTravelMoroccoApp: "Plateforme de découverte du Maroc",
    projectCryptoApp: "Suivi de cryptomonnaies en temps réel",
    projectMyElectronicShop: "Gestion de magasin électronique",
    projectBlindWeatherPrediction: "Prédiction météo vocale pour aveugles",
    projectAncestryPrediction: "Prédiction d'origine ethnique par IA",
  },
  en: {
    projectsTitle: "My Projects",
    projectsSubtitle: "Some things I've built with passion, expertise and creativity.",
    projectIqamati: "Real estate management platform for property managers",
    projectTrafficSigns: "Traffic sign detection with Computer Vision",
    projectAiDevCommunity: "Community platform with event management",
    projectCareerAgent: "AI-powered career management agent",
    projectSkillbridge: "Freelance platform like Fiverr",
    projectGestionPilotage: "Complete business management system",
    projectFootballPrediction: "Football score prediction with AI",
    projectCarPrice: "Vehicle price estimation",
    projectRecruitment: "Recruitment management platform",
    projectTeamSeries: "Netflix-like app for series",
    projectChatAtlas: "Real-time messaging app",
    projectGestionDataExcel: "Excel data management and visualization",
    projectTravelMoroccoApp: "Morocco travel discovery platform",
    projectCryptoApp: "Real-time cryptocurrency tracker",
    projectMyElectronicShop: "Electronic shop management",
    projectBlindWeatherPrediction: "Voice weather prediction for blind people",
    projectAncestryPrediction: "AI-powered ancestry prediction",
  }
};

export default function Portfolio() {
  const [lang] = useState<'fr' | 'en'>('en')

  const t = (key: string) => translations[lang][key] || key

  return (
    <section className={styles.section} id="portfolio" data-nav-theme="light">
      <div className="container">
        <div className={styles.header}>
          <div>
            <SectionLabel variant="light">Our Work</SectionLabel>
            <h2 className={styles.heading}>{t('projectsTitle')}</h2>
            <p className={styles.subtitle}>{t('projectsSubtitle')}</p>
          </div>
          <a href="#contact" className={styles.viewAll}>
            View all projects →
          </a>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <div key={project.name} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={`/projects/${project.imageKey}`} alt={project.name} />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>
                    {project.url !== '#' ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                        {project.name} ↗
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <div 
                    className={styles.gradientIndicator} 
                    style={{ background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})` }}
                  />
                </div>
                
                <p className={styles.cardDesc}>{t(project.descriptionKey)}</p>
                
                <div className={styles.cardTags}>
                  {project.tech.map((tag) => (
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
