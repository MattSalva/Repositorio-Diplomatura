import {BrowserRouter, Routes, Route} from "react-router-dom"
//import './App.css'

import Header from './components/layout/Header'
import Nav from './components/layout/Nav'

import HomePage from './pages/HomePage'
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProyectsPage from "./pages/ProyectsPage";

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
            <Route path="proyects" element={<ProyectsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
