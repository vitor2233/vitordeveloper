import { motion } from 'framer-motion';
import styles from './Studies.module.css';
import badge from '../assets/cloud-practitioner.png';

interface StudyItemProps {
  institution: string;
  course: string;
  period: string;
  description: string;
  tags: string[];
  index: number;
}

const StudyItem: React.FC<StudyItemProps> = ({ institution, course, period, description, tags, index }) => (
  <motion.div 
    className={styles.card}
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <header className={styles.cardHeader}>
      <div>
        <h3 className={styles.course}>{course}</h3>
        <p className={styles.institution}>{institution}</p>
      </div>
      <span className={styles.period}>{period}</span>
    </header>
    <p className={styles.description}>{description}</p>
    <div className={styles.tagWrapper}>
      {tags.map((tag, tagIndex) => (
        <motion.span 
          key={tag} 
          className={styles.tag}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: (index * 0.1) + (tagIndex * 0.05) }}
        >
          {tag}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

export function Studies() {
  const studies = [
    {
      institution: "Faculdade UNA",
      course: "Sistemas de Informação",
      period: "2020 - 2024",
      description: "Foco em desenvolvimento de sistemas, metodologias ágeis e arquitetura de software de grande escala.",
      tags: ["Software Engineering", "Agile", "Management"]
    },
    {
      institution: "Rocketseat",
      course: "Ignite Node.js / .NET",
      period: "2023 - 2024",
      description: "Especialização em padrões de arquitetura (DDD, SOLID) e ecossistemas modernos de backend.",
      tags: ["DDD", "Design Patterns", "Clean Arch"]
    },
    {
      institution: "SENAI",
      course: "Técnico em TI",
      period: "2018 - 2019",
      description: "Base sólida em lógica de programação, C# e fundamentos de redes e computação.",
      tags: ["C#", "SQL", "Foundations"]
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.sectionAccent}>Educação & Certificações</span>
        <h2 className={styles.sectionTitle}>Academic Background</h2>
      </div>
      
      <div className={styles.grid}>
        {studies.map((study, index) => (
          <StudyItem key={index} {...study} index={index} />
        ))}
      </div>

      <motion.div 
        className={styles.certCard}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.certInfo}>
          <h3 className={styles.course}>AWS Cloud Practitioner</h3>
          <p className={styles.description}>
            Validando expertise em arquitetura na nuvem, segurança e escalabilidade global.
          </p>
          <a 
            href="https://www.credly.com/badges/7f5f1c84-258a-4355-89af-7b62839769e7" 
            target="_blank" 
            className={styles.certLink}
          >
            Ver Certificação
          </a>
        </div>
        <img src={badge} alt="AWS Certified" className={styles.certBadge} />
      </motion.div>
    </section>
  );
}