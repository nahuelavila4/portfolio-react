import React from "react";
import "../stylesheet/Project.css";
import Boxeo from "../img/boxeo-vector.jpg";
import Todo from "../img/fondo_lista.jpg";
import BreakingBad from "../img/breakingbad.jpg";
import Romanos from "../img/fondo_romanos.jpg";
import Divisa from "../img/divisa.jpg";
import Pong from "../img/pong2.jpg";

export function Project() {
  return (
    <section className="proyectos-recientes d-flex flex-column text-center">
      <h1>Proyectos</h1>
      {/* Galeria proyectos */}
      <div className="container proyectos-contenedor">
        <div className="row">
          {/* Proyecto 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={Todo} alt="to do"></img>
              <div className="overlay">
                <p>To Do List</p>
                <div className="iconos-proyectos">
                  <a
                    href="https://github.com/nahuelavila4/todo-react"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://todonahuel.netlify.app/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={BreakingBad} alt="breaking bad"></img>
              <div className="overlay">
                <p>Proyecto Boxeosd df ds</p>
                <div className="iconos-proyectos">
                  <a
                    href="https://github.com/nahuelavila4/breaking-bad-quotes"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://breakingquote.netlify.app/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={Romanos} alt="Romanos"></img>
              <div className="overlay">
                <p>Conversor numeros decimales a romanos</p>
                <div className="iconos-proyectos">
                  <a
                    href="https://github.com/nahuelavila4/decimal_to_roman"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  {/* <a
                    href="https://github.com/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Proyecto 4 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={Boxeo} alt="Boxeo"></img>
              <div className="overlay">
                <p>Proyecto Boxeosd df ds</p>
                <div className="iconos-proyectos">
                  <a
                    href="https://github.com/nahuelavila4/Boxing"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://boxingstar.netlify.app/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Proyecto 5 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={Divisa} alt="boxeo"></img>
              <div className="overlay">
                <p>Conversor de divisas</p>
                <div className="iconos-proyectos">
                  <a
                    href="https://github.com/nahuelavila4/currency-converter"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  {/* <a
                    href="https://github.com/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            {/* Proyecto 6 */}
            <div className="proyecto">
              <img src={Pong} alt="Pong"></img>
              <div className="overlay">
                <p>Proyecto Boxeosd df ds</p>
                <div className="iconos-proyectos">
                  <a
                    href="https://github.com/nahuelavila4/Pong"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://breakingquote.netlify.app/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
