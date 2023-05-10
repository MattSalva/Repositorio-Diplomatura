import {BrowserRouter, Routes, Route} from "react-router-dom"
import './styles/layout.css'

import Header from './components/layout/Header'
import Nav from './components/layout/Nav'

import HomePage from './pages/HomePage'
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="education" element={<EducationPage/>}/>
            <Route path="experience" element={<ExperiencePage/>}/>
            <Route path="projects" element={<ProjectsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
