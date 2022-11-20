import React from "react";
import "../stylesheet/Home.css";

export function Home() {
  return (
    <div className="container">
      <section className="sobre-mi">
        <div className="contenedor row">
          <h1 className="titulos">Acerca De Mi</h1>
          <p className="texto">
            Egresado de escuela tecnica en la especialidad de computacion. Evito
            a toda costa la zona de confort, por lo que siempre estoy
            aprendiendo algo nuevo. Me encuentro en la busqueda de mi primer
            experiencia laboral en el sector IT.
          </p>
        </div>
      </section>
    </div>
  );
}
