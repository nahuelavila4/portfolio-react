import React from "react";
import "../stylesheet/Home.css";
import Foto from "../img/Foto.jpg";

export function Home() {
  return (
    <div className="sobre-mi">
      <div className="data container text-center">
        <div className="row">
          <div className="info col-md-12 col-lg-6">
            <h1 className="titulos">Acerca De Mi</h1>
            <p className="texto">
              Egresado de escuela tecnica en la especialidad de computacion.
              Evito a toda costa la zona de confort, por lo que siempre estoy
              aprendiendo algo nuevo. Me encuentro en la busqueda de mi primer
              experiencia laboral en el sector IT.
            </p>
          </div>
          <div className="foto col-md-12 col-lg-6">
            <div>
              <img src={Foto} alt="Foto de perfil"></img>
              <p>Agregar rotacion de Foto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}