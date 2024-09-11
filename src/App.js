// import './App.css';
// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contacts from './components/Contacts';
// import { Routes, Route } from 'react-router-dom';
// import Resume from './components/Resume';

// function App() {
//   return (
//     <div className="App">
//      <NavBar />
//      <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/resume" element={<Resume />} />
//       <Route path="/projects" element={<Projects />} />
//       <Route path="/contact" element={<Contacts />} />
//      </Routes>
//     </div>
//   );
// }

// export default App;



import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contacts />
      </section>
    </div>
  );
}

export default App;
