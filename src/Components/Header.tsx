import styles from './Header.module.css';
import { motion } from 'framer-motion';

export function Header() {
    return (
        <motion.header 
            className={styles.header}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.container}>
                <span className={styles.logo}>VITOR<span>DEVELOPER</span></span>
                <nav className={styles.nav}>
                    <a href="https://www.linkedin.com/in/vitor-guilherme2233/" target="_blank" className={styles.contactLink}>Contact</a>
                </nav>
            </div>
        </motion.header>
    );
}