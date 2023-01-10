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
          <form action="">
            <div className="row inputs">
              <div className="col-12 col-md-6">
                <label htmlFor="nombre">Nombre</label>
                <input type={"text"} name="nombre"></input>
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="tema">Asunto</label>
                <input type={"text"} name="tema"></input>
              </div>
            </div>

            <div className="row inputs">
              <div className="col-12 col-md-6">
                <label htmlFor="empresa">Empresa</label>
                <input type={"text"} name="empresa"></input>
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email">Email</label>
                <input type={"email"} name="email"></input>
              </div>
            </div>

            <div className="row inputs">
              <div className="col-12 col-md-6 col-lg-6">
                <label htmlFor="email">Mensaje</label>
                <textarea name="mensaje" id="msj" rows={"3"}></textarea>
              </div>
            </div>

            <div className="row inputs">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
