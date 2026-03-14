import React from 'react';
import { motion } from 'framer-motion';
import { Quotes } from 'phosphor-react';
import styles from './Testimonials.module.css';

interface TestimonialProps {
  text: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ text, delay }) => (
  <motion.div
    className={styles.testimonialCard}
    initial={{ opacity: 0, scale: 0.5, rotate: 5 }}
    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ 
      type: "spring", 
      stiffness: 120, 
      damping: 12, 
      delay 
    }}
    whileHover={{ 
      rotate: 1,
      scale: 1.03,
      transition: { duration: 0.2 }
    }}
  >
    <Quotes size={32} weight="fill" className={styles.quoteIcon} />
    <p className={styles.text}>{text}</p>
  </motion.div>
);

export const Testimonials: React.FC = () => {
  const recommendations = [
    {
      text: "Tive o prazer de trabalhar com o Vítor Guilherme e posso dizer com tranquilidade que ele é um excelente profissional. Extremamente dedicado, comprometido com as entregas e com uma postura de muita responsabilidade. Além da parte técnica, que é muito sólida, o Vítor é uma pessoa de confiança, que veste a camisa do time e está sempre disposto a ajudar.",
      delay: 0.1
    },
    {
      text: "Tive o prazer de trabalhar com o Vitor e posso afirmar com segurança que sua postura profissional, proatividade e dedicação ao aprendizado contínuo são qualidades que se destacam desde o início. Sua flexibilidade e versatilidade permitem que atue com excelência em diferentes frentes, adaptando-se com facilidade a novos contextos.",
      delay: 0.2
    },
    {
      text: "Vítor se destaca como desenvolvedor back-end com domínio técnico em C# e .NET, mas sua atuação vai muito além. Ele possui pensamento crítico e capacidade de entregar soluções completas... Não entrega apenas código, entrega valor.",
      delay: 0.3
    },
    {
      text: "Sua orientação e comprometimento foram cruciais para minha adaptação e evolução. Sua paciência e dedicação à equipe foram essenciais para alcançarmos entregas relevantes e um sucesso notável em nossas atuações em conjunto.",
      delay: 0.4
    }
  ];

  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.sectionAccent}>Social Proof</span>
        <h2 className={styles.sectionTitle}>Recomendações Profissionais</h2>
      </motion.div>
      <div className={styles.grid}>
        {recommendations.map((rec, index) => (
          <TestimonialCard key={index} {...rec} />
        ))}
      </div>
    </section>
  );
};
