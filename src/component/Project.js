import React from "react";
import "../stylesheet/Project.css";
import Boxeo from "../img/boxeo-vector.jpg";

export function Project() {
  return (
    <section className="proyectos-recientes d-flex flex-column text-center">
      <h1>Proyectos</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {/* Galeria proyectos */}
      <div className="container proyectos-contenedor">
        <div className="row">
          {/* Proyecto 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={Boxeo} alt="boxeo"></img>
              <div className="overlay">
                <p>Proyecto Boxeosd df ds</p>
                <div className="iconos-proyectos">
                  <a
                    href="https://github.com/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://github.com/"
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
              <img src={Boxeo} alt="boxeo"></img>
              <div className="overlay">
                <p>Proyecto Boxeosd df ds</p>
                <div className="iconos-proyectos">
                  <a
                    href="https://github.com/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://github.com/"
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
              <img src={Boxeo} alt="boxeo"></img>
              <div className="overlay">
                <p>Proyecto Boxeosd df ds</p>
                <div className="iconos-proyectos">
                  <a
                    href="https://github.com/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://github.com/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Proyecto 4 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={Boxeo} alt="boxeo"></img>
              <div className="overlay">
                <p>Proyecto Boxeosd df ds</p>
                <div className="iconos-proyectos">
                  <a
                    href="https://github.com/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://github.com/"
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
              <img src={Boxeo} alt="boxeo"></img>
              <div className="overlay">
                <p>Proyecto Boxeosd df ds</p>
                <div className="iconos-proyectos">
                  <a
                    href="https://github.com/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://github.com/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            {/* Proyecto 6 */}
            <div className="proyecto">
              <img src={Boxeo} alt="boxeo"></img>
              <div className="overlay">
                <p>Proyecto Boxeosd df ds</p>
                <div className="iconos-proyectos">
                  <a
                    href="https://github.com/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://github.com/"
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
