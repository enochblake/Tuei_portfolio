import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import { Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App h-full pb-1">
     <NavBar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contacts />} />
     </Routes>
    </div>
  );
}

export default App;
