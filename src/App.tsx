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

function MainPage() {
  return (
    <>
      <Profile />
      <Repositories />
    </>
  )
}

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
