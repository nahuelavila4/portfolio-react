import React from "react";
import Foto from "../img/Foto.jpg";
import "../stylesheet/Hero.css";

export function Hero() {
  return (
    <div className="hero container d-flex align-items-end justify-content-center text-center">
      <div className="presentacion row">
        <div className="col p-4">
          {/* <img src={Foto} alt="Foto"></img> */}
          <h1>Nahuel Avila</h1>
          <h3>Web Developer</h3>
        </div>
      </div>
      <div className="iconos row">
        <div className="col">
          <h4>LinkedIn</h4>
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </div>
        <div className="col">
          <h4>Github</h4>
          <i class="fa fa-git" aria-hidden="true"></i>
        </div>
        <div className="col">
          <h4>Email</h4>
          <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
        </div>
        <div className="col">
          <h4>Telefono</h4>
          <i class="fa fa-phone" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}
