import React from 'react';
import { motion } from 'framer-motion';
import { SiDotnet, SiNestjs, SiAngular, SiFlutter } from 'react-icons/si';
import { TbMessage2Code, TbCloudLock } from 'react-icons/tb';
import styles from './ArchitectureCore.module.css';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, tags, index }) => (
  <motion.div
    className={styles.card}
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      type: "spring", 
      stiffness: 100, 
      damping: 15, 
      delay: index * 0.1 
    }}
    whileHover={{ 
      y: -10, 
      scale: 1.02,
      borderColor: 'var(--border-hover)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
    }}
  >
    <div className={styles.iconWrapper}>{icon}</div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDescription}>{description}</p>
    <div className={styles.tagWrapper}>
      {tags.map((tag) => (
        <span key={tag} className={styles.tag}>{tag}</span>
      ))}
    </div>
  </motion.div>
);

export const ArchitectureCore: React.FC = () => {
  const skills = [
    {
      icon: <SiDotnet size={32} color="#512BD4" />,
      title: ".NET Specialist",
      description: "Desenvolvimento de APIs robustas e de alta performance seguindo rigorosamente princípios de Clean Architecture e SOLID.",
      tags: ["C#", ".NET 8", "Safe Data", "Performance"]
    },
    {
      icon: <SiNestjs size={32} color="#E0234E" />,
      title: "NestJS Expert",
      description: "Arquitetura de sistemas distribuídos e resilientes em Node.js, priorizando escalabilidade e manutenibilidade.",
      tags: ["TypeScript", "Microservices", "CQRS", "DDD"]
    },
    {
      icon: <TbCloudLock size={32} color="#ffffff" />,
      title: "Cloud Orchestration",
      description: "Infraestrutura como código e automação em AWS e GCP para garantir alta disponibilidade e resiliência global.",
      tags: ["AWS", "GCP", "Iac", "Serverless"]
    },
    {
      icon: <TbMessage2Code size={32} color="#ffffff" />,
      title: "Distributed Systems",
      description: "Implementação de comunicação assíncrona com foco em mensageria, consistência eventual e baixa latência.",
      tags: ["Kafka", "gRPC", "RabbitMQ", "Redis"]
    },
    {
      icon: <SiAngular size={32} color="#DD0031" />,
      title: "Angular Frontend",
      description: "Construção de SPAs corporativas com arquitetura modular, garantindo integração fluida com ecossistemas complexos de backend.",
      tags: ["SPA", "RxJS", "State Management"]
    },
    {
      icon: <SiFlutter size={32} color="#02569B" />,
      title: "Flutter Mobile",
      description: "Desenvolvimento cross-platform de alta performance, entregando interfaces responsivas e integração nativa otimizada.",
      tags: ["Dart", "Mobile", "Cross-Platform"]
    }
  ];

  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className={styles.sectionAccent}>Expertise técnica</span>
        <h2 className={styles.sectionTitle}>The Architecture Core</h2>
        <p className={styles.sectionSubtitle}>
          Construindo sistemas complexos de ponta a ponta com foco em engenharia de software e excelência operacional.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <SkillCard key={skill.title} {...skill} index={index} />
        ))}
      </div>
    </section>
  );
};
