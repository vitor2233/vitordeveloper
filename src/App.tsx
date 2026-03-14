import styles from "./App.module.css"
import { Header } from "./Components/Header"
import { Profile } from "./Components/Profile"
import { ArchitectureCore } from "./Components/ArchitectureCore"
import { TechStack } from "./Components/TechStack"
import { Carreer } from "./Components/Carreer"
import { Studies } from "./Components/Studies"
import { Testimonials } from "./Components/Testimonials"
import './global.css'

export function App() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.wrapper}>
        <Profile />
        <ArchitectureCore />
        <TechStack />
        <Carreer />
        <Studies />
        <Testimonials />
        
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Vitor Guilherme. Built for Backend Excellence.</p>
        </footer>
      </main>
    </div>
  )
}
