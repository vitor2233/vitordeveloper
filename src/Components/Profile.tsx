import { LinkedinLogo, ArrowRight } from 'phosphor-react';
import styles from './Profile.module.css';
import { motion } from 'framer-motion';
import badge from '../assets/cloud-practitioner.png';

export function Profile() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                    className={styles.info}
                >
                    <span className={styles.badge}>Software Architect</span>
                    <h1 className={styles.name}>Vitor Guilherme</h1>
                    <p className={styles.tagline}>
                        Especialista em Backend & Sistemas Distribuídos
                    </p>
                    <p className={styles.description}>
                        Transformando requisitos complexos em arquiteturas resilientes e de alta performance. 
                        Com mais de 4 anos de experiência técnica sólida em .NET, NestJS e ecossistemas Cloud.
                    </p>
                    <div className={styles.actions}>
                        <a href="https://www.linkedin.com/in/vitor-guilherme2233/" target="_blank" className={styles.primaryButton}>
                            Entrar em contato <ArrowRight size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/vitor-guilherme2233/" target="_blank" className={styles.secondaryButton}>
                            LinkedIn <LinkedinLogo size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.4 }}
                    className={styles.visual}
                >
                    <div className={styles.imageWrapper}>
                        <img 
                            src="https://github.com/Vitor2233.png" 
                            alt="Vitor Guilherme" 
                            className={styles.avatar} 
                        />
                        <motion.div 
                            className={styles.certifiedSeal}
                            whileHover={{ rotate: 10 }}
                        >
                            <img 
                                src={badge} 
                                alt="AWS Certified" 
                                onClick={() => window.open('https://www.credly.com/badges/7f5f1c84-258a-4355-89af-7b62839769e7', '_blank')}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            
            <motion.div 
                className={styles.scrollIndication}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <p>Scroll to explore</p>
                <ArrowRight size={16} />
            </motion.div>
        </section>
    );
}