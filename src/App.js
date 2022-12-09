import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Hero } from './component/Hero';
import { Home } from './component/Home.js';
import { Project } from './component/Project.js';
import { Knowledge } from './component/Knowledge.js';
import { Contact } from './component/Contact.js';
import { Footer } from './component/Footer.js';
function App() {
  return (
    <div className="App">
      <Hero />
      <Home />
      <Project />
      <Knowledge />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
