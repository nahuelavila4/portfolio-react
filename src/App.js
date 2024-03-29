import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Hero } from "./component/Hero";
import { Project } from "./component/Project.js";
import { Contact } from "./component/Contact.js";
import { Footer } from "./component/Footer.js";
import Foto from "./img/Foto.jpg";
import imagenes from "./imagenes.js";
import Conocimientos from "./component/Conocimientos";

function App() {
  return (
    <div className="App">
      <div className="hero">
        <div className="presentacion row">
          <div className="col-12 titulo-presentacion">
            <h1>Nahuel Avila</h1>
            <h3>Web Developer</h3>
            <a href="./NahuelAvila.pdf" download={""}>
              <button>Descargar CV</button>
            </a>
          </div>
        </div>
        <div className="iconos row">
          <Hero
            url={"https://www.linkedin.com/in/nahuelavila-285803162/"}
            nombre="LinkedIn"
            icono={"bi bi-linkedin"}
          />
          <Hero
            url={"https://github.com/nahuelavila4"}
            nombre="Github"
            icono={"bi bi-github"}
          />
          <Hero
            url={"mailto:avilanahuel99@gmail.com"}
            nombre="Mail"
            icono={"bi bi-envelope-fill"}
          />
          <Hero
            url={"tel:1126132007"}
            nombre="Phone"
            icono={"bi bi-phone-fill"}
          />
        </div>
      </div>
      <div className="sobre-mi">
        <div className="data container text-center">
          <div className="row mb-3">
            <h2 className="titulos">Sobre Mi</h2>
          </div>
          <div className="row">
            <div className="info col-md-12 col-lg-6 text-start p-4">
              <p className="texto">
                Hola, soy Desarrollador Web Fullstack. Me encanta la
                programacion. El aprender a usar nuevas herramientas, entender
                como solucionar un error de programacion y compartir estos
                conocimientos con la comunidad dev son las cosas que mas difruto
                de mi dia a dia. Mi objetivo actual es encontrar mi primer
                empleo como desarrollador. Evito a toda costa la zona de
                confort, por lo que me aseguro de constantemente estar
                aprendiendo algo nuevo.
              </p>
            </div>
            <div className="foto col-md-12 col-lg-6">
              <div>
                <img src={Foto} alt="Foto de perfil"></img>
                {/* <p>Agregar rotacion de Foto. info proyectos y tec actuales</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="proyectos-recientes text-center">
        <h2>Proyectos</h2>
        <div className="container proyectos-contenedor">
          <div className="row">
            <Project
              url={"https://todonahuel.netlify.app/"}
              nombre={"To Do List"}
              repo="https://github.com/nahuelavila4/todo-react"
              img={imagenes.img1}
            />
            <Project
              url={"https://breakingquote.netlify.app/"}
              nombre={"Breaking Bad Quotes"}
              repo="https://github.com/nahuelavila4/breaking-bad-quotes"
              img={imagenes.img2}
            />
            <Project
              url={"https://nahuelweather.netlify.app"}
              nombre={"Weather App"}
              repo="https://github.com/nahuelavila4/Weather-App"
              img={imagenes.img3}
            />
            <Project
              url={"https://nahuelbmi.netlify.app"}
              nombre={"BMI Calculator"}
              repo="https://github.com/nahuelavila4/BMI-Calculator"
              img={imagenes.img4}
            />
            <Project
              url={"https://boxingstar.netlify.app"}
              nombre={"Boxdoc"}
              repo={"https://github.com/nahuelavila4/Boxdoc"}
              img={imagenes.img5}
            />
            <Project
              url={"https://watchmaker.netlify.app/"}
              nombre={"Watchmaker"}
              repo="https://github.com/nahuelavila4/watchmaker-landing"
              img={imagenes.img6}
            />
          </div>
        </div>
      </section>
      <div className="conocimientos">
        <div className="container">
          <h2 className="mb-5 text-center">Stack de Tecnologias</h2>
          <Conocimientos />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
