import styles from "./App.module.css"
import { Header } from "./Components/Header"
import { Profile } from "./Components/Profile"
import { Repositories } from "./Components/Repositories"
import './global.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Profile />
        <Repositories />
      </div>
    </>
  )
}
