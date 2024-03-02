import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App h-vh" style={{backgroundImage: "linear-gradient(180deg, #0a0c3e 0%, #f1d6e3 100%)"}}>
     <NavBar />
     <Home />
     <About />
     <Projects />
     <Contacts />
    </div>
  );
}

export default App;
