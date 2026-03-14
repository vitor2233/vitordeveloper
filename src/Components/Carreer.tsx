import { motion } from 'framer-motion';
import styles from './Carreer.module.css';

interface JourneyItemProps {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  index: number;
}

const JourneyItem: React.FC<JourneyItemProps> = ({ title, period, description, technologies, index }) => (
  <motion.div 
    className={styles.item}
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.15 }}
  >
    <div className={styles.dot} />
    <div className={styles.content}>
      <header className={styles.itemHeader}>
        <div>
          <h3 className={styles.phaseTitle}>{title}</h3>
        </div>
        <span className={styles.period}>{period}</span>
      </header>
      <p className={styles.description}>{description}</p>
      <div className={styles.techWrapper}>
        {technologies.map((tech, techIndex) => (
          <motion.span 
            key={tech} 
            className={styles.techBadge}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: (index * 0.15) + (techIndex * 0.05) }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

export function Carreer() {
  const experiences = [
    {
      title: "Cloud Architecture & Strategic Backend",
      period: "2025 - Presente",
      description: "Liderança técnica na reestruturação de ecossistemas complexos de APIs. Especialista em performance e escalabilidade, integrando automações avançadas via Python/Webhooks e otimização de infraestrutura em ambientes GCP e Azure. Foco em transformar visão de negócio em soluções de arquitetura sólidas.",
      technologies: [".NET", "NestJS", "Python", "GCP", "Azure"]
    },
    {
      title: "Distributed Systems & Full-Stack Synergy",
      period: "2022 - 2025",
      description: "Engenharia de microserviços resilientes com comunicação assíncrona (Kafka, gRPC) e orquestração moderna (Kubernetes/Docker). Implementação de Clean Architecture em larga escala e atuação estratégica Full-Stack (Angular/Flutter) para garantir entrega de valor completa e interfaces de alta performance.",
      technologies: ["Node.js", "Kafka", "gRPC", "Kubernetes", "Angular", "Flutter"]
    },
    {
      title: "Engineering Foundations & Multi-Platform Strategy",
      period: "2020 - 2022",
      description: "Consolidação de bases de engenharia de software através do desenvolvimento de APIs robustas e integração de sistemas cross-platform. Foco em segurança, autenticação e criação de bibliotecas internas para otimização de bibliotecas mobile e web.",
      technologies: ["C#", ".NET", "REST APIs", "Mobile Security"]
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.sectionAccent}>Evolução Profissional</span>
        <h2 className={styles.sectionTitle}>Journey of Impact</h2>
      </div>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <JourneyItem key={index} {...exp} index={index} />
        ))}
      </div>
    </section>
  );
}