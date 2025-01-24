import { Divider } from "antd"
import styles from "./App.module.css"
import { Header } from "./Components/Header"
import { Profile } from "./Components/Profile"
import { Repository } from "./Components/ProjectDetail"
import { Repositories } from "./Components/Repositories"
import './global.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Carreer } from "./Components/Carreer"
import { Studies } from "./Components/Studies"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"

function MainPage() {
  return (
    <>
      <Profile />
      <Divider orientation="left" style={{ borderColor: '#112131', color: '#FBFBFB' }}>Carreira</Divider>
      <AnimatedSection>
        <Carreer />
      </AnimatedSection>
      <Divider orientation="left" style={{ borderColor: '#112131', color: '#FBFBFB' }}>Estudos</Divider>
      <AnimatedSection>
        <Studies />
      </AnimatedSection>
      <Divider orientation="left" style={{ borderColor: '#112131', color: '#FBFBFB' }}>Projetos</Divider>
      <AnimatedSection>
        <Repositories />
      </AnimatedSection>
    </>
  )
}

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Router >
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projetos/:projectNumber" element={<Repository />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}
