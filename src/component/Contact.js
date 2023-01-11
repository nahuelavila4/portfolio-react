import React from "react";
import "../stylesheet/Contact.css";

export function Contact() {
  return (
    <div className="container contacto">
      <div className="row titulo">
        <h2>Contacto</h2>
      </div>
      <div className="row contenido">
        <div className="seccion col-sm-12 col-md-6">
          <h3>Vamos a hablar</h3>
          <p>Buenos Aires, Argentina</p>
          <p>+54 1126132007</p>
        </div>

        <div className="col-sm-12 col-md-6">
          <form action="https://formspree.io/f/mbjejewy" method="POST">
            <div className="row mb-3">
              <div className="col-12 col-md-6 col-lg-6">
                <label htmlFor="nombre">Nombre</label>
                <div>
                  <input
                    type={"text"}
                    className="form-control"
                    id="nombre"
                  ></input>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <label htmlFor="tema">Asunto</label>
                <div>
                  <input
                    type={"text"}
                    className="form-control"
                    id="tema"
                  ></input>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12 col-md-6 col-lg-6">
                <label htmlFor="empresa">Empresa</label>
                <div>
                  <input
                    type={"text"}
                    className="form-control"
                    id="empresa"
                  ></input>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <label htmlFor="email">Email</label>
                <div>
                  <input
                    type={"email"}
                    className="form-control"
                    id="email"
                  ></input>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                <label htmlFor="msj">Mensaje</label>
                <div>
                  <textarea
                    name="mensaje"
                    className="form-control"
                    id="msj"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="row">
              <button className="btn btn-info" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
