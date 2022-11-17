<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import { NavBar } from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
=======
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Hero } from "./component/Hero";
import { Home } from "./component/Home.js";
import { Project } from "./component/Project.js";
import { Knowledge } from "./component/Knowledge.js";
import { Contact } from "./component/Contact.js";
>>>>>>> 1cec06b (maquetado v 1.0)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <NavBar/>
=======
      <Hero />
      <Home />
      <Project />
      <Knowledge />
      <Contact />
>>>>>>> 1cec06b (maquetado v 1.0)
    </div>
  );
}

export default App;
