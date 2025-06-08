import './App.css'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import AboutPage from './Components/AboutPage';
import ResumePage from './Components/ResumePage';
import ProjectPage from './Components/ProjectPage';
import ContactPage from './Components/ContactPage';
import MainLayout from './Components/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<MainLayout />}>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
export default App;
