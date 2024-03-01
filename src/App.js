import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App bg-gray-300 h-vh">
     <NavBar />
     <Home />
     <About />
     <Projects />
     <Contacts />
    </div>
  );
}

export default App;
