import React from "react";
import "../stylesheet/Knowledge.css";

function Frontend() {
  return (
    <div className="front">
      <h4>Front-End</h4>
      <p>HTML</p>
      <p>CSS</p>
      <p>JavaScript</p>
      <p>React</p>
      <p>Bootstrap</p>
    </div>
  );
}

function Backend() {
  return (
    <div className="front">
      <h4>Back-End</h4>
      <p>PHP</p>
      <p>MongoDB</p>
      <p>NodeJS</p>
    </div>
  );
}

function Tool() {
  return (
    <div className="front">
      <h4>Herramientas</h4>
      <p>Visual Studio Code</p>
      <p>Git</p>
      <p>Trello</p>
    </div>
  );
}

export function Knowledge() {
  return (
    <div className="tecs text-center">
      <div className="titulo row">
        <h1>Tecnologias</h1>
      </div>
      <div className="datos row">
        <div className="col-12 col-md-4">
          <Frontend />
        </div>
        <div className="col-12 col-md-4">
          <Backend />
        </div>
        <div className="col-12 col-md-4">
          <Tool />
        </div>
      </div>
    </div>
  );
}
