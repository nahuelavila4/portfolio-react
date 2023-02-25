import React from "react";
import "../stylesheet/Hero.css";

export function Hero({ url, nombre, icono }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <a
        href={url}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <i className={icono}></i>
        <h2>{nombre}</h2>
      </a>
    </div>
  );
}
