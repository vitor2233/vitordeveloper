import React from 'react';
import { motion } from 'framer-motion';
import styles from './TechStack.module.css';

interface TechCategoryProps {
  title: string;
  skills: string[];
  index: number;
}

const TechCategory: React.FC<TechCategoryProps> = ({ title, skills, index }) => (
  <motion.div 
    className={styles.category}
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ type: "spring", stiffness: 80, damping: 20, delay: index * 0.1 }}
    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
  >
    <h3 className={styles.categoryTitle}>{title}</h3>
    <div className={styles.tagGrid}>
      {skills.map((skill, skillIndex) => (
        <motion.span 
          key={skill} 
          className={styles.techTag}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
          whileHover={{ 
            y: -3, 
            backgroundColor: "#fff", 
            color: "#000",
            transition: { duration: 0.1 } 
          }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

export const TechStack: React.FC = () => {
  const categories = [
    {
      title: "Core & Architecture",
      skills: [".NET (C#)", "NestJS", "Node.js", "Clean Architecture", "SOLID", "Microservices", "CQRS", "DDD"]
    },
    {
      title: "Cloud & Reliability",
      skills: ["AWS", "GCP", "Microsoft Azure", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform", "Serverless"]
    },
    {
      title: "Data & Communication",
      skills: ["PostgreSQL", "SQL Server", "MongoDB", "Redis", "Apache Kafka", "gRPC", "RabbitMQ", "Migrations"]
    },
    {
      title: "Full-Stack & Mobility",
      skills: ["Angular", "Flutter", "TypeScript", "Dart", "RxJS", "State Management", "Responsive UI"]
    }
  ];

  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className={styles.sectionAccent}>Tecnologias & Ferramentas</span>
        <h2 className={styles.sectionTitle}>Technical Ecosystem</h2>
        <p className={styles.sectionSubtitle}>
          Um compilado das ferramentas e frameworks que utilizo para projetar e sustentar ecossistemas de software modernos.
        </p>
      </motion.div>
      
      <div className={styles.grid}>
        {categories.map((cat, index) => (
          <TechCategory key={cat.title} {...cat} index={index} />
        ))}
      </div>
    </section>
  );
};
