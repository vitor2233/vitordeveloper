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

function MainPage() {
  return (
    <>
      <Profile />
      <Divider orientation="left" style={{ borderColor: '#112131', color: '#FBFBFB' }}>Carreira</Divider>
      <Carreer />
      <Divider orientation="left" style={{ borderColor: '#112131', color: '#FBFBFB' }}>Estudos</Divider>
      <Studies />
      <Divider orientation="left" style={{ borderColor: '#112131', color: '#FBFBFB' }}>Projetos</Divider>
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
